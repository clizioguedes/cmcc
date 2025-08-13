import { type BlocksContent } from '@strapi/blocks-react-renderer'

export type Cover = {
  id: number
  documentId: string
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: {
    thumbnail: {
      name: string
      hash: string
      ext: string
      mime: string
      path: string | null
      width: number
      height: number
      size: number
      sizeInBytes: number
      url: string
    }
    small: {
      name: string
      hash: string
      ext: string
      mime: string
      path: string | null
      width: number
      height: number
      size: number
      sizeInBytes: number
      url: string
    }
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  provider: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type AuthorAvatar = {
  id: number
  documentId: string
  url: string
}

export type Author = {
  id: number
  documentId: string
  name: string
  email: string
  avatar?: AuthorAvatar
  position?: string
}

export type Tag = {
  id: number
  documentId: string
  name: string
  slug: string
}

export type Article = {
  id: number
  documentId: string
  title: string
  description: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  content: BlocksContent
}
