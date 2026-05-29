import { useState } from 'react';
import { SERVICES } from '../data';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const [selectedServices, setSelectedServices] = useState<string[]>(['social-poster']);
  const [quantity, setQuantity] = useState<number>(1);
  const [isUrgent, setIsUrgent] = useState<boolean>(false);
  const [includeSourceFiles, setIncludeSourceFiles] = useState<boolean>(true);

  // Helper to map icon names to actual Lucide components dynamically
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName] || Icons.Sparkles;
    return <IconComponent className="w-6 h-6 text-[#ff2b2b]" />;
  };

  const handleToggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // Live dynamic quote calculation in Indian Rupees (₹)
  const calculateTotal = () => {
    let baseSum = 0;
    selectedServices.forEach((serviceId) => {
      const match = SERVICES.find((s) => s.id === serviceId);
      if (match) {
        baseSum += parseInt(match.basePrice.replace('₹', ''));
      }
    });

    let total = baseSum * quantity;
    if (isUrgent) total += 1499; // Urgency premium: ₹1499
    if (includeSourceFiles && !selectedServices.includes('branding')) {
      total += 499 * quantity; // Custom addon: ₹499 per unit
    }
    return total;
  };

  const generateWhatsAppQuoteLink = () => {
    const totalCost = calculateTotal();
    const serviceNames = selectedServices
      .map((id) => SERVICES.find((s) => s.id === id)?.title)
      .join(', ');

    const presetMessage = `Hello GFX SOHAN! %0A%0A` +
      `I would like to order the following design service(s):%0A` +
      `*Services:* ${encodeURIComponent(serviceNames || '')}%0A` +
      `*Quantity:* ${quantity} design(s)%0A` +
      `*Turnaround:* ${isUrgent ? 'Expedited Express (Under 12-24 hrs)' : 'Standard Delivery'}%0A` +
      `*Include Editable PSD Assets:* ${includeSourceFiles ? 'Yes' : 'No'}%0A` +
      `*Estimated Cost Quote:* ₹${totalCost}%0A%0A` +
      `Please review and let me know when we can begin!`;

    return `https://wa.me/919304258233?text=${presetMessage}`;
  };

  return (
    <section id="services" className="bg-gray-50 py-24 border-b border-gray-150 relative overflow-hidden">
      {/* Mesh red glow */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#ff2b2b]/3 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <h2 className="font-display text-xs font-black text-[#ff2b2b] uppercase tracking-widest">
            What I Do Best
          </h2>
          <p className="font-display text-3xl sm:text-5xl font-black tracking-tight text-[#0d0d0d] leading-none">
            High-Impact Design <br />
            <span className="text-[#ff2b2b]">Services Portfolio</span>
          </p>
          <p className="font-sans text-sm sm:text-base text-gray-500 font-normal max-w-xl mx-auto">
            From thumb-stopping viral social media creatives to business branding and custom larger format banners, we engineer designs that capture eyeballs.
          </p>
        </div>

        {/* Services Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((service, idx) => (
            <motion.div
              id={`service-card-${service.id}`}
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white border border-gray-150 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#ff2b2b]/40 card-shadow hover:shadow-xl transition-all duration-300 transform text-left"
            >
              <div className="space-y-6">
                {/* Header Icon & Base Price */}
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-150 flex items-center justify-center group-hover:bg-[#ff2b2b]/5 group-hover:border-[#ff2b2b]/30 transition-colors">
                    {renderIcon(service.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="block font-mono text-[9px] text-gray-400 font-bold uppercase tracking-widest">Base Rate</span>
                    <strong className="text-xl sm:text-2xl font-display font-black text-[#0d0d0d] group-hover:text-[#ff2b2b] transition-colors">{service.basePrice}</strong>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h3 className="font-display text-base font-black text-[#0d0d0d] tracking-tight">{service.title}</h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">{service.description}</p>
                </div>

                {/* Features Checklist */}
                <ul className="space-y-2 pt-2 border-t border-gray-100">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center space-x-2 font-mono text-[10px] text-gray-450 font-semibold uppercase">
                      <Icons.Check className="w-3.5 h-3.5 text-[#ff2b2b] shrink-0" />
                      <span className="text-gray-600 truncate">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card WhatsApp Prompt Button */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-[10px] font-mono font-bold uppercase">
                <span className="text-gray-450">Delivery: <strong className="text-[#0d0d0d]">{service.deliveryTime}</strong></span>
                <a
                  id={`service-cta-${service.id}`}
                  href={`https://wa.me/919304258233?text=Hello%20GFX%20SOHAN!%20I'm%20interested%2520in%2520ordering%252520your%252520'${encodeURIComponent(service.title)}'%2520service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-[#ff2b2b] hover:text-[#0d0d0d] font-bold tracking-wider transition-colors"
                >
                  <span>Inquire Now</span>
                  <Icons.ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Custom Quote Configuration Area with red effects */}
        <motion.div
          id="quote-calculator-container"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-10 card-shadow relative"
        >
          {/* Section banner tag */}
          <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#ff2b2b] text-white font-display text-[9px] font-black tracking-widest px-4 py-1.5 rounded-full uppercase shadow-md shadow-[#ff2b2b]/15">
            Interactive Quote Engine
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Interactive Inputs Left Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-1">
                <h3 className="font-display text-xl sm:text-2xl font-black text-[#0d0d0d]">Custom Graphics Order Planner</h3>
                <p className="font-sans text-xs text-gray-450 font-normal">
                  Tailor your exact package specifications and instantly generate a formatted WhatsApp estimate to begin direct co-creation.
                </p>
              </div>

              {/* Service Select List */}
              <div className="space-y-2.5">
                <span className="block font-mono text-[9px] font-bold text-gray-400 uppercase tracking-widest">Step 1: Select Active Services</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICES.map((s) => (
                    <button
                      id={`quote-service-toggle-${s.id}`}
                      key={s.id}
                      onClick={() => handleToggleService(s.id)}
                      className={`flex items-center justify-between p-3.5 rounded-xl border text-xs font-bold font-sans transition-all duration-200 cursor-pointer ${
                        selectedServices.includes(s.id)
                          ? 'bg-[#ff2b2b]/5 border-[#ff2b2b] text-[#ff2b2b]'
                          : 'bg-white border-gray-200 text-gray-500 hover:text-[#0d0d0d] hover:bg-gray-50'
                      }`}
                    >
                      <span className="truncate">{s.title}</span>
                      <span className="font-mono text-[9px] text-[#ff2b2b] ml-2 shrink-0">{s.basePrice}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Controls & Add-ons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                {/* Quantity */}
                <div className="space-y-2">
                  <span className="block font-mono text-[9px] font-bold text-gray-400 uppercase tracking-widest">Step 2: Creative Count</span>
                  <div className="flex items-center space-x-3.5 bg-gray-50 border border-gray-200 p-1 px-2.5 rounded-xl">
                    <button
                      id="quote-qty-dec"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-gray-400 hover:text-[#ff2b2b] font-bold text-base px-2 py-1 cursor-pointer select-none"
                    >
                      -
                    </button>
                    <span className="font-mono text-xs text-[#0d0d0d] font-bold flex-grow text-center">{quantity}</span>
                    <button
                      id="quote-qty-inc"
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-gray-400 hover:text-[#ff2b2b] font-bold text-base px-2 py-1 cursor-pointer select-none"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Speed Add-on */}
                <div className="space-y-2">
                  <span className="block font-mono text-[9px] font-bold text-gray-400 uppercase tracking-widest">Step 3: Expedited Speed</span>
                  <button
                    id="quote-toggle-urgent"
                    onClick={() => setIsUrgent(!isUrgent)}
                    className={`w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl border text-[10px] font-bold font-sans uppercase transition-all duration-200 cursor-pointer ${
                      isUrgent
                        ? 'bg-[#ff2b2b]/5 border-[#ff2b2b] text-[#ff2b2b]'
                        : 'bg-white border-gray-200 text-gray-500 hover:text-[#0d0d0d] hover:bg-gray-50'
                    }`}
                  >
                    <Icons.Zap className={`w-3.5 h-3.5 ${isUrgent ? 'animate-pulse text-amber-500' : ''}`} />
                    <span>{isUrgent ? 'Express Delivery' : 'Standard Speed'}</span>
                  </button>
                </div>

                {/* Source File option */}
                <div className="space-y-2">
                  <span className="block font-mono text-[9px] font-bold text-gray-400 uppercase tracking-widest">Step 4: Editable PSDs</span>
                  <button
                    id="quote-toggle-psd"
                    onClick={() => setIncludeSourceFiles(!includeSourceFiles)}
                    className={`w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl border text-[10px] font-bold font-sans uppercase transition-all duration-200 cursor-pointer ${
                      includeSourceFiles
                        ? 'bg-amber-500/5 border-amber-500 text-amber-600'
                        : 'bg-white border-gray-200 text-gray-400 hover:text-[#0d0d0d] hover:bg-gray-50'
                    }`}
                  >
                    <Icons.FileText className="w-3.5 h-3.5" />
                    <span>{includeSourceFiles ? 'With PSDs' : 'Outputs Only'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Calculations Result Right Column */}
            <div className="lg:col-span-5 bg-gray-50 border border-gray-150 rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left space-y-6">
              <div className="space-y-3.5">
                <span className="font-mono text-[9px] font-bold text-gray-400 uppercase tracking-widest">Estimated Calculations</span>
                <div className="space-y-2">
                  {selectedServices.map((id) => {
                    const match = SERVICES.find((s) => s.id === id);
                    if (!match) return null;
                    return (
                      <div key={id} className="flex justify-between text-[10px] text-gray-500 font-mono font-semibold uppercase">
                        <span>{match.title}</span>
                        <span className="text-[#0d0d0d]">{match.basePrice} × {quantity}</span>
                      </div>
                    );
                  })}
                  {isUrgent && (
                    <div className="flex justify-between text-[10px] text-[#ff2b2b] font-mono font-bold uppercase">
                      <span>Express Premium</span>
                      <span>+₹1499</span>
                    </div>
                  )}
                  {includeSourceFiles && !selectedServices.includes('branding') && (
                    <div className="flex justify-between text-[10px] text-amber-600 font-mono font-bold uppercase">
                      <span>Photoshop Files Add-on</span>
                      <span>+₹499 × {quantity}</span>
                    </div>
                  )}
                </div>

                <div className="h-px bg-gray-200"></div>

                <div className="flex justify-between items-end py-1">
                  <div>
                    <span className="font-display text-[#ff2b2b] text-[10px] font-black uppercase tracking-wider block">Estimated Quote</span>
                    <span className="font-sans text-[10px] text-gray-400 font-semibold uppercase">direct support included</span>
                  </div>
                  <strong className="text-3xl sm:text-4xl font-display font-black text-[#0d0d0d]">
                    ₹{calculateTotal()}
                  </strong>
                </div>
              </div>

              {/* Order WhatsApp dynamic URL */}
              <a
                id="quote-estimate-whatsapp-btn"
                href={generateWhatsAppQuoteLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn-red flex items-center justify-center space-x-2 bg-[#0d0d0d] text-white py-4 rounded-xl font-bold tracking-normal text-sm transition-all duration-300 w-full shadow-lg"
              >
                <Icons.Phone className="w-4 h-4" />
                <span>Submit Order via WhatsApp</span>
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
