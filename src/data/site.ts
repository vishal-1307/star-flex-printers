export const site = {
  name: "Star Flex Printers",
  nameHindi: "स्टार फ्लेक्स प्रिंटर्स",
  tagline: "Sabhi Prakar ke Digital Printing Solutions — Ek hi Chhat ke Neeche",
  address: {
    line: "Bata Chowk, Runa Medical ke saamne",
    city: "Madhubani",
    state: "Bihar",
    pin: "847211",
  },
  phones: ["9507404994", "9508425132", "9430630840"],
  // Primary number for all wa.me links and the enquiry form (confirmed by Vishal)
  whatsapp: "919507404994",
  email: "starflex968@gmail.com",
  hours: {
    display: "Roz khula · Subah 9:00 baje se Raat 10:30 baje tak",
    short: "Daily 9:00 AM – 10:30 PM",
    schema: "Mo-Su 09:00-22:30",
  },
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
  "Namaste Star Flex Printers! Mujhe printing ka kaam karwana hai. Kripya details batayein.";

// Drives BOTH the services grid and the enquiry-form dropdown.
// icon = key into the icon set in Services.astro.
export const services = [
  { name: "Flex Banner Printing", icon: "banner", blurb: "Har size ka flex banner, tez delivery" },
  { name: "Hoarding Board", icon: "hoarding", blurb: "Bade hoardings, dukaan se highway tak" },
  { name: "LED Board / LED Letter / Name Plate", icon: "led", blurb: "Chamakdar LED boards aur letters" },
  { name: "Light Board", icon: "light", blurb: "Backlit boards jo raat me bhi dikhen" },
  { name: "Steel Letter / Fiber Letter", icon: "letter3d", blurb: "3D steel aur fiber letters" },
  { name: "ACP Work", icon: "acp", blurb: "ACP sheet se modern shop front" },
  { name: "Visiting Card", icon: "card", blurb: "Professional visiting cards" },
  { name: "ID Card", icon: "idcard", blurb: "School, office aur event ID cards" },
  { name: "Wedding Card (Shaadi Card)", icon: "wedding", blurb: "Sundar shaadi cards, har budget me" },
  { name: "Letterhead", icon: "letterhead", blurb: "Business letterheads aur bill books" },
  { name: "Digital / Offset / Screen Printing", icon: "press", blurb: "Teeno printing ek hi jagah" },
  { name: "Sticker / Name Plate", icon: "sticker", blurb: "Stickers aur name plates, sabhi size" },
] as const;

// Exactly the 3 genuine points — no invented claims.
export const whyUs = [
  {
    title: "Phone ya WhatsApp se Order",
    text: "Dukaan aane ki zaroorat nahi — design bhejein, order confirm karein, kaam shuru.",
    icon: "phone",
  },
  {
    title: "Digital + Offset + Screen — Ek hi Chhat ke Neeche",
    text: "Teeno tarah ki printing ek hi jagah, isliye har kaam ke liye sahi technique.",
    icon: "roof",
  },
  {
    title: "Shaadi Season me Special Discount",
    text: "Wedding card aur shaadi ke orders par season me khaas chhoot.",
    icon: "discount",
  },
] as const;

// Paraphrased from real reviews; attributed as "Google Review" (no names).
export const testimonials = [
  "Service tez aur friendly hai, aur print quality bhi bahut acchi mili.",
  "Staff ka vyavhar bahut accha hai — printing turant ho gayi, wait nahi karna pada.",
  "Banner ki quality aur print ki clarity dono badhiya hain, paisa vasool kaam.",
] as const;

// Swap placeholders for real photos later: drop files in /public/gallery/
// with these names (or update extensions here) — no other code changes.
export const gallery = [
  "01.svg", "02.svg", "03.svg", "04.svg",
  "05.svg", "06.svg", "07.svg", "08.svg",
] as const;
