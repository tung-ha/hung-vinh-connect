import { Boxes, ChefHat, Store } from "lucide-react";

import { useI18n } from "@/lib/i18n";

const personas = [
  {
    icon: ChefHat,
    en: "Restaurants & Commercial Kitchens",
    vi: "Nhà hàng & Bếp thương mại",
    enD: "Bulk sizing, authentic regional taste profiles, and consistent kitchen cost control across every service.",
    viD: "Quy cách lớn, hương vị vùng miền chính gốc và kiểm soát chi phí bếp ổn định mỗi ca phục vụ.",
    items: ["20kg rice sacks", "5L fish sauce jerrycans", "Standing weekly orders"],
    itemsVi: ["Bao gạo 20kg", "Can nước mắm 5L", "Đơn hàng định kỳ hàng tuần"],
  },
  {
    icon: Store,
    en: "Supermarkets & Asian Groceries",
    vi: "Siêu thị & Cửa hàng châu Á",
    enD: "Fast-moving retail packaging and the high-demand Vietnamese brands your shoppers already ask for.",
    viD: "Quy cách bán lẻ xoay vòng nhanh cùng các thương hiệu Việt được khách hàng tìm mua.",
    items: ["Retail 1kg & 5kg packs", "Shelf-ready cartons", "Mixed pallet options"],
    itemsVi: ["Gói lẻ 1kg & 5kg", "Thùng lên kệ ngay", "Pallet hàng hỗn hợp"],
  },
  {
    icon: Boxes,
    en: "Regional Wholesalers & Distributors",
    vi: "Nhà bán sỉ & Phân phối khu vực",
    enD: "Container and pallet logistics dispatched directly from our Wingfield SA import hub.",
    viD: "Vận chuyển container và pallet trực tiếp từ trung tâm nhập khẩu Wingfield SA.",
    items: ["Full container loads", "Interstate freight", "Tiered volume pricing"],
    itemsVi: ["Nguyên container", "Vận chuyển liên bang", "Giá theo bậc sản lượng"],
  },
];

export function WhoWeServe() {
  const { t, lang } = useI18n();

  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-deep">
          {t("Who we serve", "Khách hàng của chúng tôi")}
        </p>
        <h2 className="text-balance-tight mt-3 font-display text-3xl font-semibold sm:text-4xl">
          {t("Built for trade buyers, not retail baskets", "Dành cho khách sỉ, không phải mua lẻ")}
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {personas.map((p) => (
          <article
            key={p.en}
            className="hover-lift group rounded-2xl border border-border bg-card p-7 shadow-soft"
          >
            <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
              <p.icon className="size-6" aria-hidden />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold">{t(p.en, p.vi)}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(p.enD, p.viD)}</p>
            <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm text-sage">
              {(lang === "vi" ? p.itemsVi : p.items).map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-gold" /> {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
