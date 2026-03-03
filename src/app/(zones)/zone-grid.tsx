import { Grid, GridProps } from "@chakra-ui/react";
import { _zonePages } from "@/data/zones";
import { ZoneCard } from "@/app/(zones)/zone-card";

export interface ZoneGridProps extends GridProps {
  
}

export default function ZoneGrid({...props}: ZoneGridProps) {
  return (
    <Grid templateColumns={{base: "repeat(3, 1fr)", lgDown: "repeat(2, 1fr)", smDown:"repeat(1, 1fr)"}} gap="8" {...props}>
      {_zonePages.map((item) => (
          <ZoneCard {...item} key={item.slug} />
        )
      )}
    </Grid>
  );
}