import { BASE_URL } from "@/app/sitemap";
import { Metadata } from "next";
import Markdown from "@/data/markdown/csrf.mdx";

export const metadata: Metadata = {
  title: "Meta Makers Receives CSRF Funding",
  description: "Windsor, ON - November 2, 2023 - Meta Makers Cooperative is receiving a $60,000 grant from the Government of Canada under the Community Services Recovery Fund.",
  openGraph: {
    url: `${BASE_URL}/grants/csrf`,
    type: "website",
    title: "Meta Makers Receives CSRF Funding",
    description: "Windsor, ON - November 2, 2023 - Meta Makers Cooperative is receiving a $60,000 grant from the Government of Canada under the Community Services Recovery Fund.",
    images: `${BASE_URL}/logos/csrf-logo.png`
  }
};

export default function CSRFPage() {
    return (
        <Markdown />
    );
}