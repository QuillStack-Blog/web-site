"use client"

import React, { useState } from 'react'
import { useApp } from '@/contexts/AppContext'
import { t } from '@/lib/i18n'
import { Card, CardContent } from '@/components/ui/card'
import { motion, AnimatePresence } from 'framer-motion'
import { Folder, File, ChevronRight, ChevronDown } from 'lucide-react'

interface TreeNode {
  name: string
  type: 'file' | 'folder'
  highlight?: boolean
  children?: TreeNode[]
}

const fileTree: TreeNode[] = [
  {
    name: 'quillstack/',
    type: 'folder',
    children: [
      {
        name: 'content/',
        type: 'folder',
        highlight: true,
        children: [
          { name: 'settings.json', type: 'file', highlight: true },
          { name: 'sitedoc.json', type: 'file' },
          {
            name: 'doc/',
            type: 'folder',
            children: [
              { name: 'hello-world.md', type: 'file' },
              { name: '...', type: 'file' },
            ],
          },
        ],
      },
      { name: 'src/', type: 'folder' },
      { name: 'public/', type: 'folder' },
      { name: 'package.json', type: 'file' },
    ],
  },
]

function TreeNodeComponent({ node, depth = 0 }: { node: TreeNode; depth?: number }) {
  const [isOpen, setIsOpen] = useState(node.type === 'folder')
  const isFolder = node.type === 'folder'

  return (
    <div>
      <button
        onClick={() => isFolder && setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 py-1 px-2 rounded-md hover:bg-accent/50 transition-colors w-full text-left ${
          node.highlight ? 'text-primary font-medium' : 'text-muted-foreground'
        }`}
        style={{ paddingLeft: `${depth * 20}px` }}
      >
        {isFolder ? (
          isOpen ? (
            <ChevronDown className="h-4 w-4 flex-shrink-0" />
          ) : (
            <ChevronRight className="h-4 w-4 flex-shrink-0" />
          )
        ) : (
          <span className="w-4" />
        )}
        {isFolder ? (
          <Folder className="h-4 w-4 flex-shrink-0 text-primary/70" />
        ) : (
          <File className="h-4 w-4 flex-shrink-0 text-muted-foreground/70" />
        )}
        <span className="text-sm">{node.name}</span>
      </button>
      <AnimatePresence>
        {isFolder && isOpen && node.children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {node.children.map((child, index) => (
              <TreeNodeComponent key={index} node={child} depth={depth + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FileTree() {
  const { language } = useApp()

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('filetree.title', language)}
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('filetree.desc', language)}
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card/50 backdrop-blur border-border/50 overflow-hidden">
            <CardContent className="p-6">
              <div className="bg-muted/30 rounded-lg p-4 font-mono">
                {fileTree.map((node, index) => (
                  <TreeNodeComponent key={index} node={node} />
                ))}
              </div>

            </CardContent>

          </Card>
          <p className="text-sm text-muted-foreground text-center mt-4">
            {t('filetree.highlight', language)}
          </p>

        </motion.div>
      </div>
    </section>
  )
}
