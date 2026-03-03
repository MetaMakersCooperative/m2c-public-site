import { _pastSponsors, PastSponsorProps } from '@/data/sponsors';
import SubSection from '../(common)/sub-section';
import { Box, BoxProps, Card, Grid } from '@chakra-ui/react';

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
                                        <Card.Root key={amount} className="amount-card" p={4} gap={4}>
                                            <Card.Header>
                                                <Card.Title className="card-title">{formatCurrency(Number(amount))}</Card.Title>
                                            </Card.Header>
                                            <Card.Body className="sponsors-list">
                                                {sponsors.map((sponsor, idx) => (
                                                    <div key={idx} className="sponsor-item">
                                                        {sponsor.url ? (
                                                            <a
                                                                href={sponsor.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="sponsor-link"
                                                            >
                                                                {sponsor.name}
                                                                <span className="external-icon" aria-label="opens in new tab">
                                                                    ↗
                                                                </span>
                                                            </a>
                                                        ) : (
                                                            <span className="sponsor-name">{sponsor.name}</span>
                                                        )}
                                                    </div>
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