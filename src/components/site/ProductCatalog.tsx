import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { categories, products, type CategoryId, type Product } from "@/data/products";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function ProductCatalog() {
  const { t, lang } = useI18n();
  const [active, setActive] = useState<CategoryId | "all">("all");
  const [query, setQuery] = useState("");
  const [detail, setDetail] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchCat = active === "all" || p.category === active;
      const matchQ =
        !q ||
        p.nameEn.toLowerCase().includes(q) ||
        p.nameVi.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.origin.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [active, query]);

  const name = (p: Product) => (lang === "vi" ? p.nameVi : p.nameEn);

  return (
    <section id="catalog" className="mx-auto max-w-7xl px-4 py-20">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-deep">
            {t("Live B2B Catalog", "Danh mục sỉ")}
          </p>
          <h2 className="text-balance-tight mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t(
              "Wholesale range, packed for commercial volume",
              "Danh mục sỉ, đóng gói cho khối lượng thương mại",
            )}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {t(
              "Every line ships by carton, pallet or full container from our Wingfield SA warehouse.",
              "Mọi mặt hàng đều giao theo thùng, pallet hoặc container từ kho Wingfield SA.",
            )}
          </p>
        </div>
        <label className="relative block w-full lg:w-80">
          <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <span className="sr-only">{t("Search products", "Tìm sản phẩm")}</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("Search SKU, product, origin…", "Tìm mã, sản phẩm, xuất xứ…")}
            className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-gold"
          />
        </label>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => {
          const count = c.id === "all" ? products.length : products.filter((p) => p.category === c.id).length;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === c.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-gold hover:text-foreground",
              )}
            >
              {t(c.en, c.vi)}{" "}
              <span className={cn("ml-1 text-xs", active === c.id ? "opacity-80" : "text-gold-deep")}>
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <article
            key={p.id}
            className="hover-lift flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-sand">
              {p.image ? (
                <img
                  src={p.image}
                  alt={name(p)}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="size-full object-cover"
                />
              ) : (
                <div className="grid size-full place-items-center bg-[linear-gradient(135deg,var(--sand),var(--secondary))]">
                  <span className="font-display text-3xl font-semibold text-primary/30">HV</span>
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
                  {p.origin}
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{name(p)}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.pack}</p>
              <p className="mt-1 text-xs font-medium tracking-wide text-sage">SKU {p.sku}</p>
              <div className="mt-5 flex flex-wrap gap-2 pt-1">
                <a
                  href={`#rfq`}
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5"
                >
                  {t("Inquire About This Item", "Hỏi về sản phẩm này")}
                </a>
                <button
                  type="button"
                  onClick={() => setDetail(p)}
                  className="rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                >
                  {t("Specs", "Thông số")}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">
          {t("No products match your search.", "Không tìm thấy sản phẩm phù hợp.")}
        </p>
      )}

      <Dialog open={!!detail} onOpenChange={(o) => !o && setDetail(null)}>
        <DialogContent className="sm:max-w-lg">
          {detail && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">{name(detail)}</DialogTitle>
                <DialogDescription>
                  {detail.pack} • SKU {detail.sku}
                </DialogDescription>
              </DialogHeader>
              <dl className="mt-2 divide-y divide-border text-sm">
                {[
                  [t("Origin", "Xuất xứ"), detail.origin],
                  [t("Carton dimensions", "Kích thước thùng"), detail.specs.carton],
                  [t("Units per carton", "Số lượng / thùng"), detail.specs.unitsPerCarton],
                  [t("Shelf life", "Hạn sử dụng"), detail.specs.shelfLife],
                  [t("Pallet configuration", "Cấu hình pallet"), detail.specs.palletQty],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-6 py-2.5">
                    <dt className="text-muted-foreground">{label}</dt>
                    <dd className="text-right font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
              <a
                href="#rfq"
                onClick={() => setDetail(null)}
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                {t("Add to wholesale enquiry", "Thêm vào yêu cầu báo giá")}
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
