"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "如何修改主题颜色？",
    answer: "在 content/settings.json 文件中，找到 theme.primaryColor 字段，修改为你喜欢的颜色值即可。支持任何有效的 CSS 颜色值。",
  },
  {
    question: "如何添加自定义域名？",
    answer: "部署到 Vercel 后，进入项目设置，在 Domains 选项卡中添加你的自定义域名，然后按照提示配置 DNS 记录即可。",
  },
  {
    question: "文章图片应该放在哪里？",
    answer: "建议将图片放在 public/images 目录下，然后在 Markdown 中通过 /images/your-image.png 的方式引用。",
  },
  {
    question: "如何备份我的文章？",
    answer: "由于所有内容都是 Markdown 文件存储在 Git 仓库中，你的文章天然就有版本控制。只需要定期 push 到远程仓库即可完成备份。",
  },
];

export function FAQ() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto"
    >
      <Accordion.Root type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className="bg-background rounded-2xl border border-border overflow-hidden"
          >
            <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-background-warm transition-colors group">
              <span className="font-medium text-foreground group-hover:text-orange-600 transition-colors">
                {faq.question}
              </span>
              <motion.div
                className="flex-shrink-0 ml-4"
                initial={false}
              >
                <ChevronDown className="w-5 h-5 text-orange-400 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </motion.div>
            </Accordion.Trigger>
            
            <Accordion.Content className="overflow-hidden transition-all data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
              <div className="px-6 pb-4 text-foreground-secondary leading-relaxed">
                {faq.answer}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </motion.div>
  );
}
