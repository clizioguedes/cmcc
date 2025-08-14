'use client'

import { ArrowLeft, Home } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-md px-6 text-center">
        <div className="mb-8">
          <h1 className="mb-4 text-9xl font-bold text-gray-200 dark:text-gray-700">
            404
          </h1>
          <div className="bg-primary mx-auto mb-8 h-1 w-24"></div>
        </div>

        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Página não encontrada
        </h2>

        <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-400">
          Desculpe, não conseguimos encontrar a página que você procura. A
          página pode ter sido movida, excluída ou você pode ter inserido uma
          URL errada.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild className="flex items-center gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              Voltar para página inicial
            </Link>
          </Button>

          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </div>

        <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
          <p>
            Precisa de ajuda?{' '}
            <Link href="/contact" className="text-primary hover:underline">
              Entre em contato
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
