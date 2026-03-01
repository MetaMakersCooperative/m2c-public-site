export interface ZoneProps {
  slug: string;
  name: string;
  image: string;
  color: string;
  benefits?: BenefitProps[];
}

export interface BenefitProps {
  image: string;
  title: string;
  description: string;
  footnote?: string;
}

export const _zonePages: ZoneProps[] = [
  {
    name: "Woodworking",
    slug: "woodworking",
    color: "#d53e4f",
    image: "images/zones/woodworking.webp",
    benefits: [
      {
        title: "SawStop Tablesaw",
        image: "images/benefits/woodworking-sawstop.webp",
        description:
          "Enjoy the safety and convenience of our tablesaw, with an 8' outfeed table, a 52\" fence, and the SawStop safety system, which instantly retracts the blade if it contacts skin.",
      },
      {
        title: "Dust Collection",
        image: "images/benefits/woodworking-dust-collection.webp",
        description:
          "Breath easy: our workshop is thoughtfully designed, with dust collection ports on each tool and an air filtration system.",
      },
      {
        title: "CNC Planing",
        image: "images/benefits/woodworking-flattening.webp",
        description:
          "Flatten large wood planks (up to 4' x 8') with our CNC router.*",
        footnote:
          "Requires machine training and certification, or assistance from another member who is trained.",
      },
      {
        title: "Stocked Workbenches",
        image: "images/benefits/woodworking-workbench.webp",
        description:
          "Our woodworking zone includes several large workbenches, each stocked with a variety of hand tools and clamps for your projects.",
      },
      {
        title: "Glue-up Station",
        image: "images/benefits/woodworking-glue-up.webp",
        description:
          "Our dedicated glue-up station is equipped with a large, flat surface and clamps for gluing large projects.",
      },
    ],
  },
  {
    name: "Laser Cutting",
    slug: "laser-cutting",
    color: "#f46d43",
    image: "images/zones/laser-cutting.webp",
    benefits: [
      {
        title: "High Precision & Professional-Quality Results",
        image: "images/benefits/laser-quality.webp",
        description:
          "The Aeon Mira 7 offers positioning accuracy of ≤0.01 mm and can engrave high speeds, enabling extremely fine detail on logos, artwork, and text. ",
      },
      {
        title: "Versatile Material Capabilities",
        image: "images/benefits/laser-materials.webp",
        description:
          "Members can cut or engrave a wide range of safe materials including solid wood, plywood, acrylic, and more. Perfect for signs, décor, prototypes, cosplay, and custom gifts.",
      },
      {
        title: "Large Working Area for Bigger Projects",
        image: "images/benefits/laser-work-area.webp",
        description:
          "With a generous 700x450 mm work area, the machine accommodates larger pieces than many hobby-grade lasers, expanding the types of projects members can take on.",
      },
      {
        title: "Reliable, Easy-to-Learn, Maker-Friendly Equipment",
        image: "images/benefits/laser-easy.webp",
        description:
          "The laser is designed with makers in mind, featuring integrated water cooling, constant air assist, autofocus/manual focus options, and straightforward operation using LightBurn software. As a Meta Makers member, you can get up and running quickly with a few hours of training.",
      },
      {
        title: "Ideal for Learning, Prototyping & Small-Batch Production",
        image: "images/benefits/laser-prototype.webp",
        description:
          "Because the tool is fast, precise, and cost-effective to run, it's excellent for first-time makers, iterative prototyping, and producing small runs of products such as ornaments, boxes, signage, or custom merchandise.",
      },
    ],
  },
  {
    name: "CAD/CAM",
    slug: "cad-cam",
    color: "#fdae61",
    image: "images/zones/cad-cam.webp",
    benefits: [
      {
        title: "Mastercam",
        image: "images/benefits/cad-cam-mastercam.webp",
        description:
          "Access professional CAM software for toolpath generation and CNC machine programming, enabling precise manufacturing of your designs.",
      },
      {
        title: "VCarve Software",
        image: "images/benefits/cad-cam-vcarve.webp",
        description:
          "Use VCarve for vector design and 2D/3D carving, perfect for creating detailed cuts and engravings on wood, plastic, and other materials.",
      },
      {
        title: "Design Software Suite",
        image: "images/benefits/cad-cam-design-software.webp",
        description:
          "Design with industry-standard tools including Fusion 360, FreeCAD, and NX, giving you flexibility to choose the software that works best for your projects.",
      },
      {
        title: "Professional Computer Workstations",
        image: "images/benefits/cad-cam-workstation.webp",
        description:
          "Work on powerful, dedicated computer workstations optimized for CAD/CAM applications, ensuring smooth performance for complex designs and large files.",
      },
    ],
  },
  {
    name: "CNC Cutting",
    slug: "cnc",
    color: "#fee08b",
    image: "images/zones/cnc.webp",
    benefits: [
      {
        title: "Training Courses",
        image: "images/benefits/cnc-training.webp",
        description:
          "Access comprehensive training courses to learn CNC operation, safety, and best practices for getting the most out of our equipment.",
      },
      {
        title: "Large 4'x8' CANCAM CNC Router",
        image: "images/benefits/cnc-router.webp",
        description:
          "Work with our spacious CANCAM C2-48 LT CNC router, featuring a 49\" x 98\"x 12\" working area, enabling you to tackle large-scale projects with ease.",
      },
      {
        title: "Professional Speed and Precision",
        image: "images/benefits/cnc-precision.webp",
        description:
          "Experience professional-grade speed and precision with a rugged, vibration-reducing design, state-of-the-art Masso controlls, and a 6HP spindle that achieves speeds up to 24,000 RPM and IPM feed rate up to 1200w. Our advanced spoilboard with threaded inserts allows for speedy and precise material hold-down.",
      },
      {
        title: "Versatile Material Cutting",
        image: "images/benefits/cnc-materials.webp",
        description:
          "Cut wood, aluminum, and plastic with our CNC router, giving you flexibility to work with the materials best suited for your projects.",
      },
      {
        title: "Affordable Machine Time",
        image: "images/benefits/cnc-affordable.webp",
        description:
          "Access professional CNC cutting at an affordable machine time rate, making precision manufacturing accessible for all project budgets.",
      },
    ],
  },
  {
    name: "Electronics",
    slug: "electronics",
    color: "#ffffbf",
    image: "images/zones/electronics.webp",
    benefits: [
      {
        title: "Community Knowledge",
        image: "images/benefits/electronics-community.webp",
        description:
          "Learn from experienced members in our electronics community, getting guidance on circuit design, troubleshooting, and best practices.",
      },
      {
        title: "High Quality Soldering Iron Stations",
        image: "images/benefits/electronics-soldering.webp",
        description:
          "Access professional-grade soldering stations equipped with temperature control and quality tools for precise, reliable connections.",
      },
      {
        title: "Common Components Library",
        image: "images/benefits/electronics-components.webp",
        description:
          "Browse our extensive library of resistors, capacitors, diodes, LEDs, and other common electronic components for your projects.",
      },
      {
        title: "Lab Bench Equipment",
        image: "images/benefits/electronics-lab-equipment.webp",
        description:
          "Use essential lab tools including oscilloscopes, multimeters, and DC power supplies for testing, measuring, and prototyping.",
      },
      {
        title: "All Common Electronics Hand Tools",
        image: "images/benefits/electronics-hand-tools.webp",
        description:
          "Access a complete set of hand tools including wire strippers, crimpers, screwdrivers, and other essentials for electronics work.",
      },
    ],
  },
  {
    name: "Fibre Arts",
    slug: "fibre-arts",
    color: "#e6f598",
    image: "images/zones/fibre-arts.webp",
    benefits: [
      {
        title: "Embroidery Machine",
        image: "images/benefits/fibre-arts-embroidery.webp",
        description:
          'Use our embroidery machine with a 6"x10" workable area for precise, detailed embroidery on your projects.',
      },
      {
        title: "Sewing Machine",
        image: "images/benefits/fibre-arts-sewing.webp",
        description:
          "Access a quality sewing machine for all your stitching and garment-making projects.",
      },
      {
        title: "Large Layout Table",
        image: "images/benefits/fibre-arts-table.webp",
        description:
          "Work on our big table designed for cutting out patterns and assembling your fibre art projects.",
      },
      {
        title: "Free and Donated Fabrics",
        image: "images/benefits/fibre-arts-fabrics.webp",
        description:
          "Browse our collection of free and donated fabrics to find materials for your creative projects.",
      },
      {
        title: "Comprehensive Fibre Arts Supplies",
        image: "images/benefits/fibre-arts-supplies.webp",
        description:
          "Access a variety of supplies including knitting needles, embroidery thread, looms for weaving, irons, and more.",
      },
    ],
  },
  {
    name: "Machining",
    slug: "machining",
    color: "#abdda4",
    image: "images/zones/machining.webp",
    benefits: [
      {
        title: "Manual Mill",
        image: "images/benefits/machining-mill.webp",
        description:
          "Use our manual mill for precision cutting, drilling, and shaping of metal and other materials with fine control over your operations.",
      },
      {
        title: "Lathe",
        image: "images/benefits/machining-lathe.webp",
        description:
          "Access our lathe for turning, threading, and shaping cylindrical workpieces with precision and control.",
      },
      {
        title: "Drill Press",
        image: "images/benefits/machining-drill-press.webp",
        description:
          "Use our drill press for accurate, repeatable drilling operations with consistent depth and alignment.",
      },
      {
        title: "Bench Grinder Hand Tools",
        image: "images/benefits/machining-hand-tools.webp",
        description:
          "Access bench grinders and a complete set of hand tools for tool maintenance, sharpening, and precision machining work.",
      },
      {
        title: "CNC Aluminum and Plastic",
        image: "images/benefits/machining-cnc.webp",
        description:
          "Use our CNC equipment to machine aluminum and plastic with precision for prototyping and production runs.",
      },
    ],
  },
  {
    name: "Stained Glass",
    slug: "stained-glass",
    color: "#66c2a5",
    image: "images/zones/stained-glass.webp",
    benefits: [
      {
        title: "Glass Grinders",
        image: "images/benefits/stained-glass-grinders.webp",
        description:
          "Use our glass grinders for smoothing edges and shaping glass pieces with precision for professional-quality results.",
      },
      {
        title: "Glass Vertical Storage",
        image: "images/benefits/stained-glass-storage.webp",
        description:
          "Access our organized vertical storage system for convenient browsing and storage of glass sheets and pieces.",
      },
      {
        title: "Light Table",
        image: "images/benefits/stained-glass-light-table.webp",
        description:
          "Work on our light table to view glass colors and patterns clearly, making design and assembly easier.",
      },
      {
        title: "Hand Tools for Cutting and Soldering",
        image: "images/benefits/stained-glass-hand-tools.webp",
        description:
          "Access a complete set of hand tools including glass cutters and soldering equipment for creating and joining your pieces.",
      },
      {
        title: "Convenient Location",
        image: "images/benefits/stained-glass-location.webp",
        description:
          "We're the only community stained glass working space available within Windsor, making it easy for you to access our equipment and expertise.",
      },
    ],
  },
  {
    name: "3D Printing",
    slug: "3d-printing",
    color: "#3288bd",
    image: "images/zones/3d-printing.webp",
    benefits: [
      {
        title: "Learning from Experienced Members",
        image: "images/benefits/3d-printing-community.webp",
        description:
          "Learn from and troubleshoot with experienced members in our 3D printing community, getting guidance on design, settings, and best practices.",
      },
      {
        title: "High-Quality Printers",
        image: "images/benefits/3d-printing-printers.webp",
        description:
          "Access easy-to-use, high-quality printers that are maintained by community members to ensure reliable performance for your projects.",
      },
      {
        title: "Heatset Insert Tools",
        image: "images/benefits/3d-printing-inserts.webp",
        description:
          "Use our heatset insert tools to add threaded inserts to your prints for stronger, more durable connections and assemblies.",
      },
      {
        title: "Post Processing Tools",
        image: "images/benefits/3d-printing-post-processing.webp",
        description:
          "Finish your prints with our collection of post-processing tools for sanding, smoothing, and refining your 3D printed objects.",
      },
      {
        title: "Community Materials",
        image: "images/benefits/3d-printing-materials.webp",
        description:
          "Access a shared stock of filament and other materials, making it easy and affordable to experiment with different types and colors.",
      },
    ],
  },
  {
    name: "Crafts",
    slug: "crafts",
    color: "#5e4fa2",
    image: "images/zones/crafts.webp",
    benefits: [
      {
        title: "Cricut Machines",
        image: "images/benefits/crafts-cricut.webp",
        description:
          "Use our two Cricut machines for precision cutting of vinyl, paper, fabric, and more, enabling creative designs and professional results.",
      },
      {
        title: "Multiple Paper Cutters",
        image: "images/benefits/crafts-paper-cutters.webp",
        description:
          "Access a variety of paper cutters for clean, precise cuts on cardstock, paper, and other materials for your craft projects.",
      },
      {
        title: "Comprehensive Craft Supplies",
        image: "images/benefits/crafts-supplies.webp",
        description:
          "Choose from a wide range of tools and supplies for painting, scrapbooking, leather work with punches, button making, and rock tumbling.",
      },
      {
        title: "Design Software Workstation",
        image: "images/benefits/crafts-design-software.webp",
        description:
          "Work on our dedicated computer loaded with design software including PE Design for embroidery, Inkscape, and other creative tools for planning your projects.",
      },
    ],
  },
];
