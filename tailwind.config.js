/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        foreground: 'var(--color-foreground)',
        background: 'var(--color-background)',
        card: 'var(--color-card)',
        muted: 'var(--color-muted)',
        accent: 'var(--color-accent)',
        destructive: 'var(--color-destructive)',
        ring: 'var(--color-ring)'
      },
      borderRadius: {
        'lg': 'var(--radius-lg)'
      },
      transitionProperty: {
        'height': 'height'
      }
    }
  },
  plugins: [],
}
