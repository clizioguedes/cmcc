import { FileXIcon, HomeIcon } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function ArticleNotFound() {
  return (
    <div className="mt-24 flex min-h-screen justify-center">
      <div className="flex flex-col gap-4 text-center">
        <div className="flex flex-col gap-4">
          <FileXIcon className="text-muted-foreground/50 mx-auto size-24" />

          <h1 className="text-2xl font-bold">Notícia não encontrada</h1>

          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Desculpe, não conseguimos encontrar a notícia que você procura. Ele
            pode ter sido movido, excluído ou o URL pode estar incorreto.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              <HomeIcon className="mr-2 size-4" />
              Ir para o início
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
