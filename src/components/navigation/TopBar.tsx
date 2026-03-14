"use client";

import Link from "next/link";
import { Github, Rss } from "lucide-react";
import { siteLinks } from "@/config/site";
import { useLocale } from "@/components/providers/LocaleProvider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

export function TopBar() {
  const { t } = useLocale();

  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-group">
          <ThemeToggle />
          <a className="icon-button" href={siteLinks.github} title={t.common.navigation.github}>
            <Github size={16} />
          </a>
          <a className="icon-button" href={siteLinks.rss} title={t.common.navigation.rss}>
            <Rss size={16} />
          </a>
        </div>

        <div className="topbar-group">
          <span className="version-pill">{t.common.version}</span>
          <LanguageToggle />
          <Link href={siteLinks.github} className="topbar-link">
            {t.common.navigation.github}
          </Link>
        </div>
      </div>
    </header>
  );
}
