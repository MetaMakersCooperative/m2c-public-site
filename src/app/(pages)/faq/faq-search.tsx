"use client"

import { Input, InputGroup, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { useMemo, useState } from "react";
import { LuSearch } from "react-icons/lu";
import FaqAccordion from "@/app/(common)/faq-accordion";
import { FaqItem } from "@/data/faq";

export interface FaqSearchProps {
  items: FaqItem[];
}

export default function FaqSearch({ items }: FaqSearchProps) {
  const [query, setQuery] = useState("");

  const terms = useMemo(() => query.toLowerCase().split(/\s+/).filter(Boolean), [query]);
  const results = useMemo(
    () => (terms.length === 0 ? items : items.filter((x) => terms.every((t) => x.searchText.includes(t)))),
    [items, terms]
  );

  if (items.length === 0) {
    return (
      <Text>
        There are no frequently asked questions yet. Have a question?{" "}
        <Link asChild variant="underline">
          <NextLink href="/contact">Contact us</NextLink>
        </Link>
        .
      </Text>
    );
  }

  return (
    <VStack alignItems="stretch" gap={6} width="100%">
      <InputGroup startElement={<LuSearch />} startElementProps={{ px: 4 }}>
        <Input
          type="search"
          size="lg"
          ps={12}
          placeholder="Search questions and answers"
          aria-label="Search frequently asked questions"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          backgroundColor={{ _light: "white", _dark: "#1a1a1a" }}
        />
      </InputGroup>
      <Text aria-live="polite" color="fg.muted" fontSize="sm" display={terms.length ? undefined : "none"}>
        {results.length === 1 ? "1 matching question" : `${results.length} matching questions`}
      </Text>
      {results.length > 0 ? (
        <FaqAccordion items={results} />
      ) : (
        <Text>
          No questions match &ldquo;{query.trim()}&rdquo;. Can&apos;t find what you&apos;re looking for?{" "}
          <Link asChild variant="underline">
            <NextLink href="/contact">Contact us</NextLink>
          </Link>
          .
        </Text>
      )}
    </VStack>
  );
}
