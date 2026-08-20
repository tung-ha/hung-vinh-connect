import { createFileRoute } from "@tanstack/react-router";

import { RfqForm } from "@/components/site/RfqForm";
import { WarehouseCard } from "@/components/site/WarehouseCard";

const title = "Liên Hệ & Báo Giá Sỉ | Hung Vinh Asian Food";
const description =
  "Gửi yêu cầu báo giá sỉ tới Hung & Vinh Asian Food, kho Wingfield SA. Điện thoại 0450 564 544, giao hàng nhanh 24-48h khu vực Adelaide.";

export const Route = createFileRoute("/lien-he")({
  validateSearch: (s: Record<string, unknown>) => ({
    item: typeof s.item === "string" ? s.item : undefined,
  }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { item } = Route.useSearch();

  return (
    <main>
      <RfqForm prefillItem={item} />
      <WarehouseCard />
    </main>
  );
}
