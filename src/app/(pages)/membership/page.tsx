import Section from "../../(common)/section";
import { Link, Text } from "@chakra-ui/react";
import MemberBenefitCardGrid from "./member-benefit-card-grid";
import MemberPriceCardGrid from "./member-price-card-grid";
import BecomeMemberSticky from "./become-member-sticky";
import { Metadata } from "next";
import { BASE_URL } from "@/app/sitemap";

export const metadata: Metadata = {
  title: "Join Meta Makers Cooperative",
  description: "Learn more about the perks of becoming a Meta Makers Cooperative member and how to sign up. Members benefit from access to a co-working space with tools and resources that they might not otherwise have access to.",
  openGraph: {
    url: `${BASE_URL}/membership`,
    type: "website",
    title: "Join Meta Makers Cooperative",
    description: "Learn more about the perks of becoming a Meta Makers Cooperative member and how to sign up. Members benefit from access to a co-working space with tools and resources that they might not otherwise have access to.",
    images: `${BASE_URL}/logos/logo-black.svg`
  }
};
export default function MembershipPage() {
    return (
        <>
            <BecomeMemberSticky hideLearnMoreButton={true} />
            <Section id="member-benefits" title="Member Benefits" backgroundColor={"bg.muted"}>  
                <Text fontSize={{base: "xl", mdDown:"md"}}>Members benefit from access to a co-working space with tools and resources that they might not otherwise have access to. People come for the tools and stay to explore, collaborate and make. It affords them the opportunity to socialize, learn and teach. Being a cooperative, our members are active and engaged in all aspects of our organization. Members also benefit from the following member perks:</Text>
                <MemberBenefitCardGrid paddingTop={8} />
            </Section>
            <Section id="sign-up-process" title="Sign-Up Process">
                <Text fontSize={{base: "xl", mdDown:"md"}}>To sign up, click the <Link href="/join" variant={"underline"}>"Become a Member"</Link> button to purchase your preferred membership term.  Next, complete our <Link href="forms/membership.pdf" variant={"underline"}>membership form</Link> and email it to <Link href="mailto:membership@metamakers.org" variant={"underline"}>membership@metamakers.org</Link>. We'll respond via email to schedule an orientation.  At the orientation, you'll need to review and accept our <Link href="forms/sop.pdf" variant={"underline"}>standard operating procedures (SOPs)</Link> and sign our <Link href="forms/waiver.pdf" variant={"underline"}>liability waiver</Link>. Finally, we'll provide a tour of the makerspace and issue your keycard.</Text>
            </Section>
            <Section id="pricing" title="Pricing" backgroundColor={"bg.muted"}>  
                <Text fontSize={{base: "xl", mdDown:"md"}}>The cost of membership varies by membership term.  Membership terms are offered on an annual, semi-annual or quarterly basis. Day and week passes are also available. Select a longer membership term for the best price.</Text>
                <MemberPriceCardGrid paddingTop={8} />
            </Section>
            <Section id="payment-options" title="Payment Options">  
                <Text fontSize={{base: "xl", mdDown:"md"}}>For automated payments, we accept credit and debit cards through Zeffy (click the <Link href="/join" variant={"underline"}>"Become a Member"</Link> button to get started). In-person, we also accept cash, cheques and etransfer (pay@metamakers.org). To pay in person, complete the membership form and let us know you intend to pay in person when you email us.</Text>
            </Section>
        </>
    );
}