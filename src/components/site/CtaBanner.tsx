import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

import { company } from "@/data/company";
import { useI18n } from "@/lib/i18n";

export function CtaBanner() {
  const { t } = useI18n();

  return (
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            {t("Ready for a wholesale quote?", "Sẵn sàng nhận báo giá sỉ?")}
          </h2>
          <p className="mt-3 max-w-xl text-primary-foreground/80">
            {t(
              "Send us your product list and we reply with carton pricing, stock and lead time within one business day.",
              "Gửi danh sách hàng cần mua, chúng tôi phản hồi giá thùng, tồn kho và thời gian giao trong một ngày làm việc.",
            )}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/lien-he"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground"
          >
            {t("Request a quote", "Gửi Yêu Cầu Báo Giá")}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <a
            href={company.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-white/10"
          >
            <Phone className="size-4" aria-hidden />
            {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
