import Image from "next/image";
import styles from "./page.module.css";
import { Grid, Heading } from "@chakra-ui/react";
import { _zonePages } from "@/data/zones";
import { ZoneCard } from "@/components/zone-card";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Grid templateColumns="repeat(3, 1fr)" gap="6">
          {_zonePages.map((item) => (
              <ZoneCard {...item} key={item.slug} />
            )
          )}
        </Grid>
      </main>
    </div>
  );
}
