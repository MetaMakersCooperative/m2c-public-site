import { BASE_URL } from "@/app/sitemap";
import ZeffyCampaign from "../zeffy-campaign";
import { Metadata } from "next";
import SlimBanner from "../slim-banner";

export const metadata: Metadata = {
  title: "Join Meta Makers",
  description: "Purchase a Meta Makers Cooperative membership and enjoy all the benefits our makerspace has to offer!",
  openGraph: {
    url: `${BASE_URL}/join`,
    type: "website",
    title: "Join Meta Makers",
    description: "Purchase a Meta Makers Cooperative membership and enjoy all the benefits our makerspace has to offer!",
    images: `${BASE_URL}/logos/logo-black.svg`
  }
};

export default function JoinPage() {
    return (
        <>
            <SlimBanner title="Join Meta Makers" />
            <ZeffyCampaign campaignId="meta-makers-co-operatives-memberships" />
        </>
    );
}