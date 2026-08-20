import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Award } from "lucide-react";

import { productCount, categories } from "@/data/products";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import paddy from "@/assets/hero-paddy.jpg";
import fishsauce from "@/assets/hero-fishsauce.jpg";
import kitchen from "@/assets/hero-kitchen.jpg";
import goods from "@/assets/hero-goods.jpg";
import warehouse from "@/assets/hero-warehouse.jpg";

const slides = [
  { img: paddy, en: "ST25 rice paddies at harvest, Sóc Trăng", vi: "Cánh đồng lúa ST25 mùa gặt, Sóc Trăng" },
  { img: fishsauce, en: "Cửa Lò fishing boats and fish sauce vats", vi: "Thuyền cá và chum ủ nước mắm Cửa Lò" },
  { img: kitchen, en: "Commercial kitchen cooking with Southeast Asian spices", vi: "Bếp công nghiệp nấu cùng gia vị Đông Nam Á" },
  { img: goods, en: "Tropical beverages, dried mango and noodle packs", vi: "Nước giải khát, xoài sấy và bún mì đóng gói" },
  { img: warehouse, en: "Wingfield Adelaide warehouse pallets ready for dispatch", vi: "Pallet hàng sẵn xuất tại kho Wingfield, Adelaide" },
];

export function HeroSlideshow() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 3000);
    return () => clearInterval(id);
  }, []);

  const stats = [
    { value: `${productCount}+`, en: "Wholesale products", vi: "Sản phẩm sỉ" },
    { value: `${categories.length}`, en: "Product groups", vi: "Nhóm hàng" },
    { value: "24–48h", en: "Fast delivery (Adelaide warehouse)", vi: "Giao nhanh (Kho Adelaide)" },
  ];

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20">
        {slides.map((s, i) => (
          <img
            key={s.en}
            src={s.img}
            alt={t(s.en, s.vi)}
            width={1920}
            height={1080}
            loading={i === 0 ? "eager" : "lazy"}
            className={cn(
              "absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-in-out",
              i === active ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.5),rgba(0,0,0,0.28)_55%,rgba(0,0,0,0.18))]"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur">
            <Award className="size-3.5" aria-hidden />
            {t(
              "Direct importer of the world's best ST25 rice",
              "Nhập Khẩu Trực Tiếp Gạo ST25 Đạt Giải Ngon Nhất Thế Giới",
            )}
          </span>

          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl">
            {t(
              "Authentic Southeast Asian food & seasonings for Australian businesses",
              "Thực Phẩm & Gia Vị Đông Nam Á Chính Gốc Cho Doanh Nghiệp Úc",
            )}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            {t(
              "Hung & Vinh Asian Food imports straight from the producers — wholesale rice, fish sauce, cooking pastes, frozen lines and beverages for restaurants and grocers across Australia.",
              "Hung & Vinh Asian Food nhập khẩu trực tiếp từ nhà sản xuất — phân phối sỉ gạo, nước mắm, sốt nấu, đồ đông lạnh & giải khát cho nhà hàng, siêu thị trên toàn nước Úc.",
            )}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/lien-he"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-sm transition-all hover:shadow-md"
            >
              {t("Request wholesale pricing", "Nhận Báo Giá Sỉ")}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              to="/san-pham"
              className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t("View product catalog", "Xem Danh Mục Sản Phẩm")}
            </Link>
          </div>

          <dl className="mt-12 grid max-w-2xl gap-3 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.en}
                className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
              >
                <dt className="font-serif text-2xl font-bold tracking-tight text-gold">{s.value}</dt>
                <dd className="mt-1 text-xs font-medium text-white/80">{t(s.en, s.vi)}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex gap-2" role="tablist" aria-label={t("Slides", "Ảnh nền")}>
            {slides.map((s, i) => (
              <button
                key={s.en}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={t(s.en, s.vi)}
                onClick={() => setActive(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === active ? "w-10 bg-gold" : "w-5 bg-white/40 hover:bg-white/70",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
