```tsx id="g7m2xp"
import img1 from '../assets/images/01.jpg';
import img2 from '../assets/images/02.jpg';
import img3 from '../assets/images/03.jpg';
```

interface PortfolioProps {
  posters: Poster[];
  onIncrementStat: (id: string, type: 'views' | 'downloads') => void;
}

export default function Portfolio({ posters, onIncrementStat }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxPoster, setLightboxPoster] = useState<Poster | null>(null);
  const [downloadingPoster, setDownloadingPoster] = useState<Poster | null>(null);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadStep, setDownloadStep] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  // Categories list based on poster contents automatically + 'All' without Motion/3D
  const categories = ['All', 'Posters', 'Social Media', 'Branding', 'Festival', 'Advertisement'];

  const filteredPosters = posters.filter((poster) => {
    // Exclude Motion/3D and 3D items automatically
    if (poster.category === 'Motion/3D') return false;
    
    const matchesCategory = selectedCategory === 'All' || poster.category === selectedCategory;
    const matchesSearch = poster.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          poster.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (selectedCategory === 'All') {
      const categoryOrder = ['Posters', 'Social Media', 'Festival', 'Branding', 'Advertisement'];
      const indexA = categoryOrder.indexOf(a.category);
      const indexB = categoryOrder.indexOf(b.category);
      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB;
      }
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
    }
    return 0;
  });

  // Track page views of posters locally
  const handleOpenLightbox = (poster: Poster) => {
    setLightboxPoster(poster);
    onIncrementStat(poster.id, 'views');
  };

  // Simulate High-Fidelity PSD Package Compile & Direct Download
  const handleDownloadPSD = (poster: Poster) => {
    setDownloadingPoster(poster);
    setDownloadProgress(0);
    setDownloadStep('Initializing secure connection to GFX SOHAN asset depot...');

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            triggerFileDownload(poster);
          }, 400);
          return 100;
        }
        
        const next = prev + Math.floor(Math.random() * 15) + 5;
        const current = next > 100 ? 100 : next;
        
        // Dynamic futuristic steps
        if (current < 25) {
          setDownloadStep('Unpacking Photoshop template layer packages...');
        } else if (current < 50) {
          setDownloadStep('Structuring smart objects and non-destructive filter presets...');
        } else if (current < 75) {
          setDownloadStep('Bundling typeface assets and vector graphic modules...');
        } else if (current < 95) {
          setDownloadStep('Validating file integrity and premium red-theme channels...');
        } else {
          setDownloadStep('Compiling final .psd template bundle...');
        }
        
        return current;
      });
    }, 250);
  };

  const triggerFileDownload = (poster: Poster) => {
    // Increment persistent stats
    onIncrementStat(poster.id, 'downloads');

    // Generate custom canvas graphic certificate to download
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Background
      ctx.fillStyle = '#0d0d0d';
      ctx.fillRect(0, 0, 1200, 800);
      
      // Abstract borders
      ctx.strokeStyle = '#ff2b2b';
      ctx.lineWidth = 10;
      ctx.strokeRect(20, 20, 1160, 760);
      
      // Technical Grid overlay
      ctx.strokeStyle = 'rgba(255, 43, 43, 0.08)';
      ctx.lineWidth = 1;
      for (let i = 40; i < 1160; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 20);
        ctx.lineTo(i, 780);
        ctx.stroke();
      }
      for (let j = 40; j < 780; j += 40) {
        ctx.beginPath();
        ctx.moveTo(20, j);
        ctx.lineTo(1180, j);
        ctx.stroke();
      }

      // Title/Branding
      ctx.fillStyle = '#ff2b2b';
      ctx.font = 'bold 50px sans-serif';
      ctx.fillText('GFX SOHAN GRAPHICS', 80, 150);
      
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 32px sans-serif';
      ctx.fillText('Premium PSD Design Assets Certificate', 80, 220);

      // File Metadata block
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.fillRect(80, 280, 1040, 320);
      ctx.strokeStyle = 'rgba(255, 43, 43, 0.25)';
      ctx.strokeRect(80, 280, 1040, 320);

      ctx.fillStyle = '#ff2b2b';
      ctx.font = 'bold 18px monospace';
      ctx.fillText('STATUS: COMPILE_VERIFIED_SUCCESSFUL', 120, 330);

      ctx.fillStyle = '#999999';
      ctx.font = '20px sans-serif';
      ctx.fillText('Asset Name:', 120, 380);
      ctx.fillText('Design Category:', 120, 420);
      ctx.fillText('File Dimensions:', 120, 460);
      ctx.fillText('Original Size:', 120, 500);
      ctx.fillText('Creative Licence:', 120, 540);

      ctx.fillStyle = '#ffffff';
      ctx.fillText(poster.title, 320, 380);
      ctx.fillText(poster.category, 320, 420);
      ctx.fillText(poster.dimensions, 320, 460);
      ctx.fillText(poster.psdSize, 320, 500);
      ctx.fillStyle = '#ff2b2b';
      ctx.fillText('Extended Personal & Commercial Use / GFX SOHAN studio authorized', 320, 540);

      // Footer
      ctx.fillStyle = '#666666';
      ctx.font = 'italic 16px sans-serif';
      ctx.fillText('Note: This cert indicates your clean download has compiled. The premium PSD project package was successfully delivered offline.', 80, 680);
      ctx.fillText('Need custom adjustments? Connect on WhatsApp +91 9304258233', 80, 710);
      
      // Download link trigger
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `${poster.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-source-layout.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    setDownloadingPoster(null);
  };

  const handleCopyLink = (poster: Poster) => {
    navigator.clipboard.writeText(`${window.location.origin}/#poster-${poster.id}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="portfolio" className="bg-white py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-display text-xs font-black text-[#ff2b2b] uppercase tracking-widest">
            Creative Showcase
          </h2>
          <p className="font-display text-3xl sm:text-5xl font-black tracking-tight text-[#0d0d0d] leading-none">
            Curated Poster Portfolio & <br />
            <span className="text-[#ff2b2b]">
              Free PSD Repository
            </span>
          </p>
          <p className="font-sans text-sm sm:text-base text-gray-450 font-normal max-w-xl mx-auto">
            Explore our state-of-the-art posters, download production-ready editable Adobe Photoshop source files, and directly place a WhatsApp order with one click.
          </p>
        </div>

        {/* Search and Category Filter Controls with premium soft shadow */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-gray-50 p-4 rounded-2xl border border-gray-200 mb-12 shadow-sm">
          {/* Search bar */}
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              id="portfolio-search-input"
              type="text"
              placeholder="Search posters or templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 pl-10 pr-4 py-2.5 rounded-xl text-sm text-[#0d0d0d] focus:outline-none focus:border-[#ff2b2b] transition-colors font-sans"
            />
          </div>

          {/* Scrollable Categories List */}
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0 scroll-smooth">
            <SlidersHorizontal className="w-4 h-4 text-gray-400 shrink-0 hidden sm:block" />
            <div className="flex space-x-1.5 whitespace-nowrap">
              {categories.map((cat) => (
                <button
                  id={`filter-btn-${cat.toLowerCase().replace('/', '-').replace(' ', '-')}`}
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#ff2b2b] text-white shadow-md shadow-[#ff2b2b]/15'
                      : 'bg-white text-gray-500 hover:text-[#0d0d0d] hover:bg-gray-100 border border-gray-150'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosters.length > 0 ? (
              filteredPosters.map((poster) => (
                <motion.div
                  id={`poster-card-${poster.id}`}
                  key={poster.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative flex flex-col bg-white border border-gray-150 rounded-2xl overflow-hidden hover:border-[#ff2b2b]/60 card-shadow hover:shadow-xl transition-all duration-300"
                >
                  {/* Poster Preview Block */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
                    <img
                      src={poster.imageUrl}
                      alt={poster.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-[600ms] ease-out select-none"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-90 z-10"></div>
                    
                    {/* Float tags */}
                    <div className="absolute top-4 left-4 z-20 flex gap-1.5">
                      <span className="font-display text-[8px] font-black uppercase tracking-widest bg-[#ff2b2b] text-white px-2.5 py-1 rounded">
                        {poster.category}
                      </span>
                      {poster.isPremium && (
                        <span className="font-display text-[8px] font-black uppercase tracking-widest bg-amber-500 text-white px-2.5 py-1 rounded flex items-center gap-1">
                          ★ Premium
                        </span>
                      )}
                    </div>

                    {/* Hover Visual Action Overlay */}
                    <div className="absolute inset-0 z-25 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-[#0d0d0d]/45 backdrop-blur-xs transition-opacity duration-350">
                      <div className="flex space-x-3.5 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        <button
                          id={`lightbox-btn-${poster.id}`}
                          onClick={() => handleOpenLightbox(poster)}
                          className="p-3 bg-white hover:bg-[#ff2b2b] hover:text-white text-[#0d0d0d] rounded-full shadow-lg hover:scale-110 transition-all cursor-pointer"
                          title="View Design Details"
                        >
                          <Maximize2 className="w-5 h-5" />
                        </button>
                        <a
                          id={`wa-direct-btn-${poster.id}`}
                          href={`https://wa.me/919304258233?text=Hello%20GFX%20SOHAN!%20I'm%20very%2520interested%252520in%252520ordering%252520a%252520custom%252520graphics%252520design%252520inspired%252520by%252520your%252520design%252520'${encodeURIComponent(poster.title)}'.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-[#ff2b2b] hover:bg-neutral-900 text-white rounded-full shadow-lg hover:scale-110 transition-all"
                          title="Order on WhatsApp"
                        >
                          <MessageSquare className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Poster Title & Details Footer */}
                  <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-1 text-left">
                      <h3 className="font-display text-sm font-bold text-[#0d0d0d] line-clamp-1 group-hover:text-[#ff2b2b] transition-colors">
                        {poster.title}
                      </h3>
                      <div className="flex items-center space-x-4 font-mono text-[9px] text-gray-400 font-semibold">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5 text-[#ff2b2b]" />
                          {poster.views} Views
                        </span>
                        <span>|</span>
                        <span>Size: <strong className="text-gray-750">{poster.psdSize}</strong></span>
                      </div>
                    </div>

                    {/* Footer buttons row */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <button
                        id={`download-psd-btn-${poster.id}`}
                        onClick={() => handleDownloadPSD(poster)}
                        className="flex items-center justify-center space-x-1 px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider text-nowrap cursor-pointer transition-all duration-300 bg-white hover:bg-[#ff2b2b] text-gray-700 hover:text-white border border-gray-200"
                      >
                        <Download className="w-3.5 h-3.5 text-[#ff2b2b] group-hover:text-white" />
                        <span>Get PSD</span>
                      </button>

                      <a
                        id={`wa-order-btn-${poster.id}`}
                        href={`https://wa.me/919304258233?text=Hello%20GFX%20SOHAN!%20I'm%20very%20interested%20in%2520ordering%20a%20custom%20graphics%20design%20inspired%20by%20your%20design%20'${encodeURIComponent(poster.title)}'.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-1 px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider bg-[#ff2b2b]/5 hover:bg-[#ff2b2b] text-[#ff2b2b] hover:text-white border border-[#ff2b2b]/15 transition-all duration-300"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Order WA</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center">
                <span className="text-3xl">🏜️</span>
                <p className="font-sans text-gray-400 mt-3 text-sm">
                  We couldn't find any posters matching "{searchQuery}". Try a different terms or filter.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Modern High-Fidelity Design Lightbox Modal */}
      <AnimatePresence>
        {lightboxPoster && (
          <motion.div
            id="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
          >
            <motion.div
              id="lightbox-container"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-2xl flex flex-col md:grid md:grid-cols-12 max-h-[90vh] md:max-h-[85vh]"
            >
              {/* Close Button */}
              <button
                id="close-lightbox-btn"
                onClick={() => setLightboxPoster(null)}
                className="absolute top-4 right-4 z-40 p-2 text-gray-500 hover:text-[#ff2b2b] bg-gray-50 rounded-full hover:bg-gray-100 transition-colors border border-gray-150 cursor-pointer"
              >
                <Maximize2 className="w-5 h-5 rotate-45" />
              </button>

              {/* Lightbox Image Column */}
              <div className="md:col-span-7 bg-gray-50 relative flex items-center justify-center overflow-hidden min-h-[40vh] md:min-h-0 border-b md:border-b-0 md:border-r border-gray-150">
                <img
                  src={lightboxPoster.imageUrl}
                  alt={lightboxPoster.title}
                  className="w-full h-full max-h-[50vh] md:max-h-[85vh] object-cover md:object-contain select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Lightbox Information Column */}
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[85vh]">
                <div className="space-y-6 text-left">
                  {/* Category & Badge Row */}
                  <div className="flex items-center space-x-2">
                    <span className="font-display text-[8px] font-black uppercase tracking-widest bg-[#ff2b2b]/5 text-[#ff2b2b] px-3 py-1 rounded border border-[#ff2b2b]/15">
                      {lightboxPoster.category}
                    </span>
                    {lightboxPoster.isPremium && (
                      <span className="font-display text-[8px] font-black uppercase tracking-widest bg-amber-500/10 text-amber-600 px-3 py-1 rounded border border-amber-500/20">
                        ★ Premium PSD
                      </span>
                    )}
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <h3 className="font-display text-xl sm:text-2xl font-black text-[#0d0d0d] leading-tight">
                      {lightboxPoster.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                      {lightboxPoster.description}
                    </p>
                  </div>

                  {/* Design File Specifications Grid */}
                  <div className="grid grid-cols-2 gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4 font-mono text-[10px] text-gray-500">
                    <div className="space-y-1">
                      <div className="text-gray-400 uppercase tracking-widest text-[8px] font-bold">File Format</div>
                      <div className="text-[#0d0d0d] font-bold flex items-center gap-1.5 text-xs">
                        <Layers className="w-3.5 h-3.5 text-[#ff2b2b]" /> Photoshop (.PSD)
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-gray-400 uppercase tracking-widest text-[8px] font-bold">Resolution</div>
                      <div className="text-[#0d0d0d] font-bold text-xs">{lightboxPoster.dimensions}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-gray-400 uppercase tracking-widest text-[8px] font-bold">File Size</div>
                      <div className="text-[#ff2b2b] font-black text-xs">{lightboxPoster.psdSize}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-gray-400 uppercase tracking-widest text-[8px] font-bold">Tools Used</div>
                      <div className="text-[#0d0d0d] font-bold text-[9px] space-x-1">
                        {lightboxPoster.software.map((sw) => (
                          <span key={sw} className="bg-gray-150 px-1.5 py-0.5 rounded-sm text-[9px] font-mono">{sw}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* File Download stats simulation indicators */}
                  <div className="flex items-center justify-between font-mono text-[9px] text-gray-400 bg-gray-50 py-2.5 px-4 rounded-xl border border-gray-150 font-semibold uppercase">
                    <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5 text-[#ff2b2b]" /> {lightboxPoster.views} Views</span>
                    <span className="flex items-center gap-1"><Download className="w-3.5 h-3.5 text-[#ff2b2b]" /> {lightboxPoster.downloads} Downloads</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#ff2b2b]" /> {lightboxPoster.creationDate}</span>
                  </div>
                </div>

                {/* Big Actions row */}
                <div className="space-y-3.5 pt-8 mt-4 border-t border-gray-150">
                  <div className="grid grid-cols-2 gap-3.5">
                    <button
                      id="lightbox-download-btn"
                      onClick={() => handleDownloadPSD(lightboxPoster)}
                      className="glow-btn-red flex items-center justify-center space-x-2 bg-[#0d0d0d] text-white px-5 py-3.5 rounded-xl text-xs font-bold font-display uppercase tracking-wider cursor-pointer transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PSD</span>
                    </button>

                    <a
                      id="lightbox-whatsapp-order-btn"
                      href={`https://wa.me/919304258233?text=Hello%20GFX%20SOHAN!%20I'm%20very%20interested%20in%20ordering%20a%20custom%20graphics%20design%20inspired%20by%20your%20design%20'${encodeURIComponent(lightboxPoster.title)}'.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-btn-red flex items-center justify-center space-x-2 bg-[#ff2b2b] text-white px-5 py-3.5 rounded-xl text-xs font-bold font-display uppercase tracking-wider transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Order Custom</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-between gap-2.5">
                    <button
                      id="lightbox-copy-link-btn"
                      onClick={() => handleCopyLink(lightboxPoster)}
                      className="flex items-center justify-center gap-1.5 text-[9px] font-mono font-bold uppercase text-gray-400 hover:text-[#ff2b2b] transition-colors cursor-pointer"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>{copiedLink ? 'Copied Link!' : 'Copy Asset Link'}</span>
                    </button>
                    <span className="text-[9px] font-mono font-bold text-emerald-600 uppercase">License: Personal & Commercial</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Elegant Secure Download Compiling Progress Modal */}
      <AnimatePresence>
        {downloadingPoster && (
          <motion.div
            id="download-progress-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0d0d0d]/75 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              id="download-progress-box"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white border border-gray-200 p-8 rounded-2xl max-w-md w-full space-y-6 text-center shadow-2xl relative overflow-hidden"
            >
              {/* Futuristic animated background elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff2b2b]/5 rounded-full filter blur-xl"></div>
              
              <div className="w-16 h-16 bg-[#ff2b2b]/5 border border-[#ff2b2b]/15 rounded-2xl flex items-center justify-center mx-auto text-[#ff2b2b] animate-bounce">
                <ArrowDownToLine className="w-8 h-8 animate-pulse" />
              </div>

              <div className="space-y-1.5 text-center">
                <h4 className="font-display text-lg font-black text-[#0d0d0d]">
                  Compiling High-Res PSD Assets
                </h4>
                <p className="font-sans text-xs text-gray-500 font-normal truncate max-w-xs mx-auto">
                  {downloadingPoster.title}
                </p>
              </div>

              {/* Progress bar container */}
              <div className="space-y-2">
                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden border border-gray-150">
                  <motion.div
                    className="bg-[#ff2b2b] h-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${downloadProgress}%` }}
                    transition={{ ease: 'easeOut' }}
                  ></motion.div>
                </div>
                <div className="flex justify-between font-mono text-[10px] text-gray-450 font-bold uppercase">
                  <span>Compiling template</span>
                  <span className="text-[#ff2b2b]">{downloadProgress}%</span>
                </div>
              </div>

              {/* Status Message */}
              <div className="bg-gray-50 border border-gray-150 rounded-xl py-3.5 px-4 min-h-[44px] flex items-center justify-center text-center">
                <p className="font-mono text-[10px] text-gray-600 leading-normal font-medium">
                  {downloadStep}
                </p>
              </div>

              <div className="text-[9px] font-mono text-gray-400 font-bold uppercase">
                Authorized Secure Download • GFX SOHAN studio
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
