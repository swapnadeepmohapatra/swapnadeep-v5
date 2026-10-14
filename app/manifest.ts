import type { MetadataRoute } from "next";
import { DESCRIPTION, NAME } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: NAME,
    short_name: "Swapnadeep",
    description: DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#07070a",
    theme_color: "#07070a",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
