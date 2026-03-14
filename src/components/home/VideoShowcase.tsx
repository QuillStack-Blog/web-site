"use client";

import { useState } from "react";
import Image from "next/image";
import { videoAssets } from "@/config/site";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function VideoShowcase() {
  const { t } = useLocale();
  const [active, setActive] = useState(0);

  const item = t.home.videoShowcase.items[active];
  const video = videoAssets[active] ?? videoAssets[0];

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow={t.home.videoShowcase.eyebrow}
            title={t.home.videoShowcase.title}
            description={t.home.videoShowcase.description}
          />
        </Reveal>

        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1.35fr 1fr" }}>
          <Reveal className="card" delay={0.05}>
            <div style={{ padding: "1rem" }}>
              <Image src={video.src} alt={item.title} width={1200} height={680} style={{ width: "100%", height: "auto", borderRadius: 12 }} />
              <h3 style={{ margin: "0.8rem 0 0.3rem" }}>{item.title}</h3>
              <p style={{ margin: 0, color: "var(--text-secondary)" }}>{item.description}</p>
              <p style={{ margin: "0.45rem 0 0", color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>
                02:15 / {video.duration}
              </p>
            </div>
          </Reveal>

          <Reveal className="card" delay={0.1}>
            <div style={{ padding: "1rem" }}>
              <h3 style={{ marginTop: 0 }}>{t.common.labels.playlist}</h3>
              <div style={{ display: "grid", gap: "0.45rem" }}>
                {t.home.videoShowcase.items.map((entry, idx) => (
                  <button
                    type="button"
                    key={entry.id}
                    onClick={() => setActive(idx)}
                    style={{
                      textAlign: "left",
                      borderRadius: 10,
                      border: "1px solid var(--border-primary)",
                      padding: "0.65rem",
                      background: idx === active ? "color-mix(in srgb, var(--brand-primary) 20%, transparent)" : "transparent",
                      cursor: "pointer",
                      color: "var(--text-primary)",
                    }}
                  >
                    <strong>{entry.title}</strong>
                    <div style={{ fontSize: "0.86rem", color: "var(--text-secondary)" }}>{videoAssets[idx]?.duration}</div>
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
