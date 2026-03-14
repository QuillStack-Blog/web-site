"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Check, Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useLocale } from "@/components/providers/LocaleProvider";
import type { ThemePreference } from "@/config/site";

const icons = {
  light: Sun,
  dark: Moon,
  system: Monitor,
} as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useLocale();

  const options: ThemePreference[] = ["light", "dark", "system"];
  const Icon = icons[theme];

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="icon-button"
          title={`${t.common.theme.titlePrefix}: ${t.common.theme[theme]}`}
          aria-label={`${t.common.theme.titlePrefix}: ${t.common.theme[theme]}`}
        >
          <Icon size={16} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" className="menu-content">
          {options.map((option) => (
            <DropdownMenu.Item
              key={option}
              className="menu-item"
              onSelect={() => setTheme(option)}
            >
              <span>{t.common.theme[option]}</span>
              {theme === option ? <Check size={14} /> : null}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
