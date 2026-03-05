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
  image?: string;
  url?: string;
  amount: number;
  year: number;
}

export const _pastSponsors: PastSponsorProps[] = [
  {
    name: "CANCAM CNC Machines",
    image: "logos/sponsors/past/cancam-logo.webp",
    url: "https://www.cancam.ca/",
    amount: 5000,
    year: 2024
  },
  {
    name: "WEtech Alliance",
    image: "logos/sponsors/past/wetech_logo.webp",
    url: "https://www.wetech-alliance.com/",
    amount: 1000,
    year: 2024
  },
  {
    name: "Amherstburg Rapid Prototype",
    image: "logos/sponsors/past/arp-logo.svg",
    url: "https://www.aburgproto.com/",
    amount: 1000,
    year: 2024
  },
  {
    name: "Well Fed Nutrition",
    image: "logos/sponsors/well-fed-nutrition.webp",
    url: "https://www.wellfednutrition.ca/",
    amount: 1000,
    year: 2024
  },
  {
    name: "Actualize Place",
    image: "logos/sponsors/past/actualize-place.webp",
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
    image: "logos/sponsors/past/fivetwo-logo.webp",
    url: "https://www.instagram.com/fivefoottwopottery/",
    amount: 500,
    year: 2024
  },
  {
    name: "Icing Accents",
    image: "logos/sponsors/past/icing-accents.webp",
    url: "http://www.icingaccents.ca/",
    amount: 500,
    year: 2024
  },
  {
    name: "Olde Bat Dice",
    image: "logos/sponsors/past/olde-bat-dice.webp",
    url: "https://www.facebook.com/TheOldeBat",
    amount: 500,
    year: 2024
  },
  {
    name: "Steve Daigle",
    amount: 500,
    year: 2024
  },
  {
    name: "Libro Credit Union",
    image: "logos/sponsors/past/libro.svg",
    url: "https://www.libro.ca/",
    amount: 5826,
    year: 2020
  }
];


export interface OtherSupportProps {
  name: string;
  image?: string;
}
export const _otherSupport: OtherSupportProps[] = [
  {
    name: "Stiemar Bakery",
    image: "logos/sponsors/other/stiemar_logo.webp"
  },
  {
    name: "Sho Studios",
    image: "logos/sponsors/other/sho_logo.webp"
  },
  {
    name: "ReNu Kitchen",
    image: "logos/sponsors/other/renu_kitchen_logo.webp"
  },
  {
    name: "Levigator Press",
    image: "logos/sponsors/other/levigator_press_logo.webp"
  },
  {
    name: "Guardian Glass",
    image: "logos/sponsors/other/guardian_glass_logo.webp"
  },
  {
    name: "Fusion Fiber Arts",
    image: "logos/sponsors/other/fusion_fiber_arts_logo.webp"
  },
  {
    name: "Empire Communications",
    image: "logos/sponsors/other/empire-logo.webp"
  },
  {
    name: "Bike Windsor Essex",
    image: "logos/sponsors/other/bike_windsor_logo.webp"
  }
];