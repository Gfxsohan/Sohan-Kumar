import { SKILLS, DESIGNER_AVATAR } from '../data';
import { ShieldCheck, Award, Layers2, Sparkles, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="bg-white py-24 border-b border-gray-100 relative overflow-hidden text-left select-none">
      {/* Background radial gradient glow elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#ff2b2b]/3 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Left Column Profile Image with resizing vector handles */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[360px] aspect-[1/1] bg-white border border-gray-250 p-4 sm:p-5 card-shadow rounded-2xl group border-dashed"
            >
              {/* Outer crop marks and resize handles */}
              <div className="absolute top-0 left-0 transform-handle"></div>
              <div className="absolute top-0 right-0 transform-handle"></div>
              <div className="absolute bottom-0 left-0 transform-handle"></div>
              <div className="absolute bottom-0 right-0 transform-handle"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-0 transform-handle"></div>
              <div className="absolute top-1/2 -translate-y-1/2 right-0 transform-handle"></div>
              <div className="absolute left-1/2 -translate-x-1/2 top-0 transform-handle"></div>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 transform-handle"></div>

              {/* Selection dotted outer frame */}
              <div className="absolute inset-2 border border-dashed border-gray-255 pointer-events-none rounded-xl" />

              {/* Profile Image container with curved crop mask */}
              <div className="w-full h-full rounded-full overflow-hidden bg-white relative border border-gray-200 p-1.5 flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img
                    src={DESIGNER_AVATAR}
                    alt="GFX SOHAN Graphic Designer"
                    className="w-full h-full object-cover filter brightness-[1.01] contrast-[1.01] group-hover:scale-102 transition-all duration-700 select-none animate-fade-in"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle color grading layer */}
                  <div className="absolute inset-0 bg-red-950/5 mix-blend-multiply pointer-events-none rounded-full"></div>
                </div>

                {/* Overlay card metadata badge representing layer name */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#0d0d0d] border border-white/10 px-3 py-1.5 rounded-lg flex items-center justify-between text-left shadow-lg scale-90 z-20">
                  <div className="mr-3">
                    <span className="block text-[7px] font-mono font-bold text-gray-500 uppercase tracking-widest leading-none">ACTIVE LAYER</span>
                    <strong className="text-[10px] font-sans font-extrabold text-white">gfx_sohan.png</strong>
                  </div>
                  <div className="bg-[#ff2b2b]/20 border border-[#ff2b2b]/35 px-1.5 py-0.5 rounded text-[7px] font-mono font-bold text-white uppercase flex items-center gap-0.5 shrink-0">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse inline-block"></span> CORE
                  </div>
                </div>
              </div>

              {/* Small Love SVG Pen-Tool element */}
              <div className="absolute top-4 left-4 bg-white border border-gray-200 p-1.5 shadow-sm z-10 flex items-center space-x-1.5 rounded">
                <Heart className="w-3 h-3 text-[#ff2b2b] fill-[#ff2b2b]" />
                <span className="font-mono text-[7px] text-gray-500 font-bold uppercase">heart.vector</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column Bio & Custom Expert Skill Progress Cards */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              
              {/* Overlapping title layout */}
              <div className="relative pb-2 select-none">
                <div className="font-elegant text-5xl sm:text-6xl text-[#ff2b2b] absolute -top-4 sm:-top-7 left-1 rotate-[-2deg] z-10 font-normal filter drop-shadow-xs pointer-events-none">
                  introducing
                </div>
                <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-[#0d0d0d] uppercase leading-none pt-4 sm:pt-6">
                  About <span className="text-[#ff2b2b]">GFX SOHAN</span>
                </h2>
                <div className="font-display text-xs font-mono font-bold uppercase text-gray-550 tracking-widest mt-1.5 pl-1">
                  PROFESSIONAL GRAPHIC DESIGN SERVICE
                </div>
              </div>

              <div className="space-y-4 font-sans text-gray-600 text-sm leading-relaxed font-normal">
                <p>
                  I am a passionate graphic designer with 4 years of professional experience in creating impactful visual solutions for brands. My expertise lies in crafting eye-catching designs for social media, advertising campaigns, and print materials that not only look great but also connect with the audience.
                </p>
                <p>
                  As a layout specialist in Adobe Photoshop and Illustrator, my expertise goes beyond standard visuals—I focus on design hierarchies that capture scrolling feeds and drive conversion clicks. Combining vibrant modern gradients with robust structural grid layouts ensures your promotional creatives deliver unmatched brand prestige and maximum conversions.
                </p>
              </div>
            </div>

            {/* Badges block with red border styling */}
            <div className="grid grid-cols-2 gap-3 pb-2">
              <div className="flex items-center space-x-3 bg-white border border-gray-150 rounded-xl p-3.5 shadow-sm hover:border-[#ff2b2b]/30 transition-all duration-300">
                <ShieldCheck className="w-4.5 h-4.5 text-[#ff2b2b] shrink-0" />
                <span className="font-mono text-[10px] text-gray-700 font-bold truncate uppercase tracking-tight">PSD Layer Certified</span>
              </div>
              <div className="flex items-center space-x-3 bg-white border border-gray-150 rounded-xl p-3.5 shadow-sm hover:border-[#ff2b2b]/30 transition-all duration-300">
                <Award className="w-4.5 h-4.5 text-[#ff2b2b] shrink-0" />
                <span className="font-mono text-[10px] text-gray-700 font-bold truncate uppercase tracking-tight">Elite Creator Director</span>
              </div>
            </div>

            {/* Dynamic Interactive Progress Indicators */}
            <div className="space-y-4 pt-4 border-t border-gray-150">
              <div className="flex items-center space-x-1.5 pb-1">
                <Layers2 className="w-3.5 h-3.5 text-gray-400" />
                <span className="font-mono text-[8px] text-gray-450 uppercase tracking-widest font-black">Core Media Tool Mastery</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SKILLS.map((skill, idx) => (
                  <div id={`about-skill-${idx}`} key={skill.name} className="space-y-1.5 bg-white border border-gray-150/80 p-3.5 rounded-xl hover:border-[#ff2b2b]/30 transition-all duration-200">
                    <div className="flex justify-between items-end font-mono text-[9px] text-gray-500 font-bold uppercase pb-0.5">
                      <span className="text-gray-700 font-bold flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#ff2b2b]" />
                        {skill.name.split(' (')[0]}
                      </span>
                      <span className="text-[#ff2b2b] font-black">{skill.percentage}%</span>
                    </div>

                    {/* Bar track */}
                    <div className="w-full bg-gray-50 h-1.5 rounded-full overflow-hidden border border-gray-150 shadow-inner">
                      <motion.div
                        className="bg-[#ff2b2b] h-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: idx * 0.1, ease: 'easeOut' }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
