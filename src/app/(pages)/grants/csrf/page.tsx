import { BASE_URL } from "@/app/sitemap";
import { Metadata } from "next";
import Markdown from "@/data/markdown/csrf.mdx";

export const metadata: Metadata = {
  title: "Meta Makers Receives CSRF Funding",
  description: "Windsor, ON - Meta Makers Cooperative (M2C) is receiving a $60,000 grant to improve and modernize their facilities funded by the Government of Canada under the Community Services Recovery Fund (CSRF).",
  openGraph: {
    url: `${BASE_URL}/grants/csrf`,
    type: "website",
    title: "Meta Makers Receives CSRF Funding",
    description: "Windsor, ON - Meta Makers Cooperative (M2C) is receiving a $60,000 grant to improve and modernize their facilities funded by the Government of Canada under the Community Services Recovery Fund (CSRF).",
    images: `${BASE_URL}/logos/csrf-logo.png`
  }
};

export default function GrantsPage() {
    return (
        <Markdown />
    );
}