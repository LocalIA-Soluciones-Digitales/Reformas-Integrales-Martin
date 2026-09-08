import { ImageResponse } from "next/og";
import { COMPANY } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0a0a0a 0%, #232326 60%, #b84a14 130%)",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#ff8a4d",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {COMPANY.city} · {COMPANY.region}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "white",
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
            }}
          >
            Reformas Integrales
          </span>
          <span
            style={{
              color: "#e8621e",
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
            }}
          >
            Martín
          </span>
          <span
            style={{
              marginTop: 24,
              color: "rgba(255,255,255,0.65)",
              fontSize: 28,
            }}
          >
            Transformamos espacios. Creamos hogares.
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
