import { _pastSponsors, PastSponsorProps } from '@/data/sponsors';
import SubSection from '../(common)/sub-section';
import { Box, BoxProps, Card, Grid, Link, Text } from '@chakra-ui/react';
import { LuExternalLink } from 'react-icons/lu';

export interface CurrentSponsorGridProps extends BoxProps {
    
}

export default function CurrentSponsorGrid({...props}: CurrentSponsorGridProps)  {
    const groupedByYear = _pastSponsors.reduce((acc, sponsor) => {
        if (!acc[sponsor.year]) {
            acc[sponsor.year] = [];
        }
        acc[sponsor.year].push(sponsor);
        return acc;
    }, {} as Record<number, PastSponsorProps[]>);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    };

    return (
        <Box {...props}>
            {Object.entries(groupedByYear)
                .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
                .map(([year, yearSponsors]) => {
                    const groupedByAmount = yearSponsors.reduce((acc, sponsor) => {
                        if (!acc[sponsor.amount]) {
                            acc[sponsor.amount] = [];
                        }
                        acc[sponsor.amount].push(sponsor);
                        return acc;
                    }, {} as Record<number, PastSponsorProps[]>);

                    return (
                        <SubSection key={year} id={`past-sponsors-${year}`} title={year}>
                            <Grid templateColumns={{base: "repeat(4, 1fr)", lgDown: "repeat(2, 1fr)", smDown:"repeat(1, 1fr)"}} gap="8">
                                {Object.entries(groupedByAmount)
                                    .sort(([amountA], [amountB]) => Number(amountB) - Number(amountA))
                                    .map(([amount, sponsors]) => (
                                        <Card.Root key={amount} p={4} gap={4}>
                                            <Card.Header>
                                                <Card.Title>{formatCurrency(Number(amount))}</Card.Title>
                                            </Card.Header>
                                            <Card.Body>
                                                {sponsors.map((sponsor, idx) => (
                                                    <Box key={idx}>
                                                        {sponsor.url ? (
                                                            <Link
                                                                href={sponsor.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                textDecoration={"underline"}
                                                                color={"teal"}
                                                                variant={"underline"}
                                                            >
                                                                {sponsor.name}
                                                                 <LuExternalLink />
                                                            </Link>
                                                        ) : (
                                                            <Text>{sponsor.name}</Text>
                                                        )}
                                                    </Box>
                                                ))}
                                            </Card.Body>
                                        </Card.Root>
                                    ))}
                            </Grid>
                        </SubSection>
                    );
                })}
        </Box>
    );
};