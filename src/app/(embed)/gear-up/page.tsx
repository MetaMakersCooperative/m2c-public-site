import { Metadata } from "next";
import ZeffyCampaign from "../zeffy-campaign";
import { BASE_URL } from "@/app/sitemap";
import SlimBanner from "../slim-banner";

export const metadata: Metadata = {
  title: "Sponsor Meta Makers",
  description: "Purchase a spot on our interactive sponsor gear wall and website!",
  openGraph: {
    url: `${BASE_URL}/gear-up`,
    type: "website",
    title: "Sponsor Meta Makers",
    description: "Purchase a spot on our interactive sponsor gear wall and website!",
    images: `${BASE_URL}/logos/logo-black.svg`
  }
};

export default function GearUpPage() {
    return (
        <>
            <SlimBanner title="Sponsor Meta Makers" />
            <ZeffyCampaign campaignId="gearing-up-for-growth" />
        </>
    );
}