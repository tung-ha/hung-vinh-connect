import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, Phone } from "lucide-react";

import { company } from "@/data/company";
import { categories } from "@/data/products";
import { useI18n } from "@/lib/i18n";

export function RfqForm() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);

  const toggle = (id: string) =>
    setInterests((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring/40";
  const label = "block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground";

  return (
    <section id="rfq" className="border-b border-border py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground">
            {t("Request for quote", "Yêu cầu báo giá")}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            {t("Tell us what your kitchen needs", "Cho chúng tôi biết bếp của bạn cần gì")}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t(
              "Wholesale accounts only. We reply with carton pricing and availability within one business day.",
              "Chỉ dành cho khách sỉ. Chúng tôi phản hồi giá thùng và tồn kho trong một ngày làm việc.",
            )}
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <a href={company.phoneHref} className="flex items-center gap-2 text-primary">
              <Phone className="size-4" aria-hidden /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-2 text-primary">
              <Mail className="size-4" aria-hidden /> {company.email}
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
          {sent ? (
            <div className="py-8 text-center">
              <CheckCircle2 className="mx-auto size-12 text-gold" aria-hidden />
              <h3 className="mt-4 font-serif text-2xl font-semibold">
                {t("Inquiry received", "Đã nhận yêu cầu")}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t(
                  "Thanks — our team will be in touch within one business day. Need it sooner?",
                  "Cảm ơn bạn — chúng tôi sẽ liên hệ trong một ngày làm việc. Cần gấp hơn?",
                )}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href={company.phoneHref}
                  className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  {t("Call us", "Gọi ngay")}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold"
                >
                  {t("Email us", "Gửi email")}
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
              <div>
                <label className={label} htmlFor="business">
                  {t("Business name", "Tên doanh nghiệp")}
                </label>
                <input id="business" required className={`mt-2 ${field}`} />
              </div>
              <div>
                <label className={label} htmlFor="abn">
                  ABN
                </label>
                <input id="abn" required className={`mt-2 ${field}`} />
              </div>
              <div>
                <label className={label} htmlFor="type">
                  {t("Business type", "Loại hình")}
                </label>
                <select id="type" className={`mt-2 ${field}`}>
                  <option>{t("Restaurant / café", "Nhà hàng / quán")}</option>
                  <option>{t("Grocer / retailer", "Cửa hàng / siêu thị")}</option>
                  <option>{t("Distributor / caterer", "Phân phối / bếp công nghiệp")}</option>
                </select>
              </div>
              <div>
                <label className={label} htmlFor="suburb">
                  {t("Suburb / postcode", "Khu vực / mã bưu điện")}
                </label>
                <input id="suburb" required className={`mt-2 ${field}`} />
              </div>

              <fieldset className="md:col-span-2">
                <legend className={label}>{t("Product interests", "Nhóm hàng quan tâm")}</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => toggle(c.id)}
                      aria-pressed={interests.includes(c.id)}
                      className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                        interests.includes(c.id)
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      {t(c.en, c.vi)}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div>
                <label className={label} htmlFor="volume">
                  {t("Estimated monthly volume", "Sản lượng hàng tháng dự kiến")}
                </label>
                <input
                  id="volume"
                  placeholder={t("e.g. 20 cartons", "vd: 20 thùng")}
                  className={`mt-2 ${field}`}
                />
              </div>
              <div>
                <label className={label} htmlFor="contact">
                  {t("Contact name", "Người liên hệ")}
                </label>
                <input id="contact" required className={`mt-2 ${field}`} />
              </div>
              <div>
                <label className={label} htmlFor="email">
                  {t("Email", "Email")}
                </label>
                <input id="email" type="email" required className={`mt-2 ${field}`} />
              </div>
              <div>
                <label className={label} htmlFor="phone">
                  {t("Phone", "Điện thoại")}
                </label>
                <input id="phone" required className={`mt-2 ${field}`} />
              </div>
              <div className="md:col-span-2">
                <label className={label} htmlFor="notes">
                  {t("Notes", "Ghi chú")}
                </label>
                <textarea id="notes" rows={3} className={`mt-2 ${field}`} />
              </div>

              <button
                type="submit"
                className="md:col-span-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-sm transition-shadow hover:shadow-md"
              >
                {t("Send wholesale inquiry", "Gửi yêu cầu báo giá")}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
