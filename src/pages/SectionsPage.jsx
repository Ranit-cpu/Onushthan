import ScrollReveal from "../components/ScrollReveal";
import { Zap, Users, Award, TrendingUp, Sparkles, Mail, Rocket, Target, Globe, Shield } from "lucide-react";
export default function AboutPage() {
  return (
    <div className="text-white min-h-screen relative overflow-hidden">

      {/* Ultra Enhanced Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.15),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.12),transparent_40%)]" />
        </div>
      </div>

      {/* Enhanced Floating Orbs */}
      <div className="fixed top-40 right-40 w-[500px] h-[500px] bg-purple-600/25 rounded-full blur-[140px] animate-pulse" />
      <div className="fixed bottom-40 left-40 w-[500px] h-[500px] bg-cyan-500/25 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">

        {/* About Hero */}
        <ScrollReveal variant="zoom">
          <section className="px-24 mt-32 mb-20">
            <div className="text-center max-w-4xl mx-auto">
              {/* Enhanced Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/40 mb-8 backdrop-blur-xl shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 group cursor-pointer">
                <Sparkles className="w-4 h-4 text-cyan-400 group-hover:animate-spin" />
                <span className="text-xs text-cyan-300 font-bold tracking-wide">About Onushthan</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Enhanced Title */}
              <h2 className="text-6xl font-black mb-8 relative">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                    Redefining Event
                  </span>
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 blur-3xl -z-10 animate-pulse" />
                </span>
                <br />
                <span className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">Experiences</span>
              </h2>

              <p className="text-white/70 text-xl leading-relaxed max-w-3xl mx-auto">
                We leverage cutting-edge technology and innovative design to create immersive event experiences that resonate. Our platform transforms ordinary gatherings into extraordinary memories through seamless integration and intuitive solutions.
              </p>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-4 gap-8 mt-24">
              {[
                { value: "25+", label: "Events Hosted", icon: Award, color: "cyan", iconBg: "from-cyan-500 to-blue-600" },
                { value: "20+", label: "Happy Clients", icon: Users, color: "purple", iconBg: "from-purple-500 to-pink-600" },
                { value: "1.8k+", label: "Attendees", icon: TrendingUp, color: "blue", iconBg: "from-blue-500 to-cyan-500" },
                { value: "11k+", label: "Community", icon: Zap, color: "pink", iconBg: "from-pink-500 to-purple-600" },
              ].map((stat, i) => (
                <ScrollReveal key={i} delay={i * 0.1} variant="fadeUp">
                  <div className="group relative cursor-pointer">
                    {/* Multi-layer glow effect */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/40 via-purple-600/40 to-pink-600/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                    <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-500" />

                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-8 text-center hover:border-cyan-500/50 transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl overflow-hidden">

                      {/* Icon Container */}
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.iconBg} border-2 border-white/20 flex items-center justify-center relative overflow-hidden group-hover:rotate-12 transition-transform duration-500 shadow-xl`}>
                        <stat.icon className="w-10 h-10 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
                      </div>

                      {/* Value */}
                      <p className="text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-3 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </p>

                      {/* Label */}
                      <p className="text-sm text-white/70 font-bold uppercase tracking-wider">
                        {stat.label}
                      </p>

                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-3xl border-2 border-cyan-400/0 group-hover:border-cyan-400/50 transition-all duration-500" />

                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Enhanced Features Section */}
        <ScrollReveal delay={0.1}>
          <section className="px-24 mt-40">
            <div className="text-center mb-20">
              <h3 className="text-5xl font-black bg-gradient-to-r from-white via-cyan-200 to-white/60 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Our Core Features
              </h3>
              <p className="text-white/50 text-lg">Powered by innovation and excellence</p>
            </div>

            <div className="grid grid-cols-4 gap-12">
              {[
                {
                  img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
                  title: "Smart Planning",
                  desc: "AI-powered event organization",
                  icon: Rocket,
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
                  title: "Live Analytics",
                  desc: "Real-time engagement tracking",
                  icon: Target,
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
                  title: "Seamless Flow",
                  desc: "Effortless execution guaranteed",
                  icon: Zap,
                  gradient: "from-cyan-500 to-teal-500"
                },
                {
                  img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
                  title: "Global Reach",
                  desc: "Connect across borders",
                  icon: Globe,
                  gradient: "from-orange-500 to-pink-500"
                },
              ].map((feature, i) => (
                <ScrollReveal key={i} delay={i * 0.08} variant="fadeUp">
                  <div className="group text-center cursor-pointer">
                    <div className="relative mb-8">
                      {/* Multi-layer glow */}
                      <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/40 to-purple-600/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                      <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/30 to-purple-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-500" />

                      {/* Icon Container */}
                      <div className="relative w-24 h-24 mx-auto rounded-3xl overflow-hidden border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-xl group-hover:border-cyan-500/50 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 shadow-2xl">
                        <img
                          src={`${feature.img}?auto=format&fit=crop&w=200&q=80`}
                          alt="feature"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        {/* Icon overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center`}>
                          <feature.icon className="w-12 h-12 text-white drop-shadow-2xl" />
                        </div>

                        {/* Holographic overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-transparent to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                      </div>
                    </div>

                    <h4 className="text-xl font-black mb-3 group-hover:text-cyan-400 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {feature.desc}
                    </p>

                    {/* Underline animation */}
                    <div className="mt-4 h-1 w-0 group-hover:w-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transition-all duration-500" />
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="text-center mt-20">
              <button className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-bold overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/60 hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                <span className="relative z-15">Explore All Features</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500 rounded-full" />
              </button>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}