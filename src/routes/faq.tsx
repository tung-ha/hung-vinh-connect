import { createFileRoute } from "@tanstack/react-router";

import { FaqSection } from "@/components/site/FaqSection";
import { PageHeader } from "@/components/site/PageHeader";
import { RfqForm } from "@/components/site/RfqForm";

const title = "FAQ, MOQs & Freight — Hung Vinh Asian Food";
const description =
  "Minimum order quantities, interstate freight schedules to Melbourne, Sydney, Brisbane and Perth, sample requests and wholesale account terms.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow={["Support", "Hỗ trợ"]}
        title={["Ordering, freight and account FAQ", "Hỏi đáp về đặt hàng, vận chuyển và tài khoản"]}
        subtitle={[
          "Everything trade buyers ask before their first pallet leaves Wingfield.",
          "Những câu hỏi thường gặp trước khi pallet đầu tiên rời kho Wingfield.",
        ]}
      />
      <FaqSection />
      <RfqForm />
    </>
  );
}
