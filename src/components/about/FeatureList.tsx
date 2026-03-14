"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function FeatureList() {
  const { t } = useLocale();

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeader eyebrow={t.about.featureList.eyebrow} title={t.about.featureList.title} />
        </Reveal>
        <div style={{ display: "grid", gap: "0.8rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {t.about.featureList.items.map((item, idx) => (
            <Reveal key={item.title} className="card" delay={idx * 0.04}>
              <div style={{ padding: "0.85rem 1rem" }}>
                <strong>{item.title}</strong>
                <p style={{ margin: "0.35rem 0 0", color: "var(--text-secondary)" }}>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
