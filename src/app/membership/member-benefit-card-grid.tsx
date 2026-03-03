import { _memberBenefits } from "@/data/membership";
import { Box, Card, Center, Grid, GridProps, Heading, Image, Stack } from "@chakra-ui/react";

export interface MemberBenefitCardGridProps extends GridProps {

}

export default function MemberBenefitCardGrid( {...props}: MemberBenefitCardGridProps) {
    return (
        <Grid px={{base:"100px", mdDown: 0}} py={8} gap={8} templateColumns={{base: "repeat(3, 1fr)", mdDown: "repeat(1, 1fr)"}} {...props}>
            {_memberBenefits.map((item) => (
                <Card.Root p={4} gap={4} key={item.title}>
                    <Card.Body asChild>
                        <Stack direction={{base: "row", md: "column"}} alignItems="center" justifyContent="center">
                            <Box width={{base:"50%", md:"100%"}}>
                                <Heading textAlign="center">{item.title}</Heading>
                            </Box>
                            <Box width={{base:"50%", md:"100%"}}>
                                <Center>
                                    <Image src={item.image} alt={item.title} objectFit="contain" maxH="80px"/>
                                </Center>
                            </Box>
                        </Stack>
                    </Card.Body>
                </Card.Root>
            ))}
        </Grid>
    );
}