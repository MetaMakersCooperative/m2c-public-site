// Zone content is managed with Pages CMS and stored as one JSON file per zone in /content/zones
// (see /.pages.yml). Zones are displayed in ascending `order`.
import { ImageDetail } from "./facility";
import { loadCollection, mediaPath, optionalList, optionalString } from "./content";

export interface ZoneProps {
  slug: string;
  name: string;
  description: string;
  image: string;
  color: string;
  facilityImages: ImageDetail[];
  benefits?: BenefitProps[];
  tools?: string[];
}

export interface BenefitProps {
  image: string;
  title: string;
  description: string;
  footnote?: string;
}

/** Shape of a zone file as written by Pages CMS. */
interface ZoneContent extends Omit<ZoneProps, "benefits" | "tools"> {
  order?: number | null;
  benefits?: (Omit<BenefitProps, "footnote"> & { footnote?: string | null })[] | null;
  tools?: string[] | null;
}

function toZoneProps(zone: ZoneContent): ZoneProps {
  const result: ZoneProps = {
    name: zone.name,
    description: zone.description,
    slug: zone.slug,
    color: zone.color,
    image: mediaPath(zone.image),
    facilityImages: (zone.facilityImages ?? []).map((x) => ({
      imageSrc: mediaPath(x.imageSrc),
      altText: x.altText,
    })),
  };
  const benefits = optionalList(zone.benefits);
  if (benefits) {
    result.benefits = benefits.map((b) => {
      const benefit: BenefitProps = { title: b.title, image: mediaPath(b.image), description: b.description };
      const footnote = optionalString(b.footnote);
      if (footnote) benefit.footnote = footnote;
      return benefit;
    });
  }
  const tools = optionalList(zone.tools?.filter((t) => optionalString(t)));
  if (tools) result.tools = tools;
  return result;
}

export const _zonePages: ZoneProps[] = loadCollection<ZoneContent>(
  require.context("../../content/zones", false, /\.json$/)
)
  .sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER) || a.name.localeCompare(b.name))
  .map(toZoneProps);
