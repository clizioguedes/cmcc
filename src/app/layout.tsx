import './globals.css'

import type { Metadata } from 'next'

import { MONTHS } from '@/constants/month'

import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Câmara de Cerro Corá',
  description: 'Site oficial da Câmara Municipal de Cerro Corá - RN',
  icons: {
    icon: [
      {
        url: '/icon.png',
        sizes: 'any',
      },
      {
        url: '/favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const month = new Date().getMonth()
  const currentTheme = MONTHS[month]

  return (
    <html
      lang="pt-BR"
      className="antialiased"
      data-theme={currentTheme}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
