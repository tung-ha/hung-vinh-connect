import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/lib/i18n";

const faqs = [
  [
    "What is the minimum order quantity (MOQ)?",
    "Số lượng đặt hàng tối thiểu (MOQ) là bao nhiêu?",
    "Wholesale orders start from 10 cartons, or one mixed pallet for metro delivery. Rice can be ordered from 10 bags.",
    "Đơn sỉ bắt đầu từ 10 thùng, hoặc một pallet hàng hỗn hợp cho giao nội thành. Gạo có thể đặt từ 10 bao.",
  ],
  [
    "Do you ship interstate (Melbourne, Sydney, Brisbane...)?",
    "Kho hàng có giao đi các bang khác (Melbourne, Sydney, Brisbane...) không?",
    "Yes. Adelaide metro is delivered by our own vans in 24–48 hours; interstate orders ship by pallet freight with a quoted transit time.",
    "Có. Nội thành Adelaide giao bằng xe của công ty trong 24–48 giờ; đơn liên bang gửi bằng vận chuyển pallet kèm thời gian dự kiến trong báo giá.",
  ],
  [
    "Can my business request samples?",
    "Doanh nghiệp có thể nhận hàng mẫu (sample) không?",
    "Yes — 2 kg ST25 sample bags and single units of sauces or pastes are available for verified ABN holders.",
    "Có — túi gạo ST25 2 kg và mẫu lẻ nước mắm, cốt gia vị dành cho doanh nghiệp có ABN hợp lệ.",
  ],
  [
    "Who can open a wholesale account?",
    "Ai có thể mở tài khoản mua sỉ?",
    "Restaurants, cafés, grocers, supermarkets, caterers and distributors with a registered ABN. We do not sell to the public.",
    "Nhà hàng, quán cà phê, cửa hàng, siêu thị, bếp công nghiệp và nhà phân phối có ABN. Chúng tôi không bán lẻ cho khách cá nhân.",
  ],
  [
    "How long do quotes and deliveries take?",
    "Thời gian xử lý báo giá và giao hàng?",
    "Quotes are returned within one business day. Confirmed Adelaide orders are delivered in 24–48 hours from the Wingfield warehouse.",
    "Báo giá được gửi trong vòng một ngày làm việc. Đơn đã xác nhận tại Adelaide được giao trong 24–48 giờ từ kho Wingfield.",
  ],
];

export function FaqSection() {
  const { t } = useI18n();

  return (
    <section id="faq" className="border-b border-border bg-sand/40 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          {t("Trade FAQ", "Câu Hỏi Thường Gặp")}
        </h2>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map(([q, qv, a, av]) => (
            <AccordionItem key={q} value={q!}>
              <AccordionTrigger className="text-left font-medium">{t(q!, qv!)}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{t(a!, av!)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
