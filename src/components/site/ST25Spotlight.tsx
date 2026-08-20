import { Award, Leaf, ShieldCheck, Sparkles, ThermometerSnowflake, Wheat } from "lucide-react";

import stRice from "@/assets/product-st25-rice.jpg";
import { useI18n } from "@/lib/i18n";

export function ST25Spotlight() {
  const { t } = useI18n();

  const points = [
    {
      icon: Leaf,
      en: "Natural pandan fragrance",
      vi: "Hương lá dứa tự nhiên",
      enD: "Bred in Soc Trang from the Mekong Delta's aromatic lines — no added flavouring.",
      viD: "Lai tạo tại Sóc Trăng từ dòng gạo thơm ĐBSCL — không hương liệu.",
    },
    {
      icon: ThermometerSnowflake,
      en: "Stays soft when chilled & reheated",
      vi: "Vẫn mềm khi để lạnh & hâm nóng",
      enD: "Holds texture through service, bain-marie holding and next-day reheating.",
      viD: "Giữ kết cấu khi phục vụ, giữ nóng và hâm lại ngày hôm sau.",
    },
    {
      icon: Wheat,
      en: "High-yield commercial grain",
      vi: "Hạt gạo cho năng suất cao",
      enD: "Consistent expansion per kilo — predictable plate costs for high-volume kitchens.",
      viD: "Nở đều theo mỗi kg — chi phí mỗi phần ăn ổn định cho bếp lớn.",
    },
  ];

  const badges = ["HACCP", "ISO 22000", "Global G.A.P."];

  return (
    <section className="bg-primary-deep py-20 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2">
        <div className="relative">
          <img
            src={stRice}
            alt={t("ST25 Vilaconic rice 20kg wholesale sack", "Bao gạo ST25 Vilaconic 20kg bán sỉ")}
            loading="lazy"
            width={800}
            height={800}
            className="w-full rounded-[2rem] object-cover shadow-lift"
          />
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-gold px-5 py-4 text-gold-foreground shadow-gold">
            <Award className="size-6" aria-hidden />
            <div className="text-sm leading-tight">
              <p className="font-semibold">{t("World's Best Rice", "Gạo ngon nhất thế giới")}</p>
              <p className="text-xs opacity-80">Vilaconic ST25</p>
            </div>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-xs font-semibold text-gold">
            <Sparkles className="size-3.5" aria-hidden /> {t("Flagship line", "Sản phẩm chủ lực")}
          </span>
          <h2 className="text-balance-tight mt-5 font-display text-3xl font-semibold sm:text-4xl">
            {t(
              "ST25 Vilaconic — the world champion grain, direct to your kitchen",
              "ST25 Vilaconic — hạt gạo vô địch thế giới, giao thẳng tới bếp của bạn",
            )}
          </h2>
          <p className="mt-4 text-primary-foreground/75">
            {t(
              "As an authorised Australian distributor of Vilaconic, we import ST25 by the container and hold pallet stock in Wingfield — so restaurants and grocers get championship rice without the import wait.",
              "Là nhà phân phối được uỷ quyền của Vilaconic tại Úc, chúng tôi nhập ST25 theo container và trữ hàng pallet tại Wingfield — nhà hàng và siêu thị nhận gạo vô địch mà không phải chờ nhập khẩu.",
            )}
          </p>

          <ul className="mt-8 space-y-5">
            {points.map((p) => (
              <li key={p.en} className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-foreground/10 text-gold">
                  <p.icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{t(p.en, p.vi)}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/70">{t(p.enD, p.viD)}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            {badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-xs font-semibold"
              >
                <ShieldCheck className="size-4 text-gold" aria-hidden /> {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
