export const SITE = {
  name: "Nada Mohamed",
  role: "Graphic Designer & Visual Identity Specialist",
  url:"https://nada-mohamed.vercel.app",
  whatsapp: "201116797320", 
  instagram: "https://www.instagram.com/nadaghonem.design",
  behance: "https://www.behance.net/nadamohamed268", // ← غيّر الروابط دي لروابط حقيقية
  linkedin: "https://www.linkedin.com/in/nada-mohammed-ghonem",
  tiktok: "https://www.tiktok.com/",
  facebook: "https://www.facebook.com/",
  country: "", // مثال: 'EG' — لو اتملت بتضاف للـ GEO
  title:
    "Nada Mohamed | Graphic Designer — Branding, Social Media & Visual Identity",
  description:
    "Nada Mohamed is a graphic designer specialising in social media design, branding & visual identity, advertising and print design, video editing and AI-powered content. 30+ brands served.",
  keywords: [
    "graphic designer",
    "social media design",
    "branding and visual identity",
    "logo design",
    "advertising design",
    "print design",
    "video editing",
    "AI-powered content creation",
    "freelance graphic designer",
    "Nada Mohamed",
    "مصممة جرافيك",
    "تصميم سوشيال ميديا",
    "هوية بصرية",
    "تصميم لوجو",
    "مونتاج فيديو",
  ],
};
export const wa = (m) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(m)}`;
export const NAV = [
  ["Home", "#top"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Work", "#work"],
  ["Contact", "#contact"],
];
export const HERO = {
  img: "/images/nada.png",
  alt: "Nada Mohamed, graphic designer, looking up in red light",
  intro: "Hey, I'm a",
  tag: "I turn ideas into visuals that communicate, connect, and",
  tagAccent: "stand out.",
  sub: "Social media, branding, advertising and print design.",
  mobileSub: "Nada Mohamed | Graphic Designer & Visual Identity Specialist",
  chip: "GRAPHIC DESIGNER · BRANDING · VISUAL IDENTITY",
  proof: "10+ Brands · Branding · Social Media · Print",
  list: [
    "Social Media Design",
    "Branding & Visual Identity",
    "Advertising & Print Design",
    "Video Editing",
    "AI-Powered Content Creation",
  ],
  msg: "Hi Nada, I'd like to talk about a design project.",
};
export const BRANDS = {
  label: "TRUSTED BY 30+ CLIENTS & BRANDS",
  items: [1, 2, 3, 4].map((n) => `/images/brands/${n}.webp`),
};
export const WORK = {
  label: "FEATURED WORK",
  title: "Selected Projects & Campaigns",
  mTitle: "Selected Projects",
  all: "VIEW ALL WORK",
  items: [
    {
      title: "Rise Athletics",
      cat: "Social Media Design",
      tag: "UNSTOPPABLE",
      img: "/images/work-1.jpg",
      url: "",
    },
    {
      title: "Nuda Skincare",
      cat: "Branding & Visual Identity",
      tag: "BE REAL",
      img: "/images/work-2.jpg",
      url: "",
    },
    {
      title: "Forno Artisan",
      cat: "Advertising Design",
      tag: "MADE TO BE SHARED",
      img: "/images/work-3.jpg",
      url: "",
    },
    {
      title: "Volt Energy",
      cat: "Print Design",
      tag: "CLEAN ENERGY",
      img: "/images/work-4.jpg",
      url: "",
    },
  ],
};
export const ABOUT = {
  label: "ABOUT ME",
  title: "Designing Ideas Into",
  accent: "Visuals.",
  p: [
    "Hi, I'm Nada Mohamed, a Graphic Designer working across social media design, branding, visual identity, advertising, and print. I enjoy exploring different visual styles and finding creative ways to present ideas through design.",
    "My work focuses on typography, color, composition, and creating visuals that fit each brand's identity and purpose. I also work with video editing and AI tools, which allow me to explore additional creative possibilities beyond static design.",
  ],
  cta: "View on Behance",
};
export const SERVICES = {
  label: "CAPABILITIES",
  title: "My Services",
  sub: "Comprehensive creative disciplines designed to empower bold and memorable brands.",
  items: [
    {
      icon: "grid",
      title: "Social Media Design",
      desc: "Posts, stories and campaign visuals built for each platform.",
    },
    {
      icon: "brand",
      title: "Branding & Visual Identity",
      desc: "Logos, color and type systems that make a brand recognizable.",
    },
    {
      icon: "print",
      title: "Advertising & Print Design",
      desc: "Ads, posters and brochures with a clear message.",
    },
    {
      icon: "video",
      title: "Video Editing",
      desc: "Clean, engaging edits for reels, ads and short-form content.",
    },
    {
      icon: "bolt",
      title: "AI-Powered Content Creation",
      desc: "AI tools used to explore new visual directions and ideas.",
    },
  ],
};
export const SKILLS = {
  label: "TOOLKIT",
  title: "Skills & Software",
  groups: [
    {
      title: "Design Tools",
      tools: [
        ["Ps", "Adobe Photoshop", "#31a8ff"],
        ["Ai", "Adobe Illustrator", "#ff9a00"],
        ["Id", "Adobe InDesign", "#ff3366"],
      ],
    },
    {
      title: "Video Editing",
      tools: [
        ["Pr", "Adobe Premiere Pro", "#9999ff"],
        ["Cc", "CapCut", "#111111"],
      ],
    },
    {
      title: "Additional Skills",
      chips: [
        ["Typography & Layout", "Typography"],
        ["Branding & Visual Identity", "Branding"],
        ["Social Media Design", "Social Media"],
        ["Advertising Design", "Advertising"],
        ["AI-Powered Visual Content", "AI Visuals"],
      ],
    },
  ],
};
export const CONTACT = {
  label: "GET IN TOUCH",
  title: "Let's create something that",
  accent: "stands out.",
  text: "Have a project, a brand, or just an idea? Message me on WhatsApp — I reply fast and we'll shape it together.",
  cta: "Message me on WhatsApp",
  or: "Or find me on",
  msg: "Hi Nada, I saw your portfolio and I'd like to start a project.",
};
