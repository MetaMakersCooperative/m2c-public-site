import { Grid } from "@chakra-ui/react";
import { _zonePages } from "@/data/zones";
import { ZoneCard } from "@/app/(zones)/zone-card";

export default function ZoneGrid() {
  return (
    <Grid m="4rem" templateColumns={{base: "repeat(3, 1fr)", lgDown: "repeat(2, 1fr)", smDown:"repeat(1, 1fr)"}} gap="6">
      {_zonePages.map((item) => (
          <ZoneCard {...item} key={item.slug} />
        )
      )}
    </Grid>
  );
}