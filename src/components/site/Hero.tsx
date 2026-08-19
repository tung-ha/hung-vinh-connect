import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { company } from "@/data/company";
import { products } from "@/data/products";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const featured = products.filter((p) => p.featured);

export function Hero() {
  const { t, lang } = useI18n();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % featured.length), 5000);
    return () => window.clearInterval(id);
  }, []);

  const active = featured[index];
  if (!active) return null;

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 size-[26rem] rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold-foreground">
            🏆{" "}
            {t(
              "Direct Importer of Award-Winning ST25 Rice",
              "Nhà nhập khẩu trực tiếp gạo ST25 đạt giải thưởng",
            )}
          </span>
          <h1 className="text-balance-tight mt-6 font-display text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            {t(
              "Authentic Southeast Asian Food Products for Australian Businesses",
              "Thực phẩm Đông Nam Á chính gốc cho doanh nghiệp Úc",
            )}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t(
              "Supplying restaurants, Asian grocers, and commercial distributors nationwide from our Adelaide warehouse.",
              "Cung cấp cho nhà hàng, siêu thị châu Á và nhà phân phối thương mại toàn quốc từ kho Adelaide của chúng tôi.",
            )}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              {t("Browse B2B Catalog", "Xem danh mục sỉ")}
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-gold bg-gold/10 px-6 py-3 text-sm font-semibold text-gold-foreground transition-colors hover:bg-gold/20"
            >
              <Phone className="size-4" /> {t("Call", "Gọi")} {company.phone}
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { v: "42+", en: "Wholesale SKUs", vi: "Mã hàng sỉ" },
              { v: "8", en: "Product categories", vi: "Nhóm sản phẩm" },
              { v: "AU", en: "Nationwide freight", vi: "Giao hàng toàn quốc" },
            ].map((stat) => (
              <div key={stat.en}>
                <dt className="font-display text-2xl font-semibold text-primary">{stat.v}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{t(stat.en, stat.vi)}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-border bg-card p-4 shadow-lift sm:p-6">
            <div className="overflow-hidden rounded-3xl bg-sand">
              <img
                src={active.image}
                alt={lang === "vi" ? active.nameVi : active.nameEn}
                width={800}
                height={800}
                className="aspect-square w-full object-cover transition-opacity duration-500"
              />
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-gold-deep">
                  {active.origin}
                </p>
                <h2 className="mt-1 font-display text-xl font-semibold text-foreground">
                  {lang === "vi" ? active.nameVi : active.nameEn}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{active.pack}</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label={t("Previous product", "Sản phẩm trước")}
                  onClick={() => setIndex((i) => (i - 1 + featured.length) % featured.length)}
                  className="grid size-9 place-items-center rounded-full border border-border transition-colors hover:bg-accent"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label={t("Next product", "Sản phẩm kế")}
                  onClick={() => setIndex((i) => (i + 1) % featured.length)}
                  className="grid size-9 place-items-center rounded-full border border-border transition-colors hover:bg-accent"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
            <div className="mt-5 flex gap-2">
              {featured.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  aria-label={p.nameEn}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-1.5 flex-1 rounded-full transition-colors",
                    i === index ? "bg-gold" : "bg-border",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
