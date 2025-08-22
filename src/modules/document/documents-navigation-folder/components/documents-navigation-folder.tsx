'use client'

import {
  Archive,
  ChevronRightIcon,
  FileText,
  FolderIcon,
  FolderOpenIcon,
  ImageIcon,
  Music,
  Video,
} from 'lucide-react'
import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface FileItem {
  id: string
  name: string
  type: 'document' | 'image' | 'video' | 'audio' | 'archive'
  size: string
  modified: string
}

interface FolderItem {
  id: string
  name: string
  description: string
  fileCount: number
  modified: string
  files: FileItem[]
}

const folders: FolderItem[] = [
  {
    id: '1',
    name: 'Project Documents',
    description: 'Important project files and documentation',
    fileCount: 8,
    modified: 'March 15, 2024',
    files: [
      {
        id: '1-1',
        name: 'Project Proposal.pdf',
        type: 'document',
        size: '2.4 MB',
        modified: 'March 15, 2024',
      },
      {
        id: '1-2',
        name: 'Requirements.docx',
        type: 'document',
        size: '1.2 MB',
        modified: 'March 14, 2024',
      },
      {
        id: '1-3',
        name: 'Timeline.xlsx',
        type: 'document',
        size: '856 KB',
        modified: 'March 13, 2024',
      },
      {
        id: '1-4',
        name: 'Budget Analysis.pdf',
        type: 'document',
        size: '3.1 MB',
        modified: 'March 12, 2024',
      },
      {
        id: '1-5',
        name: 'Meeting Notes.txt',
        type: 'document',
        size: '45 KB',
        modified: 'March 11, 2024',
      },
      {
        id: '1-6',
        name: 'Wireframes.pdf',
        type: 'document',
        size: '5.2 MB',
        modified: 'March 10, 2024',
      },
      {
        id: '1-7',
        name: 'User Stories.docx',
        type: 'document',
        size: '987 KB',
        modified: 'March 9, 2024',
      },
      {
        id: '1-8',
        name: 'Technical Specs.pdf',
        type: 'document',
        size: '4.3 MB',
        modified: 'March 8, 2024',
      },
    ],
  },
  {
    id: '2',
    name: 'Design Assets',
    description: 'UI designs, mockups, and visual resources',
    fileCount: 12,
    modified: 'March 14, 2024',
    files: [
      {
        id: '2-1',
        name: 'Logo Design.png',
        type: 'image',
        size: '2.1 MB',
        modified: 'March 14, 2024',
      },
      {
        id: '2-2',
        name: 'Homepage Mockup.fig',
        type: 'image',
        size: '8.7 MB',
        modified: 'March 13, 2024',
      },
      {
        id: '2-3',
        name: 'Color Palette.png',
        type: 'image',
        size: '456 KB',
        modified: 'March 12, 2024',
      },
      {
        id: '2-4',
        name: 'Typography Guide.pdf',
        type: 'document',
        size: '1.8 MB',
        modified: 'March 11, 2024',
      },
      {
        id: '2-5',
        name: 'Icon Set.zip',
        type: 'archive',
        size: '3.2 MB',
        modified: 'March 10, 2024',
      },
      {
        id: '2-6',
        name: 'Mobile Designs.png',
        type: 'image',
        size: '4.5 MB',
        modified: 'March 9, 2024',
      },
      {
        id: '2-7',
        name: 'Dashboard Layout.png',
        type: 'image',
        size: '3.8 MB',
        modified: 'March 8, 2024',
      },
      {
        id: '2-8',
        name: 'User Flow.png',
        type: 'image',
        size: '2.9 MB',
        modified: 'March 7, 2024',
      },
      {
        id: '2-9',
        name: 'Style Guide.pdf',
        type: 'document',
        size: '6.1 MB',
        modified: 'March 6, 2024',
      },
      {
        id: '2-10',
        name: 'Brand Assets.zip',
        type: 'archive',
        size: '12.4 MB',
        modified: 'March 5, 2024',
      },
      {
        id: '2-11',
        name: 'Prototype Video.mp4',
        type: 'video',
        size: '45.2 MB',
        modified: 'March 4, 2024',
      },
      {
        id: '2-12',
        name: 'Design System.fig',
        type: 'image',
        size: '15.8 MB',
        modified: 'March 3, 2024',
      },
    ],
  },
  {
    id: '3',
    name: 'Media Library',
    description: 'Photos, videos, and audio files',
    fileCount: 6,
    modified: 'March 13, 2024',
    files: [
      {
        id: '3-1',
        name: 'Product Demo.mp4',
        type: 'video',
        size: '128 MB',
        modified: 'March 13, 2024',
      },
      {
        id: '3-2',
        name: 'Team Photo.jpg',
        type: 'image',
        size: '8.4 MB',
        modified: 'March 12, 2024',
      },
      {
        id: '3-3',
        name: 'Background Music.mp3',
        type: 'audio',
        size: '12.7 MB',
        modified: 'March 11, 2024',
      },
      {
        id: '3-4',
        name: 'Office Tour.mov',
        type: 'video',
        size: '256 MB',
        modified: 'March 10, 2024',
      },
      {
        id: '3-5',
        name: 'Podcast Episode.mp3',
        type: 'audio',
        size: '89.3 MB',
        modified: 'March 9, 2024',
      },
      {
        id: '3-6',
        name: 'Event Photos.zip',
        type: 'archive',
        size: '234 MB',
        modified: 'March 8, 2024',
      },
    ],
  },
  {
    id: '4',
    name: 'Archive',
    description: 'Older files and backup documents',
    fileCount: 15,
    modified: 'March 10, 2024',
    files: [
      {
        id: '4-1',
        name: 'Q4 Reports.zip',
        type: 'archive',
        size: '45.6 MB',
        modified: 'March 10, 2024',
      },
      {
        id: '4-2',
        name: 'Old Presentations.zip',
        type: 'archive',
        size: '78.2 MB',
        modified: 'March 5, 2024',
      },
      {
        id: '4-3',
        name: 'Legacy Code.zip',
        type: 'archive',
        size: '156 MB',
        modified: 'February 28, 2024',
      },
      {
        id: '4-4',
        name: 'Client Feedback.pdf',
        type: 'document',
        size: '2.8 MB',
        modified: 'February 25, 2024',
      },
      {
        id: '4-5',
        name: 'Version 1.0 Backup.zip',
        type: 'archive',
        size: '234 MB',
        modified: 'February 20, 2024',
      },
      {
        id: '4-6',
        name: 'Meeting Recordings.zip',
        type: 'archive',
        size: '567 MB',
        modified: 'February 15, 2024',
      },
      {
        id: '4-7',
        name: 'Draft Designs.zip',
        type: 'archive',
        size: '89.4 MB',
        modified: 'February 10, 2024',
      },
      {
        id: '4-8',
        name: 'Research Notes.pdf',
        type: 'document',
        size: '4.2 MB',
        modified: 'February 5, 2024',
      },
      {
        id: '4-9',
        name: 'Competitor Analysis.xlsx',
        type: 'document',
        size: '1.9 MB',
        modified: 'January 30, 2024',
      },
      {
        id: '4-10',
        name: 'User Interviews.mp3',
        type: 'audio',
        size: '234 MB',
        modified: 'January 25, 2024',
      },
      {
        id: '4-11',
        name: 'Prototype v1.zip',
        type: 'archive',
        size: '123 MB',
        modified: 'January 20, 2024',
      },
      {
        id: '4-12',
        name: 'Market Research.pdf',
        type: 'document',
        size: '8.7 MB',
        modified: 'January 15, 2024',
      },
      {
        id: '4-13',
        name: 'Initial Concepts.zip',
        type: 'archive',
        size: '67.8 MB',
        modified: 'January 10, 2024',
      },
      {
        id: '4-14',
        name: 'Brainstorm Session.mp4',
        type: 'video',
        size: '345 MB',
        modified: 'January 5, 2024',
      },
      {
        id: '4-15',
        name: 'Project Kickoff.pdf',
        type: 'document',
        size: '3.4 MB',
        modified: 'January 1, 2024',
      },
    ],
  },
]

