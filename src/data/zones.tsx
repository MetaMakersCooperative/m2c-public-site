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
        name: "Laser Cutting & Engraving",
        slug: "laser-cutting",
        color: "#f46d43",
        image: "images/zones/laser-cutting.webp",
        benefits: [
            {
                title: "High Precision & Professional-Quality Results",
                image: "images/benefits/laser-quality.webp",
                description: "The Aeon Mira 7 offers positioning accuracy of ≤0.01 mm and can engrave high speeds, enabling extremely fine detail on logos, artwork, and text. "
            },
            {
                title: "Versatile Material Capabilities",
                image: "images/benefits/laser-materials.webp",
                description: "Members can cut or engrave a wide range of safe materials including solid wood, plywood, acrylic, and more. Perfect for signs, décor, prototypes, cosplay, and custom gifts."
            },
            {
                title: "Large Working Area for Bigger Projects",
                image: "images/benefits/laser-work-area.webp",
                description: "With a generous 700x450 mm work area, the machine accommodates larger pieces than many hobby-grade lasers, expanding the types of projects members can take on."
            },
            {
                title: "Reliable, Easy-to-Learn, Maker-Friendly Equipment",
                image: "images/benefits/laser-easy.webp",
                description: "The laser is designed with makers in mind, featuring integrated water cooling, constant air assist, autofocus/manual focus options, and straightforward operation using LightBurn software. As a Meta Makers member, you can get up and running quickly with a few hours of training."
            },
            {
                title: "Ideal for Learning, Prototyping & Small-Batch Production",
                image: "images/benefits/laser-prototype.webp",
                description: "Because the tool is fast, precise, and cost-effective to run, it's excellent for first-time makers, iterative prototyping, and producing small runs of products such as ornaments, boxes, signage, or custom merchandise."
            },
        ]
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