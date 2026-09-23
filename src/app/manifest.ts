import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Salim Sayed | Retail Operations Leader",
    short_name: "Salim Sayed",
    description:
      "Retail operations leader in Dubai with 15+ years of multi-unit store operations, P&L management and market expansion across the GCC and India.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F5F2",
    theme_color: "#22223B",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
