"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Copy, Check, ArrowRight, ArrowLeft, Terminal } from "lucide-react";
import { Stepper } from "@/components/deploy/Stepper";
import { PlatformCards } from "@/components/deploy/PlatformCard";
import { FAQ } from "@/components/deploy/FAQ";

const steps = [
  { number: 1, label: "环境" },
  { number: 2, label: "配置" },
  { number: 3, label: "部署" },
];

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

export default function DeployPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen">
      {/* 页面标题 */}
      <section className="pt-8 pb-12 px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-orange flex items-center justify-center">
              <Rocket className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-gradient">快速部署</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-foreground-secondary text-lg">
            三步开启你的博客之旅
          </motion.p>
        </motion.div>
      </section>

      {/* 步骤条 */}
      <section className="px-4 mb-12">
        <div className="max-w-2xl mx-auto">
          <Stepper
            steps={steps}
            currentStep={currentStep}
            onStepClick={setCurrentStep}
          />
        </div>
      </section>

      {/* 步骤内容 */}
      <section className="px-4 mb-16">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-background rounded-3xl p-8 border border-border shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  步骤 1 / 3: 准备环境
                </h2>

                <div className="space-y-4 mb-8">
                  <p className="text-foreground-secondary">确保你已安装：</p>
                  <ul className="space-y-2">
                    {["Node.js 18+", "Git", "一个 GitHub 账号"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-foreground">
                        <Check className="w-5 h-5 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <p className="text-foreground-secondary">快速开始：</p>
                  <div className="relative">
                    <div className="code-block rounded-xl p-4 text-sm overflow-x-auto">
                      <div className="flex items-center gap-2 mb-2 text-foreground-subtle">
                        <Terminal className="w-4 h-4" />
                        <span className="text-xs">终端</span>
                      </div>
                      <code>
                        # 克隆模板仓库<br/>
                        git clone https://github.com/xxx/quillstack<br/>
                        cd quillstack
                      </code>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => copyToClipboard("git clone https://github.com/xxx/quillstack\ncd quillstack")}
                      className="absolute top-4 right-4 p-2 rounded-lg bg-background-secondary hover:bg-background-tertiary transition-colors"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-foreground-subtle" />
                      )}
                    </motion.button>
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setCurrentStep(2)}
                    className="btn-primary flex items-center gap-2"
                  >
                    下一步
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-background rounded-3xl p-8 border border-border shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  步骤 2 / 3: 配置站点
                </h2>

                <p className="text-foreground-secondary mb-6">
                  编辑 <code className="bg-background-warm px-2 py-1 rounded text-orange-600">content/settings.json</code>：
                </p>

                <div className="code-block rounded-xl p-4 text-sm mb-6 overflow-x-auto">
                  <pre>{`{
  "siteTitle": "我的博客",
  "author": {
    "name": "作者名",
    "bio": "热爱写作，记录生活"
  },
  "theme": {
    "primaryColor": "#f97316"
  }
}`}</pre>
                </div>

                <div className="bg-background-warm rounded-xl p-4 mb-6 border border-border">
                  <p className="text-sm font-medium text-orange-700 mb-2">提示：</p>
                  <ul className="text-sm text-foreground-secondary space-y-1">
                    <li>• siteTitle - 你的网站标题</li>
                    <li>• author.name - 作者名字</li>
                    <li>• categories - 文章分类</li>
                  </ul>
                </div>

                <div className="flex justify-between">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setCurrentStep(1)}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    上一步
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setCurrentStep(3)}
                    className="btn-primary flex items-center gap-2"
                  >
                    下一步
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-background rounded-3xl p-8 border border-border shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  步骤 3 / 3: 部署上线
                </h2>

                <div className="space-y-6">
                  <div>
                    <p className="text-foreground-secondary mb-4">
                      推荐部署到 Vercel（一键部署）：
                    </p>
                    <div className="bg-background-warm rounded-xl p-6 flex items-center justify-center border border-border">
                      <div className="text-center">
                        <div className="text-4xl mb-2">▲</div>
                        <p className="text-sm text-foreground-subtle">Deploy on Vercel</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-foreground-secondary mb-4">或手动部署：</p>
                    <div className="code-block rounded-xl p-4 text-sm">
                      <code>
                        npm install<br/>
                        npm run build
                      </code>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <p className="text-green-700 text-sm">
                      部署完成后，你将获得一个 <code className="bg-green-100 px-1 rounded">https://your-blog.vercel.app</code> 链接
                    </p>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setCurrentStep(2)}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    上一步
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary flex items-center gap-2"
                  >
                    完成 🎉
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 部署平台对比 */}
      <section className="py-16 px-4 bg-background-warm">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-10"
            style={{ fontFamily: "var(--font-display)" }}
          >
            支持的部署平台
          </motion.h2>
          <PlatformCards />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-10"
            style={{ fontFamily: "var(--font-display)" }}
          >
            常见问题
          </motion.h2>
          <FAQ />
        </div>
      </section>
    </div>
  );
}
