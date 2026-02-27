import { Grid } from "@chakra-ui/react";
import { _zonePages } from "@/data/zones";
import { ZoneCard } from "@/components/zone-card";

export default function Home() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="6">
      {_zonePages.map((item) => (
          <ZoneCard {...item} key={item.slug} />
        )
      )}
    </Grid>
  );
}