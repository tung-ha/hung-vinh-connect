import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const options = [
  { id: "vi", label: "🇻🇳 Tiếng Việt", short: "🇻🇳 VI" },
  { id: "en", label: "🇬🇧 English", short: "🇬🇧 EN" },
] as const;

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useI18n();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-primary/15 bg-card/70 p-0.5 text-xs font-semibold",
        className,
      )}
      role="group"
      aria-label="Language / Ngôn ngữ"
    >
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => setLocale(o.id)}
          aria-pressed={locale === o.id}
          title={o.label}
          className={cn(
            "rounded-full px-3 py-1 transition-colors",
            locale === o.id
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {o.short}
        </button>
      ))}
    </div>
  );
}
