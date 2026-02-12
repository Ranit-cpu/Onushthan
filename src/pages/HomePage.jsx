import ScrollReveal from "../components/ScrollReveal";
import { useState } from "react";
import HeroImageMosaic from "./Heroimagemosaic";
import {
  Sparkles,
  ArrowRight,
  Users,
  TrendingUp,
} from "lucide-react";

const EVENT_CATEGORIES = [
  {
    title: "Technicals",
    gradient: "from-purple-500 to-pink-600",
    events: [
      { 
        name: "CodeBlaze", 
        desc: "24-hour national level hackathon", 
        images: [
          "./images/1.jpeg",
          "./images/2.jpeg",
          "./images/3.jpeg",
          "https://images.unsplash.com/photo-1531482615713-2afd69097998"
        ]
      },
      { 
        name: "HackNova", 
        desc: "Innovation-first coding sprint", 
        images: [
          "./images/2.jpeg",
          "./images/3.jpeg",
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
          "https://images.unsplash.com/photo-1531482615713-2afd69097998"
        ]
      },
      { 
        name: "TechSprint", 
        desc: "Innovation-first coding sprint", 
        images: [
          "./images/3.jpeg",
          "https://images.unsplash.com/photo-1531482615713-2afd69097998",
          "./images/1.jpeg",
          "./images/2.jpeg"
        ]
      },
      { 
        name: "DevFest", 
        desc: "Innovation-first coding sprint", 
        images: [
          "https://images.unsplash.com/photo-1531482615713-2afd69097998",
          "./images/1.jpeg",
          "./images/2.jpeg",
          "./images/3.jpeg"
        ]
      },
    ],
  },
  {
    title: "Expos",
    gradient: "from-orange-500 to-pink-500",
    events: [
      { 
        name: "IoT Expo", 
        desc: "Smart devices & hardware showcase", 
        images: [
          "https://images.unsplash.com/photo-1518770660439-4636190af475",
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
        ]
      },
      { 
        name: "Startup Expo", 
        desc: "Early-stage innovation demos", 
        images: [
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
          "https://images.unsplash.com/photo-1518770660439-4636190af475",
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
        ]
      },
      { 
        name: "Tech Showcase", 
        desc: "Early-stage innovation demos", 
        images: [
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
          "https://images.unsplash.com/photo-1518770660439-4636190af475",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd"
        ]
      },
      { 
        name: "Innovation Fair", 
        desc: "Early-stage innovation demos", 
        images: [
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
          "https://images.unsplash.com/photo-1518770660439-4636190af475"
        ]
      },
    ],
  },
  {
    title: "Culturals",
    gradient: "from-emerald-500 to-teal-500",
    events: [
      { 
        name: "Future of AI", 
        desc: "Industry expert panel", 
        images: [
          "/images/2.png",
          "/images/4.png",
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
        ]
      },
      { 
        name: "Cybersecurity", 
        desc: "Modern threat landscape", 
        images: [
          "/images/4.png",
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
          "/images/2.png",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
        ]
      },
      { 
        name: "Tech Talks", 
        desc: "Industry expert panel", 
        images: [
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
          "/images/2.png",
          "/images/4.png",
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
        ]
      },
      { 
        name: "Innovation Summit", 
        desc: "Industry expert panel", 
        images: [
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
          "/images/2.png",
          "/images/4.png"
        ]
      },
    ],
  },
];

