export interface Project {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  category: string;
  status: "Live" | "In Progress" | "Completed";
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
  tech: string[];
  links: { label: string; href: string }[];
  color: string; // accent color for the case study page
  image: string; // main project image
  gallery?: string[]; // additional images
  comparison?: {
    before: string; // Blueprint/Plan
    after: string; // Reality/Render
    labelBefore?: string;
    labelAfter?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "ai-real-estate",
    title: "AI-Based Smart Real Estate Platform",
    tagline: "Full-stack property platform with AI price prediction",
    year: "2025",
    category: "Full Stack Development",
    status: "Completed",
    overview: "Built a comprehensive full-stack web application that revolutionizes property search by integrating AI-driven insights.",
    challenge: "Integrating complex ML models for price prediction while maintaining a seamless, high-performance user experience with real-time maps and filters.",
    solution: "Used Node.js and Express for a robust backend, MongoDB for flexible data storage, and React/EJS for a dynamic frontend. Integrated Python-based ML models for accurate price forecasting.",
    outcome: "A production-ready platform featuring user authentication, advanced property filtering, interactive map search, and data-backed price recommendations.",
    tech: ["Node.js", "Express", "MongoDB", "React", "Python (ML)", "Maps API"],
    links: [],
    color: "#00f2ff",
    image: "/projects/real-estate.jpg",
  },
  {
    slug: "modern-2bhk-house",
    title: "Modern 2BHK Residential House",
    tagline: "Space-optimized residential design with 3D elevation",
    year: "2025",
    category: "Architectural Design",
    status: "Completed",
    overview: "Designed a contemporary 2BHK residential house focusing on maximizing space utilization and natural ventilation.",
    challenge: "Optimizing a compact footprint to include all modern amenities while ensuring a spacious feel and aesthetic appeal.",
    solution: "Created detailed floor plans with strategic furniture placement and realistic 3D elevations using SketchUp to visualize the final aesthetic and lighting.",
    outcome: "A refined architectural concept that balances functionality with modern aesthetics, providing a clear roadmap for construction.",
    tech: ["AutoCAD", "SketchUp", "Architectural Planning", "3D Visualization"],
    links: [],
    color: "#ff007a",
    image: "/projects/house-2bhk-3d.jpg",
    gallery: ["/projects/house-2bhk-plan.jpg"],
    comparison: {
      before: "/projects/house-2bhk-plan.jpg",
      after: "/projects/house-2bhk-3d.jpg",
      labelBefore: "Blueprint",
      labelAfter: "Reality"
    }
  },
  {
    slug: "cafe-interior-design",
    title: "Modern Café Interior Design",
    tagline: "Aesthetic café experience with efficient seating layout",
    year: "2026",
    category: "Interior Design",
    status: "Completed",
    overview: "Conceptualized a stylish café interior designed to provide an immersive and comfortable customer experience.",
    challenge: "Balancing branding requirements with efficient seating layouts and functional kitchen flow in a boutique space.",
    solution: "Developed 2D plans for optimal circulation and 3D visualizations to define the material palette, lighting, and brand identity.",
    outcome: "A visually stunning café design that prioritizes customer comfort and operational efficiency.",
    tech: ["AutoCAD", "SketchUp", "Photoshop", "Interior Architecture"],
    links: [],
    color: "#ffaa00",
    image: "/projects/cafe-interior.jpg",
    gallery: ["/projects/cafe-plan.jpg"],
    comparison: {
      before: "/projects/cafe-plan.jpg",
      after: "/projects/cafe-interior.jpg",
      labelBefore: "2D Layout",
      labelAfter: "3D Visualization"
    }
  },
  {
    slug: "structural-g2-building",
    title: "Structural Analysis of G+2 Building",
    tagline: "Complete structural analysis and design for a residential complex",
    year: "2026",
    category: "Structural Engineering",
    status: "Completed",
    overview: "Performed comprehensive structural analysis and design for a G+2 residential building, ensuring safety and stability.",
    challenge: "Managing complex load distributions and ensuring seismic stability while adhering to strict safety codes.",
    solution: "Used ETABS/STAAD Pro for rigorous analysis, Excel for precise load calculations, and AutoCAD for detailed structural drawings.",
    outcome: "Full set of structural drawings including beam, column, slab, and foundation details ready for construction.",
    tech: ["AutoCAD", "ETABS", "STAAD Pro", "Excel", "Structural Engineering"],
    links: [],
    color: "#4d4dff",
    image: "/projects/structural-design.png",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
