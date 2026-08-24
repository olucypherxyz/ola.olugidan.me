using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public static class PortraitCutoutV2
{
    static double Luma(byte r, byte g, byte b)
    {
        return 0.299 * r + 0.587 * g + 0.114 * b;
    }

    static int Chroma(byte r, byte g, byte b)
    {
        int max = Math.Max(r, Math.Max(g, b));
        int min = Math.Min(r, Math.Min(g, b));
        return max - min;
    }

    static bool IsBg(byte r, byte g, byte b)
    {
        double l = Luma(r, g, b);
        return l < 16 && Chroma(r, g, b) < 18;
    }

    static int Idx(int stride, int x, int y)
    {
        return y * stride + x * 4;
    }

    public static void Run(string src, string dest)
    {
        using (var srcBmp = new Bitmap(src))
        using (var bmp = new Bitmap(srcBmp.Width, srcBmp.Height, PixelFormat.Format32bppArgb))
        {
            using (var g = Graphics.FromImage(bmp))
            {
                g.DrawImage(srcBmp, 0, 0, srcBmp.Width, srcBmp.Height);
            }

            int w = bmp.Width;
            int h = bmp.Height;
            var rect = new Rectangle(0, 0, w, h);
            var data = bmp.LockBits(rect, ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            int stride = data.Stride;
            int bytes = Math.Abs(stride) * h;
            byte[] px = new byte[bytes];
            Marshal.Copy(data.Scan0, px, 0, bytes);

            var visited = new bool[w * h];
            var q = new Queue<int>();
            int[] ox = { 1, -1, 0, 0, 1, 1, -1, -1 };
            int[] oy = { 0, 0, 1, -1, 1, -1, 1, -1 };

            for (int x = 0; x < w; x++)
            {
                TryEnqueue(px, visited, q, stride, w, h, x, 0);
                TryEnqueue(px, visited, q, stride, w, h, x, h - 1);
            }
            for (int y = 0; y < h; y++)
            {
                TryEnqueue(px, visited, q, stride, w, h, 0, y);
                TryEnqueue(px, visited, q, stride, w, h, w - 1, y);
            }

            while (q.Count > 0)
            {
                int i = q.Dequeue();
                int x = i % w;
                int y = i / w;
                int p = Idx(stride, x, y);
                px[p + 3] = 0;
                for (int k = 0; k < 8; k++)
                {
                    TryEnqueue(px, visited, q, stride, w, h, x + ox[k], y + oy[k]);
                }
            }

            for (int pass = 0; pass < 2; pass++)
            {
                var mark = new bool[w * h];
                for (int y = 1; y < h - 1; y++)
                {
                    for (int x = 1; x < w - 1; x++)
                    {
                        int p = Idx(stride, x, y);
                        if (px[p + 3] == 0) continue;
                        bool nextClear = false;
                        for (int k = 0; k < 8; k++)
                        {
                            if (px[Idx(stride, x + ox[k], y + oy[k]) + 3] == 0)
                            {
                                nextClear = true;
                                break;
                            }
                        }
                        if (!nextClear) continue;
                        byte r = px[p + 2];
                        byte gch = px[p + 1];
                        byte b = px[p];
                        double l = Luma(r, gch, b);
                        int ch = Chroma(r, gch, b);
                        if (l < 28 && ch < 22)
                        {
                            mark[y * w + x] = true;
                        }
                    }
                }
                for (int i = 0; i < mark.Length; i++)
                {
                    if (!mark[i]) continue;
                    int x = i % w;
                    int y = i / w;
                    px[Idx(stride, x, y) + 3] = 0;
                }
            }

            var alpha = new byte[w * h];
            for (int y = 0; y < h; y++)
            {
                for (int x = 0; x < w; x++)
                {
                    int p = Idx(stride, x, y);
                    if (px[p + 3] == 0)
                    {
                        alpha[y * w + x] = 0;
                        continue;
                    }
                    byte r = px[p + 2];
                    byte gch = px[p + 1];
                    byte b = px[p];
                    bool edge = false;
                    for (int k = 0; k < 8; k++)
                    {
                        int nx = x + ox[k];
                        int ny = y + oy[k];
                        if ((uint)nx >= (uint)w || (uint)ny >= (uint)h) continue;
                        if (px[Idx(stride, nx, ny) + 3] == 0)
                        {
                            edge = true;
                            break;
                        }
                    }
                    if (edge)
                    {
                        double l = Luma(r, gch, b);
                        int ch = Chroma(r, gch, b);
                        if (l < 12) alpha[y * w + x] = 0;
                        else if (l < 22 && ch < 20) alpha[y * w + x] = 80;
                        else alpha[y * w + x] = 230;
                    }
                    else
                    {
                        alpha[y * w + x] = 255;
                    }
                }
            }

            var blur = new byte[w * h];
            int rad = 1;
            for (int y = 0; y < h; y++)
            {
                for (int x = 0; x < w; x++)
                {
                    int sum = 0;
                    int n = 0;
                    for (int yy = y - rad; yy <= y + rad; yy++)
                    {
                        if ((uint)yy >= (uint)h) continue;
                        for (int xx = x - rad; xx <= x + rad; xx++)
                        {
                            if ((uint)xx >= (uint)w) continue;
                            sum += alpha[yy * w + xx];
                            n++;
                        }
                    }
                    blur[y * w + x] = (byte)(sum / n);
                }
            }

            for (int y = 0; y < h; y++)
            {
                for (int x = 0; x < w; x++)
                {
                    int p = Idx(stride, x, y);
                    byte a = blur[y * w + x];
                    px[p + 3] = a;
                    if (a > 0 && a < 250)
                    {
                        int best = -1;
                        int bx = x;
                        int by = y;
                        for (int r = 1; r <= 6 && best < 0; r++)
                        {
                            for (int k = 0; k < 8; k++)
                            {
                                int nx = x + ox[k] * r;
                                int ny = y + oy[k] * r;
                                if ((uint)nx >= (uint)w || (uint)ny >= (uint)h) continue;
                                if (blur[ny * w + nx] > 240)
                                {
                                    bx = nx;
                                    by = ny;
                                    best = 1;
                                    break;
                                }
                            }
                        }
                        if (best > 0)
                        {
                            int ip = Idx(stride, bx, by);
                            px[p] = px[ip];
                            px[p + 1] = px[ip + 1];
                            px[p + 2] = px[ip + 2];
                        }
                    }
                }
            }

            Marshal.Copy(px, 0, data.Scan0, bytes);
            bmp.UnlockBits(data);

            int minX = w, minY = h, maxX = 0, maxY = 0;
            for (int y = 0; y < h; y++)
            {
                for (int x = 0; x < w; x++)
                {
                    if (bmp.GetPixel(x, y).A < 24) continue;
                    if (x < minX) minX = x;
                    if (y < minY) minY = y;
                    if (x > maxX) maxX = x;
                    if (y > maxY) maxY = y;
                }
            }

            int pad = 6;
            minX = Math.Max(0, minX - pad);
            minY = Math.Max(0, minY - pad);
            maxX = Math.Min(w - 1, maxX + pad);
            maxY = Math.Min(h - 1, maxY + pad);
            var crop = new Rectangle(minX, minY, maxX - minX + 1, maxY - minY + 1);
            using (var trimmed = bmp.Clone(crop, PixelFormat.Format32bppArgb))
            {
                trimmed.Save(dest, ImageFormat.Png);
            }
        }
    }

    static void TryEnqueue(byte[] px, bool[] visited, Queue<int> q, int stride, int w, int h, int x, int y)
    {
        if ((uint)x >= (uint)w || (uint)y >= (uint)h) return;
        int i = y * w + x;
        if (visited[i]) return;
        int p = Idx(stride, x, y);
        if (!IsBg(px[p + 2], px[p + 1], px[p])) return;
        visited[i] = true;
        q.Enqueue(i);
    }
}

public static class Program
{
    public static int Main(string[] args)
    {
        PortraitCutoutV2.Run(args[0], args[1]);
        return 0;
    }
}
