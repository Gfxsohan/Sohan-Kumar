import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    { label: 'Order Poster Design', text: "Hello GFX SOHAN! I would like to order a custom social media/creative poster design." },
    { label: 'PSD Sizing Queries', text: "Hey! I'm downloading your PSD templates. Do they support commercial format usage?" },
    { label: 'Custom Brand Layouts', text: "Hi GFX SOHAN! I want to consult you regarding a full brand identity design package." }
  ];

  const handleSendPrompt = (text: string) => {
    if (!text.trim()) return;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919304258233?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div id="floating-whatsapp-hub" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Dynamic Conversational Agent Bubble */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="whatsapp-agent-bubble"
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            className="w-80 bg-white border border-gray-200 rounded-2xl p-5 mb-3.5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff2b2b]"></div>

            {/* Support Header */}
            <div className="flex justify-between items-center pb-3 border-b border-gray-100 text-left">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center font-display font-black text-white text-sm relative animate-pulse">
                  WA
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border border-white rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-display font-black text-[#0d0d0d] text-xs leading-none">WhatsApp Support</h4>
                  <span className="font-mono text-[8px] text-gray-400 font-bold block mt-1 uppercase flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
                    Typically replies in seconds
                  </span>
                </div>
              </div>
              <button
                id="close-wa-widget"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-gray-400 hover:text-[#0d0d0d] hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Inner text bubbles */}
            <div className="space-y-3.5 py-4 text-left">
              <div className="bg-gray-50 border border-gray-150 rounded-2xl rounded-tl-sm p-3 font-sans text-xs text-gray-600">
                Hi there! 👋 I'm <strong className="text-[#0d0d0d] font-bold">GFX SOHAN</strong>'s assistant. Select a preset query or write a message to talk directly on WA!
              </div>

              {/* Presets Grid */}
              <div className="space-y-2">
                <span className="font-mono text-[8px] text-gray-400 uppercase tracking-widest block font-bold">Recommended Topics</span>
                <div className="flex flex-col gap-1.5">
                  {quickPrompts.map((p, idx) => (
                    <button
                      id={`wa-preset-btn-${idx}`}
                      key={p.label}
                      onClick={() => handleSendPrompt(p.text)}
                      className="w-full text-left bg-gray-50 hover:bg-[#ff2b2b]/5 border border-gray-150 hover:border-[#ff2b2b]/25 px-3 py-2 rounded-xl font-sans text-[11px] text-gray-600 hover:text-black transition-all cursor-pointer font-semibold"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Message input */}
            <div className="pt-2 border-t border-gray-100 flex gap-2">
              <input
                id="custom-wa-msg-field"
                type="text"
                placeholder="Type your inquiry message..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendPrompt(customMsg)}
                className="flex-grow bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 font-sans text-xs text-[#0d0d0d] focus:outline-none focus:border-[#ff2b2b]/40 focus:bg-white transition-all"
              />
              <button
                id="send-custom-wa-msg"
                onClick={() => handleSendPrompt(customMsg)}
                className="bg-[#0d0d0d] hover:bg-[#ff2b2b] text-white p-2.5 rounded-xl cursor-pointer transition-colors"
                title="Send Chat Inquiry"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating launcher trigger */}
      <motion.button
        id="whatsapp-floating-launcher"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-4.5 rounded-full shadow-2xl hover:scale-105 transition-transform cursor-pointer relative group flex items-center justify-center border border-white/10"
        whileTap={{ scale: 0.95 }}
      >
        <span className="absolute right-full mr-3.5 bg-[#0d0d0d] border border-white/5 font-mono text-[9px] font-bold tracking-wider text-[#ff2b2b] uppercase px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md pointer-events-none text-nowrap">
          Order on WhatsApp
        </span>
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6 animate-pulse" />}
      </motion.button>
    </div>
  );
}
