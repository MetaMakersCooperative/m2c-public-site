import { _memberPrices } from "@/data/membership";
import { Box, Card, Center, Grid, Heading, Image, Stack,Text } from "@chakra-ui/react";

export default function MemberPriceCardGrid() {
    return (
        <Grid px={{base:"100px", mdDown: 0}} py={8} gap={8} templateColumns={{base: "repeat(3, 1fr)", mdDown: "repeat(1, 1fr)"}}>
            {_memberPrices.map((item) => (
                <Card.Root p={4} gap={4} key={item.title} boxShadow={item.isBestValue ? `0 0 10px 3px #5e4fa2bf` : "none"}>
                    <Card.Body asChild>
                        <Stack direction={{base: "row", md: "column"}} alignItems="center" justifyContent="center">
                            <Box width={{base:"33%", md:"100%"}}>
                                <Heading textAlign="center" fontWeight={"bold"}>{item.title}</Heading>
                            </Box>
                            <Box width={{base:"33%", md:"100%"}}>
                                <Heading textAlign="center">${item.termCost}</Heading>
                            </Box>
                            <Box width={{base:"33%", md:"100%"}}>
                                <Heading textAlign="center" size={"sm"}>${item.monthCost}/month</Heading>
                            </Box>
                        </Stack>
                    </Card.Body>
                    <Card.Footer alignItems="center" justifyContent="center">
                        <Center>
                            <Text textAlign="center" fontWeight={"bold"}>{item.isBestValue ? "Best Value!" : ""}</Text>
                        </Center>
                    </Card.Footer>
                </Card.Root>
            ))}
        </Grid>
    );
}