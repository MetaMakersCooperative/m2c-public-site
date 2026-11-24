// FAQ content is managed with Pages CMS and stored in /content/faq.json (see /.pages.yml).
import faqContent from "../../content/faq.json";
import { optionalString } from "./content";

export interface FaqProps {
  question: string;
  /** HTML from the Pages CMS rich-text editor. */
  answer: string;
  featured: boolean;
}

export interface FaqItem extends FaqProps {
  /** Anchor id used for deep links, e.g. /faq#how-do-i-become-a-member */
  id: string;
  /** Plain-text question + answer, lowercased, used for searching. */
  searchText: string;
}

interface FaqContent {
  question?: string | null;
  answer?: string | null;
  featured?: boolean | null;
}

const ENTITIES: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', "#39": "'", apos: "'", nbsp: " " };

export function htmlToText(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&(amp|lt|gt|quot|#39|apos|nbsp);/g, (_, e: string) => ENTITIES[e])
    .replace(/\s+/g, " ")
    .trim();
}

/** Derive a stable URL anchor from the question text. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
    .replace(/-+$/, "");
}

function toFaqItems(content: FaqContent[]): FaqItem[] {
  const used = new Map<string, number>();
  return content
    .filter((x) => optionalString(x.question))
    .map((x) => {
      const question = x.question!.trim();
      const answer = optionalString(x.answer) ?? "";
      const base = slugify(question) || "question";
      const count = (used.get(base) ?? 0) + 1;
      used.set(base, count);
      return {
        question,
        answer,
        featured: x.featured === true,
        id: count === 1 ? base : `${base}-${count}`,
        searchText: `${question} ${htmlToText(answer)}`.toLowerCase(),
      };
    });
}

// Treat a missing/empty/non-array file as "no FAQs" rather than failing.
const content: unknown = faqContent;
export const _faqs: FaqItem[] = toFaqItems(Array.isArray(content) ? (content as FaqContent[]) : []);
export const _featuredFaqs: FaqItem[] = _faqs.filter((x) => x.featured);
