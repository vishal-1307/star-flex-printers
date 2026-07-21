// Drives the services grid, the enquiry-form dropdown, and (from Phase 3)
// individual /services/[slug] pages. icon = key into the icon set in
// Icon.astro. category tags are for filtering by customer type
// (schools, weddings, businesses, etc.) — not marketing claims.
export const services = [
  {
    name: "Flex Banner Printing",
    slug: "flex-banner-printing",
    icon: "banner",
    blurb: "Any size flex banner, fast turnaround",
    category: ["shops", "restaurants", "political-campaigns", "businesses", "schools"],
  },
  {
    name: "Hoarding Board",
    slug: "hoarding-board",
    icon: "hoarding",
    blurb: "Large hoardings, from shopfront to highway",
    category: ["shops", "businesses", "political-campaigns"],
  },
  {
    name: "LED Board / LED Letter / Name Plate",
    slug: "led-board-letter-name-plate",
    icon: "led",
    blurb: "Bright LED boards and letters",
    category: ["shops", "businesses", "hospitals"],
  },
  {
    name: "Light Board",
    slug: "light-board",
    icon: "light",
    blurb: "Backlit boards that stand out at night",
    category: ["shops", "businesses"],
  },
  {
    name: "Steel Letter / Fiber Letter",
    slug: "steel-fiber-letter",
    icon: "letter3d",
    blurb: "3D steel and fiber letters",
    category: ["businesses", "hospitals", "schools"],
  },
  {
    name: "ACP Work",
    slug: "acp-work",
    icon: "acp",
    blurb: "ACP sheet work for a modern shopfront",
    category: ["shops", "businesses"],
  },
  {
    name: "Visiting Card",
    slug: "visiting-card",
    icon: "card",
    blurb: "Professional visiting cards",
    category: ["businesses", "ngos"],
  },
  {
    name: "ID Card",
    slug: "id-card",
    icon: "idcard",
    blurb: "ID cards for schools, offices and events",
    category: ["schools", "colleges", "hospitals", "businesses"],
  },
  {
    name: "Wedding Card (Shaadi Card)",
    slug: "wedding-card",
    icon: "wedding",
    blurb: "Beautiful wedding cards for every budget",
    category: ["weddings"],
  },
  {
    name: "Letterhead",
    slug: "letterhead",
    icon: "letterhead",
    blurb: "Business letterheads and bill books",
    category: ["businesses", "ngos", "schools"],
  },
  {
    name: "Digital / Offset / Screen Printing",
    slug: "digital-offset-screen-printing",
    icon: "press",
    blurb: "All three printing methods, one place",
    category: ["political-campaigns", "businesses", "ngos"],
  },
  {
    name: "Sticker / Name Plate",
    slug: "sticker-name-plate",
    icon: "sticker",
    blurb: "Stickers and name plates, every size",
    category: ["shops", "businesses", "hospitals"],
  },
] as const;

export type Service = (typeof services)[number];
