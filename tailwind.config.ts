import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}', // se estiver usando a pasta `app` (App Router)
    './components/**/*.{ts,tsx}', // componentes compartilhados
    './src/**/*.{ts,tsx}', // se você estiver usando uma pasta `src/`
  ],
  theme: {
    extend: {
      keyframes: {
        'collapsible-up': {
          from: {
            height: 'var(--radix-collapsible-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'collapsible-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-collapsible-content-height)',
          },
        },
      },
      animation: {
        'collapsible-up': 'collapsible-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-out',
      },
    },
  },
  plugins: [],
}

export default config
