"use client";

import { useState } from "react";
import { themePresets } from "@/config/site";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function ThemePreview() {
  const { t } = useLocale();
  const [active, setActive] = useState(0);
  const current = t.home.themePreview.items[active];
  const colors = themePresets[active] ?? themePresets[0];

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow={t.home.themePreview.eyebrow}
            title={t.home.themePreview.title}
            description={t.home.themePreview.description}
          />
        </Reveal>

        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1.4fr 1fr" }}>
          <Reveal className="card" delay={0.05}>
            <div style={{ padding: "1rem" }}>
              <div className="glass" style={{ borderRadius: 12, padding: "0.5rem 0.8rem", marginBottom: "0.8rem" }}>
                {t.home.themePreview.browserUrl}
              </div>
              <div
                style={{
                  borderRadius: 12,
                  border: "1px solid var(--border-primary)",
                  minHeight: 230,
                  padding: "1rem",
                  background: `linear-gradient(135deg, ${colors.accent}22, ${colors.secondary}22)`,
                }}
              >
                <strong>{t.home.themePreview.siteName}</strong>
                <p style={{ margin: "0.6rem 0", color: "var(--text-secondary)" }}>{current.description}</p>
                <div className="pill-list">
                  {current.features.map((f) => (
                    <span key={f} className="pill">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="card" delay={0.1}>
            <div style={{ padding: "1rem" }}>
              <h3 style={{ marginTop: 0 }}>{t.home.themePreview.panelTitle}</h3>
              <div style={{ display: "grid", gap: "0.5rem" }}>
                {t.home.themePreview.items.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(idx)}
                    style={{
                      borderRadius: 12,
                      border: "1px solid var(--border-primary)",
                      textAlign: "left",
                      background: idx === active ? "color-mix(in srgb, var(--brand-primary) 24%, transparent)" : "transparent",
                      padding: "0.65rem 0.75rem",
                      color: "var(--text-primary)",
                      cursor: "pointer",
                    }}
                  >
                    <strong>{item.title}</strong>
                    <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{item.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
