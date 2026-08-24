/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-soft': 'rgb(var(--color-surface-soft) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
        'text-muted': 'rgb(var(--color-text-muted-aa) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        'accent-soft': 'rgb(var(--color-accent-soft) / <alpha-value>)',
        'accent-strong': 'rgb(var(--color-accent-strong) / <alpha-value>)',
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        muted: 'rgb(var(--color-text-secondary) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        container: 'var(--container-width)',
      },
      spacing: {
        'token-4': 'var(--space-4)',
        'token-8': 'var(--space-8)',
        'token-12': 'var(--space-12)',
        'token-16': 'var(--space-16)',
        'token-24': 'var(--space-24)',
        'token-32': 'var(--space-32)',
        'token-48': 'var(--space-48)',
        'token-64': 'var(--space-64)',
        'token-96': 'var(--space-96)',
        'token-128': 'var(--space-128)',
        'token-160': 'var(--space-160)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      transitionDuration: {
        fast: 'var(--duration-fast)',
        normal: 'var(--duration-normal)',
        slow: 'var(--duration-slow)',
        narrative: 'var(--duration-narrative)',
        atmospheric: 'var(--duration-atmospheric)',
      },
      transitionTimingFunction: {
        standard: 'var(--ease-standard)',
        smooth: 'var(--ease-smooth)',
      },
    },
  },
  plugins: [],
};

export default config;
