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
    footnote?: string
}

export const _zonePages : ZoneProps[] = [ 
    {
        name: "Woodworking",
        slug: "woodworking",
        color: "#d53e4f",
        image: "images/zones/woodworking.webp",
        benefits: [
            {
                title: "SawStop Tablesaw",
                image: "images/benefits/woodworking-sawstop.webp",
                description: "Enjoy the safety and convenience of our tablesaw, with an 8' outfeed table, a 52\" fence, and the SawStop safety system, which instantly retracts the blade if it contacts skin."
            },
            {
                title: "Dust Collection",
                image: "images/benefits/woodworking-dust-collection.webp",
                description: "Breath easy: our workshop is thoughtfully designed, with dust collection ports on each tool and an air filtration system."
            },
            {
                title: "CNC Planing",
                image: "images/benefits/woodworking-flattening.webp",
                description: "Flatten large wood planks (up to 4' x 8') with our CNC router.*",
                footnote: "Requires machine training and certification, or assistance from another member who is trained."
            },
            {
                title: "Stocked Workbenches",
                image: "images/benefits/woodworking-workbench.webp",
                description: "Our woodworking zone includes several large workbenches, each stocked with a variety of hand tools and clamps for your projects."
            },
            {
                title: "Glue-up Station",
                image: "images/benefits/woodworking-glue-up.webp",
                description: "Our dedicated glue-up station is equipped with a large, flat surface and clamps for gluing large projects."
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