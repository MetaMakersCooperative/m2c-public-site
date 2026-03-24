import { BASE_URL } from "@/app/sitemap";
import Section from "../../(common)/section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location of Meta Makers Cooperative",
  description: "Our makerspace is located at 628 Monmouth Rd in Walkerville, near a variety of great restaraunts and shops.",
  openGraph: {
    url: `${BASE_URL}/location`,
    type: "website",
    title: "Grant Funding for Meta Makers Cooperative",
    description: "Learn more about how Meta Makers leverages grants to benefit the Windsor-Essex community.",
  }
};

export default function LocationPage() {
    return (
        <>
            <Section id="location" title="Our Location">  
                <p>todo</p>
            </Section>
            <Section id="nearby" title="Nearby Attractions">  
                <p>todo</p>
            </Section>
        </>
    );
}