export default function HomePage() {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (images, startIndex = 0) => {
    setLightbox({
      images,
      index: startIndex
    });
  };

  return (
    <div className="text-white min-h-screen relative overflow-hidden">

      {/* ── Background ─────────────────────────────────────────────────────── */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.15),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.12),transparent_40%)]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(99,102,241,0.03)_1.5px,transparent_1.5px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black_40%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-indigo-950/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="fixed top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]" />
      <div className="fixed bottom-32 right-32 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px]" />

      {/* ── Content ────────────────────────────────────────────────────────── */}
      <div className="relative z-10">

        {/* ── HERO: text only (left-aligned, centred on page) ── */}
        <ScrollReveal variant="fadeUp">
          <section className="px-24 mt-32 text-center">

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/40 mb-6 backdrop-blur-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 group cursor-pointer">
              <Sparkles className="w-4 h-4 text-cyan-400 group-hover:animate-spin" />
              <span className="text-xs text-cyan-300 font-semibold tracking-wide">Next-Gen Event Platform</span>
            </div>

            <h1 className="text-7xl font-black leading-tight mb-6">
              <span className="relative inline-block">
                <span className="font-['Great_Vibes'] text-9xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent pr-4">
                  Onushthan  
                </span>
              </span>

              <br />
              <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Where Events Become
              </span>{" "}
              <span className="relative inline-block group cursor-pointer">
                <span className="relative z-10 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                  Memories
                </span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-gradient-to-r from-purple-500/40 to-pink-600/40 blur-md" />
              </span>
            </h1>

            <p className="text-white/70 text-lg mb-4 max-w-xl mx-auto leading-relaxed">
              Turning Your Visions into Unforgettable Experiences
            </p>

            {/* subtitle line matching screenshot */}
            <p className="text-white/40 text-xl mb-8 tracking-wide">
              for your{" "}
              <span className="text-white font-semibold">Iconic Event</span>
            </p>
          </section>
        </ScrollReveal>

        {/* ── MOSAIC: full-width image collage ── */}
        <ScrollReveal variant="fadeUp" delay={0.2}>
          <section className="mt-16 px-8">
            <HeroImageMosaic />
          </section>
        </ScrollReveal>

        {/* ── EVENTS BY CATEGORY ── */}
        <ScrollReveal delay={0.15}>
          <section className="px-24 mt-24 pb-40">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black bg-gradient-to-r from-white via-purple-200 to-white/60 bg-clip-text text-transparent mb-3">
                Events We Organize
              </h2>
              <p className="text-white/50 text-lg">Experiences crafted across multiple domains</p>
            </div>

            <div className="space-y-24">
              {EVENT_CATEGORIES.map((category, i) => (
                <div key={i}>
                  <h3 className="text-3xl font-black mb-10 flex items-center gap-4">
                    <span className={`h-1 w-14 rounded-full bg-gradient-to-r ${category.gradient}`} />
                    <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                      {category.title}
                    </span>
                  </h3>

                  <div className="grid grid-cols-4 gap-10">
                    {category.events.map((event, j) => (
                      <ScrollReveal key={j} delay={j * 0.08} variant="fadeUp">
                        <div 
                          className="group relative cursor-pointer"
                          onClick={() => openLightbox(event.images, 0)}
                        >
                          <div className={`absolute -inset-3 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-700 rounded-3xl`} />
                          <div className="relative bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-xl border-2 border-white/20 rounded-3xl overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:border-white/40">
                            <div className="relative h-44 overflow-hidden">
                              <img
                                src={`${event.images[0]}?auto=format&fit=crop&w=600&q=80`}
                                alt={event.name}
                                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                              
                              {/* Image count badge */}
                              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white/90 font-semibold">
                                {event.images.length} photos
                              </div>
                            </div>
                            <div className="p-8">
                              <h4 className="text-xl font-black mb-3 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                {event.name}
                              </h4>
                              <p className="text-sm text-white/60 leading-relaxed">{event.desc}</p>
                              <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-500`} />
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </div>

      {/* ── Lightbox Collage ── */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 p-10 overflow-y-auto"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-7xl w-full my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-8 -right-8 w-14 h-14 rounded-full bg-white text-black text-2xl font-bold hover:scale-110 transition z-20 shadow-2xl flex items-center justify-center"
            >
              ✕
            </button>

            {/* Event Title */}
            <div className="text-center mb-8">
              <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Event Gallery
              </h3>
              <p className="text-white/60 text-sm mt-2">{lightbox.images.length} photos</p>
            </div>

            {/* Image Grid/Collage */}
            <div className="grid grid-cols-2 gap-4">
              {lightbox.images.map((img, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer"
                  style={{
                    gridColumn: idx === 0 ? 'span 2' : 'span 1',
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={`${img}?auto=format&fit=crop&w=1200&q=90`}
                      alt={`Photo ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{
                        height: idx === 0 ? '500px' : '350px',
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Photo number badge */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-white/90 font-semibold">
                    {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
