"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StepPanel, Stepper } from "@/components/deploy/Stepper";

export default function DeployPage() {
  const { t } = useLocale();
  const [current, setCurrent] = useState(0);
  const step = t.deploy.steps[current];

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow={t.deploy.hero.eyebrow}
            title={t.deploy.hero.title}
            description={t.deploy.hero.description}
          />
        </Reveal>

        <Reveal delay={0.05}>
          <Stepper steps={t.deploy.steps.map((s) => ({ label: s.label }))} current={current} onChange={setCurrent} />
        </Reveal>

        <div style={{ marginTop: "1rem" }}>
          <Reveal delay={0.08}>
            <StepPanel
              title={step.title}
              lead={step.lead}
              checklist={step.checklist}
              terminalLabel={step.terminalLabel}
              code={step.code}
              footer={
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
                  <button
                    type="button"
                    className="pill"
                    onClick={() => setCurrent((v) => Math.max(v - 1, 0))}
                    style={{ visibility: current === 0 ? "hidden" : "visible", cursor: "pointer" }}
                  >
                    <ArrowLeft size={14} style={{ verticalAlign: "middle" }} /> {t.common.buttons.previous}
                  </button>
                  <button
                    type="button"
                    className="pill"
                    onClick={() => setCurrent((v) => (v === t.deploy.steps.length - 1 ? 0 : v + 1))}
                    style={{ cursor: "pointer" }}
                  >
                    {current === t.deploy.steps.length - 1 ? t.common.buttons.restart : t.common.buttons.next}
                    {current !== t.deploy.steps.length - 1 ? <ArrowRight size={14} style={{ verticalAlign: "middle", marginLeft: 4 }} /> : null}
                  </button>
                </div>
              }
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
