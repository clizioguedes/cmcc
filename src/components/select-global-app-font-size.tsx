'use client'

import { Type } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { cn } from '@/lib/utils'
import { FONT_SIZE_KEY, type FontSize } from '@/providers/font-size-provider'

const FONT_SIZES: Record<FontSize, string> = {
  small: 'Pequeno',
  normal: 'Normal',
  large: 'Grande',
  xlarge: 'Extra Grande',
}

export function SelectGlobalAppFontSize() {
  const [fontSize, setFontSize] = useLocalStorage<FontSize>(FONT_SIZE_KEY)

  const changeSize = (size: FontSize) => {
    setFontSize(size)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Acessibilidade Digital</CardTitle>

        <CardDescription>
          Ajuste o tamanho da fonte para melhor leitura
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Type className="text-muted-foreground h-6 w-6" />
            <span className={`font-medium`}>Tamanho da fonte:</span>
          </div>

          <div className={cn('flex flex-col gap-3', 'md:flex-row')}>
            {Object.entries(FONT_SIZES).map(([key, value]) => (
              <Button
                key={key}
                variant={fontSize === key ? 'default' : 'outline'}
                size="lg"
                onClick={() => changeSize(key as FontSize)}
                className="p-8"
              >
                {value}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
