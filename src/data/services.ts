// Drives the services grid, the enquiry-form dropdown, and the
// individual /services/[slug] pages. icon = key into the icon set in
// Icon.astro. category tags are for filtering by customer type
// (schools, weddings, businesses, etc.) — not marketing claims.
// longDescription/faqs are genuine descriptive/informational copy about
// real services (no invented stats or specific promises) — no pricing
// or firm turnaround commitments per the site's no-pricing rule.
export const services = [
  {
    name: "Flex Banner Printing",
    slug: "flex-banner-printing",
    icon: "banner",
    blurb: "Any size flex banner, fast turnaround",
    category: ["shops", "restaurants", "political-campaigns", "businesses", "schools"],
    longDescription:
      "Flex banners are the fastest way to get your message seen — for a shop opening, a sale, a political rally, a wedding entrance, or a school event. We print in any size, from a small standee to a full shopfront banner, using durable flex material that holds up outdoors. Send us your design or ask our team to create one, and we'll print it ready to hang.",
    faqs: [
      { q: "What sizes can you print?", a: "Any size — from small table banners to large hoardings. Tell us the dimensions and we'll quote it." },
      { q: "Can you design the banner for us?", a: "Yes, our in-house designers can create the artwork if you don't have a ready design." },
      { q: "How long does printing take?", a: "It depends on the size and quantity — message us with your requirement and we'll give you a timeline." },
    ],
    related: ["hoarding-board", "digital-offset-screen-printing", "sticker-name-plate"],
  },
  {
    name: "Hoarding Board",
    slug: "hoarding-board",
    icon: "hoarding",
    blurb: "Large hoardings, from shopfront to highway",
    category: ["shops", "businesses", "political-campaigns"],
    longDescription:
      "Large-format hoarding boards for shopfronts, buildings and highways. We handle the printed flex and the board setup, so it's ready to install. Great for businesses that need visibility from a distance — banks, showrooms, offices and more.",
    faqs: [
      { q: "Do you also install the board?", a: "We prepare the board ready for mounting — talk to us about your specific site." },
      { q: "Can I get a hoarding with my logo and brand colors?", a: "Yes, we design to match your branding, or use your existing artwork." },
      { q: "What's the best material for outdoor use?", a: "We use flex/vinyl suited for outdoor durability — we'll recommend the right one for your board." },
    ],
    related: ["flex-banner-printing", "led-board-letter-name-plate", "acp-work"],
  },
  {
    name: "LED Board / LED Letter / Name Plate",
    slug: "led-board-letter-name-plate",
    icon: "led",
    blurb: "Bright LED boards and letters",
    category: ["shops", "businesses", "hospitals"],
    longDescription:
      "Bright, eye-catching LED boards and illuminated letters for shops, offices and hospitals that need to stand out — day or night. We make LED name boards, channel letters, and light-up signage that keeps your business visible after dark.",
    faqs: [
      { q: "Can I get my shop name in LED letters?", a: "Yes, we make custom LED letters in the size and style you want." },
      { q: "Do LED boards need a lot of power?", a: "LED signage is energy-efficient compared to older lighting — we'll advise based on your board size." },
      { q: "How long do LED boards last?", a: "With normal use they last a long time — ask us about the specific setup for your board." },
    ],
    related: ["light-board", "steel-fiber-letter", "hoarding-board"],
  },
  {
    name: "Light Board",
    slug: "light-board",
    icon: "light",
    blurb: "Backlit boards that stand out at night",
    category: ["shops", "businesses"],
    longDescription:
      "Backlit light boards that make your signage pop, especially in the evening and at night. Popular for shop signs, menu boards and directional signage where visibility after dark matters.",
    faqs: [
      { q: "What's the difference between a light board and an LED board?", a: "A light board is backlit for even glow, while LED letters/boards use LED modules — we'll help you pick the right option for your space." },
      { q: "Can you customize the design?", a: "Yes, send us your logo or design and we'll adapt it for a light board." },
    ],
    related: ["led-board-letter-name-plate", "acp-work", "hoarding-board"],
  },
  {
    name: "Steel Letter / Fiber Letter",
    slug: "steel-fiber-letter",
    icon: "letter3d",
    blurb: "3D steel and fiber letters",
    category: ["businesses", "hospitals", "schools"],
    longDescription:
      "3D steel and fiber letters give your signage a premium, professional look — popular for offices, hospitals, schools and showrooms. These raised letters catch the light and stand out far more than a flat printed sign.",
    faqs: [
      { q: "Are steel letters more durable than fiber?", a: "Steel tends to be sturdier for outdoor use; fiber is lighter and more affordable — we'll help you choose based on where it's installed." },
      { q: "Can these be lit up?", a: "Yes, we can combine steel/fiber letters with LED backlighting for extra visibility." },
    ],
    related: ["led-board-letter-name-plate", "sticker-name-plate", "acp-work"],
  },
  {
    name: "ACP Work",
    slug: "acp-work",
    icon: "acp",
    blurb: "ACP sheet work for a modern shopfront",
    category: ["shops", "businesses"],
    longDescription:
      "ACP (Aluminium Composite Panel) sheet work gives your shopfront a clean, modern finish. We cut, fit and finish ACP cladding for signage boards and building frontage — a popular upgrade for shops and offices wanting a sharper look.",
    faqs: [
      { q: "What is ACP used for?", a: "Mainly shopfront cladding and signage board backing — it gives a smooth, modern surface." },
      { q: "Can you combine ACP with LED or steel letters?", a: "Yes, ACP is often the base with LED or steel letters mounted on top for a complete signage look." },
    ],
    related: ["led-board-letter-name-plate", "steel-fiber-letter", "hoarding-board"],
  },
  {
    name: "Visiting Card",
    slug: "visiting-card",
    icon: "card",
    blurb: "Professional visiting cards",
    category: ["businesses", "ngos"],
    longDescription:
      "Professional visiting cards that make a strong first impression. Whether you need a simple, clean design or something more detailed with your branding, we design and print visiting cards for businesses, professionals and NGOs.",
    faqs: [
      { q: "Can I order a small quantity?", a: "Yes, message us with the quantity you need and we'll help." },
      { q: "Do you design the card too?", a: "Yes, if you don't have a design ready, our team can create one for you." },
      { q: "What finish options are available?", a: "We offer different card finishes — ask us what's available for your order." },
    ],
    related: ["id-card", "letterhead", "digital-offset-screen-printing"],
  },
  {
    name: "ID Card",
    slug: "id-card",
    icon: "idcard",
    blurb: "ID cards for schools, offices and events",
    category: ["schools", "colleges", "hospitals", "businesses"],
    longDescription:
      "ID cards for schools, colleges, offices, hospitals and events. We handle student ID cards, staff ID cards and event passes, with your logo, photo and details printed clearly and durably.",
    faqs: [
      { q: "Can you print ID cards in bulk for a school?", a: "Yes, we regularly print ID cards in bulk for schools and institutions." },
      { q: "Do you provide the lanyard/holder too?", a: "Ask us about card accessories when you place your order." },
      { q: "What details do I need to provide?", a: "Typically photos and names/details for each card — we'll guide you through the format that works best." },
    ],
    related: ["visiting-card", "letterhead", "sticker-name-plate"],
  },
  {
    name: "Wedding Card (Shaadi Card)",
    slug: "wedding-card",
    icon: "wedding",
    blurb: "Beautiful wedding cards for every budget",
    category: ["weddings"],
    longDescription:
      "Beautiful wedding card designs and printing for every style and budget — from simple and elegant to elaborate and traditional. We design the card to match your function details and print it ready for distribution.",
    faqs: [
      { q: "Can you design a custom wedding card?", a: "Yes, our designers can create a card to match your theme and function details." },
      { q: "How far in advance should I order?", a: "Wedding cards need lead time for design approval and printing — message us as early as you can, especially during wedding season." },
      { q: "Do you offer discounts during wedding season?", a: "Yes, we offer special discounts on wedding card and shaadi orders during the season — ask us when you enquire." },
    ],
    related: ["letterhead", "digital-offset-screen-printing", "sticker-name-plate"],
  },
  {
    name: "Letterhead",
    slug: "letterhead",
    icon: "letterhead",
    blurb: "Business letterheads and bill books",
    category: ["businesses", "ngos", "schools"],
    longDescription:
      "Business letterheads and bill books printed to match your brand — a simple way to make every document and receipt look professional and consistent.",
    faqs: [
      { q: "Can I get a bill book with numbered pages?", a: "Yes, we print bill books with sequential numbering on request." },
      { q: "Do you design the letterhead layout?", a: "Yes, we can design a clean letterhead layout with your logo and business details." },
    ],
    related: ["visiting-card", "id-card", "digital-offset-screen-printing"],
  },
  {
    name: "Digital / Offset / Screen Printing",
    slug: "digital-offset-screen-printing",
    icon: "press",
    blurb: "All three printing methods, one place",
    category: ["political-campaigns", "businesses", "ngos"],
    longDescription:
      "We offer all three major printing methods — digital, offset and screen printing — under one roof, so your job gets the right technique for the material and quantity. From posters and calendars to t-shirts and caps, we match the method to what you need.",
    faqs: [
      { q: "What's the difference between digital, offset and screen printing?", a: "Digital suits quick, smaller runs; offset suits larger runs with sharp quality; screen printing suits items like t-shirts and caps. We'll recommend the right one for your job." },
      { q: "Can you print on materials other than paper?", a: "Yes — depending on the method, we print on fabric and other surfaces too. Tell us what you need printed and on what." },
    ],
    related: ["flex-banner-printing", "letterhead", "sticker-name-plate"],
  },
  {
    name: "Sticker / Name Plate",
    slug: "sticker-name-plate",
    icon: "sticker",
    blurb: "Stickers and name plates, every size",
    category: ["shops", "businesses", "hospitals"],
    longDescription:
      "Stickers and name plates in every size — for products, vehicles, doors, desks and more. Quick to produce and a simple way to label or brand almost anything.",
    faqs: [
      { q: "Can I order stickers with my logo?", a: "Yes, send us your logo or design and we'll print it as stickers in the size you need." },
      { q: "Do you make name plates for offices/desks?", a: "Yes, we print desk and door name plates in various styles." },
    ],
    related: ["id-card", "steel-fiber-letter", "digital-offset-screen-printing"],
  },
] as const;

export type Service = (typeof services)[number];
