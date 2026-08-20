import { Store, UtensilsCrossed, Warehouse } from "lucide-react";

import { useI18n } from "@/lib/i18n";

const personas = [
  {
    Icon: UtensilsCrossed,
    en: "Restaurants & cafés",
    vi: "Nhà hàng & quán cà phê",
    enBody: "Consistent rice, sauces and broth bases sized for daily service volumes.",
    viBody: "Gạo, nước chấm và sốt nền ổn định, đúng khối lượng phục vụ hằng ngày.",
  },
  {
    Icon: Store,
    en: "Grocers & retailers",
    vi: "Cửa hàng & siêu thị",
    enBody: "Shelf-ready pack sizes with strong margins and reliable restocking.",
    viBody: "Quy cách bán lẻ, biên lợi nhuận tốt và nguồn hàng bổ sung ổn định.",
  },
  {
    Icon: Warehouse,
    en: "Distributors & caterers",
    vi: "Nhà phân phối & bếp công nghiệp",
    enBody: "Pallet quantities and catering formats direct from our Wingfield warehouse.",
    viBody: "Số lượng pallet và quy cách công nghiệp, giao trực tiếp từ kho Wingfield.",
  },
];

export function WhoWeServe() {
  const { t } = useI18n();

  return (
    <section id="who" className="border-b border-border py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          {t("Who we serve", "Khách hàng của chúng tôi")}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {personas.map(({ Icon, en, vi, enBody, viBody }) => (
            <article
              key={en}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-primary/8 text-primary transition-colors group-hover:bg-gold/15">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold">{t(en, vi)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(enBody, viBody)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
