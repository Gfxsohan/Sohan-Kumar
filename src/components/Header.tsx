import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Shield, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  isAdmin: boolean;
  onAdminToggle: () => void;
}

export default function Header({ isAdmin, onAdminToggle }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Work', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Social Hub', href: '#social' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 glass border-b border-gray-200/80 py-3 shadow-md shadow-gray-200/40'
          : 'bg-white/95 border-b border-gray-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#root"
            className="flex items-center space-x-1 font-display text-2xl font-black uppercase tracking-tighter text-[#0d0d0d] focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="tracking-tight text-[#ff2b2b]">gfx</span>
            <span className="relative">
              sohan
              <span className="absolute -bottom-1 -right-2.5 w-1.5 h-1.5 bg-[#ff2b2b] rounded-full animate-ping"></span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                id={`desktop-nav-link-${item.label.toLowerCase().replace(' ', '-')}`}
                key={item.label}
                href={item.href}
                className="font-display text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[#ff2b2b] transition-colors duration-250"
                onClick={(e) => handleScrollTo(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              id="admin-access-btn"
              onClick={onAdminToggle}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-305 cursor-pointer ${
                isAdmin
                  ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100'
                  : 'bg-[#ff2b2b]/5 text-[#ff2b2b] border border-[#ff2b2b]/15 hover:bg-[#ff2b2b]/10'
              }`}
            >
              {isAdmin ? (
                <>
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Admin Mode (On)</span>
                </>
              ) : (
                <>
                  <Shield className="w-3.5 h-3.5" />
                  <span>Admin Entry</span>
                </>
              )}
            </button>

            <a
              id="desktop-nav-whatsapp-cta"
              href="https://wa.me/919304258233?text=Hello%20GFX%20SOHAN!%20I'm%20visiting%20your%2520portfolio%2520and%2520would%2520like%2520to%252520place%252520a%252520custom%252520graphics%252520design%252520order."
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn-red flex items-center space-x-2 bg-[#0d0d0d] hover:bg-[#ff2b2b] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-tighter transition-all duration-300 shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Order</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              id="admin-access-btn-mobile"
              onClick={onAdminToggle}
              className={`p-1.5 rounded-lg cursor-pointer ${
                isAdmin ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-gray-100 text-gray-500'
              }`}
              title="Admin Panel"
            >
              {isAdmin ? <ShieldCheck className="w-4 h-4" /> : <Shield className="w-4 h-4" />}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0d0d0d] hover:text-[#ff2b2b] p-1 rounded-md focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {menuItems.map((item) => (
                <a
                  id={`mobile-nav-link-${item.label.toLowerCase().replace(' ', '-')}`}
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2.5 rounded-md text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-[#ff2b2b] hover:bg-gray-50 transition-colors"
                  onClick={(e) => handleScrollTo(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
              <div className="h-px bg-gray-100 my-4"></div>
              <a
                id="mobile-nav-whatsapp-cta"
                href="https://wa.me/919304258233?text=Hello%20GFX%20SOHAN!%20I'm%20visiting%20your%2520portfolio%2520and%2520would%2520like%2520to%252520place%252520a%252520custom%252520graphics%252520design%252520order."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#ff2b2b] text-white px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider text-center w-full shadow-lg shadow-[#ff2b2b]/15"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact via WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
