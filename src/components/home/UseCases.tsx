"use client";

import Image from "next/image";
import { useCaseAssets } from "@/config/site";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function UseCases() {
  const { t } = useLocale();

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow={t.home.useCases.eyebrow}
            title={t.home.useCases.title}
            description={t.home.useCases.description}
          />
        </Reveal>
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {t.home.useCases.items.map((item, idx) => (
            <Reveal key={item.id} className="card card-hover" delay={idx * 0.04}>
              <Image
                src={useCaseAssets[idx]?.src ?? useCaseAssets[0].src}
                alt={item.title}
                width={480}
                height={300}
                style={{ width: "100%", height: "auto", borderRadius: "16px 16px 0 0" }}
              />
              <div style={{ padding: "0.9rem 1rem 1rem" }}>
                <h3 style={{ margin: 0 }}>{item.title}</h3>
                <p style={{ margin: "0.45rem 0 0", color: "var(--text-secondary)" }}>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
