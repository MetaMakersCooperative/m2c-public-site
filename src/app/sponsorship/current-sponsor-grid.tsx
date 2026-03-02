'use client';
import { Grid } from '@chakra-ui/react';
import { CurrentSponsorCard } from './current-sponsor-card';
import { _sponsors } from '@/data/sponsors';

export default function CurrentSponsorGrid() {
    return (
        
            <Grid templateColumns={{base: "repeat(4, 1fr)", lgDown: "repeat(2, 1fr)", smDown:"repeat(1, 1fr)"}} gap="8">
              {_sponsors.map((item) => (
                  <CurrentSponsorCard {...item} key={item.name} />
                )
              )}
            </Grid>
    );
}