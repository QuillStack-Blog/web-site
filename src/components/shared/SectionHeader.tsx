import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="section-header">
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <div className="section-header-row">
        <h2 className="section-title">{title}</h2>
        {action}
      </div>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}
