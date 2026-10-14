import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Orbitron, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const sans = Chakra_Petch({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const display = Orbitron({ variable: "--font-display", subsets: ["latin"], weight: ["700", "800", "900"] });
const mono = Share_Tech_Mono({ variable: "--font-mono", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://swapnadeep.com"),
  title: "Swapnadeep Mohapatra — Full Stack Developer",
  description:
    "Hi! I am Swapnadeep Mohapatra. A software developer working on frontend, backend and design.",
  openGraph: {
    title: "Swapnadeep Mohapatra",
    description:
      "Hi! I am Swapnadeep Mohapatra. A software developer working on frontend, backend and design.",
    type: "website",
    images: "/og.png",
  },
  twitter: { card: "summary_large_image", creator: "@swapnadeeptukk" },
};

export const viewport: Viewport = { themeColor: "#050508" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
