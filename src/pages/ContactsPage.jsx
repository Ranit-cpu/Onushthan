import ScrollReveal from "../components/ScrollReveal";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="text-white min-h-screen relative overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.15),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.12),transparent_40%)]" />
        </div>
      </div>

      {/* Floating Orbs */}
      <div className="fixed top-32 left-32 w-[450px] h-[450px] bg-cyan-500/25 rounded-full blur-[140px] animate-pulse" />
      <div className="fixed bottom-32 right-32 w-[450px] h-[450px] bg-purple-600/25 rounded-full blur-[140px] animate-pulse" />

      <div className="relative z-10">

        {/* Header */}
        <ScrollReveal variant="zoom">
          <section className="px-24 mt-32 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/40 mb-8 backdrop-blur-xl shadow-lg">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-xs text-cyan-300 font-bold tracking-wide">
                Contact Onushthan
              </span>
            </div>

            <h1 className="text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                Let’s Create
              </span>
              <br />
              <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Something Amazing
              </span>
            </h1>

            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Have an idea, an event, or just want to say hello?  
              Our team is always ready to connect ✨
            </p>
          </section>
        </ScrollReveal>

        {/* Main Content */}
        <section className="px-24 mt-28 pb-40 grid grid-cols-2 gap-16 items-start">

          {/* Contact Info */}
          <ScrollReveal variant="fadeUp">
            <div className="space-y-8">

              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  value: "contact@onushthan.com",
                  gradient: "from-cyan-500 to-blue-600",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  value: "+91 98368 11178",
                  gradient: "from-purple-500 to-pink-600",
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  value: "Kolkata, India",
                  gradient: "from-orange-500 to-pink-500",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-6 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 shadow-2xl"
                >
                  <div className="flex items-center gap-5">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-xl`}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 font-semibold uppercase">
                        {item.title}
                      </p>
                      <p className="text-lg font-bold text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-purple-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-3xl" />
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <form className="relative bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-xl border-2 border-white/20 rounded-[2.5rem] p-10 shadow-2xl hover:border-cyan-500/50 transition-all duration-500">

              <div className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 outline-none text-white placeholder-white/40 transition-all"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 outline-none text-white placeholder-white/40 transition-all"
                />

                <textarea
                  rows="5"
                  placeholder="Tell us about your event..."
                  className="w-full px-6 py-4 rounded-2xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 outline-none text-white placeholder-white/40 transition-all resize-none"
                />

                <button
                  type="submit"
                  className="group relative w-full py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-bold overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/60 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-pink-500 opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500 rounded-full" />
                </button>

              </div>

              {/* Floating Icon */}
              <div className="absolute -top-6 -right-6 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-xl animate-pulse">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
            </form>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
