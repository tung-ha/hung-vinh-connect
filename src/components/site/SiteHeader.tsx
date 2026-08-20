import { Link } from "@tanstack/react-router";
import { Menu, Phone, Truck, X } from "lucide-react";
import { useState } from "react";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { company } from "@/data/company";
import { useI18n } from "@/lib/i18n";

const navItems = [
  { to: "/products", en: "Products", vi: "Sản phẩm" },
  { to: "/st25", en: "ST25 Feature", vi: "Gạo ST25" },
  { to: "/wholesale", en: "Wholesale Tiers", vi: "Bảng sỉ" },
  { to: "/about", en: "About Us", vi: "Về chúng tôi" },
  { to: "/certificates", en: "Certificates", vi: "Chứng nhận" },
  { to: "/faq", en: "FAQ", vi: "Hỏi đáp" },
] as const;

export function SiteHeader() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary-deep text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-[11px] font-medium tracking-wide sm:text-xs">
          <Truck className="hidden size-3.5 shrink-0 text-gold sm:block" aria-hidden />
          <span>
            {t(
              "Direct Importer & Wholesaler • Adelaide Hub (Wingfield SA) • Pallet & Container Freight Shipping Australia-Wide",
              "Nhà nhập khẩu & phân phối sỉ trực tiếp • Kho Adelaide (Wingfield SA) • Giao hàng pallet & container toàn nước Úc",
            )}
          </span>
        </div>
      </div>

      <div className="glass-header border-b border-border/70">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid size-10 place-items-center rounded-xl bg-primary font-display text-lg font-bold text-primary-foreground shadow-soft">
              HV
            </span>
            <span className="leading-tight">
              <span className="block font-display text-base font-semibold text-foreground">
                Hung Vinh Asian Food
              </span>
              <span className="block text-[11px] font-medium tracking-wide text-muted-foreground">
                {t("Adelaide • Direct Importer", "Adelaide • Nhập khẩu trực tiếp")}
              </span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                activeProps={{ className: "text-foreground bg-accent" }}
              >
                {t(item.en, item.vi)}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <LanguageSwitcher className="hidden sm:inline-flex" />
            <Link
              to="/wholesale"
              hash="rfq"
              className="hidden items-center rounded-full bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5 md:inline-flex"
            >
              {t("Request Wholesale Pricing", "Nhận báo giá sỉ")}
            </Link>
            <button
              type="button"
              className="rounded-full border border-border p-2 lg:hidden"
              aria-label={t("Toggle menu", "Mở menu")}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
                >
                  {t(item.en, item.vi)}
                </Link>
              ))}
              <div className="mt-3 flex items-center justify-between gap-3">
                <LanguageSwitcher />
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground"
                >
                  <Phone className="size-4" /> {company.phone}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
