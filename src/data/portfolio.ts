// Real work-sample photos from the shop. Images live in src/assets/gallery
// and are imported as ES modules so Astro's image pipeline (astro:assets)
// can generate optimized WebP/AVIF + correct srcset automatically —
// these were previously plain files in public/ (2.9MB, unoptimized,
// wrong declared dimensions).
//
// service/category here are used for filtering (gallery, per-service
// portfolio blocks, "get similar design" CTAs) — they're our own
// categorization of real photos, not marketing claims.

import shopSignboard from "../assets/gallery/shop-signboard.jpg";
import hoardingBoard from "../assets/gallery/hoarding-board.jpg";
import namePlates from "../assets/gallery/name-plates.png";
import courtBoard from "../assets/gallery/court-board.png";
import tshirtPrinting from "../assets/gallery/tshirt-printing.jpg";
import cjmPlaque from "../assets/gallery/cjm-plaque.png";
import electionPosterCalendar from "../assets/gallery/election-poster-calendar.png";
import noticeBoards from "../assets/gallery/notice-boards.png";
import capsPrinting from "../assets/gallery/caps-printing.jpg";
import electionPosters from "../assets/gallery/election-posters.jpg";

export const portfolio = [
  {
    image: shopSignboard,
    alt: "Star Flex Printers flex banner shop signboard",
    caption: "Shop signboard & flex banner",
    service: "Flex Banner Printing",
    category: "businesses",
    featured: true,
  },
  {
    image: hoardingBoard,
    alt: "Bank hoarding board printed by Star Flex Printers",
    caption: "Bank hoarding board",
    service: "Hoarding Board",
    category: "businesses",
    featured: true,
  },
  {
    image: namePlates,
    alt: "Engraved room number and department name plates",
    caption: "Room number & department plates",
    service: "Sticker / Name Plate",
    category: "businesses",
    featured: true,
  },
  {
    image: courtBoard,
    alt: "Printed notice board for a local court",
    caption: "Court information board",
    service: "Hoarding Board",
    category: "businesses",
    featured: false,
  },
  {
    image: tshirtPrinting,
    alt: "Custom election-symbol T-shirt printing",
    caption: "Election campaign T-shirt printing",
    service: "Digital / Offset / Screen Printing",
    category: "political-campaigns",
    featured: false,
  },
  {
    image: cjmPlaque,
    alt: "Engraved office nameplate plaque",
    caption: "Engraved office nameplate",
    service: "Steel Letter / Fiber Letter",
    category: "businesses",
    featured: false,
  },
  {
    image: electionPosterCalendar,
    alt: "Offset-printed election poster and calendar",
    caption: "Election poster & calendar design",
    service: "Digital / Offset / Screen Printing",
    category: "political-campaigns",
    featured: true,
  },
  {
    image: noticeBoards,
    alt: "Framed office notice boards",
    caption: "Office notice boards",
    service: "Hoarding Board",
    category: "businesses",
    featured: false,
  },
  {
    image: capsPrinting,
    alt: "Branded promotional caps printing",
    caption: "Branded promotional caps",
    service: "Digital / Offset / Screen Printing",
    category: "political-campaigns",
    featured: false,
  },
  {
    image: electionPosters,
    alt: "Sheet of offset-printed election posters",
    caption: "Election poster printing",
    service: "Digital / Offset / Screen Printing",
    category: "political-campaigns",
    featured: false,
  },
] as const;

export type PortfolioItem = (typeof portfolio)[number];
