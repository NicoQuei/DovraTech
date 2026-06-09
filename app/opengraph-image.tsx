import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const alt = `${site.fullName} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BRAND = "#19E57D";
const INK = "#06070A";

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
          backgroundColor: INK,
          backgroundImage: `radial-gradient(900px 600px at 80% 10%, rgba(25,229,125,0.18), transparent 60%)`,
          padding: "80px",
          color: "#F3F5F7",
          fontFamily: "sans-serif",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 26,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: BRAND,
          }}
        >
          <span style={{ width: 48, height: 2, backgroundColor: BRAND }} />
          Estúdio de engenharia digital
        </div>

        {/* Wordmark + tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              fontSize: 190,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            {site.name}
            <span style={{ color: BRAND }}>.</span>
          </div>
          <div
            style={{
              fontSize: 46,
              color: "#9AA4AE",
              marginTop: "16px",
            }}
          >
            {site.tagline}
          </div>
        </div>

        {/* Footer URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            color: "#6B7680",
          }}
        >
          <span>{site.domain}</span>
          <span style={{ color: BRAND }}>Landing em 72h · projeto em até 1 mês</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
