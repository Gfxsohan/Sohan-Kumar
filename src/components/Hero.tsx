import React, { useState, useEffect } from 'react';
import { BRAND_STATS, DESIGNER_AVATAR } from '../data';
import { MessageSquare, ArrowRight, Sparkles, CheckCircle2, Paintbrush, MousePointer } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onViewWork: () => void;
}

export default function Hero({ onViewWork }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeAnchor, setActiveAnchor] = useState<string | null>(null);
  
  // Custom interactive coordinate feedback
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    setMousePosition({ x, y });
  };

  const designerEmail = "kumarsohanrana@gmail.com";
  const designerPhone = "9304258233";
  const designerPhoneFormatted = "+91 93042 58233";

  return (
    <section
      id="hero-section"
      className="relative min-h-screen bg-white pt-28 pb-16 overflow-hidden flex flex-col justify-center border-b border-gray-100 text-left select-none"
    >
      {/* Structural grid background lines matching a blueprint canvas with red accent dots */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#ff2b2b_1px,transparent_1px),linear-gradient(to_bottom,#ff2b2b_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      {/* Red Radial gradient background glow inside the hero section */}
      <div className="absolute right-0 top-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#ff2b2b]/12 to-transparent rounded-full filter blur-[100px] pointer-events-none -z-10" />
      <div className="absolute left-10 bottom-1/4 w-[350px] h-[350px] bg-gradient-to-tr from-[#ff2b2b]/5 to-transparent rounded-full filter blur-[80px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Mini Workspace Controller Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-gray-150 pb-4">
          <div className="flex items-center space-x-3 text-xs font-mono text-gray-500 font-bold uppercase">
            <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-3 py-1 rounded">
              <Paintbrush className="w-3.5 h-3.5 text-[#ff2b2b]" />
              GFX SOHAN Creative Studio Board v2.0
            </span>
            <span className="hidden md:inline-block">/</span>
            <span className="hidden md:inline-block">Workspace Coordinate: X:{mousePosition.x} Y:{mousePosition.y}</span>
          </div>
          <div className="flex items-center space-x-2 text-xs font-mono text-[#ff2b2b] font-bold">
            <span className="w-2.5 h-2.5 bg-[#ff2b2b] rounded-full animate-pulse"></span>
            <span>Designing Live In India</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Narrative and CTA blocks */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-[#ff2b2b]/5 border border-[#ff2b2b]/15 px-3 py-1 rounded-full w-fit"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#ff2b2b]" />
              <span className="font-display text-[9px] font-black uppercase text-[#ff2b2b] tracking-widest">
                Elite Creative Design Studio
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-[#0d0d0d] leading-[1.05]"
              >
                Let Your <span className="text-[#ff2b2b] font-serif-ital italic font-medium">Brand</span> Speak Visual Majesty
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-sans text-sm sm:text-base text-gray-500 max-w-lg leading-relaxed font-normal"
              >
                Welcome to GFX SOHAN. We fuse high-converting commercial design layouts with clean, modern grids, sleek typography, and vibrant templates. From high-impact ad campaigns to customizable premium PSD assets.
              </motion.p>
            </div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <button
                id="hero-view-portfolio-btn"
                onClick={onViewWork}
                className="glow-btn-red flex items-center justify-center space-x-2 bg-[#0d0d0d] hover:bg-[#ff2b2b] text-white px-6 py-3.5 rounded-xl font-bold font-display uppercase text-xs tracking-wider transition-all duration-300 card-shadow cursor-pointer"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                id="hero-whatsapp-order-btn"
                href={`https://wa.me/91${designerPhone}?text=Hello%20Sohan!%20I'm%20visiting%20your%20gorgeous%20GFX%20SOHAN%20portfolio%20website%20and%20interested%20in%2520discussing%20a%2520custom%2520graphics%2520design%2520order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn-red flex items-center justify-center space-x-2 bg-[#ff2b2b] hover:bg-[#0d0d0d] text-white px-6 py-3.5 rounded-xl font-bold font-display uppercase text-xs tracking-wider transition-all duration-300 shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>
            </motion.div>

            {/* Bullet features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-gray-400 pt-3 border-t border-gray-150"
            >
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ff2b2b] shrink-0" />
                <span>Premium Quality PSD Files</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ff2b2b] shrink-0" />
                <span>Direct Personal Consult</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ff2b2b] shrink-0" />
                <span>Speedy 12h-48h Delivery</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ff2b2b] shrink-0" />
                <span>Custom Size Support</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: The Magnificent Designer Canvas Card representation */}
          <div className="lg:col-span-7 flex justify-center items-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[700px] bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 card-shadow overflow-hidden group custom-canvas-workbench border-dashed"
              onMouseMove={handleMouseMove}
            >
              {/* Graphic Design / Active Box handle indicator similar to Photoshop */}
              {/* Bounding box border around outer card */}
              <div className="absolute inset-2.5 border border-dashed border-[#ff2b2b]/15 pointer-events-none rounded-2xl" />
              
              {/* Corner transform handles */}
              <div className="absolute top-1 left-1 transform-handle"></div>
              <div className="absolute top-1 right-1 transform-handle"></div>
              <div className="absolute bottom-1 left-1 transform-handle"></div>
              <div className="absolute bottom-1 right-1 transform-handle"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-1 transform-handle"></div>
              <div className="absolute top-1/2 -translate-y-1/2 right-1 transform-handle"></div>
              <div className="absolute left-1/2 -translate-x-1/2 top-1 transform-handle"></div>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-1 transform-handle"></div>

              {/* Photoshop tools menu on top left */}
              <div className="absolute top-5 left-5 bg-[#0d0d0d] text-white p-1 rounded-lg shadow-md flex flex-col space-y-1.5 z-20">
                <div className="w-5 h-5 rounded flex items-center justify-center bg-white/10 hover:bg-[#ff2b2b] cursor-pointer" title="Select Pointer Tool">
                  <MousePointer className="w-3 h-3" />
                </div>
                <div className="w-5 h-5 rounded flex items-center justify-center bg-white/10 hover:bg-[#ff2b2b] cursor-pointer" title="Bezier Curve Tool">
                  <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
                  </svg>
                </div>
                <div className="text-[7px] font-mono font-bold text-center border-t border-white/15 pt-1 mt-1 text-red-400">
                  GFX
                </div>
              </div>

              {/* Top right "Graphic Design" dashed metadata box */}
              <div className="absolute top-6 right-6 border border-dashed border-gray-300 px-3 py-1 bg-white/60 backdrop-blur-sm shadow-sm select-none rounded">
                <span className="font-display font-bold text-[10px] text-gray-700 tracking-tight relative flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#ff2b2b] rounded-full"></span>
                  Creative Design
                  {/* Miniature resize dots */}
                  <span className="absolute -top-1.5 -left-1.5 w-1.5 h-1.5 bg-white border border-[#ff2b2b]"></span>
                  <span className="absolute -top-1.5 -right-1.5 w-1.5 h-1.5 bg-white border border-[#ff2b2b]"></span>
                  <span className="absolute -bottom-1.5 -left-1.5 w-1.5 h-1.5 bg-white border border-[#ff2b2b]"></span>
                  <span className="absolute -bottom-1.5 -right-1.5 w-1.5 h-1.5 bg-white border border-[#ff2b2b]"></span>
                </span>
              </div>

              {/* BACKGROUND CONTENT: Soft red-pink circle on left */}
              <div className="absolute xl:left-12 left-6 top-12 md:top-16 w-32 md:w-44 lg:w-48 aspect-square bg-[#ff2b2b]/5 rounded-full -z-10 select-none"></div>

              {/* BEZIER VECTOR PATH: Drawn directly with interactive SVG spline overlay! */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10" viewBox="0 0 700 450">
                {/* Spline Path */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  d="M 120,380 C 250,380 400,280 200,200 C 130,120 70,220 280,100 C 450,10 500,120 480,240 S 550,420 680,280"
                  fill="none"
                  stroke="#ff2b2b"
                  strokeWidth="1.2"
                  strokeDasharray="2,2"
                />
                
                {/* Smooth solid continuous outline of path */}
                <path
                  d="M 120,380 C 250,380 400,280 200,200 C 130,120 70,220 280,100 C 450,10 500,120 480,240 S 550,420 680,280"
                  fill="none"
                  stroke="#ff2b2b"
                  strokeWidth="0.8"
                  opacity="0.3"
                />

                {/* SVG anchor lines representation */}
                <line x1="280" y1="100" x2="240" y2="80" stroke="#ff2b2b" strokeWidth="0.5" strokeDasharray="1,1" />
                <line x1="280" y1="100" x2="320" y2="120" stroke="#ff2b2b" strokeWidth="0.5" strokeDasharray="1,1" />
              </svg>

              {/* Small draggable / interactive node dots representing Bezier anchors on the spline */}
              <div 
                className={`absolute w-2 h-2 rounded-full border border-[#ff2b2b] bg-white cursor-pointer z-20 transition-all ${activeAnchor === 'a' ? 'scale-125 bg-[#ff2b2b]' : ''}`}
                style={{ top: '24.4%', left: '44%' }}
                onMouseEnter={() => setActiveAnchor('a')}
                onMouseLeave={() => setActiveAnchor(null)}
                title="Anchor Point A: Handle Controls"
              ></div>
              <div 
                className={`absolute w-2 h-2 rounded-full border border-[#ff2b2b] bg-white cursor-pointer z-20 transition-all ${activeAnchor === 'b' ? 'scale-125 bg-[#ff2b2b]' : ''}`}
                style={{ top: '44.4%', left: '28.5%' }}
                onMouseEnter={() => setActiveAnchor('b')}
                onMouseLeave={() => setActiveAnchor(null)}
                title="Anchor Point B"
              ></div>

              {/* Decorative Bezier Handle Bars */}
              <div className="absolute xl:flex hidden items-center gap-1.5" style={{ top: '16.5%', left: '34%' }}>
                <div className="w-1.5 h-1.5 bg-white border border-[#ff2b2b] rounded-sm shadow-sm"></div>
                <div className="w-12 h-[1px] bg-[#ff2b2b]/35"></div>
                <div className="w-1.5 h-1.5 bg-white border border-[#ff2b2b] rounded-sm shadow-sm"></div>
              </div>

              {/* Vector pen icon overlay tracing the curve */}
              <div className="absolute z-20 flex flex-col items-center pointer-events-none select-none" style={{ top: '21%', left: '39%' }}>
                <svg className="w-5 h-5 text-[#0d0d0d] hover:text-[#ff2b2b] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.89 3a2 2 0 0 0-1.78 1.1L5.3 15.35a1 1 0 0 0 .1 1.12l4 4a1 1 0 0 0 .11.12c.11.09.24.16.38.2.14.04.3.06.45.06h6.11zm1.22 8.78L10.5 11l4.5-4.5a1 1 0 1 1 1.41 1.41l-2.3 2.3 1 1.12c.18.2.22.48.1.69a.9.9 0 0 1-.61.47l-1.42.09z"/>
                </svg>
              </div>

              {/* MAIN HERO CARD TEXT: Graphics Design PORTFOLIO BY GFX SOHAN */}
              <div className="text-left py-12 md:py-20 relative z-20 space-y-6 md:space-y-8 max-w-full">
                
                {/* Headline: Overlapping handwritten script & geometric block solid */}
                <div className="relative select-none">
                  {/* Handwritten overlay curve text */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-elegant text-5xl sm:text-7xl lg:text-[5.5rem] text-[#ff2b2b] absolute -top-5 md:-top-11 left-4 md:left-14 rotate-[-3deg] z-10 font-normal filter drop-shadow-sm pointer-events-none"
                  >
                    Graphics design
                  </motion.div>

                  {/* PORTFOLIO split blocks */}
                  <div className="font-display text-[4.2rem] sm:text-[7rem] md:text-[9rem] lg:text-[9.5rem] font-extrabold tracking-tight select-none leading-[0.78] flex items-center">
                    {/* POR in hollow outline formatting */}
                    <span 
                      className="text-transparent font-black tracking-tighter"
                      style={{ WebkitTextStroke: '1px #0d0d0d', letterSpacing: '-0.02em' }}
                    >
                      POR
                    </span>
                    {/* TFOLIO in massive solid fill */}
                    <span className="text-[#0d0d0d] font-black tracking-tighter">
                      TFOLIO
                    </span>
                  </div>
                </div>

                {/* BY GFX SOHAN subtitle */}
                <div className="font-display text-xs sm:text-sm font-extrabold text-[#0d0d0d] tracking-[0.35em] uppercase pl-1 sm:pl-3">
                  BY GFX SOHAN
                </div>
              </div>

              {/* DESIGNER CIRCULAR SECTOR CROPPED AVATAR: Bottom Right */}
              <div className="absolute bottom-11 sm:bottom-12 right-2 sm:right-6 md:right-8 w-44 sm:w-56 md:w-64 max-w-[42%] aspect-[1/1] z-25 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  
                  {/* Circular Arc container for photo */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border border-gray-200 bg-white p-1">
                    
                    {/* The image curved wrapper */}
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                      <img
                        src={DESIGNER_AVATAR}
                        alt="GFX SOHAN Graphics Designer Portfolio"
                        className="w-full h-full object-cover filter brightness-[1.01]"
                        referrerPolicy="no-referrer"
                      />
                      
                      <div className="absolute inset-0 bg-red-900/5 mix-blend-multiply rounded-full pointer-events-none"></div>
                    </div>

                    {/* SVG circular text path tracing around the portrait */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none animate-spin-slow origin-center" viewBox="0 0 200 200">
                      <defs>
                        <path id="circlePath" d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" />
                      </defs>
                      <text className="font-display text-[4.8px] font-bold fill-gray-500 uppercase tracking-[0.25em]" letterSpacing="1px">
                        <textPath href="#circlePath">
                          Unleash Your Creative Vision. GFX SOHAN Agency.
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* VECTOR PEN PEN HEART GRAPHIC BOX: Floating at bottom left */}
              <div className="absolute bottom-14 left-5 bg-white/80 backdrop-blur-sm border border-gray-150 p-2 shadow-sm rounded z-30 flex items-center space-x-1">
                <div className="w-3.5 h-3.5 border border-dashed border-[#ff2b2b]/40 flex items-center justify-center p-0.5 rounded relative">
                  <span className="text-[7px] text-[#ff2b2b] font-bold">♥</span>
                  <span className="absolute -top-1 -left-1 w-1 h-1 bg-white border border-[#ff2b2b]"></span>
                  <span className="absolute -bottom-1 -right-1 w-1 h-1 bg-white border border-[#ff2b2b]"></span>
                </div>
                <span className="font-mono text-[7px] text-gray-400 font-bold">heart_element.svg</span>
              </div>

              {/* CARD BOTTOM INFO STRIP PANEL Layout block */}
              <div className="mt-12 sm:mt-16 pt-3.5 border-t border-gray-150 w-full grid grid-cols-1 md:grid-cols-12 gap-4 text-left relative z-20">
                <div className="md:col-span-4 flex flex-col font-sans">
                  <h4 className="font-display font-black text-sm text-[#0d0d0d] uppercase tracking-wide">GFX SOHAN</h4>
                  <span className="text-[9px] font-mono text-gray-400 font-bold uppercase tracking-widest mt-0.5">EST. @2022 / INDIA</span>
                </div>

                <div className="md:col-span-5 flex flex-col justify-center text-xs font-sans text-gray-600 space-y-0.5">
                  <strong className="block text-[8px] font-mono text-gray-400 uppercase tracking-widest font-black leading-none mb-1">Direct Contact</strong>
                  <span className="font-semibold block truncate leading-none mb-1">{designerEmail}</span>
                  <span className="font-mono text-[9px] block text-[#ff2b2b] font-bold leading-none">{designerPhoneFormatted}</span>
                </div>

                <div className="md:col-span-3 flex flex-col items-start md:items-end justify-center font-sans text-xs text-gray-600 space-y-0.5 md:text-right">
                  <strong className="block text-[8px] font-mono text-gray-400 uppercase tracking-widest font-black leading-none mb-1">Design Studio</strong>
                  <span className="font-mono text-[9px] font-bold tracking-tight block">Custom Brand Architect</span>
                  <span className="font-mono text-[9.5px] font-bold text-[#ff2b2b] block">Noida • Giridih</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Stats segment with red accents and animated borders */}
        <div className="mt-16 border-t border-gray-150 pt-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {BRAND_STATS.map((stat, i) => (
              <motion.div
                id={`brand-stat-card-${stat.id}`}
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="text-left space-y-1.5 bg-white hover:bg-red-50/10 p-5 rounded-2xl border border-gray-150 hover:border-[#ff2b2b]/35 transition-all duration-300 card-shadow cursor-default group"
              >
                <div className="text-3xl font-black text-[#0d0d0d] font-display tracking-tighter flex items-end">
                  <span className="text-[#ff2b2b] group-hover:scale-105 transition-transform duration-300">{stat.value.replace('+', '')}</span>
                  {stat.value.includes('+') && <span className="text-gray-400 font-semibold text-lg ml-0.5 leading-none mb-1">+</span>}
                </div>
                <div className="text-[9px] font-mono uppercase tracking-widest text-gray-400 font-black">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
