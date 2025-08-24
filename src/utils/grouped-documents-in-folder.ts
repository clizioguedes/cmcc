import type { DocumentWithFolder, File } from '@/entities/document-base'

type Result = Array<{
  id: string
  name: string
  files: Array<File>
}>

export function groupedDocumentsInFolder(
  documents: Array<DocumentWithFolder>,
): Result {
  const result: Result = []

  documents.forEach((document, index) => {
    const folder = result.find((folder) => folder.name === document.folder)

    if (folder) {
      folder.files.push(document.file)
    } else {
      result.push({
        id: String(index),
        name: document.folder,
        files: [document.file],
      })
    }
  })

  const orderedFolders = result.sort((a, b) => {
    return a.name.localeCompare(b.name)
  })

  return orderedFolders
}
