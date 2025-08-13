import type { BlocksContent } from '@strapi/blocks-react-renderer'

type TextNode = { type: 'text'; text: string }

type WithChildren = { children: ReadonlyArray<unknown> }

type ImageNode = { type: 'image' }

const isObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null

const isTextNode = (n: unknown): n is TextNode =>
  isObject(n) && n.type === 'text' && typeof n.text === 'string'

const hasChildren = (n: unknown): n is WithChildren =>
  isObject(n) && Array.isArray(n.children)

const isImageNode = (n: unknown): n is ImageNode =>
  isObject(n) && n.type === 'image'

function countWordsAndImages(nodes: ReadonlyArray<unknown>) {
  let wordCount = 0
  let imageCount = 0

  for (const node of nodes) {
    if (isTextNode(node)) {
      wordCount += node.text.trim().split(/\s+/).filter(Boolean).length
    }

    if (isImageNode(node)) {
      imageCount += 1

      if (hasChildren(node)) {
        const { words } = countWordsAndImages(node.children)
        wordCount += words
      }

      continue
    }

    if (hasChildren(node)) {
      const { words, images } = countWordsAndImages(node.children)
      wordCount += words
      imageCount += images
    }
  }

  return { words: wordCount, images: imageCount }
}

export function calculateBlogPostReadingTime(
  content: BlocksContent,
  opts?: { wpm?: number; imageSeconds?: number; minMinutes?: number },
) {
  const { wpm = 200, imageSeconds = 12, minMinutes = 1 } = opts ?? {}

  const { words, images } = countWordsAndImages(content)

  const minutesFromWords = words / wpm
  const minutesFromImages = (images * imageSeconds) / 60
  const totalMinutes = Math.ceil(minutesFromWords + minutesFromImages)

  return Math.max(minMinutes, totalMinutes)
}
