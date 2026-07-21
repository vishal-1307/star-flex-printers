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

// The first 2 and last item are the original genuine points. The middle
// 3 are standard value-prop copy (no specific numbers, so distinct from
// the trust.ts placeholder-data disclaimer) added for Phase 2.
export const whyUs = [
  {
    title: "Order by Phone or WhatsApp",
    text: "No need to visit the shop — send your design, confirm the order, and the work begins.",
    icon: "phone",
  },
  {
    title: "Design + Print, Under One Roof",
    text: "Our designers create the artwork and our machines print it — one shop, start to finish.",
    icon: "roof",
  },
  {
    title: "Professional In-House Designers",
    text: "Don't have a ready design? Our team can create one for you, at no extra hassle.",
    icon: "pencil",
  },
  {
    title: "Affordable, Transparent Pricing",
    text: "Honest quotes with no hidden costs — just message us for a price.",
    icon: "target",
  },
  {
    title: "Fast Turnaround",
    text: "Most orders are ready within a day or two, so your deadline is never a problem.",
    icon: "clock",
  },
  {
    title: "Special Discounts in Wedding Season",
    text: "Extra savings on wedding card and shaadi orders during the season.",
    icon: "discount",
  },
] as const;

// Quotes are paraphrased from real reviews. Names/ratings below are
// placeholder data per Vishal's instruction (2026-07-21) — replace with
// real customer names (with permission) before public launch.
export const testimonials = [
  { quote: "Service was fast and friendly, and the print quality was really good.", name: "Rakesh Kumar", rating: 5 },
  { quote: "The staff is well-mannered — printing was done instantly, no long wait.", name: "Priya Singh", rating: 5 },
  { quote: "Both the banner quality and print clarity were excellent, great value for money.", name: "Amit Jha", rating: 5 },
] as const;
