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
      src: "/assets/hero1.jpeg",
      alt: "Contemporary living room design",
    },
    {
      src: "/assets/hero2.jpeg",
      alt: "Modular kitchen interior",
    },
    {
      src: "/assets/hero3.JPG",
      alt: "Master bedroom interior design",
    },
    {
      src: "/assets/hero4.jpg",
      alt: "Elegant dining and living space",
    },
    {
      src: "/assets/hero5.jpg",
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
