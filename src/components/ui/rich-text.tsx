import { Box, BoxProps } from "@chakra-ui/react";

export interface RichTextProps extends BoxProps {
  /** HTML from the Pages CMS rich-text editor. Content comes from this repository, not from visitors. */
  html: string;
}

export default function RichText({ html, ...props }: RichTextProps) {
  return (
    <Box
      fontSize={{ base: "md", mdDown: "sm" }}
      css={{
        "& p": { marginBottom: "0.75em" },
        "& > :last-child": { marginBottom: 0 },
        "& a": { textDecoration: "underline", textUnderlineOffset: "3px" },
        "& ul, & ol": { paddingLeft: "1.5em", marginBottom: "0.75em" },
        "& ul": { listStyleType: "disc" },
        "& ol": { listStyleType: "decimal" },
        "& li": { marginBottom: "0.25em" },
        "& h1, & h2, & h3, & h4": { fontWeight: "bold", marginBottom: "0.5em" },
        "& img": { maxWidth: "100%", height: "auto" },
      }}
      {...props}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
