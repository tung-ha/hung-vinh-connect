import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card/70 p-0.5 text-xs font-semibold",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          "rounded-full px-3 py-1 transition-colors",
          lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        🇬🇧 EN
      </button>
      <button
        type="button"
        onClick={() => setLang("vi")}
        aria-pressed={lang === "vi"}
        className={cn(
          "rounded-full px-3 py-1 transition-colors",
          lang === "vi" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        🇻🇳 VI
      </button>
    </div>
  );
}
