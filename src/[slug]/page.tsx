import Image from "next/image";
import styles from "./page.module.css";
import { Grid, Heading } from "@chakra-ui/react";
import { _zonePages, ZoneProps } from "@/data/zones";
import { ZoneCard } from "@/components/zone-card";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths, GetStaticPathsResult, GetStaticPropsResult } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { assertNotUndefined } from "@/data/utils";

export default function Zone(zone: ZoneProps) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image src={zone.image} alt={zone.name} />
        <Heading>{zone.name}</Heading>
      </main>
    </div>
  );
}



// ... (Use fs and path to fetch all possible slugs/IDs from your data source)

interface PathParams extends ParsedUrlQuery {
  slug: string;
}

// Type the getStaticPaths function
export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  var paths = _zonePages.map(zone => ({ params: { slug: zone.slug}}));
  return { paths, fallback: false }; // fallback: false means any path not defined will be a 404
};

// Type the getStaticProps function for dynamic routes
export const getStaticProps: GetStaticProps<ZoneProps, PathParams> = async (context) => {
  const { slug } = context.params as PathParams; 
  const zone = _zonePages.find(x => x.slug === slug);
  assertNotUndefined<ZoneProps>(zone);
  return {
    props: zone,
  };
};