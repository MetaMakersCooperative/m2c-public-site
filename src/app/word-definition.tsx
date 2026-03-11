import {
  Text,
  Blockquote,
  Heading,
  Box,
  BoxProps,
} from "@chakra-ui/react";

export interface WordDefinitionProps extends BoxProps {
  word: string;
  type: string;
  definition: string;
  citation?: string;
}

export default function WordDefinition({word, type, definition, citation, ...props}: WordDefinitionProps) {
  return (
    <Box {...props}>
      <Heading as ="h2" size="4xl" width={"fit-content"}>
        {word}
      <Text display={"inline"} as="span" fontSize="lg" fontWeight={"light"} paddingLeft={4}>{type}</Text>
      </Heading>
      <Blockquote.Root fontSize={{ base: "xl", mdDown: "md" }} px={4} >
        <Blockquote.Content>{definition}</Blockquote.Content>
        {citation && <Blockquote.Caption>
          <cite>- {citation}</cite>
        </Blockquote.Caption>}
      </Blockquote.Root>
    </Box>
  );
}