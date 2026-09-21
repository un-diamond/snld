import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.brandName} — placeholder social image`;
export const size = { width: 1200, height: 630 };
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
          justifyContent: "space-between",
          background: "#161513",
          color: "#f1ebe3",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#c6a36a",
          }}
        >
          Placeholder OG
        </div>
        <div style={{ fontSize: 64, lineHeight: 1.1, maxWidth: 900 }}>
          {siteConfig.brandName}
        </div>
        <div style={{ fontSize: 22, color: "#9a9388" }}>
          Showcase only — photography forthcoming
        </div>
      </div>
    ),
    { ...size },
  );
}
