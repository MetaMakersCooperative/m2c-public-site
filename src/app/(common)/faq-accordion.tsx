"use client"

import { Accordion, HStack, IconButton, Text } from "@chakra-ui/react";
import RichText from "@/components/ui/rich-text";
import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import { LuCheck, LuLink } from "react-icons/lu";
import { FaqItem } from "@/data/faq";
import { HEADER_HEIGHT } from "@/data/navigation";
import { toaster } from "@/components/ui/toaster";

export interface FaqAccordionProps {
  items: FaqItem[];
  /**
   * Page that deep links point to. Leave empty for links on the current page (e.g. "#id"),
   * or set to "/faq" so links from other pages point to the dedicated FAQ page.
   */
  linkBase?: string;
}

function currentHash(): string {
  try {
    return decodeURIComponent(window.location.hash.slice(1));
  } catch {
    return "";
  }
}

export default function FaqAccordion({ items, linkBase = "" }: FaqAccordionProps) {
  const [open, setOpen] = useState<string[]>([]);

  // Open (and scroll to) the question named in the URL hash, on load and whenever the hash changes.
  const openFromHash = useCallback(() => {
    const id = currentHash();
    if (!id || !items.some((x) => x.id === id)) return;
    setOpen((prev) => (prev.includes(id) ? prev : [...prev, id]));
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: "start" }));
  }, [items]);

  // Briefly show a checkmark on the link icon that was just copied.
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copiedTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(copiedTimer.current), []);

  const copyLink = async (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    // Let the browser handle opening in a new tab/window.
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    const url = new URL(`${linkBase}#${id}`, window.location.href).href;
    if (await copyToClipboard(url)) {
      setCopiedId(id);
      clearTimeout(copiedTimer.current);
      copiedTimer.current = setTimeout(() => setCopiedId(null), 2000);
      toaster.create({ type: "success", title: "Link copied to clipboard", duration: 2500 });
    } else {
      toaster.create({ type: "error", title: "Couldn't copy the link", description: url, duration: 8000, closable: true });
    }
  };

  useEffect(() => {
    // The hash isn't available while pages are statically rendered, so check it after hydration.
    const frame = requestAnimationFrame(openFromHash);
    window.addEventListener("hashchange", openFromHash);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", openFromHash);
    };
  }, [openFromHash]);

  if (items.length === 0) return null;

  return (
    <Accordion.Root
      multiple
      variant="enclosed"
      value={open}
      onValueChange={(e) => setOpen(e.value)}
      backgroundColor={{ _light: "white", _dark: "#1a1a1a" }}
    >
      {items.map((item) => (
        <Accordion.Item key={item.id} value={item.id}>
          {/* The anchor id goes on the header row: Accordion.Item overrides any id passed to it. */}
          <HStack id={item.id} scrollMarginTop={HEADER_HEIGHT} gap={0} pr={2} alignItems="center">
            <Accordion.ItemTrigger flex="1" py={4} pl={{ base: 5, mdDown: 4 }} pr={2} gap={3} cursor="pointer">
              <Text as="span" flex="1" fontSize={{ base: "lg", mdDown: "md" }} fontWeight="semibold" textAlign="left">
                {item.question}
              </Text>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <IconButton
              asChild
              variant="ghost"
              size="sm"
              aria-label={`Copy link to "${item.question}"`}
              title="Copy link to this question"
              color={copiedId === item.id ? "green.fg" : "fg.muted"}
            >
              {/* A real link so right-click "Copy link" and ctrl/cmd-click still work; a plain click copies instead of navigating. */}
              <a href={`${linkBase}#${item.id}`} onClick={(e) => copyLink(e, item.id)}>
                {copiedId === item.id ? <LuCheck /> : <LuLink />}
              </a>
            </IconButton>
          </HStack>
          <Accordion.ItemContent>
            <Accordion.ItemBody pt={0} pb={5} pl={{ base: 5, mdDown: 4 }} pr={{ base: 12, mdDown: 4 }}>
              <RichText html={item.answer} />
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for browsers/contexts without the async clipboard API (e.g. non-HTTPS previews).
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const ok = document.execCommand("copy");
      textarea.remove();
      return ok;
    } catch {
      return false;
    }
  }
}

