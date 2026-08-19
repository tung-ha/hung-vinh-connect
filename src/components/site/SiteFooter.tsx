import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { company } from "@/data/company";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-primary-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-gold font-display text-lg font-bold text-gold-foreground">
              HV
            </span>
            <span className="font-display text-xl font-semibold">Hung Vinh Asian Food</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/75">
            {t(
              "Hung & Vinh Asian Food Pty Ltd — direct importer and wholesale distributor of authentic Vietnamese and Southeast Asian food products, supplying businesses Australia-wide from Wingfield, South Australia.",
              "Hung & Vinh Asian Food Pty Ltd — nhà nhập khẩu trực tiếp và phân phối sỉ thực phẩm Việt Nam & Đông Nam Á chính gốc, cung cấp cho doanh nghiệp toàn nước Úc từ Wingfield, Nam Úc.",
            )}
          </p>
          <p className="mt-4 text-sm text-primary-foreground/60">ABN: {company.abn}</p>
          <LanguageSwitcher className="mt-5 border-primary-foreground/20 bg-primary-foreground/10" />
        </div>

        <div>
          <h2 className="font-display text-base font-semibold">{t("Explore", "Khám phá")}</h2>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li>
              <Link to="/products" className="hover:text-gold">
                {t("B2B Catalog", "Danh mục sỉ")}
              </Link>
            </li>
            <li>
              <Link to="/st25" className="hover:text-gold">
                {t("ST25 Vilaconic Rice", "Gạo ST25 Vilaconic")}
              </Link>
            </li>
            <li>
              <Link to="/wholesale" className="hover:text-gold">
                {t("Wholesale Tiers & RFQ", "Bảng sỉ & Yêu cầu báo giá")}
              </Link>
            </li>
            <li>
              <Link to="/certificates" className="hover:text-gold">
                {t("Certificates", "Chứng nhận")}
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-gold">
                {t("FAQ & Freight", "Hỏi đáp & Vận chuyển")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold">{t("Contact", "Liên hệ")}</h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <a href={company.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-gold">
                {company.address}
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <a href={company.phoneHref} className="hover:text-gold">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <a href={company.emailHref} className="break-all hover:text-gold">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Hung & Vinh Asian Food Pty Ltd. {t("All rights reserved.", "Bảo lưu mọi quyền.")}
          </p>
          <p>{company.domain}</p>
        </div>
      </div>
    </footer>
  );
}
