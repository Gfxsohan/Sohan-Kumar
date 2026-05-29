import { Facebook, Instagram, MessageSquare, ArrowUp, Zap } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0b0b0b] border-t border-white/5 pt-16 pb-8 relative overflow-hidden text-left select-none">
      <div className="absolute right-[-10%] top-[-10%] w-72 h-72 bg-[#ff2b2b]/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Main Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-14 pb-12 border-b border-white/5">
          {/* Logo & Headline */}
          <div className="md:col-span-5 space-y-4">
            <a
              id="footer-logo"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTop();
              }}
              className="inline-flex items-center space-x-1 font-display text-2xl font-black tracking-tight text-white focus:outline-none"
            >
              <span className="text-[#ff2b2b]">gfx</span>
              <span className="relative text-white">
                sohan
                <span className="absolute -bottom-1 -right-2 w-1.5 h-1.5 bg-[#ff2b2b] rounded-full animate-ping"></span>
              </span>
            </a>
            <p className="font-sans text-xs sm:text-sm text-gray-400 font-normal max-w-sm leading-relaxed">
              We engineer outstanding, modern graphic posters, business branding, and large-format print media to help you grow your brand authority.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 space-y-4 font-sans text-xs">
            <h5 className="font-display text-xs font-black text-white uppercase tracking-widest text-[#ff2b2b]">Navigation Links</h5>
            <div className="grid grid-cols-2 gap-2 text-gray-400 font-medium">
              <a href="#portfolio" className="hover:text-[#ff2b2b] transition-colors">Portfolio</a>
              <a href="#services" className="hover:text-[#ff2b2b] transition-colors">Design Services</a>
              <a href="#about" className="hover:text-[#ff2b2b] transition-colors">About Me</a>
              <a href="#social" className="hover:text-[#ff2b2b] transition-colors">Social Hub</a>
              <a href="#testimonials" className="hover:text-[#ff2b2b] transition-colors">Testimonials</a>
              <a href="#contact" className="hover:text-[#ff2b2b] transition-colors">Contact Form</a>
            </div>
          </div>

          {/* Core Support Platform connections */}
          <div className="md:col-span-3 space-y-4 text-xs font-mono">
            <h5 className="font-display text-xs font-black text-white uppercase tracking-widest text-[#ff2b2b]">Helpline Channels</h5>
            <p className="text-gray-400 text-[10px] leading-relaxed font-bold uppercase">
              Chat directly with our design director on WhatsApp for custom sizing quotes.
            </p>
            {/* Social Icons row */}
            <div className="flex space-x-3 pt-1">
              <a
                id="footer-social-fb"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-[#ff2b2b]/15 hover:border-[#ff2b2b]/20 transition-all flex items-center justify-center cursor-pointer"
                title="Connect on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                id="footer-social-ig"
                href="https://www.instagram.com/gfxsohan/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-[#ff2b2b]/15 hover:border-[#ff2b2b]/20 transition-all flex items-center justify-center cursor-pointer"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="footer-social-wa"
                href="https://wa.me/919304258233"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-[#25D366]/15 hover:border-[#25D366]/20 transition-all flex items-center justify-center cursor-pointer"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-mono text-[9px] text-gray-400 gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <span className="block">© {new Date().getFullYear()} GFX SOHAN Agency. All personal design rights reserved.</span>
            <span className="text-white flex items-center gap-1"><Zap className="w-3 h-3 text-[#ff2b2b]" /> Custom PSD Templates Compiled Securely</span>
          </div>

          <button
            id="footer-back-to-top"
            onClick={handleScrollTop}
            className="flex items-center space-x-1.5 text-gray-400 hover:text-white uppercase tracking-wider font-bold text-[10px] bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg cursor-pointer transition-all"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 animate-bounce-slow" />
          </button>
        </div>

      </div>
    </footer>
  );
}
