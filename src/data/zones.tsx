export interface ZoneProps {
    slug: string,
    name: string,
    image: string,
    color: string,
    benefits?: BenefitProps[]
}

export interface BenefitProps {
    image: string
    title: string
    description: string
}

export const _zonePages : ZoneProps[] = [ 
    {
        name: "Woodworking",
        slug: "woodworking",
        color: "#d53e4f",
        image: "images/zones/woodworking.webp",
        benefits: [
            {
                title: "Sawstop1",
                image: "images/zones/benefits/sawstop.webp",
                description: "...1"
            },
            {
                title: "Sawstop2",
                image: "images/zones/benefits/sawstop.webp",
                description: "...2"
            },
            {
                title: "Sawstop3",
                image: "images/zones/benefits/sawstop.webp",
                description: "...3"
            }
        ]
    },
    {
        name: "Laser Cutting",
        slug: "laser-cutting",
        color: "#f46d43",
        image: "images/zones/laser-cutting.webp"
    },
    {
        name: "CAD/CAM",
        slug: "cad-cam",
        color: "#fdae61",
        image: "images/zones/cad-cam.webp"
    },
    {
        name: "CNC Cutting",
        slug: "cnc",
        color: "#fee08b",
        image: "images/zones/cnc.webp"
    },
    {
        name: "Electronics",
        slug: "electronics",
        color: "#ffffbf",
        image: "images/zones/electronics.webp"
    },
    {
        name: "Fibre Arts",
        slug: "fibre-arts",
        color: "#e6f598",
        image: "images/zones/fibre-arts.webp"
    },
    {
        name: "Machining",
        slug: "machining",
        color: "#abdda4",
        image: "images/zones/machining.webp"
    },
    {
        name: "Stained Glass",
        slug: "stained-glass",
        color: "#66c2a5",
        image: "images/zones/stained-glass.webp"
    },
    {
        name: "3D Printing",
        slug: "3d-printing",
        color: "#3288bd",
        image: "images/zones/3d-printing.webp"
    }
];