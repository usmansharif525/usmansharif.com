import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          color: "#fafafa",
          padding: "64px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#a1a1aa",
            letterSpacing: "-0.02em",
          }}
        >
          {siteConfig.url.replace("https://", "")}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            Software engineer & digital growth partner
          </div>
          <div style={{ fontSize: 28, color: "#a1a1aa", maxWidth: 800 }}>
            I build software and help businesses grow online.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          {siteConfig.name}
        </div>
      </div>
    ),
    { ...size },
  );
}
