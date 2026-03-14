"use client";

import { techStackItems } from "@/config/site";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function TechStack() {
  const { t } = useLocale();

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow={t.home.techStack.eyebrow}
            title={t.home.techStack.title}
            description={t.home.techStack.description}
          />
        </Reveal>

        <div className="pill-list" style={{ gap: "0.7rem" }}>
          {techStackItems.map((item, idx) => (
            <Reveal key={item} delay={idx * 0.03}>
              <span className="pill" style={{ fontSize: "0.9rem", padding: "0.35rem 0.85rem" }}>
                {item}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
