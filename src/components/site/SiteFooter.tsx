import { Link } from "@tanstack/react-router";

import { company } from "@/data/company";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { navLinks } from "./SiteHeader";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="bg-primary py-14 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        <div>
          <p className="font-serif text-xl font-semibold">{company.shortName}</p>
          <p className="mt-2 text-sm text-primary-foreground/70">{company.name}</p>
          <p className="mt-1 text-sm text-primary-foreground/70">ABN {company.abn}</p>
        </div>
        <div className="text-sm text-primary-foreground/80">
          <p className="font-semibold text-gold">{t("Warehouse", "Kho hàng")}</p>
          <p className="mt-2">{company.address}</p>
          <a href={company.phoneHref} className="mt-2 block hover:text-gold">
            {company.phone}
          </a>
          <a href={`mailto:${company.email}`} className="block hover:text-gold">
            {company.email}
          </a>
          <p className="mt-2">{t("Mon–Fri 8:30am – 5:00pm", "Thứ Hai – Thứ Sáu, 8:30 – 17:00")}</p>
        </div>
        <nav className="text-sm">
          <p className="font-semibold text-gold">{t("Pages", "Trang")}</p>
          <ul className="mt-2 space-y-1.5 text-primary-foreground/80">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold">
                  {t(l.en, l.vi)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold text-gold">{t("Language", "Ngôn ngữ")}</p>
          <LanguageSwitcher className="mt-3 border-white/20 bg-white/10" />
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-6 pt-6 text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} {company.name}.{" "}
        {t("Wholesale enquiries only.", "Chỉ nhận yêu cầu bán sỉ.")}
      </div>
    </footer>
  );
}
