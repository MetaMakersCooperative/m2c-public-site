import { Metadata } from "next";
import Section from "../../(common)/section";
import FaqSearch from "./faq-search";
import { _faqs } from "@/data/faq";
import { BASE_URL } from "@/app/sitemap";

const description = "Answers to frequently asked questions about Meta Makers Cooperative makerspace in Windsor.";

export const metadata: Metadata = {
  title: "FAQ",
  description,
  openGraph: {
    url: `${BASE_URL}/faq`,
    type: "website",
    title: "Frequently Asked Questions @ Meta Makers Cooperative",
    description,
    images: `${BASE_URL}/logos/logo-black.svg`,
  },
};

export default function FaqPage() {
  return (
    <Section headingProps={{ as: "h1" }} id="faq" title="Frequently Asked Questions" backgroundColor={"bg.muted"}>
      <FaqSearch items={_faqs} />
    </Section>
  );
}
