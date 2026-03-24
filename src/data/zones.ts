import { ImageDetail } from "./facility";

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

export const _zonePages: ZoneProps[] = [
  {
    name: "Woodworking",
    description: "Do you need access to workshop space and tools to complete a woodworking project? Become a member and enjoy 24/7 access to our fully-equipped workshop!",
    slug: "woodworking",
    color: "#d53e4f",
    image: "images/zones/woodworking.webp",
    facilityImages: [
      {
          imageSrc: "images/facility/woodworking-facility-1.webp",
          altText: "Woodworking Area"
      },    
      {
          imageSrc: "images/facility/woodworking-facility-2.webp",
          altText: "Woodworking Area"
      },    
      {
          imageSrc: "images/facility/woodworking-facility-3.webp",
          altText: "Woodworking Area"
      },    
    ],
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
    tools: 
    [
      "Table Saw",
      "Band Saw",
      "Miter Saw",
      "Jig Saw",
      "Reciprocating Saw",
      "Circular Saw",
      "Router",
      "Drill press",
      "Scroll saw",
      "Drum sander",
      "Palm sander",
      "Belt sander",
      "Wood lathe",
      "Handheld drill and driver",
      "Vise",
      "Hand saws",
      "Pocket Hole Jig",
      "Biscuit Jig",
      "Planer",
      "CNC Router",
      "Chisels and hand planes",
    ]
  },
  {
    name: "Laser Cutting",
    description: "Are you interested in laser cutting and engraving and need access to equipment and some guidance? Become a member and enjoy 24/7 access to our professional-quality machine!",
    slug: "laser-cutting",
    color: "#f46d43",
    image: "images/zones/laser-cutting.webp",
    facilityImages: [
      {
          imageSrc: "images/facility/laser-facility-1.webp",
          altText: "Laser Area"
      },    
      {
          imageSrc: "images/facility/tech-facility-1.webp",
          altText: "Tech Area"
      }   
    ],
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
    description: "Are you interested in Computer Aided Design and Manufacturiong (CAD/CAM) and need access to software, workstations and mentorship? Become a member and enjoy 24/7 access to our CAD/CAM workstations and a community of members who share your interest!",
    slug: "cad-cam",
    color: "#fdae61",
    image: "images/zones/cad-cam.webp",
    facilityImages: [
      {
          imageSrc: "images/zones/cad-cam.webp",
          altText: "Computer Area"
      },    
      {
          imageSrc: "images/benefits/cad-cam-workstation.webp",
          altText: "Computer Area"
      },    
      {
          imageSrc: "images/facility/electronics-facility-1.webp",
          altText: "Tech Area"
      }
    ],
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
    description: "Are you interested in CNC cutting and need access to equipment and training? Become a member and enjoy metered access to our professional-quality machine and attend our affordable training courses!",
    slug: "cnc",
    color: "#fee08b",
    image: "images/zones/cnc.webp",
    facilityImages: [
      {
          imageSrc: "images/zones/cnc.webp",
          altText: "CNC Area"
      },    
      {
          imageSrc: "images/facility/woodworking-facility-1.webp",
          altText: "Woodworking Area"
      }
    ],
    benefits: [
      {
        title: "Training Courses",
        image: "images/benefits/cnc-training.webp",
        description:
          "Access comprehensive training courses to learn CNC operation, safety, and best practices for getting the most out of our equipment.",
      },
      {
        title: "Large 4'x8' CANCAM CNC Router",
        image: "images/zones/cnc.webp",
        description:
          "Work with our spacious CANCAM C2-48 LT CNC router, featuring a 49\" x 98\"x 12\" working area, enabling you to tackle large-scale projects with ease.",
      },
      {
        title: "Professional Speed and Precision",
        image: "images/benefits/cnc-large.webp",
        description:
          "Experience professional-grade speed and precision with a rugged, vibration-reducing design, state-of-the-art Masso controls, and a 6HP spindle that achieves speeds up to 24,000 RPM and IPM feed rate up to 1200w. Our advanced spoilboard with threaded inserts allows for speedy and precise material hold-down.",
      },
      {
        title: "Versatile Material Cutting",
        image: "images/benefits/machining-cnc.webp",
        description:
          "Cut wood and plastic with our CNC router, giving you flexibility to work with the materials best suited for your projects.",
        footnote: "Our machine can also cut Aluminum but requires additional tooling and special approval."
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
    description: "Are you interested in electronics and need access to tools and advice? Become a member and enjoy 24/7 access to our electronics workstation, with soldering irons and tools, and join a community of hobbyists and tinkerers who share your interest!",
    slug: "electronics",
    color: "#ffffbf",
    image: "images/zones/electronics.webp",
    facilityImages: [
      {
          imageSrc: "images/facility/electronics-facility-2.webp",
          altText: "Electronics Area"
      },    
      {
          imageSrc: "images/facility/electronics-facility-1.webp",
          altText: "Tech Area"
      },  
      {
          imageSrc: "images/facility/tech-facility-1.webp",
          altText: "Tech Area"
      }
    ],
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
    description: "Are you interested in sewing, embroidery, or other fibre arts and need access to sewing machines and other resources? Become a member and enjoy 24/7 access to our equipment and a community of makers who share your interest!",
    slug: "fibre-arts",
    color: "#e6f598",
    image: "images/zones/fibre-arts.webp",
    facilityImages: [
      {
          imageSrc: "images/facility/classroom-facility-1.webp",
          altText: "Class Area"
      },    
      {
          imageSrc: "images/facility/classroom-facility-2.webp",
          altText: "Class Area"
      },  
      {
          imageSrc: "images/zones/fibre-arts.webp",
          altText: "Embroidery Area"
      }
    ],
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
    description: "Are you interested in machining and need access to equipment? Become a member and enjoy 24/7 access to our machine shop and community of makers who share your interest!",
    slug: "machining",
    color: "#abdda4",
    image: "images/zones/machining.webp",
    facilityImages: [
      {
          imageSrc: "images/zones/machining.webp",
          altText: "Machining Area"
      },
      {
          imageSrc: "images/benefits/machining-lathe.webp",
          altText: "Machining Area"
      }
    ],
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
        title: "CNC Plastic",
        image: "images/benefits/machining-cnc.webp",
        description:
          "Use our CNC equipment to machine plastic with precision for prototyping and production runs.",
        footnote: "Our machine can also cut Aluminum but requires additional tooling and special approval."
      },
    ],
  },
  {
    name: "Stained Glass",
    description: "Are you interested in stained glass need access to tools and workspace? Become a member and enjoy 24/7 access to our stained glass zone and a community of makers who share your interest!",
    slug: "stained-glass",
    color: "#66c2a5",
    image: "images/zones/stained-glass.webp",
    facilityImages: [
      {
          imageSrc: "images/facility/stained-glass-facility-1.webp",
          altText: "Stained Glass Area"
      },
      {
          imageSrc: "images/facility/stained-glass-facility-2.webp",
          altText: "Stained Glass Area"
      }
    ],
    benefits: [
      // {
      //   title: "Light Table",
      //   image: "images/benefits/stained-glass-light-table.webp",
      //   description:
      //     "Work on our light table to view glass colors and patterns clearly, making design and assembly easier.",
      // },
      {
        title: "Glass Cutting and Grinding Tools",
        image: "images/facility/stained-glass-facility-2.webp",
        description:
          "Enjoy our dedicated workspace for cutting and grinding stained glass sheets and pieces. We isolated this area to keep glass shards and dust under control as much as possible.",
      },
      {
        title: "Vertical and Horizontal Storage",
        image: "images/benefits/stained-glass-storage.webp",
        description:
          "Members can organize and store their own glass sheets in convenient vertical storage cubbies. Access a range of hand tools for scoring and snapping. Store your work-in-progress projects on horizontal storage trays.",
      },
      {
        title: "Layout and Soldering Station",
        image: "images/benefits/stained-glass-hand-tools.webp",
        description:
          "Layout, foil and solder your creations on our dedicated solder station.  Use pins to hold your layout in place while you work.",
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
    description: "Are you interested in 3D Printing and need access to equipment and advice? Become a member and enjoy 24/7 access to our 3D printers and a community of experienced makers!",
    slug: "3d-printing",
    color: "#3288bd",
    image: "images/zones/3d-printing.webp",
    facilityImages: [
      {
          imageSrc: "images/zones/3d-printing.webp",
          altText: "3D Printer Area"
      },    
      {
          imageSrc: "images/facility/tech-facility-1.webp",
          altText: "Tech Area"
      },    
      {
          imageSrc: "images/facility/electronics-facility-1.webp",
          altText: "Tech Area"
      }   
    ],
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
        title: "Heat-set Insert Tools",
        image: "images/benefits/3d-printing-inserts.webp",
        description:
          "Use our heat-set insert tools to add threaded inserts to your prints for stronger, more durable connections and assemblies.",
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
    description: "Are you interested in attending or teaching arts and crafts classes and need access to classroom space? Become a member and plan classes in our makerspace!",
    slug: "crafts",
    color: "#5e4fa2",
    image: "images/zones/crafts.webp",
    facilityImages: [
      {
          imageSrc: "images/facility/classroom-facility-1.webp",
          altText: "Class Area"
      },    
      {
          imageSrc: "images/facility/classroom-facility-2.webp",
          altText: "Class Area"
      },    
      {
          imageSrc: "images/benefits/fibre-arts-fabrics.webp",
          altText: "Cricut station"
      },  
    ],
    benefits: [
      {
        title: "Cricut Machines",
        image: "images/benefits/crafts-cricut.webp",
        description:
          "Use our two Cricut machines to cut vinyl, paper, fabric, and more. Perfect for making custom decals, cards, and craft projects with precision and ease.",
      },
      {
        title: "Crafting Supplies",
        image: "images/benefits/crafts-supplies.webp",
        description:
          "Choose from a wide range of tools and supplies for cutting paper, painting, scrapbooking, leather work, button making, and rock tumbling.",
      },
      {
        title: "Design Software",
        image: "images/benefits/crafts-design-software.webp",
        description:
          "Work on our dedicated computer loaded with design software including PE Design for embroidery, Inkscape, and other creative tools for planning your projects.",
      },
      {
        title: "Classroom Space",
        image: "images/benefits/crafts-classroom.webp",
        description:
          "Host workshops, classes, and group projects in our crafts zone, which includes a large table and space for up to 15 attendees. Request a copy of our event form for booking details.",
      },
    ],
  },
];
