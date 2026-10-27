import { SITE, SERVICES } from "@/data/site";
export const metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  keywords: SITE.keywords,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE.name,
    locale: "en_US",
    title: SITE.title,
    description: SITE.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};
export const viewport = {
  themeColor: "#faf3ee",
  width: "device-width",
  initialScale: 1,
};
const u = SITE.url,
  same = [
    SITE.instagram,
    SITE.behance,
    SITE.linkedin,
    SITE.tiktok,
    SITE.facebook,
  ].filter(Boolean),
  addr = SITE.country
    ? { address: { "@type": "PostalAddress", addressCountry: SITE.country } }
    : {};
export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": u + "/#person",
      name: SITE.name,
      jobTitle: "Graphic Designer",
      description: SITE.description,
      url: u,
      image: u + "/og.jpg",
      sameAs: same,
      knowsAbout: SERVICES.items.map((i) => i.title),
      ...addr,
    },
    {
      "@type": "ProfessionalService",
      "@id": u + "/#service",
      name: SITE.name + " — Graphic Design",
      url: u,
      image: u + "/og.jpg",
      description: SITE.description,
      founder: { "@id": u + "/#person" },
      areaServed: "Worldwide",
      ...addr,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: SERVICES.title,
        itemListElement: SERVICES.items.map((i) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: i.title,
            description: i.desc,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": u + "/#site",
      url: u,
      name: SITE.name,
      inLanguage: "en",
      publisher: { "@id": u + "/#person" },
    },
  ],
};
