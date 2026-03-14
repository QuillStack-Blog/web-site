"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Check, Languages } from "lucide-react";
import { useLocale } from "@/components/providers/LocaleProvider";
import type { Locale } from "@/config/site";

const options: Locale[] = ["zh", "en", "tw"];

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="icon-button" title={t.common.language.label} aria-label={t.common.language.label}>
          <Languages size={16} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" className="menu-content">
          {options.map((option) => (
            <DropdownMenu.Item
              key={option}
              className="menu-item"
              onSelect={() => setLocale(option)}
            >
              <span>{t.common.language.options[option]}</span>
              {locale === option ? <Check size={14} /> : null}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
