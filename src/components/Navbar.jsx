import { NavLink } from "react-router-dom";
import { Search, Bell, User, Sparkles, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [notificationCount] = useState(3);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`flex items-center justify-between px-16 py-5 backdrop-blur-2xl bg-gradient-to-r from-slate-900/70 via-purple-900/50 to-slate-900/70 border-b sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/30' 
        : 'border-cyan-500/30 shadow-xl shadow-cyan-500/10'
    }`}>
      
      {/* Animated Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Logo with Enhanced Multi-Layer Glow */}
      <div className="relative group cursor-pointer">
        {/* Multi-layer glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-700" />
        <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-20 group-hover:opacity-30 blur-xl transition-all duration-500 animate-pulse" />
        
        <div className="flex items-center gap-3 relative">
          {/* Animated Icon */}
          <div className="relative">
            <Sparkles className="w-7 h-7 text-cyan-400 animate-pulse" />
            <div className="absolute inset-0 blur-md bg-cyan-400/60 animate-pulse" />
            <Zap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
          </div>
          
          {/* Logo Text */}
          <h1 className="text-2xl font-black tracking-widest bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
            ONUSHTHAN
          </h1>
        </div>

        {/* Orbiting Ring Effect */}
        <div className="absolute inset-0 rounded-full border border-cyan-400/20 group-hover:border-cyan-400/40 transition-all duration-500 group-hover:scale-150 opacity-0 group-hover:opacity-100" />
      </div>

      {/* Nav Links with Advanced Hover Effects */}
      <div className="flex items-center gap-12 text-sm">
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About Us" },
          { to: "/contact", label: "Contact" }
        ].map((link, index) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "relative text-cyan-400 font-bold group"
                : "relative text-white/70 hover:text-white transition-all duration-300 group"
            }
          >
            {({ isActive }) => (
              <>
                {/* Text with glow */}
                <span className="relative z-10 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]">
                  {link.label}
                </span>
                
                {/* Active state effects */}
                {isActive && (
                  <>
                    {/* Animated underline */}
                    <div className="absolute bottom-[-12px] left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-lg shadow-cyan-500/80 rounded-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
                    </div>
                    
                    {/* Glow orb */}
                    <div className="absolute -inset-3 bg-cyan-400/20 blur-2xl rounded-full animate-pulse" />
                  </>
                )}
                
                {/* Hover state effects */}
                {!isActive && (
                  <>
                    {/* Hover glow background */}
                    <div className="absolute inset-0 -inset-x-4 -inset-y-2 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full" />
                    
                    {/* Hover underline */}
                    <div className="absolute bottom-[-12px] left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 rounded-full" />
                  </>
                )}

                {/* Particle burst on hover */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        transform: `translate(-50%, -50%) rotate(${i * 120}deg) translateY(-10px)`
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Search & Icons with Enhanced Effects */}
      <div className="flex items-center gap-4">
        {/* Ultra Enhanced Search Bar */}
        <div className="relative group">
          {/* Multi-layer glow */}
          <div className={`absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-xl transition-all duration-500 ${
            searchFocused ? 'opacity-50 scale-110' : 'opacity-0 group-hover:opacity-30'
          }`} />
          <div className={`absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-md transition-all duration-300 ${
            searchFocused ? 'opacity-40' : 'opacity-0 group-hover:opacity-20'
          }`} />
          
          <div className="relative">
            <input
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="w-[340px] rounded-full bg-white/5 border border-cyan-500/30 px-5 py-3 pl-12 text-sm outline-none placeholder-white/40 transition-all duration-300 focus:border-cyan-400/70 focus:bg-white/10 focus:shadow-2xl focus:shadow-cyan-500/30 backdrop-blur-xl"
              placeholder="Search events, venues, experiences..."
            />
            
            {/* Animated search icon */}
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-all duration-300 ${
              searchFocused ? 'text-cyan-400 scale-110' : 'text-cyan-400/60'
            }`} />
            
            {/* Sparkle effect on focus */}
            {searchFocused && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              </div>
            )}
          </div>

          {/* Animated border */}
          <div className={`absolute inset-0 rounded-full border-2 border-cyan-400/0 transition-all duration-500 ${
            searchFocused ? 'border-cyan-400/30 scale-105' : ''
          }`} />
        </div>

        {/* Enhanced Bell Icon with Notification Badge */}
        <button className="relative w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 hover:border-cyan-400/70 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/40 flex items-center justify-center group overflow-hidden hover:scale-110">
          {/* Background gradient animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-purple-600/0 group-hover:from-cyan-400/30 group-hover:to-purple-600/30 transition-all duration-300" />
          
          {/* Icon */}
          <Bell className="w-4 h-4 text-cyan-400/80 group-hover:text-cyan-300 relative z-10 group-hover:animate-pulse" />
          
          {/* Notification badge */}
          {notificationCount > 0 && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-pink-500 to-red-600 rounded-full border-2 border-slate-900 flex items-center justify-center animate-pulse">
              <span className="text-[10px] font-bold text-white">{notificationCount}</span>
            </div>
          )}
          
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        </button>

        {/* Enhanced User Icon */}
        <button className="relative w-11 h-11 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30 hover:border-purple-400/70 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/40 flex items-center justify-center group overflow-hidden hover:scale-110">
          {/* Background gradient animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 to-pink-600/0 group-hover:from-purple-400/30 group-hover:to-pink-600/30 transition-all duration-300" />
          
          {/* Icon */}
          <User className="w-4 h-4 text-purple-400/80 group-hover:text-purple-300 relative z-10" />
          
          {/* Rotating ring */}
          <div className="absolute inset-0 rounded-full border-2 border-purple-400/0 group-hover:border-purple-400/30 transition-all duration-500 group-hover:rotate-180" />
          
          {/* Pulse ring */}
          <div className="absolute inset-0 rounded-full bg-purple-400/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        </button>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
    </nav>
  );
}