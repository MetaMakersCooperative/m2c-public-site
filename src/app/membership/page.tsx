import Section from "../(common)/section";
import { Image, Link, Text } from "@chakra-ui/react";
import MemberBenefitCardGrid from "./member-benefit-card-grid";
import MemberPriceCardGrid from "./member-price-card-grid";

export default function ContactPage() {
    return (
        <>
            <Section id="member-benefits" title="Member Benefits">  
                <Text fontSize={"xl"}>As a nonprofit cooperative, Meta Makers is a member-led organization.  Members enjoy voting rights at official meetings and also benefit from the following member perks:</Text>
                <MemberBenefitCardGrid />
            </Section>
            <Section id="sign-up-process" title="Sign-Up Process">
                <Text fontSize={"xl"}>To sign up, you'll complete our membership form, review and accept our standard operating procedure, complete a liability waiver, and then select a membership term and payment option.  Click to view our <Link href="forms/sop.pdf" variant={"underline"} textDecoration={"underline"} colorPalette={"teal"}>SOPs</Link> and <Link href="forms/waiver.pdf"  variant={"underline"} textDecoration={"underline"} colorPalette={"teal"}>Waiver</Link>. Finally, we'll schedule an orientation to provide your key card.</Text>
                <Image src="icons/signup.png" alt="Membership Sign-Up Process" objectFit="contain" marginTop={8}/>
            </Section>
            <Section id="pricing" title="Pricing">  
                <Text fontSize={"xl"}>The cost of membership varies by membership term.  Select a longer membership term for the best price.</Text>
                <MemberPriceCardGrid />
            </Section>
            <Section id="payment-options" title="Payment Options">  
                <Text fontSize={"xl"}>For automated payments, we accept credit and debit cards through Zeffy (click the "<Link href="https://zeffy.com/metamakers" variant={"underline"} textDecoration={"underline"} colorPalette={"teal"}>Join</Link>" button to get started). In-person, we also accept cash, cheques and etransfer (pay@metamakers.org).</Text>
            </Section>
        </>
    );
}