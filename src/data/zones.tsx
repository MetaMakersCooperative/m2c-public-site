export interface ZoneProps {
    slug: string,
    name: string,
    image: string,
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
        image: "images/zones/woodworking.jpg",
        benefits: [
            {
                title: "Sawstop1",
                image: "images/zones/benefits/sawstop.jpg",
                description: "...1"
            },
            {
                title: "Sawstop2",
                image: "images/zones/benefits/sawstop.jpg",
                description: "...2"
            },
            {
                title: "Sawstop3",
                image: "images/zones/benefits/sawstop.jpg",
                description: "...3"
            }
        ]
    },
    {
        name: "Laser Cutting",
        slug: "laser-cutting",
        image: "images/zones/laser-cutting.jpg"
    },
    {
        name: "CAD/CAM",
        slug: "cad-cam",
        image: "images/zones/cad-cam.jpg"
    },
    {
        name: "CNC Cutting",
        slug: "cnc",
        image: "images/zones/cnc.jpg"
    },
    {
        name: "Electronics",
        slug: "electronics",
        image: "images/zones/electronics.jpg"
    },
    {
        name: "Fibre Arts",
        slug: "fibre-arts",
        image: "images/zones/fibre-arts.jpg"
    },
    {
        name: "Machining",
        slug: "machining",
        image: "images/zones/machining.jpg"
    },
    {
        name: "Stained Glass",
        slug: "stained-glass",
        image: "images/zones/stained-glass.jpg"
    },
    {
        name: "3D Printing",
        slug: "3d-printing",
        image: "images/zones/3d-printing.jpg"
    }
];