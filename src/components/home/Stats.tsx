"use client";

import { useEffect, useState } from "react";
import { siteLinks, statItems } from "@/config/site";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Stats() {
  const { t } = useLocale();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setTick((v) => (v < 20 ? v + 1 : v)), 40);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow={t.home.stats.eyebrow}
            title={t.home.stats.title}
            description={t.home.stats.description}
            action={
              <a href={siteLinks.github} className="pill" style={{ color: "var(--text-primary)" }}>
                {t.common.buttons.viewGithub}
              </a>
            }
          />
        </Reveal>

        <div style={{ display: "grid", gap: "0.8rem", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
          {statItems.map((item, idx) => {
            const labels = t.home.stats.items;
            const label = labels[item.id as keyof typeof labels];
            const animated = Math.round((item.value * tick) / 20);
            return (
              <Reveal key={item.id} className="card" delay={idx * 0.04}>
                <div style={{ padding: "1rem" }}>
                  <div className="gradient-text" style={{ fontSize: "1.6rem", fontWeight: 700 }}>
                    {tick < 20 ? animated.toLocaleString() : item.display}
                  </div>
                  <div style={{ color: "var(--text-secondary)", marginTop: "0.2rem" }}>{label}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
