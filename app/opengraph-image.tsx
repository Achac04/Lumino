import { ImageResponse } from "next/og";

export const alt = "Lumina & Lore — boutique lighting prototype";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #2C2A26 0%, #4A4740 45%, #1A1917 100%)",
          color: "#F4EFE6",
        }}
      >
        <div
          style={{
            fontSize: 14,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            opacity: 0.85,
            fontFamily: "ui-sans-serif, system-ui",
          }}
        >
          Portfolio prototype
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 64,
            fontFamily: "Georgia, 'Times New Roman', serif",
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Lumina & Lore
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 22,
            maxWidth: 720,
            lineHeight: 1.45,
            opacity: 0.92,
            fontFamily: "ui-sans-serif, system-ui",
          }}
        >
          Next.js · Tailwind · Radix — curated commerce & restoration inquiry
        </div>
        <div
          style={{
            marginTop: 40,
            height: 3,
            width: 120,
            background: "#B8A06E",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
