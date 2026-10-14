import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Orbitron, Share_Tech_Mono } from "next/font/google";
import { DEPLOY_URL, DESCRIPTION, NAME, SITE_URL, TITLE } from "@/lib/data";
import "./globals.css";

const sans = Chakra_Petch({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const display = Orbitron({ variable: "--font-display", subsets: ["latin"], weight: ["700", "800", "900"] });
const mono = Share_Tech_Mono({ variable: "--font-mono", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL(DEPLOY_URL),
  title: { default: TITLE, template: `%s — ${NAME}` },
  description: DESCRIPTION,
  applicationName: NAME,
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  publisher: NAME,
  category: "technology",
  keywords: [
    "Swapnadeep",
    "Swapnadeep Mohapatra",
    "Software Engineer",
    "Segwise",
    "Full Stack Developer",
    "Go",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "GraphQL",
    "PostgreSQL",
    "ClickHouse",
    "AI",
    "Bengaluru",
  ],
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    firstName: "Swapnadeep",
    lastName: "Mohapatra",
    username: "swapnadeeptukk",
  },
  twitter: {
    card: "summary_large_image",
    site: "@swapnadeeptukk",
    creator: "@swapnadeeptukk",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = { themeColor: "#07070a" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
