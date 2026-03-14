"use client";

import type { ReactNode } from "react";

export function Stepper({
  steps,
  current,
  onChange,
}: {
  steps: Array<{ label: string }>;
  current: number;
  onChange: (index: number) => void;
}) {
  return (
    <div className="card" style={{ padding: "0.75rem", display: "grid", gap: "0.5rem", gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
      {steps.map((step, index) => {
        const isActive = current === index;
        return (
          <button
            key={step.label}
            type="button"
            onClick={() => onChange(index)}
            style={{
              borderRadius: 12,
              border: "1px solid var(--border-primary)",
              background: isActive ? "color-mix(in srgb, var(--brand-primary) 24%, transparent)" : "transparent",
              color: "var(--text-primary)",
              padding: "0.5rem 0.55rem",
              cursor: "pointer",
            }}
          >
            {step.label}
          </button>
        );
      })}
    </div>
  );
}

export function StepPanel({ title, lead, checklist, terminalLabel, code, footer }: {
  title: string;
  lead: string;
  checklist: string[];
  terminalLabel: string;
  code: string;
  footer?: ReactNode;
}) {
  return (
    <div className="card" style={{ padding: "1rem" }}>
      <h2 style={{ marginTop: 0, fontFamily: "var(--font-title)", fontSize: "1.35rem" }}>{title}</h2>
      <p style={{ color: "var(--text-secondary)" }}>{lead}</p>
      <ul style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>
        {checklist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="glass" style={{ borderRadius: 12, padding: "0.75rem", marginTop: "0.8rem" }}>
        <div style={{ fontSize: "0.82rem", marginBottom: "0.35rem", color: "var(--text-tertiary)" }}>{terminalLabel}</div>
        <pre style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: "0.82rem", overflowX: "auto" }}>{code}</pre>
      </div>
      {footer}
    </div>
  );
}
