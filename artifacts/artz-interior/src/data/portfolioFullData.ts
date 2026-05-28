const IMG = (slug: string) =>
  `https://artinteriorz.com/wp-content/uploads/${slug}`;

export type GalleryCategory =
  | "All"
  | "BedRoom"
  | "Modular Kitchen"
  | "Living Room"
  | "Others";

export type GalleryItem = {
  src: string;
  category: Exclude<GalleryCategory, "All">;
  alt: string;
};

export const galleryCategories: readonly GalleryCategory[] = [
  "All",
  "BedRoom",
  "Modular Kitchen",
  "Living Room",
  "Others",
];

export const galleryItems: GalleryItem[] = [
  { src: IMG("2025/12/BEDROOM1.1-scaled.jpg"), category: "BedRoom", alt: "Master bedroom design" },
  { src: IMG("2025/12/BEDROOM1.2.pg_-scaled.jpg"), category: "BedRoom", alt: "Bedroom interior" },
  { src: IMG("2025/12/BEDROOM1.3-scaled.jpg"), category: "BedRoom", alt: "Bedroom wardrobe design" },
  { src: IMG("2025/12/BEDROOM2.1-scaled.jpg"), category: "BedRoom", alt: "Modern bedroom" },
  { src: IMG("2025/12/BEDROOM2.2-scaled.jpg"), category: "BedRoom", alt: "Bedroom with study" },
  { src: IMG("2025/12/BEDROOM2.3-scaled.jpg"), category: "BedRoom", alt: "Bedroom view" },
  { src: IMG("2025/12/BEDROOM2-scaled.jpg"), category: "BedRoom", alt: "Guest bedroom" },
  { src: IMG("2025/12/BEDROOM-3.5-1-scaled.jpg"), category: "BedRoom", alt: "Luxury bedroom" },
  { src: IMG("2025/12/BEDROOM-3.4-2-scaled.jpg"), category: "BedRoom", alt: "Bedroom interior" },
  { src: IMG("2025/12/BEDROOM-3.6-2-1-scaled.jpg"), category: "BedRoom", alt: "Bedroom panelling" },
  { src: IMG("2025/12/BEDROOM-3.6-2-scaled.jpg"), category: "BedRoom", alt: "Bedroom paneling" },
  { src: IMG("2025/12/BEDROOM-3.7-1-scaled.jpg"), category: "BedRoom", alt: "Bedroom design" },
  { src: IMG("2025/12/BEDROOM-3.1-1-scaled.jpg"), category: "BedRoom", alt: "Bedroom layout" },
  { src: IMG("2025/12/BEDROOM-3.2-2-scaled.jpg"), category: "BedRoom", alt: "Bedroom finishes" },
  { src: IMG("2025/12/BEDROOM-3.3-2-scaled.jpg"), category: "BedRoom", alt: "Bedroom interior" },
  { src: IMG("2025/12/BEDROOM-3.3-1-scaled.jpg"), category: "BedRoom", alt: "Bedroom design" },
  { src: IMG("2025/12/BEDROOM-3.7-scaled.jpg"), category: "BedRoom", alt: "Bedroom" },
  { src: IMG("2025/11/MASTER-BR-1-scaled.jpg"), category: "BedRoom", alt: "Master bedroom" },
  { src: IMG("2025/11/KIDS-BR-4-scaled.jpg"), category: "BedRoom", alt: "Kids bedroom" },
  { src: IMG("2025/06/bed-room-2.png"), category: "BedRoom", alt: "Bedroom" },
  { src: IMG("2025/06/bed-room-4.png"), category: "BedRoom", alt: "Bedroom" },
  { src: IMG("2025/06/bed-room.png"), category: "BedRoom", alt: "Bedroom" },
  { src: IMG("2025/06/bed-room-3.png"), category: "BedRoom", alt: "Bedroom" },
  { src: IMG("2025/06/bed-room-1.png"), category: "BedRoom", alt: "Bedroom" },

  { src: IMG("2025/12/LIVING-ROOM1.1-scaled.jpg"), category: "Living Room", alt: "Living room design" },
  { src: IMG("2025/12/LIVING-ROOM1.2-scaled.jpg"), category: "Living Room", alt: "Living room interior" },
  { src: IMG("2025/12/LIVING-ROOM1.3-scaled.jpg"), category: "Living Room", alt: "Living room sofa" },
  { src: IMG("2025/12/LIVING-ROOM1.4-scaled.jpg"), category: "Living Room", alt: "Living room TV unit" },
  { src: IMG("2025/12/LIVING-ROOM1.5-scaled.jpg"), category: "Living Room", alt: "Living room corner" },
  { src: IMG("2025/12/LIVING-ROOM1.6-scaled.jpg"), category: "Living Room", alt: "Living room lighting" },
  { src: IMG("2025/12/LIVING-ROOM1.8-scaled.jpg"), category: "Living Room", alt: "Living room view" },
  { src: IMG("2025/11/LIVING-1-scaled.jpg"), category: "Living Room", alt: "Living room" },
  { src: IMG("2025/06/holl.png"), category: "Living Room", alt: "Living hall" },
  { src: IMG("2025/06/holl-7.png"), category: "Living Room", alt: "Living hall" },
  { src: IMG("2025/06/holl-5.png"), category: "Living Room", alt: "Living hall" },
  { src: IMG("2025/06/holl-6.png"), category: "Living Room", alt: "Living hall" },
  { src: IMG("2025/06/holl-4.png"), category: "Living Room", alt: "Living hall" },
  { src: IMG("2025/06/holl-1.png"), category: "Living Room", alt: "Living hall" },
  { src: IMG("2025/06/holl-3.png"), category: "Living Room", alt: "Living hall" },
  { src: IMG("2025/06/holl-13.png"), category: "Living Room", alt: "Living hall" },
  { src: IMG("2025/06/holl-12.png"), category: "Living Room", alt: "Living hall" },
  { src: IMG("2025/06/holl-2.png"), category: "Living Room", alt: "Living hall" },
  { src: IMG("2025/06/holl-10.png"), category: "Living Room", alt: "Living hall" },
  { src: IMG("2025/06/holl-9.png"), category: "Living Room", alt: "Living hall" },
  { src: IMG("2025/06/holl-5-1.png"), category: "Living Room", alt: "Living hall" },
  { src: IMG("2025/06/holl-8-1.png"), category: "Living Room", alt: "Living hall" },
  { src: IMG("2025/06/holl-4-1.png"), category: "Living Room", alt: "Living hall" },
  { src: IMG("2025/06/holl-3-1.png"), category: "Living Room", alt: "Living hall" },
  { src: IMG("2025/06/holl-7-1.png"), category: "Living Room", alt: "Living hall" },

  { src: IMG("2025/07/11.png"), category: "Modular Kitchen", alt: "Modular kitchen" },
  { src: IMG("2025/07/9.png"), category: "Modular Kitchen", alt: "Kitchen design" },
  { src: IMG("2025/07/10.png"), category: "Modular Kitchen", alt: "Kitchen layout" },
  { src: IMG("2025/07/12.png"), category: "Modular Kitchen", alt: "Kitchen island" },
  { src: IMG("2025/07/13.png"), category: "Modular Kitchen", alt: "Kitchen finish" },
  { src: IMG("2025/07/14.png"), category: "Modular Kitchen", alt: "Modern kitchen" },
  { src: IMG("2025/07/15.png"), category: "Modular Kitchen", alt: "Kitchen storage" },
  { src: IMG("2025/07/16.png"), category: "Modular Kitchen", alt: "Kitchen interior" },
  { src: IMG("2025/07/17.png"), category: "Modular Kitchen", alt: "Kitchen design" },
  { src: IMG("2025/07/18.png"), category: "Modular Kitchen", alt: "Modular kitchen" },
  { src: IMG("2025/07/19.png"), category: "Modular Kitchen", alt: "Kitchen interior" },
  { src: IMG("2025/07/20.png"), category: "Modular Kitchen", alt: "Kitchen finish" },
  { src: IMG("2025/07/21.png"), category: "Modular Kitchen", alt: "Kitchen design" },

  { src: IMG("2025/11/ENTRANCE-1-scaled.jpg"), category: "Others", alt: "Entrance foyer" },
  { src: IMG("2025/11/DINING-2.1-scaled.jpg"), category: "Others", alt: "Dining area" },
  { src: IMG("2025/12/BALCONY3-1-scaled.jpg"), category: "Others", alt: "Balcony design" },
  { src: IMG("2025/06/home-theater.png"), category: "Others", alt: "Home theater" },
  { src: IMG("2025/06/home-theater-1.png"), category: "Others", alt: "Home theater" },
  { src: IMG("2025/06/home-theater-2.png"), category: "Others", alt: "Home theater" },
  { src: IMG("2025/06/unit.png"), category: "Others", alt: "Custom unit" },
  { src: IMG("2025/06/Mask-group-3.png"), category: "Others", alt: "Detail" },
  { src: IMG("2025/06/Mask-group-1-1.png"), category: "Others", alt: "Detail" },
  { src: IMG("2025/06/Mask-group-1.png"), category: "Others", alt: "Detail" },
  { src: IMG("2025/06/Mask-group-2.png"), category: "Others", alt: "Detail" },
];
