import {
  chakra,
  Code,
  Heading,
  Link as ChakraLink,
  List,
  Table,
  Text,
  Image,
  Blockquote,
} from "@chakra-ui/react";
import { MDXComponents } from "mdx/types";
import NextLink from "next/link";

// Map MDX/Markdown elements to Chakra UI components
const components: MDXComponents = {
  // Headings
  h1: (props: any) => <Heading as="h1" size="4xl" mx={8} py={4} alignSelf={"baseline"}  {...props} />,
  h2: (props: any) => <Heading as="h2" size="3xl" mx={8} py={4} alignSelf={"baseline"}  {...props} />,
  h3: (props: any) => <Heading as="h3" size="2xl" mx={8} py={4} alignSelf={"baseline"}  {...props} />,
  h4: (props: any) => <Heading as="h4" size="1xl" mx={8} py={4} alignSelf={"baseline"}  {...props} />,
  h5: (props: any) => <Heading as="h5" size="xl"  mx={8} py={4} alignSelf={"baseline"}  {...props} />,
  h6: (props: any) => <Heading as="h6" size="lg"  mx={8} py={4} alignSelf={"baseline"}  {...props} />,

  // Paragraph
  p: (props: any) => <Text mx={8} py={2} alignSelf={"baseline"} {...props} />,

  // Links
  a: (props: any) => (
    <ChakraLink asChild variant={"underline"}><NextLink {...props}/></ChakraLink>
  ),

  // Lists
  ul: (props: any) => <List.Root as="ul" mx={8} py={4} alignSelf={"baseline"} {...props} />,
  ol: (props: any) => <List.Root as="ol" mx={8} py={4} alignSelf={"baseline"} {...props} />,
  li: (props: any) => <List.Item mx={8} py={1} alignSelf={"baseline"} {...props} />,

  // Code blocks & inline code
  code: (props: any) => (
    <Code
      colorScheme="yellow"
      fontSize="0.95em"
      mx={1}
      py={0.5}
      borderRadius="md"
      {...props}
    />
  ),

  // Tables
  table: (props: any) => (
    <Table.Root variant="striped" colorScheme="gray" py={4} {...props} />
  ),
  thead: (props: any) =>  <Table.Header as="h1" size="6xl" py={4} {...props} />,
  tbody: (props: any) =>  <Table.Body   as="h1" size="6xl" py={4} {...props} />,
  tr: (props: any) =>     <Table.Row    as="h1" size="6xl" py={4} {...props} />,
  th: (props: any) =>     <Table.Header as="h1" size="6xl" py={4} {...props} />,
  td: (props: any) =>     <Table.Cell   as="h1" size="6xl" py={4} {...props} />,

  // Images
  img: (props: any) => <Image borderRadius="md" py={4} {...props} />,

  // Blockquote
  blockquote: (props: any) => (
    <Blockquote.Root
      mx={8}
      alignSelf={"baseline"}
      borderLeft="4mx solid"
      borderColor="gray.300"
      color="gray.600"
      fontStyle="italic"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components
}

