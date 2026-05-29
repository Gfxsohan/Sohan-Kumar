import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { ContactSubmission } from '../types';

interface ContactProps {
  onAddSubmission: (submission: Omit<ContactSubmission, 'id' | 'date' | 'status'>) => void;
}

export default function Contact({ onAddSubmission }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [service, setService] = useState('Social Media Poster Design');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    // Simulate safe API posting process
    setTimeout(() => {
      onAddSubmission({
        name,
        email,
        whatsapp,
        service,
        message,
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Clear inputs
      setName('');
      setEmail('');
      setWhatsapp('');
      setMessage('');

      // Auto clear success indicator
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const contactInfos = [
    {
      id: 'phone',
      title: 'Direct Call / WhatsApp',
      value: '+91 93042 58233',
      subValue: 'Available 10:00 - 22:00 IST',
      icon: Phone,
      actionUrl: 'https://wa.me/919304258233',
    },
    {
      id: 'email',
      title: 'Official Emailroom',
      value: 'kumarsohanrana@gmail.com',
      subValue: 'We reply in under 12 hours',
      icon: Mail,
      actionUrl: 'mailto:kumarsohanrana@gmail.com',
    },
    {
      id: 'address',
      title: 'Creative Office Studio',
      value: 'Giridih, Jharkhand, India',
      subValue: 'By appointment only',
      icon: MapPin,
      actionUrl: 'https://maps.google.com/?q=Giridih,+Jharkhand,+India',
    },
  ];

  const servicesOption = [
    'Social Media Poster Design',
    'Business Branding',
    'Banner and Flex Large Format Design',
    'Corporate Festival Design',
    'Advertisement Creative Design'
  ];

  return (
    <section id="contact" className="bg-white py-24 border-b border-gray-100 relative overflow-hidden text-left select-none">
      {/* Background blobs */}
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-[#ff2b2b]/2 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side Content - Contacts metadata */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-10">
            <div className="space-y-4">
              <h2 className="font-display text-xs font-black text-[#ff2b2b] uppercase tracking-widest animate-pulse">
                Start Co-Creating
              </h2>
              <p className="font-display text-3xl sm:text-5xl font-black tracking-tight text-[#0d0d0d] leading-none">
                Let's Build Something <br />
                <span className="text-[#ff2b2b]">Legendary</span>
              </p>
              <p className="font-sans text-sm sm:text-base text-gray-450 font-normal leading-relaxed">
                Have an active campaign or need templates customized? Reach out via our quick dashboard mail, or strike up an immediate direct message on WhatsApp.
              </p>
            </div>

            {/* Info cards list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-5">
              {contactInfos.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    id={`contact-medium-link-${info.id}`}
                    key={info.id}
                    href={info.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 bg-gray-50 hover:bg-[#ff2b2b]/5 border border-gray-150 hover:border-[#ff2b2b]/30 rounded-2xl p-4.5 transition-all duration-300 transform hover:-translate-y-0.5 group block select-none"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl border border-gray-150 flex items-center justify-center text-gray-400 group-hover:bg-[#ff2b2b]/10 group-hover:border-[#ff2b2b]/20 group-hover:text-[#ff2b2b] transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-left font-sans text-xs min-w-0 flex-grow">
                      <strong className="block text-gray-400 font-mono text-[9px] uppercase tracking-widest leading-none mb-1">{info.title}</strong>
                      <span className="text-[#0d0d0d] font-display font-black text-sm block truncate">{info.value}</span>
                      <span className="text-gray-400 font-normal block mt-1 truncate">{info.subValue}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side Form - Interactive Submission */}
          <div className="lg:col-span-12 xl:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-150 rounded-3xl p-6 sm:p-10 card-shadow relative overflow-hidden border-dashed"
            >
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                
                {/* Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label id="lbl-input-name" className="font-mono text-[9px] text-gray-400 uppercase tracking-widest font-black block">Full Name *</label>
                    <input
                      id="contact-input-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Liam Sterling"
                      className="w-full bg-gray-50 border border-gray-200 font-sans text-sm text-[#0d0d0d] px-4 py-3 rounded-xl focus:outline-none focus:border-[#ff2b2b]/50 focus:bg-white transition-all pointer-events-auto"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label id="lbl-input-email" className="font-mono text-[9px] text-gray-400 uppercase tracking-widest font-black block">Email Address *</label>
                    <input
                      id="contact-input-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. liam@sterling.co"
                      className="w-full bg-gray-50 border border-gray-200 font-sans text-sm text-[#0d0d0d] px-4 py-3 rounded-xl focus:outline-none focus:border-[#ff2b2b]/50 focus:bg-white transition-all pointer-events-auto"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* WhatsApp field */}
                  <div className="space-y-1.5">
                    <label id="lbl-input-wa" className="font-mono text-[9px] text-gray-400 uppercase tracking-widest font-black block">WhatsApp Number (Optional)</label>
                    <input
                      id="contact-input-whatsapp"
                      type="text"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-gray-50 border border-gray-200 font-sans text-sm text-[#0d0d0d] px-4 py-3 rounded-xl focus:outline-none focus:border-[#ff2b2b]/50 focus:bg-white transition-all pointer-events-auto"
                    />
                  </div>

                  {/* Core Service requested dropdown */}
                  <div className="space-y-1.5">
                    <label id="lbl-input-service" className="font-mono text-[9px] text-gray-400 uppercase tracking-widest font-black block">Select Design Category</label>
                    <select
                      id="contact-select-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 font-sans text-sm text-[#0d0d0d] px-4 py-3.5 rounded-xl focus:outline-none focus:border-[#ff2b2b]/50 focus:bg-white transition-all cursor-pointer pointer-events-auto"
                    >
                      {servicesOption.map((opt) => (
                        <option key={opt} value={opt} className="bg-white text-gray-800">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message text area */}
                <div className="space-y-1.5">
                  <label id="lbl-input-msg" className="font-mono text-[9px] text-gray-400 uppercase tracking-widest font-black block">Describe Your Project *</label>
                  <textarea
                    id="contact-textarea-msg"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your design parameters, sizing guidelines, style preferences, and copy text requirements..."
                    className="w-full bg-gray-50 border border-gray-200 font-sans text-xs sm:text-sm text-[#0d0d0d] p-4 rounded-xl focus:outline-none focus:border-[#ff2b2b]/50 focus:bg-white transition-all resize-none pointer-events-auto"
                  ></textarea>
                </div>

                {/* Success Banner overlay triggers */}
                {isSuccess && (
                  <motion.div
                    id="form-success-banner"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center space-x-3 text-emerald-600 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <div className="font-sans text-xs">
                      <strong className="block font-bold pb-0.5">Inquiry Transmitted Successfully!</strong>
                      <span>Awesome. Your request was securely stored. You can also view/manage it in the Admin Panel dashboard.</span>
                    </div>
                  </motion.div>
                )}

                {/* Send Button */}
                <button
                  id="contact-submit-inquiry-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="glow-btn-red w-full h-13 flex items-center justify-center space-x-2 bg-[#0d0d0d] hover:bg-[#ff2b2b] text-white font-bold uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 rounded-xl cursor-pointer shadow-lg"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </button>

              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
