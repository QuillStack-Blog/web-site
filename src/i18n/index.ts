import { localeToHtmlLang, type Locale } from "@/config/site";
import { enMessages } from "./messages/en";
import { twMessages } from "./messages/tw";
import { zhMessages, type SiteMessages } from "./messages/zh";

export { type Locale, localeToHtmlLang, type SiteMessages };

export const messages: Record<Locale, SiteMessages> = {
  zh: zhMessages,
  en: enMessages,
  tw: twMessages,
};

export function normalizeLocale(value?: string | null): Locale {
  if (!value) {
    return "zh";
  }

  const lowered = value.toLowerCase();

  if (lowered === "zh" || lowered.startsWith("zh-cn") || lowered.startsWith("zh-sg")) {
    return "zh";
  }

  if (lowered === "tw" || lowered.startsWith("zh-tw") || lowered.startsWith("zh-hk")) {
    return "tw";
  }

  if (lowered === "en" || lowered.startsWith("en")) {
    return "en";
  }

  return "zh";
}
