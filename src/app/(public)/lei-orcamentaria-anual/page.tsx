import { FileList } from '@/components/file-list'
import { getAnnualBudgetLaws } from '@/http/requests/get-annual-budget-laws'

export default async function FoldersPage() {
  const annualBudgetLaws = await getAnnualBudgetLaws()

  const files = annualBudgetLaws
    .map((item) => item.file)
    .sort((a, b) => {
      return a.name.localeCompare(b.name)
    })

  return (
    <div className="flex flex-col gap-4">
      <header>
        <h1 className="text-4xl font-bold">Lei Orçamentária Anual</h1>
        <p className="text-muted-foreground text-lg">
          Lista de lei orçamentária anual disponíveis
        </p>
      </header>

      <FileList files={files} />
    </div>
  )
}
