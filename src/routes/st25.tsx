import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/site/PageHeader";
import { RfqForm } from "@/components/site/RfqForm";
import { ST25Spotlight } from "@/components/site/ST25Spotlight";

const title = "ST25 Vilaconic Rice Wholesale Australia — Hung Vinh Asian Food";
const description =
  "Authorised distributor of ST25 Vilaconic, the World's Best Rice. 20kg sacks, 5kg retail packs and pallet supply from our Adelaide warehouse.";

export const Route = createFileRoute("/st25")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: St25Page,
});

function St25Page() {
  return (
    <>
      <PageHeader
        eyebrow={["Flagship line", "Sản phẩm chủ lực"]}
        title={["ST25 Vilaconic — World Champion Rice", "ST25 Vilaconic — Gạo vô địch thế giới"]}
        subtitle={[
          "Pandan-fragrant, soft when chilled and reheated, and bred for high-yield commercial cooking.",
          "Hương lá dứa, vẫn mềm khi để lạnh và hâm nóng, phù hợp nấu số lượng lớn.",
        ]}
      />
      <ST25Spotlight />
      <RfqForm />
    </>
  );
}
