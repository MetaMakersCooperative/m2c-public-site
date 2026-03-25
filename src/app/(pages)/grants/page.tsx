import { BASE_URL } from "@/app/sitemap";
import Section from "../../(common)/section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grants",
  description: "Learn more about how Meta Makers leverages grants to benefit the Windsor-Essex community.",
  openGraph: {
    url: `${BASE_URL}/grants`,
    type: "website",
    title: "Meta Makers Grant Funding",
    description: "Learn more about how Meta Makers leverages grants to benefit the Windsor-Essex community.",
    images: `${BASE_URL}/logos/logo-black.svg`
  }
};

export default function GrantsPage() {
    return (
        <>
            <Section headingProps={{as:"h1"}} id="Grants" title="Grants">  
                <p>todo</p>
            </Section>
        </>
    );
}