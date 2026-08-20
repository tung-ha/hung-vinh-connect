import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { categories, products } from "@/data/products";
import { useI18n } from "@/lib/i18n";

const featured = ["rice", "sauces", "pastes", "drinks", "frozen"] as const;

export function CategoryHighlights() {
  const { t } = useI18n();

  return (
    <section className="border-b border-border bg-sand/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground">
              {t("Product groups", "Nhóm hàng")}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
              {t("Wholesale ranges we carry", "Các nhóm hàng sỉ chủ lực")}
            </h2>
          </div>
          <Link
            to="/san-pham"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            {t("View full catalog", "Xem toàn bộ danh mục")}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {featured.map((id) => {
            const c = categories.find((x) => x.id === id)!;
            const count = products.filter((p) => p.category === id).length;
            return (
              <Link
                key={id}
                to="/san-pham"
                search={{ cat: id }}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="font-serif text-3xl font-bold text-gold">{count}</span>
                <h3 className="mt-3 font-serif text-lg font-semibold leading-snug">
                  {t(c.en, c.vi)}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                  {t("Browse", "Xem hàng")}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
