export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: {
    heading: string;
    body: string;
  }[];
  color: string;
}

export const insights: Insight[] = [
  {
    slug: "ai-reshaping-smart-cities",
    title: "How AI is Reshaping Smart City Architecture",
    excerpt:
      "Artificial intelligence is no longer just a software concept — it is actively influencing how cities are designed, built, and experienced. Here is what architects and developers need to know.",
    date: "April 28, 2026",
    readTime: "5 min read",
    tags: ["AI", "Architecture", "Smart Cities", "Urban Design"],
    color: "#b4a0ff",
    content: [
      {
        heading: "The Convergence of Architecture and Intelligence",
        body: "Architecture has always been driven by the tools of its era. The Renaissance had the compass and protractor; modernism had concrete and steel; today, artificial intelligence is the defining force reshaping how we design the built environment. AI is being embedded into every layer — from generative urban planning to real-time structural analysis and adaptive building management systems.",
      },
      {
        heading: "Generative Design: Beyond Human Intuition",
        body: "Tools like Autodesk Forma and Spacemaker use AI to evaluate thousands of building configurations against parameters like sunlight exposure, wind flow, carbon footprint, and energy efficiency — in seconds. What once took teams of architects months to iterate, AI can explore in an afternoon. This doesn't replace architects; it expands what's imaginable.",
      },
      {
        heading: "Smart Infrastructure: Buildings That Learn",
        body: "Modern smart buildings use IoT sensors combined with ML models to predict energy demand, optimize HVAC systems, detect structural anomalies before they become failures, and adapt occupant comfort in real time. The result is a living structure — one that continuously learns from its environment and inhabitants.",
      },
      {
        heading: "The Human Layer",
        body: "The greatest risk in AI-driven urbanism is the loss of human context. Algorithms optimise for measurable metrics, but a great city is also about culture, memory, and belonging. The most powerful applications of AI in architecture are those that amplify human-centered design — not replace it. As both a developer and an architect, I believe the future belongs to those who can bridge both worlds.",
      },
    ],
  },
  {
    slug: "blueprint-to-browser",
    title: "From Blueprint to Browser: Digital Twins for Residential Design",
    excerpt:
      "Digital twins are transforming how residential projects are planned, sold, and maintained. Bridging AutoCAD drawings with interactive web experiences is the next frontier for modern architectural practice.",
    date: "April 15, 2026",
    readTime: "4 min read",
    tags: ["Architecture", "Web Development", "Digital Twins", "React"],
    color: "#d4af37",
    content: [
      {
        heading: "What Is a Digital Twin?",
        body: "A digital twin is a real-time, dynamic virtual replica of a physical space. In architecture, this means taking a 2D floor plan or 3D Revit model and making it interactive, queryable, and live. Instead of handing a client a static PDF, you hand them a living web experience they can walk through on their phone.",
      },
      {
        heading: "The Technical Bridge",
        body: "The pipeline typically flows from AutoCAD → Revit → IFC export → Three.js or Babylon.js web renderer. Using React Three Fiber, I have been experimenting with converting residential floor plans into interactive 3D walkthroughs that run entirely in the browser — no app install required. Clients can toggle between room layouts, view material options, and measure dimensions directly in the browser.",
      },
      {
        heading: "Real-World Impact on Client Approvals",
        body: "In my experience working on residential designs in Bhubaneswar, the single biggest source of revision cycles was misaligned expectations between what clients imagined and what the 2D plan communicated. Interactive 3D walkthroughs have reduced revision rounds significantly — because clients truly understand what they are approving before a single brick is laid.",
      },
      {
        heading: "What's Next",
        body: "The next step is integrating real-time structural data — allowing the digital twin to reflect actual site conditions as construction progresses. Combined with AI-driven progress tracking, this creates a truly connected loop between the design office and the construction site. This is where architecture and software engineering genuinely converge.",
      },
    ],
  },
  {
    slug: "mern-stack-construction",
    title: "Why the MERN Stack Is Perfect for Construction Management",
    excerpt:
      "Construction companies are finally embracing digital transformation. Here's why the MERN stack is uniquely suited to replace legacy project management workflows with something modern, scalable, and intuitive.",
    date: "April 2, 2026",
    readTime: "6 min read",
    tags: ["MERN Stack", "Full-Stack", "Construction Tech", "Node.js"],
    color: "#ffffff",
    content: [
      {
        heading: "The Problem with Legacy Construction Software",
        body: "Most construction management software is either incredibly expensive (Procore, Autodesk BIM 360), requires heavy desktop installation, or was built a decade ago and feels like it. Small to mid-size construction companies are stuck between spreadsheets and bloated enterprise tools. There's a massive gap in the market for fast, modern, web-first construction management.",
      },
      {
        heading: "Why MERN Works Here",
        body: "MongoDB's flexible schema is perfect for construction data, which is inherently irregular — different project types have wildly different data structures. Express and Node.js make it trivial to build REST APIs for site photos, progress reports, and document management. React's component model maps perfectly onto the modular nature of construction dashboards. And the entire stack is JavaScript, meaning one developer can own the full product.",
      },
      {
        heading: "Building Bunuport",
        body: "When I built the Bunuport Construction web platform, the primary challenge was creating an interface that felt premium for the client-facing side (project portfolio, service showcase) while also being functional for internal operations (site tracking, client inquiry management, document storage). MERN let me build both experiences from a single codebase, with role-based access control differentiating what each user type sees.",
      },
      {
        heading: "The Scalability Advantage",
        body: "As construction projects scale, data grows non-linearly — more subcontractors, more document revisions, more IoT sensor data from site equipment. MongoDB's horizontal scaling and Node.js's non-blocking I/O mean the stack handles this growth naturally without requiring a full architectural rewrite. For a growing construction company, that future-proofing is invaluable.",
      },
    ],
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
