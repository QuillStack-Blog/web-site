"use client";

import { useState } from "react";
import Image from "next/image";
import { screenshotAssets } from "@/config/site";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function ScreenshotGallery() {
  const { t } = useLocale();
  const [index, setIndex] = useState(0);
  const item = t.home.screenshotGallery.items[index];
  const src = screenshotAssets[index]?.src ?? screenshotAssets[0].src;

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow={t.home.screenshotGallery.eyebrow}
            title={t.home.screenshotGallery.title}
            description={t.home.screenshotGallery.description}
          />
        </Reveal>

        <Reveal className="card" delay={0.1}>
          <div style={{ padding: "1rem" }}>
            <Image src={src} alt={item.title} width={1280} height={740} style={{ width: "100%", height: "auto", borderRadius: 14, border: "1px solid var(--border-primary)" }} />
            <div style={{ marginTop: "0.9rem" }}>
              <h3 style={{ margin: 0, fontSize: "1.1rem" }}>{item.title}</h3>
              <p style={{ margin: "0.35rem 0 0", color: "var(--text-secondary)" }}>{item.description}</p>
            </div>

            <div className="pill-list" style={{ marginTop: "0.9rem" }}>
              {t.home.screenshotGallery.items.map((s, i) => (
                <button
                  key={s.id}
                  className="pill"
                  type="button"
                  onClick={() => setIndex(i)}
                  style={{
                    cursor: "pointer",
                    background: i === index ? "color-mix(in srgb, var(--brand-primary) 28%, transparent)" : "transparent",
                  }}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
