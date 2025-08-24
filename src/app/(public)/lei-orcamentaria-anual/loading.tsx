import { Skeleton } from '@/components/ui/skeleton'

export default async function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <header>
        <h1 className="text-4xl font-bold">Lei Orçamentária Anual</h1>
        <p className="text-muted-foreground text-lg">
          Lista de lei orçamentária anual disponíveis
        </p>
      </header>

      <div className="flex flex-col gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className="h-11 w-full" />
        ))}
      </div>
    </div>
  )
}
