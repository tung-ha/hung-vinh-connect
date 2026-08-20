import { Check } from "lucide-react";

import { useI18n } from "@/lib/i18n";
import st25 from "@/assets/product-st25-rice.jpg";

export function ST25Spotlight() {
  const { t } = useI18n();

  const benefits = [
    ["Soft, aromatic grain that holds through service", "Hạt cơm dẻo thơm, giữ được suốt ca phục vụ"],
    ["Consistent milling for even yield per bag", "Xay xát đồng đều, định lượng ổn định mỗi bao"],
    ["18 kg, 5 kg and 2 kg formats for any kitchen", "Quy cách 18 kg, 5 kg và 2 kg cho mọi bếp"],
  ];

  return (
    <section id="st25" className="border-b border-border bg-primary py-20 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <img
            src={st25}
            alt={t("ST25 Vilaconic rice packaging", "Bao gạo ST25 Vilaconic")}
            width={1024}
            height={1024}
            loading="lazy"
            className="size-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            {t("Signature line", "Sản phẩm chủ lực")}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            {t("ST25 Vilaconic — World's Best Rice heritage", "ST25 Vilaconic — Gạo ngon nhất thế giới")}
          </h2>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            {t(
              "Grown in the Sóc Trăng delta and milled by Vilaconic, ST25 carries the fragrance and tenderness that made it a world champion. We import it directly, so your kitchen gets the same crop quality every order.",
              "Trồng tại vùng Sóc Trăng và xay xát bởi Vilaconic, gạo ST25 giữ trọn hương thơm và độ dẻo đã làm nên danh hiệu thế giới. Chúng tôi nhập trực tiếp để mỗi đơn hàng đều cùng một chất lượng.",
            )}
          </p>
          <ul className="mt-6 space-y-3">
            {benefits.map(([en, vi]) => (
              <li key={en} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                {t(en!, vi!)}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-2">
            {["HACCP", "ISO 22000", "Global G.A.P."].map((b) => (
              <span
                key={b}
                className="rounded-full border border-gold/40 px-3.5 py-1.5 text-xs font-semibold text-gold"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
