"use client";

import { CheckCircle2, MinusCircle, XCircle } from "lucide-react";
import { comparisonMatrix, comparisonPlatforms, type ComparisonStatus } from "@/config/site";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";

function StatusCell({ status }: { status: ComparisonStatus }) {
  if (status === "support") {
    return <CheckCircle2 size={16} color="#f97316" />;
  }
  if (status === "not-supported") {
    return <XCircle size={16} color="#94a3b8" />;
  }
  return <MinusCircle size={16} color="#fbbf24" />;
}

export function Comparison() {
  const { t } = useLocale();

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow={t.home.comparison.eyebrow}
            title={t.home.comparison.title}
            description={t.home.comparison.description}
          />
        </Reveal>

        <Reveal className="card" delay={0.08}>
          <div style={{ overflowX: "auto", padding: "0.8rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "0.65rem" }}>{t.home.comparison.columns.feature}</th>
                  {comparisonPlatforms.map((platform) => (
                    <th
                      key={platform}
                      style={{
                        textAlign: "center",
                        padding: "0.65rem",
                        background: platform === "quillstack" ? "color-mix(in srgb, var(--brand-primary) 16%, transparent)" : "transparent",
                      }}
                    >
                      {t.home.comparison.columns[platform]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonMatrix.map((row) => (
                  <tr key={row.id} style={{ borderTop: "1px solid var(--border-primary)" }}>
                    <td style={{ padding: "0.65rem", color: "var(--text-secondary)" }}>{t.home.comparison.features[row.id]}</td>
                    {comparisonPlatforms.map((platform) => (
                      <td
                        key={`${row.id}-${platform}`}
                        style={{
                          textAlign: "center",
                          padding: "0.65rem",
                          background: platform === "quillstack" ? "color-mix(in srgb, var(--brand-primary) 8%, transparent)" : "transparent",
                        }}
                      >
                        <StatusCell status={row.values[platform]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
