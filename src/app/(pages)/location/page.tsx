import { BASE_URL } from "@/app/sitemap";
import Section from "../../(common)/section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location",
  description: "Our makerspace is located at 628 Monmouth Rd in Walkerville, near a variety of great restaraunts and shops.",
  openGraph: {
    url: `${BASE_URL}/location`,
    type: "website",
    title: "Meta Makers Location",
    description: "Learn more about how Meta Makers leverages grants to benefit the Windsor-Essex community.",
    images: `${BASE_URL}/logos/logo-black.svg`
  }
};

export default function LocationPage() {
    return (
        <>
            <Section headingProps={{as:"h1"}} id="location" title="Location">  
                <p>todo</p>
            </Section>
            <Section id="nearby" title="Nearby Attractions">  
                <p>todo</p>
            </Section>
        </>
    );
}