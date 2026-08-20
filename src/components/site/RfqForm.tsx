import { CheckCircle2, Mail, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

import { company } from "@/data/company";
import { categories } from "@/data/products";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const businessTypes = [
  { en: "Restaurant / Commercial kitchen", vi: "Nhà hàng / Bếp thương mại" },
  { en: "Supermarket / Asian grocery", vi: "Siêu thị / Cửa hàng châu Á" },
  { en: "Wholesaler / Distributor", vi: "Nhà bán sỉ / Phân phối" },
  { en: "Other food business", vi: "Doanh nghiệp thực phẩm khác" },
];

const volumes = [
  { en: "Under 10 cartons / month", vi: "Dưới 10 thùng / tháng" },
  { en: "10–50 cartons / month", vi: "10–50 thùng / tháng" },
  { en: "Pallet quantities", vi: "Theo pallet" },
  { en: "Full container loads", vi: "Nguyên container" },
];

const fieldClass =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-gold";

export function RfqForm() {
  const { t, lang } = useI18n();
  const [sent, setSent] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);

  const toggle = (id: string) =>
    setInterests((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="rfq" className="scroll-mt-32 bg-sand py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-deep">
            {t("Request a quote", "Yêu cầu báo giá")}
          </p>
          <h2 className="text-balance-tight mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {t("Get your wholesale price tier", "Nhận bảng giá sỉ của bạn")}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t(
              "Send us your details and we'll reply within one business day with pricing, MOQs and freight options for your suburb.",
              "Gửi thông tin của bạn, chúng tôi sẽ phản hồi trong vòng một ngày làm việc kèm giá, số lượng tối thiểu và phương án vận chuyển.",
            )}
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={company.phoneHref}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-sm font-semibold shadow-soft transition-colors hover:border-gold"
            >
              <Phone className="size-5 text-gold-deep" aria-hidden /> {company.phone}
            </a>
            <a
              href={company.emailHref}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-sm font-semibold shadow-soft transition-colors hover:border-gold"
            >
              <Mail className="size-5 text-gold-deep" aria-hidden />
              <span className="break-all">{company.email}</span>
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-9">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 className="size-14 text-primary" aria-hidden />
              <h3 className="mt-5 font-display text-2xl font-semibold">
                {t("Enquiry received — thank you", "Đã nhận yêu cầu — cảm ơn bạn")}
              </h3>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">
                {t(
                  "Our wholesale team will contact you within one business day. Need it sooner? Reach us directly:",
                  "Đội ngũ bán sỉ sẽ liên hệ trong vòng một ngày làm việc. Cần gấp hơn? Liên hệ trực tiếp:",
                )}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground"
                >
                  <Phone className="size-4" /> {company.phone}
                </a>
                <a
                  href={company.emailHref}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold"
                >
                  <Mail className="size-4" /> {t("Email us", "Gửi email")}
                </a>
              </div>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 text-sm font-medium text-muted-foreground underline underline-offset-4"
              >
                {t("Submit another enquiry", "Gửi yêu cầu khác")}
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="business" className="mb-2 block text-sm font-medium">
                  {t("Business name", "Tên doanh nghiệp")}
                </label>
                <input id="business" name="business" required className={fieldClass} />
              </div>
              <div>
                <label htmlFor="abn" className="mb-2 block text-sm font-medium">
                  ABN
                </label>
                <input id="abn" name="abn" inputMode="numeric" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="type" className="mb-2 block text-sm font-medium">
                  {t("Business category", "Loại hình kinh doanh")}
                </label>
                <select id="type" name="type" required className={fieldClass} defaultValue="">
                  <option value="" disabled>
                    {t("Select…", "Chọn…")}
                  </option>
                  {businessTypes.map((b) => (
                    <option key={b.en} value={b.en}>
                      {t(b.en, b.vi)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="suburb" className="mb-2 block text-sm font-medium">
                  {t("Suburb / Postcode", "Khu vực / Mã bưu điện")}
                </label>
                <input id="suburb" name="suburb" required className={fieldClass} />
              </div>
              <div>
                <label htmlFor="volume" className="mb-2 block text-sm font-medium">
                  {t("Estimated volume", "Sản lượng ước tính")}
                </label>
                <select id="volume" name="volume" required className={fieldClass} defaultValue="">
                  <option value="" disabled>
                    {t("Select…", "Chọn…")}
                  </option>
                  {volumes.map((v) => (
                    <option key={v.en} value={v.en}>
                      {t(v.en, v.vi)}
                    </option>
                  ))}
                </select>
              </div>

              <fieldset className="sm:col-span-2">
                <legend className="mb-2 text-sm font-medium">
                  {t("Product categories of interest", "Nhóm sản phẩm quan tâm")}
                </legend>
                <div className="flex flex-wrap gap-2">
                  {categories
                    .filter((c) => c.id !== "all")
                    .map((c) => {
                      const on = interests.includes(c.id);
                      return (
                        <button
                          key={c.id}
                          type="button"
                          aria-pressed={on}
                          onClick={() => toggle(c.id)}
                          className={cn(
                            "rounded-full border px-3.5 py-2 text-xs font-medium transition-colors",
                            on
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border text-muted-foreground hover:border-gold",
                          )}
                        >
                          {t(c.en, c.vi)}
                        </button>
                      );
                    })}
                </div>
              </fieldset>

              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  {t("Contact name", "Người liên hệ")}
                </label>
                <input id="name" name="name" required className={fieldClass} />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                  {t("Phone", "Điện thoại")}
                </label>
                <input id="phone" name="phone" type="tel" required className={fieldClass} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  {t("Email", "Email")}
                </label>
                <input id="email" name="email" type="email" required className={fieldClass} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="notes" className="mb-2 block text-sm font-medium">
                  {t("Notes (optional)", "Ghi chú (không bắt buộc)")}
                </label>
                <textarea id="notes" name="notes" rows={3} className={fieldClass} />
              </div>

              <button
                type="submit"
                className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5"
              >
                {t("Request Wholesale Pricing", "Nhận báo giá sỉ")}
              </button>
              <p className="sm:col-span-2 text-center text-xs text-muted-foreground">
                {lang === "vi"
                  ? "Chúng tôi chỉ dùng thông tin này để báo giá sỉ."
                  : "We only use these details to prepare your wholesale quote."}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
