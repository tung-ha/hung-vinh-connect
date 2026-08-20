import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/PageHeader";
import { RfqForm } from "@/components/site/RfqForm";
import { WhoWeServe } from "@/components/site/WhoWeServe";
import { WholesaleSteps } from "@/components/site/WholesaleSteps";
import { useI18n } from "@/lib/i18n";

const title = "Wholesale Tiers & RFQ — Hung Vinh Asian Food";
const description =
  "Tiered wholesale pricing for restaurants, Asian grocers and distributors. Request a quote for carton, pallet or full container volumes.";

export const Route = createFileRoute("/wholesale")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: WholesalePage,
});

const tiers = [
  {
    en: "Starter Trade",
    vi: "Bậc khởi đầu",
    enV: "1–9 cartons per line",
    viV: "1–9 thùng mỗi mặt hàng",
    points: [
      ["Standard wholesale list price", "Giá sỉ tiêu chuẩn"],
      ["Metro Adelaide delivery or pickup", "Giao nội thành Adelaide hoặc tự lấy"],
      ["Prepaid orders", "Thanh toán trước"],
    ],
  },
  {
    en: "Volume Trade",
    vi: "Bậc sản lượng",
    enV: "10+ cartons or mixed pallets",
    viV: "Từ 10 thùng hoặc pallet hỗn hợp",
    points: [
      ["Tiered discount pricing", "Giá chiết khấu theo bậc"],
      ["Interstate consolidated freight", "Vận chuyển gom hàng liên bang"],
      ["14-day terms after 3 invoices", "Công nợ 14 ngày sau 3 hoá đơn"],
    ],
    featured: true,
  },
  {
    en: "Container Program",
    vi: "Chương trình container",
    enV: "Full pallet & FCL supply",
    viV: "Nguyên pallet & nguyên container",
    points: [
      ["Direct import pricing", "Giá nhập khẩu trực tiếp"],
      ["Scheduled shipment planning", "Kế hoạch lô hàng định kỳ"],
      ["Dedicated account manager", "Quản lý tài khoản riêng"],
    ],
  },
];

function WholesalePage() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader
        eyebrow={["Wholesale", "Bán sỉ"]}
        title={["Wholesale tiers built around your volume", "Bậc giá sỉ theo sản lượng của bạn"]}
        subtitle={[
          "From a first trial carton to scheduled container programs — pricing scales as you grow.",
          "Từ thùng hàng dùng thử đầu tiên đến chương trình container định kỳ — giá tốt dần theo quy mô.",
        ]}
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-20 md:grid-cols-3">
        {tiers.map((tier) => (
          <article
            key={tier.en}
            className={`hover-lift rounded-2xl border p-8 shadow-soft ${
              tier.featured
                ? "border-gold bg-primary-deep text-primary-foreground"
                : "border-border bg-card"
            }`}
          >
            <h2 className="font-display text-2xl font-semibold">{t(tier.en, tier.vi)}</h2>
            <p className={`mt-2 text-sm ${tier.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
              {t(tier.enV, tier.viV)}
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {tier.points.map(([en, vi]) => (
                <li key={en} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {t(en ?? "", vi ?? "")}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <WholesaleSteps />
      <WhoWeServe />
      <RfqForm />
    </>
  );
}
