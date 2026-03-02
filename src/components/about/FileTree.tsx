"use client";

import { motion } from "framer-motion";
import { Folder, File, Star } from "lucide-react";

interface FileNode {
  name: string;
  type: "folder" | "file";
  highlight?: boolean;
  children?: FileNode[];
}

const fileStructure: FileNode[] = [
  {
    name: "quillstack/",
    type: "folder",
    children: [
      {
        name: "content/",
        type: "folder",
        highlight: true,
        children: [
          { name: "settings.json", type: "file", highlight: true },
          { name: "sitedoc.json", type: "file" },
          {
            name: "doc/",
            type: "folder",
            children: [
              { name: "hello-world.md", type: "file" },
              { name: "...", type: "file" },
            ],
          },
        ],
      },
      { name: "src/", type: "folder" },
      { name: "public/", type: "folder" },
      { name: "package.json", type: "file" },
    ],
  },
];

function FileTreeNode({ node, depth = 0 }: { node: FileNode; depth?: number }) {
  const paddingLeft = depth * 20;

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: depth * 0.1 }}
        className={`flex items-center gap-2 py-1.5 px-3 rounded-lg ${
          node.highlight 
            ? "bg-orange-50 text-orange-600" 
            : "text-foreground-secondary hover:bg-background-tertiary"
        }`}
        style={{ paddingLeft: `${paddingLeft + 12}px` }}
      >
        {node.type === "folder" ? (
          <Folder className="w-4 h-4 text-orange-400" />
        ) : (
          <File className="w-4 h-4 text-foreground-subtle" />
        )}
        <span className="font-mono text-sm">{node.name}</span>
        {node.highlight && (
          <Star className="w-3 h-3 text-orange-500 ml-auto" />
        )}
      </motion.div>
      
      {node.children && (
        <div>
          {node.children.map((child, index) => (
            <FileTreeNode key={index} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function FileTree() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          简洁的目录结构
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="code-block rounded-2xl p-6 overflow-x-auto"
        >
          <div>
            {fileStructure.map((node, index) => (
              <FileTreeNode key={index} node={node} />
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-foreground-subtle text-sm mt-6"
        >
          你只需要关心 <span className="text-orange-500 font-medium">content/</span> 目录
        </motion.p>
      </div>
    </section>
  );
}
