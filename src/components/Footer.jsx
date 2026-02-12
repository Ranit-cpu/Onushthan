import { Facebook, Twitter, Instagram, Github, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative px-24 py-16 text-white border-t border-cyan-500/20 backdrop-blur-2xl bg-gradient-to-b from-slate-900/40 to-slate-950/60 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl" />
      
      <div className="relative z-10">
        <div className="grid grid-cols-3 gap-16 mb-12">
          
          {/* Brand & Social */}
          <div>
            <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              ONUSHTHAN
            </h3>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Transforming events into unforgettable experiences with cutting-edge technology
            </p>
            
            <p className="text-white/80 mb-4 font-medium text-sm">Connect with us</p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, color: "from-blue-500 to-blue-600" },
                { icon: Twitter, color: "from-cyan-500 to-blue-500" },
                { icon: Instagram, color: "from-purple-500 to-pink-600" },
                { icon: Github, color: "from-gray-500 to-gray-600" },
              ].map((social, i) => (
                <button
                  key={i}
                  className={`group relative w-10 h-10 rounded-full bg-gradient-to-br ${social.color} opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center overflow-hidden`}
                >
                  <social.icon className="w-4 h-4 text-white relative z-10" />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <p className="text-white mb-5 font-bold text-sm tracking-wide">NAVIGATION</p>
            <div className="space-y-3">
              {["Home", "About Us", "Events", "Contact"].map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className="group flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-all duration-300 text-sm"
                >
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <p className="text-white mb-5 font-bold text-sm tracking-wide">RESOURCES</p>
            <div className="space-y-3">
              {["Documentation", "Blog Articles", "Case Studies", "API Reference"].map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className="group flex items-center gap-2 text-white/60 hover:text-purple-400 transition-all duration-300 text-sm"
                >
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-8 pb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-semibold mb-1">Stay Updated</p>
              <p className="text-white/50 text-sm">Get the latest news and updates delivered to your inbox</p>
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-[280px] px-5 py-3 rounded-full bg-white/5 border border-cyan-500/30 text-sm outline-none placeholder-white/40 focus:border-cyan-400/60 focus:bg-white/10 transition-all duration-300"
                />
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400/60" />
              </div>
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-sm hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex items-center justify-between">
          <p className="text-xs text-white/40">
            © 2025 Onushthan. All rights reserved. Built with innovation.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}