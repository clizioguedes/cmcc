'use client'

import { NuqsAdapter } from 'nuqs/adapters/next/app'

import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { FontSizeProvider } from '@/providers/font-size-provider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NuqsAdapter>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <FontSizeProvider />
        <Toaster richColors position="top-right" />
        {children}
      </ThemeProvider>
    </NuqsAdapter>
  )
}
