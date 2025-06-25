'use client'

import { ContrastIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'

import { Button } from '@/components/ui/button'

export function ToggleTheme() {
  const { setTheme, theme } = useTheme()

  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button variant="outline" size="icon" onClick={handleChangeTheme}>
      <ContrastIcon className="h-4 w-4" />
    </Button>
  )
}
