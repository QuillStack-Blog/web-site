"use client";

import { siteLinks } from "@/config/site";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Community() {
  const { t } = useLocale();
  const hrefMap = {
    github: siteLinks.communityGithub,
    issues: siteLinks.communityIssues,
    discussions: siteLinks.communityDiscussions,
  } as const;

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow={t.about.community.eyebrow}
            title={t.about.community.title}
            description={t.about.community.description}
          />
        </Reveal>

        <div style={{ display: "grid", gap: "0.9rem", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))" }}>
          {t.about.community.items.map((item, idx) => (
            <Reveal key={item.id} className="card card-hover" delay={idx * 0.05}>
              <a href={hrefMap[item.id as keyof typeof hrefMap]} style={{ display: "block", padding: "1rem" }}>
                <h3 style={{ margin: 0 }}>{item.title}</h3>
                <p style={{ margin: "0.35rem 0 0", color: "var(--text-secondary)" }}>{item.action}</p>
              </a>
            </Reveal>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: "1rem", color: "var(--text-tertiary)" }}>{t.about.community.footerText}</p>
      </div>
    </section>
  );
}

