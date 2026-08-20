import { useI18n } from "@/lib/i18n";

const steps = [
  {
    en: "Submit Wholesale RFQ",
    vi: "Gửi yêu cầu báo giá sỉ",
    enD: "Tell us your business type, categories of interest and estimated monthly volume.",
    viD: "Cho chúng tôi biết loại hình kinh doanh, nhóm hàng quan tâm và sản lượng ước tính hàng tháng.",
  },
  {
    en: "Receive Custom Price Tier & Free Samples",
    vi: "Nhận bậc giá riêng & Hàng mẫu miễn phí",
    enD: "We return a tiered wholesale price list within one business day, with samples on request.",
    viD: "Chúng tôi gửi bảng giá sỉ theo bậc trong vòng một ngày làm việc, kèm hàng mẫu nếu cần.",
  },
  {
    en: "Confirm Volume & Freight",
    vi: "Xác nhận sản lượng & Vận chuyển",
    enD: "Lock in carton, pallet or container quantities and choose your delivery schedule.",
    viD: "Chốt số lượng thùng, pallet hoặc container và chọn lịch giao hàng.",
  },
  {
    en: "Dispatch & Delivery",
    vi: "Xuất kho & Giao hàng",
    enD: "Goods leave our Wingfield SA warehouse with tracking to your door, Australia-wide.",
    viD: "Hàng rời kho Wingfield SA kèm mã theo dõi, giao tận nơi trên toàn nước Úc.",
  },
];

export function WholesaleSteps() {
  const { t } = useI18n();

  return (
    <section className="bg-sand py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-deep">
            {t("How it works", "Quy trình")}
          </p>
          <h2 className="text-balance-tight mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("Four steps from enquiry to pallet", "Bốn bước từ yêu cầu đến pallet giao hàng")}
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.en} className="relative rounded-2xl border border-border bg-card p-7 shadow-soft">
              <span className="font-display text-4xl font-semibold text-gold/60">0{i + 1}</span>
              <h3 className="mt-3 font-display text-lg font-semibold">{t(s.en, s.vi)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(s.enD, s.viD)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
