import { FileExplorer } from '@/components/file-explorer'
import { getAnnualFinancialStatements } from '@/http/requests/get-annual-financial-statements'
import { groupedDocumentsInFolder } from '@/utils/grouped-documents-in-folder'

export default async function AnnualFinancialStatementsPage() {
  const annualFinancialStatements = await getAnnualFinancialStatements()
  const groupedDocuments = groupedDocumentsInFolder(annualFinancialStatements)

  return (
    <div className="flex flex-col gap-4">
      <header>
        <h1 className="text-4xl font-bold">Demostrativo de contas anuais</h1>
        <p className="text-muted-foreground text-lg">
          Lista de demonstrativos de contas anuais disponíveis
        </p>
      </header>

      <FileExplorer folders={groupedDocuments} />
    </div>
  )
}
