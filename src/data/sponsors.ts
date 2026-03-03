export interface SponsorProps {
  name: string;
  url: string;
  image: string;
  tier: "platinum" | "gold" | "silver" | "bronze";
  amount: number;
}

export const _sponsors: SponsorProps[] = [
  {
    name: "ProtoScan3D",
    url: "https://www.protoscan3d.com/",
    image: "logos/sponsors/proto-scan-3d.webp",
    tier: "bronze",
    amount: 200
  },
  {
    name: "Well Fed Nutrition",
    url: "https://www.wellfednutrition.ca/",
    image: "logos/sponsors/well-fed-nutrition.webp",
    tier: "bronze",
    amount: 200
  }
];

export interface PastSponsorProps {
  name: string;
  url?: string;
  amount: number;
  year: number;
}

export const _pastSponsors: PastSponsorProps[] = [
  {
    name: "CANCAM CNC Machines",
    url: "https://www.cancam.ca/",
    amount: 5000,
    year: 2024
  },
  {
    name: "WEtech Alliance",
    url: "https://www.wetech-alliance.com/",
    amount: 1000,
    year: 2024
  },
  {
    name: "Amherstburg Rapid Prototype",
    url: "https://www.aburgproto.com/",
    amount: 1000,
    year: 2024
  },
  {
    name: "Well Fed Nutrition",
    url: "https://www.wellfednutrition.ca/",
    amount: 1000,
    year: 2024
  },
  {
    name: "Actualize Place",
    url: "https://actualize.place/",
    amount: 1000,
    year: 2024
  },
  {
    name: "Shawn Wilson",
    amount: 1000,
    year: 2024
  },
  {
    name: "Five Foot Two Pottery",
    url: "https://www.instagram.com/fivefoottwopottery/",
    amount: 500,
    year: 2024
  },
  {
    name: "Icing Accents",
    url: "http://www.icingaccents.ca/",
    amount: 500,
    year: 2024
  },
  {
    name: "Olde Bat Dice",
    url: "https://www.facebook.com/TheOldeBat",
    amount: 500,
    year: 2024
  },
  {
    name: "Steve Daigle",
    amount: 500,
    year: 2024
  }
];