'use client'

import { AlertTriangle, Bug, Home, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'

import { Button } from '@/components/ui/button'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
      <div className="mx-auto max-w-md px-6 text-center">
        <div className="mb-8">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
            <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-400" />
          </div>
          <div className="mx-auto mb-8 h-1 w-24 bg-red-500"></div>
        </div>

        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
          Oops! Algo deu errado
        </h1>

        <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-400">
          Encontramos um erro inesperado ao processar sua solicitação. Não se
          preocupe, nossa equipe foi notificada e estamos trabalhando para
          corrigir esse problema.
        </p>

        <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button onClick={reset} className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Tentar novamente
          </Button>

          <Button
            variant="outline"
            asChild
            className="flex items-center gap-2 bg-transparent"
          >
            <Link href="/">
              <Home className="h-4 w-4" />
              Voltar para página inicial
            </Link>
          </Button>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <details className="mb-8 rounded-lg bg-gray-100 p-4 text-left dark:bg-gray-800">
            <summary className="mb-2 cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300">
              <Bug className="mr-2 inline h-4 w-4" />
              Error Details (Development)
            </summary>
            <pre className="overflow-auto text-xs text-red-600 dark:text-red-400">
              {error.message}
              {error.stack && (
                <>
                  {'\n\n'}
                  {error.stack}
                </>
              )}
            </pre>
          </details>
        )}

        <div className="text-sm text-gray-500 dark:text-gray-400">
          <p>
            Still having trouble?{' '}
            <Link href="/contact" className="text-red-600 hover:underline">
              Contact support
            </Link>
          </p>
          {error.digest && (
            <p className="mt-2 font-mono text-xs">Error ID: {error.digest}</p>
          )}
        </div>
      </div>
    </div>
  )
}
