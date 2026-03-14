"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function ResponsiveShowcase() {
  const { t } = useLocale();

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow={t.home.responsiveShowcase.eyebrow}
            title={t.home.responsiveShowcase.title}
            description={t.home.responsiveShowcase.description}
          />
        </Reveal>

        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {t.home.responsiveShowcase.devices.map((device, idx) => (
            <Reveal key={device.id} className="card" delay={idx * 0.05}>
              <div style={{ padding: "1rem" }}>
                <h3 style={{ margin: 0 }}>{device.title}</h3>
                <p style={{ margin: "0.4rem 0", color: "var(--text-secondary)" }}>{device.description}</p>
                <div className="pill-list">
                  {device.tags.map((tag) => (
                    <span key={tag} className="pill">{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="card" delay={0.2}>
          <div style={{ padding: "1rem", marginTop: "1rem" }}>
            <h3 style={{ marginTop: 0 }}>{t.home.responsiveShowcase.pwa.title}</h3>
            <p style={{ color: "var(--text-secondary)" }}>{t.home.responsiveShowcase.pwa.description}</p>
            <div style={{ display: "grid", gap: "0.8rem", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))" }}>
              {t.home.responsiveShowcase.pwa.metrics.map((metric) => (
                <div key={metric.label} className="glass" style={{ borderRadius: 12, padding: "0.7rem" }}>
                  <strong style={{ fontSize: "1.2rem" }}>{metric.value}</strong>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
