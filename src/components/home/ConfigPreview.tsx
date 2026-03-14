"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function ConfigPreview() {
  const { t } = useLocale();

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow={t.home.configPreview.eyebrow}
            title={t.home.configPreview.title}
            description={t.home.configPreview.description}
          />
        </Reveal>

        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1.3fr 1fr" }}>
          <Reveal className="card" delay={0.06}>
            <div style={{ padding: "1rem" }}>
              <p className="pill" style={{ display: "inline-flex" }}>{t.home.configPreview.fileLabel}</p>
              <pre
                style={{
                  marginTop: "0.65rem",
                  marginBottom: "0.35rem",
                  background: "#0d1117",
                  color: "#c9d1d9",
                  borderRadius: 12,
                  padding: "1rem",
                  overflowX: "auto",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  lineHeight: 1.5,
                }}
              >
                {t.home.configPreview.code}
              </pre>
              <p style={{ margin: 0, color: "var(--text-tertiary)" }}>{t.common.labels.codeHighlight}</p>
            </div>
          </Reveal>

          <Reveal className="card" delay={0.1}>
            <div style={{ padding: "1rem" }}>
              <h3 style={{ marginTop: 0 }}>{t.home.configPreview.previewTitle}</h3>
              <div
                className="glass"
                style={{
                  borderRadius: 12,
                  minHeight: 220,
                  display: "grid",
                  placeItems: "center",
                  color: "var(--text-tertiary)",
                }}
              >
                {t.common.labels.previewSize}
              </div>
              <p style={{ marginBottom: 0, marginTop: "0.55rem", color: "var(--text-tertiary)" }}>{t.common.labels.livePreview}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
