"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="section hero-fullscreen">
      <Reveal className="hero-shell hero-overlay-content" delay={0.05}>
        <div className="hero-headline">
          <p className="section-eyebrow">{t.home.hero.primaryBadge}</p>
          <h1 className="hero-title">{t.common.brand}</h1>
          <p className="hero-slogan">{t.home.hero.slogan}</p>
          <p className="hero-subtitle">{t.home.hero.subtitle}</p>
          <p className="hero-supporting">{t.home.hero.supportingText}</p>

          <div className="hero-stars">
            {t.home.hero.highlightItems.map((item, index) => (
              <span key={item} className={`hero-star hero-star-${index}`}>
                <span aria-hidden>✦</span> {item}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
