'use client'

import { useEffect } from 'react'

import { useLocalStorage } from '@/hooks/use-local-storage'

export type FontSize = 'small' | 'normal' | 'large' | 'xlarge'

export const FONT_SIZE_KEY = 'font-size'

export function FontSizeProvider() {
  const [fontSize] = useLocalStorage<FontSize>(FONT_SIZE_KEY, 'normal')

  useEffect(() => {
    document.documentElement.classList.remove(
      'font-size-small',
      'font-size-normal',
      'font-size-large',
      'font-size-xlarge',
    )

    document.documentElement.classList.add(`font-size-${fontSize}`)
  }, [fontSize])

  return null
}
