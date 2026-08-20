import { useEffect, useState } from "react";
import { ArrowRight, Award, Truck } from "lucide-react";

import { productCount, categories } from "@/data/products";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import st25 from "@/assets/product-st25-rice.jpg";
import fishSauce from "@/assets/product-fish-sauce.jpg";
import brothPaste from "@/assets/product-broth-paste.jpg";
import lychee from "@/assets/product-lychee-juice.jpg";

// First slide is ST25 rice so the showcase matches the award badge.
const slides = [
  { img: st25, en: "ST25 Vilaconic Rice", vi: "Gạo ST25 Vilaconic", meta: "18 kg · Sóc Trăng" },
  { img: fishSauce, en: "Cửa Lò 48°N Fish Sauce", vi: "Nước mắm Cửa Lò 48°N", meta: "500 ml · Nghệ An" },
  { img: brothPaste, en: "Bún Bò Huế Broth Paste", vi: "Sốt bún bò Huế", meta: "400 g · Huế" },
  { img: lychee, en: "Lychee Juice Drink", vi: "Nước vải", meta: "330 ml × 24" },
];

export function Hero() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const current = slides[active]!;

  const stats = [
    { value: `${productCount}+`, en: "Wholesale SKUs", vi: "Mã hàng sỉ" },
    { value: `${categories.length}`, en: "Categories", vi: "Nhóm hàng" },
    { value: "48h", en: "Metro freight", vi: "Giao nội thành" },
  ];

  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-background">
      <div className="pointer-events-none absolute -right-40 -top-40 size-[32rem] rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold-foreground">
              <Award className="size-3.5" aria-hidden />
              {t("Direct Importer of Award-Winning ST25 Rice", "Nhà nhập khẩu gạo ST25 đạt giải")}
            </span>

            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {t(
                "Authentic Vietnamese pantry, wholesale to Adelaide kitchens.",
                "Hương vị Việt chính gốc, cung cấp sỉ cho bếp Adelaide.",
              )}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t(
                "Hung & Vinh Asian Food imports rice, sauces, noodles and frozen lines straight from Vietnamese producers — carton pricing, reliable stock and delivery across South Australia.",
                "Hung & Vinh Asian Food nhập trực tiếp gạo, nước chấm, bún mì và hàng đông lạnh từ nhà sản xuất Việt Nam — giá theo thùng, hàng ổn định, giao khắp Nam Úc.",
              )}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#rfq"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md"
              >
                {t("Request Wholesale Pricing", "Nhận báo giá sỉ")}
                <ArrowRight className="size-4" aria-hidden />
              </a>
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                {t("Browse the catalog", "Xem danh mục")}
              </a>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.en}
                  className="rounded-xl border border-primary/10 bg-card/50 p-3 text-left"
                >
                  <dt className="font-serif text-2xl font-bold tracking-tight text-primary">
                    {s.value}
                  </dt>
                  <dd className="mt-0.5 text-xs font-medium text-muted-foreground">
                    {t(s.en, s.vi)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_24px_60px_-30px_rgb(14_58_47/0.45)]">
              <div className="relative aspect-square bg-sand">
                {slides.map((s, i) => (
                  <img
                    key={s.en}
                    src={s.img}
                    alt={t(s.en, s.vi)}
                    width={1024}
                    height={1024}
                    className={cn(
                      "absolute inset-0 size-full object-cover transition-opacity duration-700",
                      i === active ? "opacity-100" : "opacity-0",
                    )}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-border px-5 py-4">
                <div>
                  <p className="font-serif text-lg font-semibold text-foreground">
                    {t(current.en, current.vi)}
                  </p>
                  <p className="text-xs text-muted-foreground">{current.meta}</p>
                </div>
                <div className="flex gap-1.5">
                  {slides.map((s, i) => (
                    <button
                      key={s.en}
                      type="button"
                      aria-label={s.en}
                      onClick={() => setActive(i)}
                      className={cn(
                        "h-1.5 rounded-full transition-all",
                        i === active ? "w-6 bg-gold" : "w-1.5 bg-border",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-primary/10 bg-card/50 px-3 py-2 text-xs font-medium text-muted-foreground">
              <Truck className="size-4 text-gold" aria-hidden />
              {t(
                "Pallet & carton freight from our Wingfield warehouse",
                "Giao hàng thùng & pallet từ kho Wingfield",
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
