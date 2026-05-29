import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import SocialHub from './components/SocialHub';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import AdminPanel from './components/AdminPanel';

import { INITIAL_POSTERS } from './data';
import { Poster, ContactSubmission } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { Flame } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadPercentage, setLoadPercentage] = useState(0);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);

  // Posters database state backed by localStorage
  const [posters, setPosters] = useState<Poster[]>([]);
  // submissions state backed by localStorage
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);

  // Page Loader Animation and Database setup
  useEffect(() => {
    // 1. Core Data bootstrapping
    const localPosters = localStorage.getItem('sohanx_posters');
    if (localPosters) {
      try {
        const parsed = JSON.parse(localPosters);
        // Sync static INITIAL_POSTERS to update their graphics URLs or properties, keeping views & downloads
        const mergedPosters = INITIAL_POSTERS.map((initial) => {
          const existing = parsed.find((p: any) => p.id === initial.id);
          if (existing) {
            return {
              ...initial,
              views: existing.views !== undefined ? existing.views : initial.views,
              downloads: existing.downloads !== undefined ? existing.downloads : initial.downloads,
            };
          }
          return initial;
        });
        
        // Retain other custom posters added by the user
        const customPosters = parsed.filter(
          (p: any) => !INITIAL_POSTERS.some((initial) => initial.id === p.id)
        );
        const finalPosters = [...mergedPosters, ...customPosters];
        setPosters(finalPosters);
        localStorage.setItem('sohanx_posters', JSON.stringify(finalPosters));
      } catch (err) {
        setPosters(INITIAL_POSTERS);
        localStorage.setItem('sohanx_posters', JSON.stringify(INITIAL_POSTERS));
      }
    } else {
      setPosters(INITIAL_POSTERS);
      localStorage.setItem('sohanx_posters', JSON.stringify(INITIAL_POSTERS));
    }

    const localSubmissions = localStorage.getItem('sohanx_submissions');
    if (localSubmissions) {
      setSubmissions(JSON.parse(localSubmissions));
    } else {
      const mockSub: ContactSubmission[] = [
        {
          id: 'sub-mock',
          name: 'James Carter',
          email: 'james@vanguard.com',
          whatsapp: '+1234567890',
          service: 'Business Branding & Identity',
          message: "Hi Sohan! I need an elegant branding guidelines board designed for our organic coffee line. The brand utilizes high-gloss black and deep ruby red tones. Let's arrange a direct WhatsApp consult to jump on sketches!",
          date: '2026-05-28',
          status: 'new',
        }
      ];
      setSubmissions(mockSub);
      localStorage.setItem('sohanx_submissions', JSON.stringify(mockSub));
    }

    // 2. Mock loading bar percentage ticks
    const interval = setInterval(() => {
      setLoadPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 25) + 12;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Event Handlers for Poster changes
  const handleIncrementStat = (id: string, type: 'views' | 'downloads') => {
    const updated = posters.map((p) => {
      if (p.id === id) {
        return { ...p, [type]: (p[type] || 0) + 1 };
      }
      return p;
    });
    setPosters(updated);
    localStorage.setItem('sohanx_posters', JSON.stringify(updated));
  };

  const handleAddPoster = (newP: Omit<Poster, 'id' | 'views' | 'downloads' | 'creationDate'>) => {
    const posterItem: Poster = {
      ...newP,
      id: `poster-${Date.now()}`,
      views: 1,
      downloads: 0,
      creationDate: new Date().toISOString().split('T')[0],
    };
    const updated = [...posters, posterItem];
    setPosters(updated);
    localStorage.setItem('sohanx_posters', JSON.stringify(updated));
  };

  const handleDeletePoster = (id: string) => {
    const updated = posters.filter((p) => p.id !== id);
    setPosters(updated);
    localStorage.setItem('sohanx_posters', JSON.stringify(updated));
  };

  // Event Handlers for submissions inbox
  const handleAddSubmission = (newSub: Omit<ContactSubmission, 'id' | 'date' | 'status'>) => {
    const submissionItem: ContactSubmission = {
      ...newSub,
      id: `sub-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      status: 'new',
    };
    const updated = [...submissions, submissionItem];
    setSubmissions(updated);
    localStorage.setItem('sohanx_submissions', JSON.stringify(updated));
  };

  const handleToggleSubmissionStatus = (id: string, status: 'new' | 'responded' | 'archived') => {
    const updated = submissions.map((sub) => {
      if (sub.id === id) {
        return { ...sub, status };
      }
      return sub;
    });
    setSubmissions(updated);
    localStorage.setItem('sohanx_submissions', JSON.stringify(updated));
  };

  // Safe smooth navigate target anchor
  const handleViewWork = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      const offset = 80;
      const elementPosition = portfolioSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-white min-h-screen text-[#111111] select-none selection:bg-[#ff2b2b]/10 selection:text-[#ff2b2b]">
      
      {/* Intro Loading Animation Cover */}
      <AnimatePresence>
        {loading && (
          <motion.div
            id="page-loading-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center space-y-6"
          >
            <div className="space-y-4 text-center">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: [0.93, 1, 0.93] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="inline-flex items-center space-x-1 font-display text-4xl sm:text-5xl font-black tracking-tighter"
              >
                <span className="text-[#ff2b2b]">gfx</span>
                <span className="relative text-[#111111]">
                  sohan
                  <span className="absolute -bottom-1 -right-2.5 w-2 h-2 bg-[#ff2b2b] rounded-full"></span>
                </span>
              </motion.div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-[#111111] font-bold">
                Creative Graphics Agency
              </div>
            </div>

            {/* Micro loading progress track */}
            <div className="w-48 bg-gray-100 rounded-full h-[3px] overflow-hidden border border-gray-150 relative">
              <div
                className="bg-[#ff2b2b] h-full transition-all duration-150 rounded-full"
                style={{ width: `${loadPercentage > 100 ? 100 : loadPercentage}%` }}
              ></div>
            </div>
            <div className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-wider">
              {loadPercentage > 100 ? 100 : loadPercentage}% Loading
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Portfolio Content reveals */}
      {!loading && (
        <div id="full-page-hub" className="flex flex-col min-h-screen">
          {/* Header Sticky Navbar */}
          <Header
            isAdmin={isAdminMode}
            onAdminToggle={() => {
              setIsAdminMode(!isAdminMode);
              if (!isAdminMode) setIsAdminOpen(true);
            }}
          />

          {/* Hero Section */}
          <Hero onViewWork={handleViewWork} />

          {/* Core Posters Portfolio & PSD Downloads */}
          <Portfolio posters={posters} onIncrementStat={handleIncrementStat} />

          {/* Services Section & Interactive WhatsApp Quote Calculator */}
          <Services />

          {/* About Me Story & Custom skill meters */}
          <About />

          {/* Social connections & Interactive FBLike widget */}
          <SocialHub />

          {/* Client Testimonials slider */}
          <Testimonials />

          {/* Contact form & direct contact links */}
          <Contact onAddSubmission={handleAddSubmission} />

          {/* Footer branding links */}
          <Footer />

          {/* WhatsApp flot assist widget */}
          <WhatsAppFloat />

          {/* Dedicated full CRUD Admin panel dashboard */}
          <AdminPanel
            posters={posters}
            submissions={submissions}
            isOpen={isAdminOpen}
            onClose={() => setIsAdminOpen(false)}
            onAddPoster={handleAddPoster}
            onDeletePoster={handleDeletePoster}
            onToggleSubmissionStatus={handleToggleSubmissionStatus}
          />
        </div>
      )}

    </div>
  );
}
