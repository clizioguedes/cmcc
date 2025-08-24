'use client'

import {
  ChevronRightIcon,
  FileText,
  FolderIcon,
  FolderOpenIcon,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import type { File } from '@/entities/document-base'
import { env } from '@/env'
import { dayjs } from '@/lib/day-js'
import { cn } from '@/lib/utils'
import { capitalizeFirstLetter } from '@/utils/capitalize-first-letter'

function formatFileSize(kilobytes: number): string {
  const ONE_MB_IN_KB = 1024

  if (kilobytes < ONE_MB_IN_KB) {
    return `${kilobytes} KB`
  }

  const megabytes = kilobytes / ONE_MB_IN_KB
  return `${megabytes.toFixed(2)} MB`
}

type FileExplorerProps = {
  folders: Array<{
    id: string
    name: string
    files: Array<File>
  }>
}

export function FileExplorer({ folders }: FileExplorerProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set())

  const toggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders)

    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId)
    } else {
      newExpanded.add(folderId)
    }

    setExpandedFolders(newExpanded)
  }

  return (
    <div className="space-y-1">
      {folders.map((folder) => {
        const isExpanded = expandedFolders.has(folder.id)

        return (
          <div key={folder.id}>
            <div
              className={cn('cursor-pointer py-2 transition-colors')}
              onClick={() => toggleFolder(folder.id)}
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    {isExpanded ? (
                      <FolderOpenIcon className="text-muted-foreground size-5" />
                    ) : (
                      <FolderIcon className="text-muted-foreground size-5" />
                    )}

                    <div
                      className={cn(
                        'transition-transform duration-200',
                        isExpanded ? 'rotate-90' : 'rotate-0',
                      )}
                    >
                      <ChevronRightIcon className="text-muted-foreground size-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-medium">{folder.name}</h3>
                </div>

                <Badge variant="secondary">
                  {folder.files.length}{' '}
                  <span>
                    {folder.files.length === 1 ? 'arquivo' : 'arquivos'}
                  </span>
                </Badge>
              </div>
            </div>

            <div
              className={cn(
                'max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out',
                isExpanded && 'max-h-[1000px] opacity-100',
              )}
            >
              <div className="bg-muted/40 rounded-lg">
                <div className="grid gap-2">
                  {folder.files.map((file, index) => (
                    <Link
                      href={`${env.NEXT_PUBLIC_CMS_URL}${file.url}`}
                      target="_blank"
                      key={file.id}
                      className={cn(
                        'group flex translate-y-2 transform cursor-pointer rounded-lg px-3 py-2 opacity-0 transition-all duration-200',
                        'hover:bg-muted/60',
                        isExpanded && 'translate-y-0 opacity-100',
                      )}
                      style={{
                        transitionDelay: isExpanded ? `${index * 50}ms` : '0ms',
                      }}
                    >
                      <div className="flex w-fit items-center gap-4">
                        <div>
                          <FileText className="size-5 text-blue-600" />
                        </div>

                        <div className="flex flex-col">
                          <p
                            className={cn(
                              'font-medium transition-colors',
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
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
