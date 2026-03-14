"use client";

import Image from "next/image";
import { testimonialAvatars, siteLinks } from "@/config/site";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Testimonials() {
  const { t } = useLocale();

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow={t.home.testimonials.eyebrow}
            title={t.home.testimonials.title}
            description={t.home.testimonials.description}
          />
        </Reveal>

        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
          {t.home.testimonials.items.map((item, idx) => (
            <Reveal key={item.id} className="card" delay={idx * 0.04}>
              <div style={{ padding: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                  <div style={{ borderRadius: "50%", padding: 2, background: "linear-gradient(45deg, #f97316, #fbbf24, #22c55e, #3b82f6)" }}>
                    <Image src={testimonialAvatars[idx]?.src ?? testimonialAvatars[0].src} alt={item.name} width={42} height={42} style={{ borderRadius: "50%" }} />
                  </div>
                  <div>
                    <strong>{item.name}</strong>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-tertiary)" }}>{item.role}</div>
                  </div>
                </div>
                <blockquote style={{ margin: "0.9rem 0 0", paddingLeft: "0.7rem", borderLeft: "3px solid var(--brand-primary)", color: "var(--text-secondary)" }}>
                  {item.quote}
                </blockquote>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="card" delay={0.2}>
          <div style={{ padding: "1.1rem", marginTop: "1rem", textAlign: "center" }}>
            <p style={{ marginTop: 0 }}>{t.home.testimonials.footerText}</p>
            <a href={siteLinks.getStarted} className="pill" style={{ color: "var(--text-primary)" }}>
              {t.common.buttons.start}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
