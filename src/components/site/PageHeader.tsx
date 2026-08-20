import { useI18n } from "@/lib/i18n";

type Pair = [en: string, vi: string];

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: Pair;
  title: Pair;
  subtitle?: Pair;
}) {
  const { t } = useI18n();

  return (
    <section className="border-b border-border bg-sand">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-deep">
          {t(eyebrow[0], eyebrow[1])}
        </p>
        <h1 className="text-balance-tight mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          {t(title[0], title[1])}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-muted-foreground">{t(subtitle[0], subtitle[1])}</p>
        )}
      </div>
    </section>
  );
}
