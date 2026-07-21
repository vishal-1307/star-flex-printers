// Graphic design offerings (Phase 2, request #2). These are real
// services the shop's designers can do — feeds the same shared
// ServiceEnquiryDrawer as the print services (data-service-trigger
// works for any card on the page, regardless of which grid renders it).
export const designServices = [
  { name: "Banner Design", icon: "banner", blurb: "Eye-catching flex banner designs for shops, events and campaigns" },
  { name: "Logo Design", icon: "pencil", blurb: "A distinct logo that represents your business" },
  { name: "Visiting Card Design", icon: "card", blurb: "Clean, professional visiting card layouts" },
  { name: "ID Card Design", icon: "idcard", blurb: "ID card designs for schools, offices and events" },
  { name: "Certificate Design", icon: "certificate", blurb: "Certificates for schools, colleges and events" },
  { name: "Wedding Card Design", icon: "wedding", blurb: "Beautiful wedding card designs for every style" },
  { name: "Poster Design", icon: "hoarding", blurb: "Posters that grab attention, print-ready" },
  { name: "Social Media Design", icon: "social", blurb: "Posts and creatives for Instagram, Facebook and WhatsApp" },
  { name: "Business Branding", icon: "target", blurb: "A consistent look across your cards, boards and banners" },
] as const;
