// Customer-type landing pages (request #10) — same services.ts data,
// filtered by the category[] tags already on each service. No new
// claims: descriptions just name which of our real services apply.
export const categories = [
  { slug: "schools", label: "Schools", icon: "idcard", description: "ID cards, certificates, banners and letterheads for schools." },
  { slug: "colleges", label: "Colleges", icon: "idcard", description: "ID cards, letterheads and event banners for colleges." },
  { slug: "hospitals", label: "Hospitals", icon: "led", description: "Signage, ID cards and name plates for hospitals and clinics." },
  { slug: "shops", label: "Shops", icon: "hoarding", description: "Signboards, banners and stickers to help your shop stand out." },
  { slug: "restaurants", label: "Restaurants", icon: "banner", description: "Menu boards, banners and signage for restaurants and eateries." },
  { slug: "political-campaigns", label: "Political Campaigns", icon: "press", description: "Posters, banners and T-shirts for political campaigns." },
  { slug: "weddings", label: "Weddings", icon: "wedding", description: "Wedding cards and printing for every function." },
  { slug: "ngos", label: "NGOs", icon: "letterhead", description: "Letterheads, visiting cards and banners for NGOs." },
  { slug: "businesses", label: "Businesses", icon: "acp", description: "Everything a business needs — from visiting cards to signage." },
] as const;

export type Category = (typeof categories)[number];
