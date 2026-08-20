import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import { company } from "@/data/company";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

const navLinks = [
  { href: "#catalog", en: "Catalog", vi: "Danh mục" },
  { href: "#st25", en: "ST25 Rice", vi: "Gạo ST25" },
  { href: "#who", en: "Who We Serve", vi: "Khách hàng" },
  { href: "#process", en: "How It Works", vi: "Quy trình" },
  { href: "#faq", en: "FAQ", vi: "Hỏi đáp" },
];

export function SiteHeader() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary py-2 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-6 text-[13px] leading-relaxed">
          <span className="font-medium">
            {t(
              "Direct importer · Wholesale only · Adelaide metro delivery",
              "Nhập khẩu trực tiếp · Chỉ bán sỉ · Giao hàng nội thành Adelaide",
            )}
          </span>
          <a
            href={company.phoneHref}
            className="inline-flex items-center gap-1.5 text-gold transition-opacity hover:opacity-80"
          >
            <Phone className="size-3.5" aria-hidden />
            {company.phone}
          </a>
        </div>
      </div>

      <div className="glass-header border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3.5">
          <a href="#top" className="flex items-center gap-3 py-0.5 pr-2">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary font-serif text-lg font-bold text-primary-foreground">
              HV
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-base font-semibold tracking-tight text-foreground">
                Hung Vinh
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Asian Food
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {t(l.en, l.vi)}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <a
              href="#rfq"
              className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-sm ring-1 ring-gold/30 transition-all hover:shadow-md"
            >
              {t("Request Wholesale Pricing", "Nhận báo giá sỉ")}
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-card px-6 py-4 lg:hidden">
            <nav className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-foreground"
                >
                  {t(l.en, l.vi)}
                </a>
              ))}
            </nav>
            <div className="mt-4 flex items-center justify-between gap-3">
              <LanguageSwitcher />
              <a
                href="#rfq"
                onClick={() => setOpen(false)}
                className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground shadow-sm"
              >
                {t("Request Pricing", "Nhận báo giá")}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
