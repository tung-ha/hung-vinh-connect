import { useI18n } from "@/lib/i18n";

const steps = [
  ["Send your list", "Gửi danh sách hàng", "Share the products and volumes you need through the form or by phone.", "Gửi mặt hàng và số lượng qua biểu mẫu hoặc gọi điện."],
  ["Get a trade quote", "Nhận báo giá sỉ", "We confirm carton pricing, stock and lead time within one business day.", "Chúng tôi xác nhận giá thùng, tồn kho và thời gian giao trong một ngày làm việc."],
  ["Confirm the order", "Xác nhận đơn hàng", "Approve the quote and choose delivery or warehouse pickup at Wingfield.", "Duyệt báo giá và chọn giao hàng hoặc nhận tại kho Wingfield."],
  ["Delivered & restocked", "Giao hàng & bổ sung", "Adelaide metro freight, then a standing schedule so you never run out.", "Giao nội thành Adelaide, sau đó lịch giao định kỳ để không thiếu hàng."],
];

export function WholesaleSteps() {
  const { t } = useI18n();

  return (
    <section id="process" className="border-b border-border bg-sand/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          {t("How wholesale works", "Quy trình mua sỉ")}
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([en, vi, enBody, viBody], i) => (
            <li key={en} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-serif text-3xl font-bold text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-serif text-lg font-semibold">{t(en!, vi!)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(enBody!, viBody!)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
