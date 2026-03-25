import Section from "../../(common)/section";
import { Link, Text } from "@chakra-ui/react";
import MemberBenefitCardGrid from "./member-benefit-card-grid";
import MemberPriceCardGrid from "./member-price-card-grid";
import BecomeMemberSticky from "./become-member-sticky";
import { Metadata } from "next";
import { BASE_URL } from "@/app/sitemap";
import BecomeMemberFixed from "./become-member-fixed";
import { LuExternalLink } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Membership",
  description: "Discover the perks of becoming a Meta Makers Cooperative member, such as 24/7 access and class discounts, and learn how to sign up.",
  openGraph: {
    url: `${BASE_URL}/membership`,
    type: "website",
    title: "Meta Makers Membership",
    description: "Discover the perks of becoming a Meta Makers Cooperative member, such as 24/7 access and class discounts, and learn how to sign up.",
    images: `${BASE_URL}/logos/logo-black.svg`
  }
};
export default function MembershipPage() {
    return (
        <>  
            <Section id="membership" title="Membership">  
                <Text fontSize={{base: "xl", mdDown:"md"}}>As nonprofit cooperative, Meta Makers is owned and operated by members who volunteer their time to help with all aspects of our organization.  Members democratically elect our board of directors annually and can participate as directors, officers, and zone coordinators.</Text>
            </Section>
            <Section id="member-benefits" title="Member Benefits" backgroundColor={"bg.muted"}>  
                <Text fontSize={{base: "xl", mdDown:"md"}}>Members benefit from access to a co-working space with tools and resources that they might not otherwise have access to. People come for the tools and stay to explore, collaborate and make. It affords them the opportunity to socialize, learn and teach. Members also benefit from these perks:</Text>
                <MemberBenefitCardGrid paddingTop={8} />
            </Section>
            <Section id="sign-up-process" title="Sign-Up Process">
                <Text fontSize={{base: "xl", mdDown:"md"}}>To sign up, click the <Link href="/join" variant={"underline"}>"Become a Member"</Link> button to purchase your preferred membership term.  Next, complete our <Link href="/assets/membership_form.pdf" variant={"underline"} target="_blank">membership form <LuExternalLink /></Link> and email it to <Link href="mailto:membership@metamakers.org" variant={"underline"}>membership@metamakers.org</Link>. We'll respond via email to schedule an orientation.  At the orientation, you'll need to review and accept our <Link href="/assets/SOP.pdf" variant={"underline"} target="_blank">standard operating procedures (SOPs)<LuExternalLink /></Link> and sign our <Link href="/assets/waiver.pdf" variant={"underline"} target="_blank">liability waiver<LuExternalLink /></Link>. Finally, we'll provide a tour of the makerspace and issue your keycard.</Text>
            </Section>
            <Section id="pricing" title="Pricing" backgroundColor={"bg.muted"}>  
                <Text fontSize={{base: "xl", mdDown:"md"}}>The cost of membership varies by membership term.  Membership terms are offered on an annual, semi-annual or quarterly basis. Day and week passes are also available. Select a longer membership term for the best price.</Text>
                <MemberPriceCardGrid paddingTop={8} />
            </Section>
           
            <Section id="payment-options" title="Payment Options" marginBottom={{base:"80px", mdDown: "100px"}}> {/* margin for bottom fixed element  */}
                <Text fontSize={{base: "xl", mdDown:"md"}}>For automated payments, we accept credit and debit cards through Zeffy (click the <Link href="/join" variant={"underline"}>"Become a Member"</Link> button to get started). In-person, we also accept cash, cheques and etransfer (pay@metamakers.org). To pay in person, complete the membership form and let us know you intend to pay in person when you email us.</Text>
            </Section>
            <BecomeMemberFixed hideLearnMoreButton={true} />
        </>
    );
}