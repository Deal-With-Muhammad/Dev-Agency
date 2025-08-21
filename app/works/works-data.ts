export interface WorkItem {
  id: string
  title: string
  services: string[]
  image: string
  alt: string
}

export interface Industry {
  id: string
  title: string
  image: string
  alt: string
}

export interface CaseStudy {
  id: string
  category: string
  title: string
  description: string
  image: string
  alt: string
}

export const WORK_ITEMS: WorkItem[] = [
  {
    id: "kinimatic",
    title: "Kinimatic",
    services: ["Web Design & Development", "Branding"],
    image: "/mockups/kopit.png",
    alt: "Kinimatic project mockup",
  },
  {
    id: "vita-lenta-1",
    title: "Vita Lenta",
    services: ["Web Design & Development", "Branding"],
    image: "/mockups/ferrati.png",
    alt: "Vita Lenta project mockup",
  },
  {
    id: "peak-creations",
    title: "Peak Creations",
    services: ["Web Design & Development", "Branding"],
    image: "/mockups/kinimatic.webp",
    alt: "Peak Creations project mockup",
  },
  {
    id: "vita-lenta-2",
    title: "Vita Lenta",
    services: ["Web Design & Development", "Branding"],
    image: "/mockups/peak.webp",
    alt: "Vita Lenta project mockup",
  },
  {
    id: "vita-lenta-3",
    title: "Vita Lenta",
    services: ["Web Design & Development", "Branding"],
    image: "/mockups/vitalenta.webp",
    alt: "Vita Lenta project mockup",
  },
  {
    id: "rev-productions",
    title: "Rev Productions",
    services: ["Web Design & Development", "Branding"],
    image: "/mockups/rev.webp",
    alt: "Rev Productions project mockup",
  },
]

export const INDUSTRIES: Industry[] = [
  {
    id: "supply-chain",
    title: "Supply Chain & Logistics",
    image: "/images/test14.webp",
    alt: "Supply Chain & Logistics industry",
  },
  {
    id: "luxury-travel",
    title: "Luxury Travel & Hospitality",
    image: "/images/test17.webp",
    alt: "Luxury Travel & Hospitality industry",
  },
  {
    id: "real-estate",
    title: "Real Estate & Development",
    image: "/images/test18.webp",
    alt: "Real Estate & Development industry",
  },
  {
    id: "technology-ai",
    title: "Technology & AI",
    image: "/images/test19.webp",
    alt: "Technology & AI industry",
  },
]

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "digital-market-future",
    category: "Marketing",
    title: "Digital Market Future",
    description: "The New Era of the Digital Landscape: Where Do We Think the Market Is Going?",
    image: "/casestudy/cs1.webp",
    alt: "Digital Market Future case study",
  },
  {
    id: "tech-evolution-ahead",
    category: "Marketing",
    title: "Tech Evolution Ahead",
    description: "The New Era of the Digital Landscape: Where Do We Think the Market Is Going?",
    image: "/casestudy/cs4.webp",
    alt: "Tech Evolution Ahead case study",
  },
  {
    id: "navigating-trends",
    category: "Marketing",
    title: "Navigating Trends",
    description: "The New Era of the Digital Landscape: Where Do We Think the Market Is Going?",
    image: "/casestudy/cs3.webp",
    alt: "Navigating Trends case study",
  },
  {
    id: "innovation-in-motion",
    category: "Marketing",
    title: "Innovation in Motion",
    description: "The New Era of the Digital Landscape: Where Do We Think the Market Is Going?",
    image: "/casestudy/cs2.webp",
    alt: "Innovation in Motion case study",
  },
]

export const WORKS_CONTENT = {
  hero: {
    title: "Collection of Our Works",
    description:
      "Case studies offer a unique opportunity to explore real-world examples of challenges, solutions, and results.",
  },
  industries: {
    badge: "Industries we serve",
    title: "We have extensive experience across multiple industries",
    description:
      "Our product designers have completed projects in different niches. They know how to add business value and provide.",
  },
  caseStudies: {
    badge: "Case Studies",
    title: "We have a diverse portfolio of successful case studies",
    description:
      "Case studies offer a unique opportunity to explore real-world examples of challenges, solutions, and results.",
  },
  cta: {
    description: "Be our next client in this section!",
    title: "Let us get you a coffee.",
    buttonText: "Book a call",
  },
}
