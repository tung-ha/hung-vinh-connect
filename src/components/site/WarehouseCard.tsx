import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { company } from "@/data/company";
import { useI18n } from "@/lib/i18n";

export function WarehouseCard() {
  const { t } = useI18n();

  return (
    <section className="border-b border-border bg-sand/40 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-8">
          <MapPin className="size-5 text-gold" aria-hidden />
          <h2 className="mt-4 font-serif text-2xl font-semibold">
            {t("Wingfield warehouse", "Kho hàng Wingfield")}
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
              {company.address}
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
              <a href={company.phoneHref} className="text-primary hover:underline">
                {company.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
              <a href={`mailto:${company.email}`} className="text-primary hover:underline">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
              {t("Mon – Fri, 8:30am – 5:00pm", "Thứ Hai – Thứ Sáu, 8:30 – 17:00")}
            </li>
          </ul>
          <a
            href={company.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full border border-primary/20 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5"
          >
            {t("Open in Google Maps", "Mở Google Maps")}
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border">
          <iframe
            title={t("Warehouse map", "Bản đồ kho hàng")}
            src="https://www.google.com/maps?q=29+Second+St+Wingfield+SA+5013&output=embed"
            loading="lazy"
            className="size-full min-h-[320px] w-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
