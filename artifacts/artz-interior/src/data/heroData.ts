export type HeroSlide = {
  src: string;
  alt: string;
};

export const heroData = {
  eyebrow: "Art Interiorz — Est. 2017 · Nagpur",
  slides: [
    {
      src: "/assets/hero.jpg",
      alt: "Luxury living room interior by Art Interiorz, Nagpur",
    },
    {
      src: "/assets/portfolio-1.jpg",
      alt: "Contemporary living room design",
    },
    {
      src: "/assets/portfolio-3.jpg",
      alt: "Modular kitchen interior",
    },
    {
      src: "/assets/portfolio-2.jpg",
      alt: "Master bedroom interior design",
    },
    {
      src: "/assets/portfolio-4.jpg",
      alt: "Elegant dining and living space",
    },
    {
      src: "/assets/about.jpg",
      alt: "Art Interiorz studio interior showcase",
    },
  ] as HeroSlide[],
  title: {
    line1: "Where dream homes begin",
    emphasis: "with thoughtful",
    line2: "design.",
  },
  subtitle:
    "Best Interior Designer in Nagpur. Our professional interior designers create stylish spaces that reflect your personality and dreams.",
  primaryCta: { label: "Enquire Now", href: "/contact" },
  secondaryCta: { label: "View Portfolio", href: "/portfolio" },
};
