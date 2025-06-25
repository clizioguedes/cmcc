'use client'

import { useEffect } from 'react'

import { useLocalStorage } from '@/hooks/use-local-storage'

export type FontSize = 'small' | 'normal' | 'large' | 'xlarge'

export function FontSizeProvider() {
  const [fontSize] = useLocalStorage<FontSize>('font-size', 'normal')

  useEffect(() => {
    const classList = document.documentElement.classList

    const current = Array.from(classList).find((c) =>
      c.startsWith('font-size-'),
    )

    if (current) classList.remove(current)

    classList.add(`font-size-${fontSize}`)
  }, [fontSize])

  return null
}
