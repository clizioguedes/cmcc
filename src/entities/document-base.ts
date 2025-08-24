export type File = {
  id: number
  url: string
  alternativeText: string | null
  caption: string | null
  createdAt: string
  documentId: string
  ext: string
  hash: string
  mime: string
  name: string
  previewUrl: string | null
  provider: string
  provider_metadata: string | null
  publishedAt: string
  size: number
  updatedAt: string
}

export type DocumentBase = {
  id: number
  documentId: string
  file: File
  publishedAt: string
  updatedAt: string
  createdAt: string
}

export type DocumentWithFolder = DocumentBase & {
  folder: string
}
