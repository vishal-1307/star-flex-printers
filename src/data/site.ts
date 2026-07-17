export const site = {
  name: "Star Flex Printers",
  nameHindi: "स्टार फ्लेक्स प्रिंटर्स",
  tagline: "All Types of Digital Printing Solutions — Under One Roof",
  address: {
    line: "Bata Chowk, Opposite Runa Medical",
    city: "Madhubani",
    state: "Bihar",
    pin: "847211",
  },
  phones: ["9507404994", "9508425132", "9430630840"],
  // Primary number for all wa.me links and the enquiry form (confirmed by Vishal)
  whatsapp: "919507404994",
  email: "starflex968@gmail.com",
  hours: {
    display: "Open Daily · 9:00 AM to 10:30 PM",
    short: "Daily 9:00 AM – 10:30 PM",
    schema: "Mo-Su 09:00-22:30",
  },
  logo: "/logo.jpeg",
  shopfront: "/shopfront.jpeg",
  mapsEmbed:
    "https://www.google.com/maps?q=Star+Flex+Printers,+Bata+Chowk,+Madhubani,+Bihar+847211&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Star+Flex+Printers,+Bata+Chowk,+Madhubani,+Bihar+847211",
} as const;

export function telHref(phone: string): string {
  return `tel:+91${phone}`;
}

export function waHref(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const waGreeting =
  "Hello Star Flex Printers! I'd like to get some printing work done. Could you share the details?";

// Drives BOTH the services grid and the enquiry-form dropdown.
// icon = key into the icon set in Services.astro.
export const services = [
  { name: "Flex Banner Printing", icon: "banner", blurb: "Any size flex banner, fast turnaround" },
  { name: "Hoarding Board", icon: "hoarding", blurb: "Large hoardings, from shopfront to highway" },
  { name: "LED Board / LED Letter / Name Plate", icon: "led", blurb: "Bright LED boards and letters" },
  { name: "Light Board", icon: "light", blurb: "Backlit boards that stand out at night" },
  { name: "Steel Letter / Fiber Letter", icon: "letter3d", blurb: "3D steel and fiber letters" },
  { name: "ACP Work", icon: "acp", blurb: "ACP sheet work for a modern shopfront" },
  { name: "Visiting Card", icon: "card", blurb: "Professional visiting cards" },
  { name: "ID Card", icon: "idcard", blurb: "ID cards for schools, offices and events" },
  { name: "Wedding Card (Shaadi Card)", icon: "wedding", blurb: "Beautiful wedding cards for every budget" },
  { name: "Letterhead", icon: "letterhead", blurb: "Business letterheads and bill books" },
  { name: "Digital / Offset / Screen Printing", icon: "press", blurb: "All three printing methods, one place" },
  { name: "Sticker / Name Plate", icon: "sticker", blurb: "Stickers and name plates, every size" },
] as const;

// Exactly the 3 genuine points — no invented claims.
export const whyUs = [
  {
    title: "Order by Phone or WhatsApp",
    text: "No need to visit the shop — send your design, confirm the order, and the work begins.",
    icon: "phone",
  },
  {
    title: "Digital + Offset + Screen, Under One Roof",
    text: "All three printing methods in one place, so every job gets the right technique.",
    icon: "roof",
  },
  {
    title: "Special Discounts in Wedding Season",
    text: "Extra savings on wedding card and shaadi orders during the season.",
    icon: "discount",
  },
] as const;

// Paraphrased from real reviews; attributed as "Google Review" (no names).
export const testimonials = [
  "Service was fast and friendly, and the print quality was really good.",
  "The staff is well-mannered — printing was done instantly, no long wait.",
  "Both the banner quality and print clarity were excellent, great value for money.",
] as const;

// Real work-sample photos from the shop, in /public/gallery/.
export const gallery = [
  { src: "/gallery/shop-signboard.jpg", alt: "Star Flex Printers flex banner shop signboard" },
  { src: "/gallery/hoarding-board.jpg", alt: "Bank hoarding board printed by Star Flex Printers" },
  { src: "/gallery/name-plates.png", alt: "Engraved room number and department name plates" },
  { src: "/gallery/court-board.png", alt: "Printed notice board for a local court" },
  { src: "/gallery/tshirt-printing.jpg", alt: "Custom election-symbol T-shirt printing" },
  { src: "/gallery/cjm-plaque.png", alt: "Engraved office nameplate plaque" },
  { src: "/gallery/election-poster-calendar.png", alt: "Offset-printed election poster and calendar" },
  { src: "/gallery/notice-boards.png", alt: "Framed office notice boards" },
  { src: "/gallery/caps-printing.jpg", alt: "Branded promotional caps printing" },
  { src: "/gallery/election-posters.jpg", alt: "Sheet of offset-printed election posters" },
] as const;
