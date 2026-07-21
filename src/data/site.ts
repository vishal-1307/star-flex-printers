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
