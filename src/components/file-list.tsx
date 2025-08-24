import { FileText } from 'lucide-react'
import Link from 'next/link'

import type { File } from '@/entities/document-base'
import { env } from '@/env'
import { dayjs } from '@/lib/day-js'
import { cn } from '@/lib/utils'
import { capitalizeFirstLetter } from '@/utils/capitalize-first-letter'
import { formatFileSize } from '@/utils/format-file-size'

type FileListProps = {
  files: File[]
}

export function FileList({ files }: FileListProps) {
  return (
    <div className="flex flex-col">
      {files.map((file, index) => (
        <Link
          href={`${env.NEXT_PUBLIC_CMS_URL}${file.url}`}
          target="_blank"
          key={index}
          className={cn(
            'group flex transform cursor-pointer rounded-lg px-3 py-2',
            'hover:bg-muted/60',
          )}
        >
          <div className="flex w-full items-center gap-4">
            <div>
              <FileText className="size-5 text-blue-600" />
            </div>

            <div className="flex flex-col">
              <p
                className={cn(
                  'font-medium break-all transition-colors',
                  'group-hover:text-primary',
                )}
              >
                {file.name}
              </p>

              <p className="text-muted-foreground text-sm">
                {formatFileSize(file.size)} • Publicado{' '}
                {capitalizeFirstLetter(
                  dayjs(file.publishedAt).format('MMMM DD, YYYY'),
                )}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
