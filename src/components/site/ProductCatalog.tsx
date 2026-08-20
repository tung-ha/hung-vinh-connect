import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Package, Search } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { categories, products, type Product } from "@/data/products";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function ProductCatalog({ initialCategory }: { initialCategory?: string | undefined }) {
  const { t, locale } = useI18n();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>(initialCategory ?? "all");
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(
      (p) =>
        (cat === "all" || p.category === cat) &&
        (!q ||
          p.name.toLowerCase().includes(q) ||
          p.nameVi.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q)),
    );
  }, [query, cat]);

  return (
    <section className="border-b border-border bg-sand/40 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground">
            {t("Wholesale catalog", "Danh mục sỉ")}
          </p>
          <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            {t(
              `${products.length}+ trade lines, ready by the carton`,
              `${products.length}+ mặt hàng sỉ, sẵn giao theo thùng`,
            )}
          </h1>
          <p className="mt-3 text-muted-foreground">
            {t(
              "Search by product name or SKU code, then request pricing on the lines you need.",
              "Tìm theo tên sản phẩm hoặc mã SKU, sau đó yêu cầu báo giá cho mặt hàng bạn cần.",
            )}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <div className="relative max-w-md">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("Search product or SKU…", "Tìm sản phẩm hoặc mã SKU…")}
              aria-label={t("Search products", "Tìm sản phẩm")}
              className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-ring/40"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {[{ id: "all", en: "All", vi: "Tất Cả" }, ...categories].map((c) => {
              const count =
                c.id === "all" ? products.length : products.filter((p) => p.category === c.id).length;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCat(c.id)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                    cat === c.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:text-foreground",
                  )}
                >
                  {t(c.en, c.vi)}{" "}
                  <span className={cn(cat === c.id ? "opacity-70" : "text-muted-foreground/70")}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
            >
              <div className="overflow-hidden rounded-xl bg-white">
                <img
                  src={p.image}
                  alt={`${p.nameVi} — ${p.name}`}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="aspect-square w-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <span className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-foreground">
                {t(
                  categories.find((c) => c.id === p.category)!.en,
                  categories.find((c) => c.id === p.category)!.vi,
                )}
                {" · "}
                {p.brand}
              </span>
              <h2 className="mt-2 font-serif text-lg font-semibold leading-snug">{p.nameVi}</h2>
              <p className="text-sm text-muted-foreground">{p.name}</p>
              <p className="mt-2 text-sm font-medium">
                {p.pack} · {p.sku}
              </p>
              <p className="text-xs text-muted-foreground">{p.cartonSpec}</p>
              <p className="mt-1 text-xs text-sage">{p.origin}</p>
              <div className="mt-4 flex flex-wrap gap-2 pt-1">
                <Link
                  to="/lien-he"
                  search={{ item: `${p.nameVi} (${p.sku})` }}
                  className="rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground"
                >
                  {t("Request a quote for this item", "Yêu Cầu Báo Giá Item Này")}
                </Link>
                <button
                  type="button"
                  onClick={() => setSelected(p)}
                  className="rounded-full border border-border px-3.5 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground"
                >
                  {t("Specs", "Thông số")}
                </button>
              </div>
            </article>
          ))}
        </div>


        {filtered.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">
            {t("No products match your search.", "Không tìm thấy sản phẩm phù hợp.")}
          </p>
        )}
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent>
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-xl">
                  {locale === "vi" ? selected.nameVi : selected.name}
                </DialogTitle>
                <DialogDescription>
                  {selected.sku} · {selected.origin}
                </DialogDescription>
              </DialogHeader>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">{t("Pack format", "Quy cách")}</dt>
                  <dd className="font-medium">{selected.pack}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{t("Units / carton", "Đơn vị / thùng")}</dt>
                  <dd className="font-medium">{selected.unitsPerCarton}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">
                    {t("Carton dimensions", "Kích thước thùng")}
                  </dt>
                  <dd className="font-medium">{selected.cartonDims}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{t("Shelf life", "Hạn sử dụng")}</dt>
                  <dd className="font-medium">{selected.shelfLife}</dd>
                </div>
              </dl>
              <Link
                to="/lien-he"
                search={{ item: `${selected.nameVi} (${selected.sku})` }}
                onClick={() => setSelected(null)}
                className="mt-2 inline-flex justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground"
              >
                {t("Request pricing", "Yêu cầu báo giá")}
              </Link>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
