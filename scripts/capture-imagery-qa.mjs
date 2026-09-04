import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const out = 'C:/Users/O/Devs/olaolugidan/ola.olugidan.me/docs/phase-6/qa-screenshots';
fs.mkdirSync(out, { recursive: true });

const shots = [
  { name: 'home-hero', path: '/', sel: '.personal-hero', scroll: null },
  { name: 'home-workspace', path: '/', sel: '.editorial-figure-home', scroll: '#recognise' },
  { name: 'about-portrait', path: '/about', sel: '.about-portrait', scroll: '#about-portrait' },
  { name: 'about-journey', path: '/about', sel: '.editorial-figure-about', scroll: '#about-journey' },
  { name: 'homeschool', path: '/homeschool-core', sel: '.editorial-figure-homeschool', scroll: '#homeschool-learning' },
  {
    name: 'transformation',
    path: '/transformation',
    sel: '.editorial-figure-transformation',
    scroll: '.editorial-figure-transformation',
  },
  { name: 'faith', path: '/faith-community', sel: '.editorial-figure-faith', scroll: '#faith-community' },
];

const viewports = [
  { id: 'desktop', width: 1440, height: 900 },
  { id: 'tablet', width: 768, height: 1024 },
  { id: 'mobile', width: 390, height: 844 },
];

async function prep(page) {
  await page.addStyleTag({
    content:
      '.reveal{opacity:1!important;transform:none!important}.reveal .editorial-media-img,.editorial-media-img{animation:none!important;clip-path:none!important;opacity:1!important;transform:none!important}',
  });
  await page.evaluate(() => {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  });
}

async function main() {
  let browser;
  try {
    browser = await chromium.launch({ channel: 'msedge', headless: true });
  } catch {
    browser = await chromium.launch({ channel: 'chrome', headless: true });
  }

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      colorScheme: 'light',
    });
    const page = await context.newPage();

    for (const shot of shots) {
      await page.goto('http://localhost:4028' + shot.path, {
        waitUntil: 'domcontentloaded',
        timeout: 60000,
      });
      await page.evaluate(() => {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('ola-theme', 'light');
      });
      await prep(page);
      if (shot.scroll) {
        await page.locator(shot.scroll).first().scrollIntoViewIfNeeded();
      }
      const loc = page.locator(shot.sel).first();
      await loc.waitFor({ state: 'visible', timeout: 20000 });
      await loc.locator('img').first().waitFor({ state: 'visible', timeout: 20000 });
      await page.waitForTimeout(700);
      const file = path.join(out, `${vp.id}-${shot.name}.png`);
      await loc.screenshot({ path: file });
      console.log('wrote', path.basename(file), fs.statSync(file).size);
    }

    await page.goto('http://localhost:4028/transformation', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('ola-theme', 'dark');
    });
    await prep(page);
    const darkLoc = page.locator('.editorial-figure-transformation').first();
    await darkLoc.scrollIntoViewIfNeeded();
    await darkLoc.locator('img').first().waitFor({ state: 'visible', timeout: 20000 });
    await page.waitForTimeout(500);
    const darkFile = path.join(out, `${vp.id}-transformation-dark.png`);
    await darkLoc.screenshot({ path: darkFile });
    console.log('wrote', path.basename(darkFile), fs.statSync(darkFile).size);

    await context.close();
  }

  await browser.close();
  console.log('done');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
