import { BASE_URL } from "@/app/sitemap";
import Section from "../../(common)/section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grant Funding for Meta Makers Cooperative",
  description: "Learn more about how Meta Makers leverages grants to benefit the Windsor-Essex community.",
  openGraph: {
    url: `${BASE_URL}/grants`,
    type: "website",
    title: "Grant Funding for Meta Makers Cooperative",
    description: "Learn more about how Meta Makers leverages grants to benefit the Windsor-Essex community.",
  }
};

export default function GrantsPage() {
    return (
        <>
            <Section id="Grants" title="Grants">  
                <p>todo</p>
            </Section>
        </>
    );
}