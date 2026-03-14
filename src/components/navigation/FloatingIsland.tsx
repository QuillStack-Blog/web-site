"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/components/providers/LocaleProvider";

export function FloatingIsland() {
  const { t } = useLocale();
  const pathname = usePathname();

  const links = [
    { href: "/", label: t.common.navigation.home },
    { href: "/deploy", label: t.common.navigation.deploy },
    { href: "/about", label: t.common.navigation.about },
  ];

  return (
    <nav className="floating-island-wrap">
      <div className="floating-island">
        <Link href="/" className="brand-name">
          {t.common.brand}
        </Link>
        <div className="floating-links">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`floating-link${isActive ? " is-active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
