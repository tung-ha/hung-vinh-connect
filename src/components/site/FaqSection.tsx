import { MapPin, Navigation } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { company } from "@/data/company";
import { useI18n } from "@/lib/i18n";

const faqs = [
  {
    en: "What are your minimum order quantities (MOQs)?",
    vi: "Số lượng đặt hàng tối thiểu (MOQ) là bao nhiêu?",
    enA: "Most dry goods start at one full carton per line, with a $500 minimum order for metro Adelaide delivery. Pallet and container pricing unlocks deeper tiers.",
    viA: "Phần lớn hàng khô bắt đầu từ một thùng nguyên cho mỗi mặt hàng, đơn tối thiểu $500 cho giao hàng nội thành Adelaide. Giá tốt hơn khi mua theo pallet hoặc container.",
  },
  {
    en: "Do you deliver interstate to Melbourne, Sydney, Brisbane and Perth?",
    vi: "Có giao liên bang đến Melbourne, Sydney, Brisbane và Perth không?",
    enA: "Yes. Weekly consolidated runs to Melbourne and Sydney, fortnightly to Brisbane and Perth, plus direct pallet and container freight on request.",
    viA: "Có. Chuyến gom hàng hàng tuần đi Melbourne và Sydney, hai tuần một lần đi Brisbane và Perth, cùng vận chuyển pallet/container trực tiếp theo yêu cầu.",
  },
  {
    en: "Can I request free samples before ordering?",
    vi: "Tôi có thể xin hàng mẫu trước khi đặt không?",
    enA: "Registered businesses can request samples of ST25 rice, fish sauce and cooking pastes with their first RFQ. Samples ship with your quote pack.",
    viA: "Doanh nghiệp đã đăng ký có thể xin mẫu gạo ST25, nước mắm và gia vị nấu ngay trong lần yêu cầu báo giá đầu tiên.",
  },
  {
    en: "What are your wholesale account terms?",
    vi: "Điều khoản tài khoản sỉ như thế nào?",
    enA: "First orders are prepaid. After three settled invoices, approved ABN holders can apply for 14-day trading terms.",
    viA: "Đơn đầu tiên thanh toán trước. Sau ba hoá đơn đã thanh toán, doanh nghiệp có ABN được duyệt có thể đăng ký công nợ 14 ngày.",
  },
  {
    en: "Can I pick up from the Wingfield warehouse?",
    vi: "Tôi có thể tự đến lấy hàng tại kho Wingfield không?",
    enA: "Yes — trade pickup is available weekdays by appointment at 29 Second St, Wingfield SA 5013. Forklift loading available for pallet orders.",
    viA: "Có — nhận hàng tại kho các ngày trong tuần theo lịch hẹn tại 29 Second St, Wingfield SA 5013. Hỗ trợ xe nâng cho đơn pallet.",
  },
  {
    en: "Are your products certified for Australian food service?",
    vi: "Sản phẩm có chứng nhận cho ngành thực phẩm Úc không?",
    enA: "All imported lines meet Australian labelling and biosecurity requirements, and our key suppliers hold HACCP, ISO 22000 and Global G.A.P. certification.",
    viA: "Tất cả hàng nhập khẩu đáp ứng quy định nhãn mác và an toàn sinh học của Úc; các nhà cung cấp chính đạt HACCP, ISO 22000 và Global G.A.P.",
  },
];

export function FaqSection() {
  const { t } = useI18n();

  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-deep">
          {t("FAQ", "Hỏi đáp")}
        </p>
        <h2 className="text-balance-tight mt-3 font-display text-3xl font-semibold sm:text-4xl">
          {t("Trade questions, answered", "Giải đáp cho khách hàng sỉ")}
        </h2>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((f) => (
            <AccordionItem key={f.en} value={f.en}>
              <AccordionTrigger className="text-left font-display text-base font-semibold">
                {t(f.en, f.vi)}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {t(f.enA, f.viA)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <aside className="h-fit rounded-3xl border border-border bg-primary-deep p-8 text-primary-foreground shadow-lift">
        <span className="inline-flex items-center gap-2 rounded-full bg-gold px-3.5 py-1.5 text-xs font-semibold text-gold-foreground">
          <MapPin className="size-3.5" aria-hidden /> {t("Distribution hub", "Trung tâm phân phối")}
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold">Wingfield, South Australia</h3>
        <p className="mt-3 text-sm text-primary-foreground/75">{company.address}</p>
        <dl className="mt-6 space-y-3 border-t border-primary-foreground/15 pt-6 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-primary-foreground/60">{t("Trade pickup", "Nhận hàng tại kho")}</dt>
            <dd className="font-medium">{t("Mon–Fri, by appointment", "T2–T6, theo hẹn")}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-primary-foreground/60">{t("Phone", "Điện thoại")}</dt>
            <dd className="font-medium">{company.phone}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-primary-foreground/60">ABN</dt>
            <dd className="font-medium">{company.abn}</dd>
          </div>
        </dl>
        <a
          href={company.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground"
        >
          <Navigation className="size-4" aria-hidden /> {t("Open in Google Maps", "Mở Google Maps")}
        </a>
      </aside>
    </section>
  );
}
