import { MapPin } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { company } from "@/data/company";
import { useI18n } from "@/lib/i18n";

const faqs = [
  ["Is there a minimum order?", "Có yêu cầu đơn tối thiểu không?", "Wholesale orders start from 10 cartons or one mixed pallet for metro delivery.", "Đơn sỉ bắt đầu từ 10 thùng hoặc một pallet hàng hỗn hợp cho giao nội thành."],
  ["Do you deliver outside Adelaide?", "Có giao ngoài Adelaide không?", "Yes — regional South Australia and interstate freight can be arranged on request.", "Có — giao hàng vùng ngoại ô Nam Úc và liên bang theo yêu cầu."],
  ["What payment terms are available?", "Điều khoản thanh toán thế nào?", "Prepay on first order, then 7–14 day trade terms for established accounts.", "Đơn đầu thanh toán trước, sau đó công nợ 7–14 ngày cho khách quen."],
  ["Can I collect from the warehouse?", "Có thể tự lấy hàng tại kho không?", "Yes, pickup is available at 29 Second St, Wingfield during business hours.", "Có, nhận hàng tại 29 Second St, Wingfield trong giờ làm việc."],
];

export function FaqSection() {
  const { t } = useI18n();

  return (
    <section id="faq" className="border-b border-border bg-sand/40 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            {t("Trade FAQ", "Câu hỏi thường gặp")}
          </h2>
          <Accordion type="single" collapsible className="mt-6">
            {faqs.map(([q, qv, a, av]) => (
              <AccordionItem key={q} value={q!}>
                <AccordionTrigger className="text-left font-medium">{t(q!, qv!)}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{t(a!, av!)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <aside className="h-fit rounded-3xl border border-border bg-card p-7">
          <MapPin className="size-5 text-gold" aria-hidden />
          <h3 className="mt-4 font-serif text-xl font-semibold">
            {t("Wingfield warehouse", "Kho Wingfield")}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{company.address}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("Mon–Fri 8:30am – 5:00pm", "Thứ 2–6, 8:30 – 17:00")}
          </p>
          <a
            href={company.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-full border border-primary/20 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5"
          >
            {t("Open in Google Maps", "Mở Google Maps")}
          </a>
        </aside>
      </div>
    </section>
  );
}