const getFileIcon = (type: FileItem['type']) => {
  switch (type) {
    case 'document':
      return <FileText className="size-4 text-blue-600" />
    case 'image':
      return <ImageIcon className="size-4 text-green-600" />
    case 'video':
      return <Video className="size-4 text-purple-600" />
    case 'audio':
      return <Music className="size-4 text-orange-600" />
    case 'archive':
      return <Archive className="size-4 text-gray-600" />
    default:
      return <FileText className="size-4 text-gray-600" />
  }
}

export function DocumentsNavigationFolder() {
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
    <div className="flex flex-col gap-4">
      <header>
        <h1 className="text-4xl font-bold">File Explorer</h1>
        <p className="text-muted-foreground text-lg">
          Browse and manage your project files organized by folders. Click on
          any folder to view its contents.
        </p>
      </header>

      <div className="space-y-0">
        {folders.map((folder) => {
          const isExpanded = expandedFolders.has(folder.id)

          return (
            <div key={folder.id}>
              <div
                className={cn('cursor-pointer py-2 transition-colors')}
                onClick={() => toggleFolder(folder.id)}
              >
                <div className="flex items-center justify-between">
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

                  <div className="flex flex-col items-end gap-2">
                    <Badge variant="secondary">
                      {folder.fileCount} arquivos
                    </Badge>

                    <p className="text-muted-foreground text-sm">
                      Atualizado em {folder.modified}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  'max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out',
                  isExpanded && 'max-h-[1000px] opacity-100',
                )}
              >
                <div className="bg-muted/20 rounded-lg">
                  <div className="grid gap-2">
                    {folder.files.map((file, index) => (
                      <div
                        key={file.id}
                        className={cn(
                          'hover:bg-muted/60 group flex translate-y-2 transform cursor-pointer rounded-lg px-3 py-2 opacity-0 transition-all duration-200',
                          isExpanded && 'translate-y-0 opacity-100',
                        )}
                        style={{
                          transitionDelay: isExpanded
                            ? `${index * 50}ms`
                            : '0ms',
                        }}
                      >
                        <div className="flex items-center gap-3">
                          {getFileIcon(file.type)}

                          <div>
                            <p
                              className={cn(
                                'font-medium transition-colors',
                                'group-hover:text-primary',
                              )}
                            >
                              {file.name}
                            </p>

                            <p className="text-muted-foreground text-sm">
                              {file.size} • Publicado {file.modified}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
