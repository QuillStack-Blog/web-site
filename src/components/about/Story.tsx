"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";

export function Story() {
  const { t } = useLocale();

  return (
    <section className="section">
      <div className="container" style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1.2fr 1fr" }}>
        <Reveal className="card">
          <div style={{ padding: "1.2rem" }}>
            <p className="section-eyebrow">{t.about.story.eyebrow}</p>
            <h1 style={{ margin: 0, fontFamily: "var(--font-title)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>{t.about.story.title}</h1>
            <p className="gradient-text" style={{ marginTop: "0.4rem", fontWeight: 700 }}>{t.about.story.subtitle}</p>
            {t.about.story.paragraphs.map((paragraph) => (
              <p key={paragraph} style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="card" delay={0.08}>
          <div style={{ minHeight: 280, display: "grid", placeItems: "center", padding: "1rem" }}>
            <div style={{ textAlign: "center", color: "var(--text-tertiary)" }}>
              <strong>{t.about.story.mockTitle}</strong>
              <p>{t.about.story.mockSize}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
