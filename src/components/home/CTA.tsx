"use client";

import Link from "next/link";
import { siteLinks } from "@/config/site";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";

export function CTA() {
  const { t } = useLocale();

  return (
    <section className="section">
      <div className="container">
        <Reveal className="card" delay={0.05}>
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <p className="section-eyebrow">{t.home.cta.eyebrow}</p>
            <h2 className="section-title">{t.home.cta.title}</h2>
            <p className="section-description" style={{ marginInline: "auto" }}>
              {t.home.cta.description}
            </p>
            <div style={{ marginTop: "1.2rem", display: "flex", justifyContent: "center", gap: "0.7rem", flexWrap: "wrap" }}>
              <Link href={siteLinks.getStarted} className="pill" style={{ background: "var(--brand-gradient)", color: "#111" }}>
                {t.common.buttons.start}
              </Link>
              <Link href={siteLinks.learnMore} className="pill">
                {t.common.buttons.learnMore}
              </Link>
            </div>
            <div className="pill-list" style={{ justifyContent: "center", marginTop: "1rem" }}>
              {t.home.cta.trustItems.map((item) => (
                <span key={item} className="pill">{item}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
