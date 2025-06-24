'use client'

import { useTheme } from 'next-themes'

import { Button } from './ui/button'

export function ToggleTeme() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-4">
      The current theme is: {theme}
      <Button onClick={() => setTheme('system')}>System Mode</Button>
      <Button onClick={() => setTheme('light')}>Light Mode</Button>
      <Button onClick={() => setTheme('dark')}>Dark Mode</Button>
    </div>
  )
}
