"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function FileTree() {
  const { t } = useLocale();

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow={t.about.fileTree.eyebrow}
            title={t.about.fileTree.title}
            description={t.about.fileTree.description}
          />
        </Reveal>
        <Reveal className="card" delay={0.05}>
          <div style={{ padding: "1rem" }}>
            <pre style={{ margin: 0, fontFamily: "var(--font-mono)", lineHeight: 1.6, fontSize: "0.88rem" }}>
              {t.about.fileTree.lines.join("\n")}
            </pre>
            <p style={{ margin: "0.8rem 0 0", color: "var(--text-tertiary)" }}>{t.about.fileTree.footer}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
