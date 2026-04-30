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
}

export const projects: Project[] = [
  {
    slug: "openGrow",
    title: "OpenGrow",
    tagline: "A Notion-inspired platform for community knowledge sharing.",
    year: "2024",
    category: "Full-Stack Web App",
    status: "In Progress",
    overview:
      "OpenGrow is a community-driven platform that allows users to create knowledge hubs, document experiences, and communicate in structured, habit-forming ways. Inspired by Notion's clean document philosophy, it gamifies consistency through a point system.",
    challenge:
      "Building a platform where users can simultaneously organize knowledge like Notion, communicate like Slack, and stay engaged through gamification — without the interface feeling cluttered.",
    solution:
      "A modular, block-based editor was designed where each community hub acts as a workspace. AI-powered topic generation reduces friction in starting conversations, while a persistent points leaderboard fosters daily engagement.",
    outcome:
      "MVP completed with core community hub creation, AI-assisted topic generation, a scheduling workflow, and a real-time gamification system. Currently scaling to onboard early users.",
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB", "OpenAI API"],
    links: [],
    color: "#b4a0ff",
  },
  {
    slug: "bunuport",
    title: "Bunuport Construction",
    tagline: "Enterprise website for a construction management company.",
    year: "2024",
    category: "Full-Stack Web Development",
    status: "Live",
    overview:
      "Bunuport is a premium construction company website and internal management platform built to showcase services, track projects, and handle client inquiries — all from a single, polished interface.",
    challenge:
      "The client needed a website that felt enterprise-grade and trustworthy while also serving as an internal tool for tracking active construction sites and managing documents.",
    solution:
      "A luxury dark-mode website was designed using the MERN stack, with a public-facing portfolio of completed projects and a password-protected internal dashboard for site tracking. All animations were handled by Framer Motion for a premium feel.",
    outcome:
      "A fully operational company website with a 40% reduction in client inquiry turnaround time after the contact and project-tracking system went live.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Framer Motion", "Tailwind CSS"],
    links: [],
    color: "#d4af37",
  },
  {
    slug: "architectural-designs",
    title: "Architectural Design Portfolio",
    tagline: "2D & 3D residential and interior design works.",
    year: "2024 – Present",
    category: "Architectural Design",
    status: "In Progress",
    overview:
      "An ongoing series of residential and commercial design projects spanning 2D floor plans, 3D architectural models, and interior design concepts — created for clients across Bhubaneswar.",
    challenge:
      "Each client presented unique spatial constraints and budget profiles. The challenge was producing designs that felt premium and functional without exceeding client budgets.",
    solution:
      "Using AutoCAD for precision drafting and Revit for 3D visualization, each project began with a client brief, followed by iterative 2D layouts, then a full 3D rendered walkthrough for client approval before construction.",
    outcome:
      "Multiple completed residential projects delivered on time. Currently employed as Junior Site Engineer at Kubic Design Solutions, translating these designs into real construction plans.",
    tech: ["AutoCAD", "Revit", "2D Drafting", "3D Modeling", "Interior Design"],
    links: [],
    color: "#ffffff",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
