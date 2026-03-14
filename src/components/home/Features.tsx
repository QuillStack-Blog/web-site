"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Features() {
  const { t } = useLocale();

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow={t.home.features.eyebrow}
            title={t.home.features.title}
            description={t.home.features.description}
          />
        </Reveal>

        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {t.home.features.items.map((item, idx) => (
            <Reveal key={item.id} className="card card-hover" delay={idx * 0.05}>
              <div style={{ padding: "1rem" }}>
                <div style={{ fontSize: "1.4rem" }}>{item.accent}</div>
                <h3 style={{ margin: "0.55rem 0 0.25rem" }}>{item.title}</h3>
                <p style={{ margin: 0, color: "var(--text-secondary)" }}>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
