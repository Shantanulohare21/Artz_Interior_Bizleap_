const CDN = (slug: string) =>
  `https://artinteriorz.com/wp-content/uploads/${slug}`;

export type ProjectCategory = "Residential" | "Hospitality" | "Kitchen" | "Renovation";

export type Project = {
  img: string;
  title: string;
  category: ProjectCategory;
  location: string;
  description?: string;
  span?: string;
};

export const portfolioData = {
  label: "Selected Work",
  heading: {
    prefix: "Portfolio of",
    emphasis: "considered",
    suffix: "interiors.",
  },
  categories: ["All", "Residential", "Hospitality", "Kitchen", "Renovation"] as const,
  projects: [
    {
      img: CDN("2025/12/LIVING-ROOM1.1-scaled.jpg"),
      title: "Sterling Living Room",
      category: "Residential" as ProjectCategory,
      location: "Manish Nagar, Nagpur",
      description: "A warm, layered living room with bespoke joinery, curated art and a palette of ivory, gold and charcoal.",
      span: "md:row-span-2",
    },
    {
      img: CDN("2025/07/11.png"),
      title: "Ivory Modular Kitchen",
      category: "Kitchen" as ProjectCategory,
      location: "Somalwada, Nagpur",
      description: "An L-shaped modular kitchen with premium quartz countertops and brushed brass fittings.",
    },
    {
      img: CDN("2025/06/holl-1.png"),
      title: "Grand Hotel Lobby",
      category: "Hospitality" as ProjectCategory,
      location: "Civil Lines, Nagpur",
      description: "A statement hospitality lobby with travertine flooring, layered lighting and curated art installations.",
      span: "md:row-span-2",
    },
    {
      img: CDN("2025/12/BEDROOM1.1-scaled.jpg"),
      title: "Master Bedroom Suite",
      category: "Residential" as ProjectCategory,
      location: "Shilpa Nagar, Nagpur",
      description: "A serene master bedroom with panelled walls, mood lighting and custom wardrobe design.",
    },
    {
      img: CDN("2025/06/Mask-group.png"),
      title: "Modern Home Renovation",
      category: "Renovation" as ProjectCategory,
      location: "Dharampeth, Nagpur",
      description: "A full-home renovation that blends contemporary design with the character of an older Nagpur bungalow.",
    },
    {
      img: CDN("2025/06/holl-3-1.png"),
      title: "The Arora Dining Room",
      category: "Hospitality" as ProjectCategory,
      location: "Wardha Road, Nagpur",
      description: "A signature restaurant dining space with custom millwork, warm lighting and artisan tile work.",
    },
  ] as Project[],
};
