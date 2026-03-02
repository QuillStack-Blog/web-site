"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

const testimonials = [
  {
    id: 1,
    name: "李明",
    role: "独立开发者",
    avatar: "https://placehold.co/100x100/fed7aa/f97316?text=Li",
    content: "QuillStack 让我的技术博客搭建变得异常简单。几分钟就搞定了，而且主题非常好看！",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "产品经理",
    avatar: "https://placehold.co/100x100/fff7ed/f97316?text=SC",
    content: "作为一个不懂技术的人，我也能轻松搭建自己的博客。文档清晰，配置简单，太棒了！",
    rating: 5,
  },
  {
    id: 3,
    name: "张伟",
    role: "前端工程师",
    avatar: "https://placehold.co/100x100/f97316/ffffff?text=Zhang",
    content: "代码质量很高，扩展性也很好。我已经基于它定制了自己的主题，非常满意。",
    rating: 5,
  },
  {
    id: 4,
    name: "Emma Wang",
    role: "设计师",
    avatar: "https://placehold.co/100x100/fdbA74/f97316?text=EW",
    content: "设计非常精致，细节处理得很到位。终于找到一个既有颜值又有实力的博客工具了。",
    rating: 5,
  },
  {
    id: 5,
    name: "王强",
    role: "全栈开发者",
    avatar: "https://placehold.co/100x100/ea580c/ffffff?text=Wang",
    content: "部署到 Vercel 只需要几秒钟，而且性能优化做得非常好，Lighthouse 分数几乎满分。",
    rating: 5,
  },
  {
    id: 6,
    name: "刘芳",
    role: "内容创作者",
    avatar: "https://placehold.co/100x100/c2410c/ffffff?text=Liu",
    content: "Markdown 写作体验一流，而且自动生成目录和 SEO 优化，让我可以专注于内容创作。",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            用户<span className="text-gradient">好评</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-foreground-secondary text-lg max-w-2xl mx-auto"
          >
            听听他们怎么说
          </motion.p>
        </motion.div>

        {/* 评价卡片 - 瀑布流布局 */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="break-inside-avoid"
            >
              <div className="bg-background-warm rounded-2xl p-6 border border-border hover:border-orange-200 hover:shadow-lg transition-all h-full">
                {/* 引号图标 */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-orange-300" />
                </div>

                {/* 评分 */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* 内容 */}
                <p className="text-foreground-secondary leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* 用户信息 */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-background shadow-sm"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">{testimonial.name}</h4>
                    <p className="text-foreground-subtle text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-foreground-secondary mb-4">
            准备好开始你的博客之旅了吗？
          </p>
          <motion.a
            href="/deploy"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary inline-block"
          >
            立即开始使用
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
