import { useState, useEffect } from "react";

/**
 * HeroImageMosaic — full-width floating mosaic matching the screenshot layout.
 *
 * Layout (5 panels):
 *   [TALL RECT] [CIRCLE / RECT] [LARGE RECT] [CIRCLE / RECT]
 *
 * Two image sets crossfade every 4.5 s (colourful → B&W → repeat).
 * Each panel floats independently on a staggered CSS keyframe loop.
 *
 * USAGE (in your hero section right-hand column):
 *   <div style={{ height: 540, position: "relative" }}>
 *     <HeroImageMosaic />
 *   </div>
 *
 * Or as a standalone full-width section under the hero text.
 */

// ── Image sets ────────────────────────────────────────────────────────────────
// Replace these URLs with your own assets (e.g. ./images/1.jpeg)
const SETS = [
  {
    tallLeft:     "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=600&q=80",
    circleTop:    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    rectBot:      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
    largeMid:     "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    circleRight:  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    rectRight:    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80",
    mono: false,
  },
  {
    tallLeft:     "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    circleTop:    "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=600&q=80",
    rectBot:      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80",
    largeMid:     "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
    circleRight:  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    rectRight:    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=80",
    mono: true,
  },
];

// ── CSS keyframes for each panel's float ─────────────────────────────────────
const STYLES = `
  @keyframes f1 { 0%,100%{transform:translateY(0px)}   50%{transform:translateY(-12px)} }
  @keyframes f2 { 0%,100%{transform:translateY(0px)}   50%{transform:translateY(-16px)} }
  @keyframes f3 { 0%,100%{transform:translateY(0px)}   50%{transform:translateY(-9px)}  }
  @keyframes f4 { 0%,100%{transform:translateY(0px)}   50%{transform:translateY(-14px)} }
  @keyframes f5 { 0%,100%{transform:translateY(0px)}   50%{transform:translateY(-11px)} }
  @keyframes f6 { 0%,100%{transform:translateY(0px)}   50%{transform:translateY(-10px)} }

  .mc { overflow:hidden; flex-shrink:0; }
  .mc img { width:100%; height:100%; object-fit:cover; display:block; }
`;

const PANELS = (s) => [
  // 1 · tall portrait — far left
  {
    style: {
      width: 320, height: 610,
      borderRadius: "80px 24px 24px 24px",
      animation: "f1 5.2s ease-in-out 0s infinite",
      border: "1.5px solid rgba(255,255,255,0.14)",
      boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
    },
    img: s.tallLeft,
    mono: s.mono,
  },
  // 2 · circle — centre-left top
  {
    style: {
      width: 310, height: 310,
      borderRadius: "50%",
      animation: "f2 6.5s ease-in-out 0.5s infinite",
      border: "1.5px solid rgba(255,255,255,0.14)",
      boxShadow: "0 20px 55px rgba(0,0,0,0.5)",
      alignSelf: "flex-start",
      marginTop: 30,
    },
    img: s.circleTop,
    mono: s.mono,
  },
  // 3 · rect — centre-left bottom
  {
    style: {
      width: 310, height: 340,
      borderRadius: 22,
      animation: "f3 4.8s ease-in-out 1s infinite",
      border: "1.5px solid rgba(255,255,255,0.11)",
      boxShadow: "0 20px 55px rgba(0,0,0,0.5)",
      alignSelf: "flex-end",
      marginBottom: 20,
    },
    img: s.rectBot,
    mono: s.mono,
  },
  // 4 · large centre-right rectangle
  {
    style: {
      width: 335, height: 590,
      borderRadius: 26,
      animation: "f4 7s ease-in-out 0.2s infinite",
      border: "1.5px solid rgba(255,255,255,0.14)",
      boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
    },
    img: s.largeMid,
    mono: s.mono,
  },
  // 5 · circle — far right top
  {
    style: {
      width: 310, height: 310,
      borderRadius: "50%",
      animation: "f5 5.8s ease-in-out 1.5s infinite",
      border: "1.5px solid rgba(255,255,255,0.14)",
      boxShadow: "0 20px 55px rgba(0,0,0,0.5)",
      alignSelf: "flex-start",
      marginTop: 30,
    },
    img: s.circleRight,
    mono: s.mono,
  },
  // 6 · landscape rect — far right bottom
  {
    style: {
      width: 310, height: 340,
      borderRadius: "24px 24px 80px 24px",
      animation: "f6 6.2s ease-in-out 0.8s infinite",
      border: "1.5px solid rgba(255,255,255,0.11)",
      boxShadow: "0 20px 55px rgba(0,0,0,0.5)",
      alignSelf: "flex-end",
      marginBottom: 20,
    },
    img: s.rectRight,
    mono: s.mono,
  },
];

// ── Single layer (one image set rendered as a flex row) ───────────────────────
function Layer({ set, opacity }) {
  const panels = PANELS(set);
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        opacity,
        transition: "opacity 0.9s ease-in-out",
        pointerEvents: opacity > 0.5 ? "auto" : "none",
      }}
    >
      {/* col 1 — tall rect alone */}
      <div style={{ display:"flex", alignItems:"center" }}>
        <Panel p={panels[0]} />
      </div>

      {/* col 2 — circle stacked above rect */}
      <div style={{ display:"flex", flexDirection:"column", gap:14, height:"100%", justifyContent:"center" }}>
        <Panel p={panels[1]} />
        <Panel p={panels[2]} />
      </div>

      {/* col 3 — large rect alone */}
      <div style={{ display:"flex", alignItems:"center" }}>
        <Panel p={panels[3]} />
      </div>

      {/* col 4 — circle stacked above rect */}
      <div style={{ display:"flex", flexDirection:"column", gap:14, height:"100%", justifyContent:"center" }}>
        <Panel p={panels[4]} />
        <Panel p={panels[5]} />
      </div>
    </div>
  );
}

function Panel({ p }) {
  return (
    <div
      className="mc"
      style={p.style}
    >
      <img
        src={p.img}
        alt=""
        style={{
          filter: p.mono ? "grayscale(100%) contrast(1.05)" : "none",
          transition: "filter 1.1s ease",
        }}
      />
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function HeroImageMosaic() {
  const [active, setActive]   = useState(0);
  const [fading, setFading]   = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActive(p => (p + 1) % SETS.length);
        setFading(false);
      }, 950);
    }, 4800);
    return () => clearInterval(id);
  }, []);

  const nextIdx = (active + 1) % SETS.length;

  return (
    <div style={{ position:"relative", width:"100%", height: 560 }}>
      <style>{STYLES}</style>
      {/* bottom layer = next set, fades in */}
      <Layer set={SETS[nextIdx]} opacity={fading ? 1 : 0} />
      {/* top layer = current set, fades out */}
      <Layer set={SETS[active]}  opacity={fading ? 0 : 1} />
    </div>
  );
}