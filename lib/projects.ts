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
    slug: "project1",
    title: "Project1",
    tagline: "Tag line of project 1",
    year: "2024",
    category: "catgeory of project 1",
    status: "In Progress",
    overview: "overview of project 1",
    challenge: "challenge of project 1",
    solution: "solution of project 1",
    outcome: "outcome of project 1",
    tech: ["tech1", "tech2", "tech3", "tech4", "tech5", "tech6"],
    links: [],
    color: "#9237d4",
  },
  {
    slug: "project2",
    title: "project 2",
    tagline: "Tagline of project 2",
    year: "2024",
    category: "catgeory of project 2",
    status: "In Progress",
    overview: "overview of project 2",
    challenge: "challenge of project 2",
    solution: "solution of project 2",
    outcome: "outcome of project 2",
    tech: ["tech1", "tech2", "tech3", "tech4", "tech5", "tech6"],
    links: [],
    color: "#d4af37",
  },
  {
    slug: "project3",
    title: "project 3",
    tagline: "Tagline of project 3",
    year: "2024",
    category: "catgeory of project 3",
    status: "Completed",
    overview: "overview of project 3",
    challenge: "challenge of project 3",
    solution: "solution of project 3",
    outcome: "outcome of project 3",
    tech: ["tech1", "tech2", "tech3", "tech4", "tech5", "tech6"],
    links: [],
    color: "#059669",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
