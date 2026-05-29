import React, { useState } from 'react';
import { Poster, ContactSubmission } from '../types';
import { Plus, Trash2, Check, ExternalLink, Eye, Download, Inbox, Layers, Settings, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AdminPanelProps {
  posters: Poster[];
  submissions: ContactSubmission[];
  isOpen: boolean;
  onClose: () => void;
  onAddPoster: (poster: Omit<Poster, 'id' | 'views' | 'downloads' | 'creationDate'>) => void;
  onDeletePoster: (id: string) => void;
  onToggleSubmissionStatus: (id: string, status: 'new' | 'responded' | 'archived') => void;
}

export default function AdminPanel({
  posters,
  submissions,
  isOpen,
  onClose,
  onAddPoster,
  onDeletePoster,
  onToggleSubmissionStatus,
}: AdminPanelProps) {
  
  // Tab states
  const [activeTab, setActiveTab] = useState<'posters' | 'submissions'>('posters');

  // Form states for adding items
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<Poster['category']>('Posters');
  const [newImgUrl, setNewImgUrl] = useState('');
  const [newPsdSize, setNewPsdSize] = useState('85.4 MB');
  const [newDimensions, setNewDimensions] = useState('3000 x 4000 px');
  const [newDesc, setNewDesc] = useState('');
  const [softwareTags, setSoftwareTags] = useState('Photoshop, Illustrator');
  const [isPremium, setIsPremium] = useState(false);

  const [formSuccess, setFormSuccess] = useState(false);

  // Compute stats automatically
  const totalViews = posters.reduce((sum, p) => sum + (p.views || 0), 0);
  const totalDownloads = posters.reduce((sum, p) => sum + (p.downloads || 0), 0);

  const handleCreatePoster = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newDesc) return;

    // Resolve Image URL
    let resolvedImage = newImgUrl;
    if (!resolvedImage || resolvedImage.trim() === '') {
      resolvedImage = `https://picsum.photos/seed/poster-${Date.now()}/800/1000`;
    }

    onAddPoster({
      title: newTitle,
      category: newCategory,
      imageUrl: resolvedImage,
      psdSize: newPsdSize,
      software: softwareTags.split(',').map((s) => s.trim()),
      description: newDesc,
      dimensions: newDimensions,
      isPremium: isPremium,
    });

    setFormSuccess(true);
    setTimeout(() => setFormSuccess(false), 3000);

    // Reset fields
    setNewTitle('');
    setNewDesc('');
    setNewImgUrl('');
    setNewPsdSize('85.4 MB');
    setNewDimensions('3000 x 4000 px');
    setIsPremium(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div id="admin-panel-overlay" className="fixed inset-0 z-50 bg-[#0d0d0d]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto select-none">
        <motion.div
          id="admin-panel-box"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative bg-white border border-gray-200 rounded-2xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col font-sans"
        >
          {/* Header Title bar */}
          <div className="flex justify-between items-center pb-5 border-b border-gray-200 text-left shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#ff2b2b]/10 border border-[#ff2b2b]/25 rounded-lg flex items-center justify-center text-[#ff2b2b]">
                <Settings className="w-5 h-5 animate-spin-slow" />
              </div>
              <div className="text-left">
                <h3 className="font-display font-black text-[#0d0d0d] text-lg tracking-tight">
                  GFX SOHAN Admin Studio
                </h3>
                <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest font-bold block mt-0.5">Local Storage CRUD Workspace</span>
              </div>
            </div>

            <button
              id="close-admin-panel"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-105 border border-gray-200 text-gray-500 hover:text-black cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Metrics Statistics strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-b border-gray-200 shrink-0 text-left">
            <div id="admin-stat-views" className="bg-gray-50 border border-gray-150 rounded-xl p-3">
              <span className="font-mono text-[8.5px] text-gray-400 uppercase tracking-widest font-black block">Total Views</span>
              <strong className="font-display text-lg text-[#0d0d0d] font-black flex items-center gap-1.5 mt-1">
                <Eye className="w-4 h-4 text-gray-400" /> {totalViews}
              </strong>
            </div>
            <div id="admin-stat-downloads" className="bg-gray-50 border border-gray-150 rounded-xl p-3">
              <span className="font-mono text-[8.5px] text-gray-400 uppercase tracking-widest font-black block">Total PSD Pulls</span>
              <strong className="font-display text-lg text-[#0d0d0d] font-black flex items-center gap-1.5 mt-1">
                <Download className="w-4 h-4 text-[#ff2b2b]" /> {totalDownloads}
              </strong>
            </div>
            <div id="admin-stat-posters" className="bg-gray-50 border border-gray-150 rounded-xl p-3">
              <span className="font-mono text-[8.5px] text-gray-400 uppercase tracking-widest font-black block">Managed Designs</span>
              <strong className="font-display text-lg text-[#0d0d0d] font-black flex items-center gap-1.5 mt-1">
                <Layers className="w-4 h-4 text-[#ff2b2b]" /> {posters.length} assets
              </strong>
            </div>
            <div id="admin-stat-inbox" className="bg-gray-50 border border-gray-150 rounded-xl p-3">
              <span className="font-mono text-[8.5px] text-gray-400 uppercase tracking-widest font-black block">Inbox Submissions</span>
              <strong className="font-display text-lg text-[#0d0d0d] font-black flex items-center gap-1.5 mt-1">
                <Inbox className="w-4 h-4 text-[#ff2b2b]" /> {submissions.length} leads
              </strong>
            </div>
          </div>

          {/* Navigation Tab links */}
          <div className="flex space-x-2 py-4 border-b border-gray-200 shrink-0 text-left">
            <button
              id="admin-tab-posters"
              onClick={() => setActiveTab('posters')}
              className={`px-4 py-2 rounded-xl text-[10px] font-mono font-bold uppercase tracking-widest cursor-pointer transition-all border ${
                activeTab === 'posters'
                  ? 'bg-[#0d0d0d] text-white border-transparent shadow-sm'
                  : 'bg-gray-50 text-gray-400 border-gray-200 hover:text-black hover:bg-gray-100'
              }`}
            >
              Manage Portfolio Grid
            </button>
            <button
              id="admin-tab-submissions"
              onClick={() => setActiveTab('submissions')}
              className={`px-4 py-2 rounded-xl text-[10px] font-mono font-bold uppercase tracking-widest cursor-pointer transition-all border ${
                activeTab === 'submissions'
                  ? 'bg-[#0d0d0d] text-white border-transparent shadow-sm'
                  : 'bg-gray-50 text-gray-400 border-gray-200 hover:text-black hover:bg-gray-100'
              }`}
            >
              Contact Messages ({submissions.filter((s) => s.status === 'new').length} Unread)
            </button>
          </div>

          {/* Admin Panels View Scroll Container */}
          <div className="flex-grow overflow-y-auto py-6 space-y-8 pr-1 font-sans">
            
            {/* TAB: Manage Portfolio Grid */}
            {activeTab === 'posters' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left">
                {/* Add New design form */}
                <div className="md:col-span-12 xl:col-span-5 bg-gray-50 border border-gray-150 p-5 rounded-2xl space-y-4">
                  <h4 className="font-display font-black text-sm text-[#0d0d0d] flex items-center gap-1.5 pb-2 border-b border-gray-200">
                    <Plus className="w-4 h-4 text-[#ff2b2b]" /> Add New Portfolio Poster
                  </h4>

                  <form onSubmit={handleCreatePoster} className="space-y-4 text-xs">
                    {/* Design title */}
                    <div className="space-y-1">
                      <label className="text-gray-400 font-mono text-[8px] uppercase tracking-widest font-black block">Design Heading *</label>
                      <input
                        id="new-poster-title"
                        type="text"
                        required
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="e.g. Festival Cosmic Poster template"
                        className="w-full bg-white border border-gray-200 px-3 py-2.5 rounded-lg text-[#0d0d0d] text-xs focus:outline-none focus:border-[#ff2b2b]/50 transition-all font-medium"
                      />
                    </div>

                    {/* Sizing description */}
                    <div className="space-y-1">
                      <label className="text-gray-400 font-mono text-[8px] uppercase tracking-widest font-black block">Description *</label>
                      <textarea
                        id="new-poster-desc"
                        required
                        rows={2}
                        value={newDesc}
                        onChange={(e) => setNewDesc(e.target.value)}
                        placeholder="Brief summary matching template..."
                        className="w-full bg-white border border-gray-200 p-3 rounded-lg text-[#0d0d0d] text-xs focus:outline-none focus:border-[#ff2b2b]/50 transition-all resize-none font-medium h-14"
                      ></textarea>
                    </div>

                    {/* Grid category select */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-gray-400 font-mono text-[8px] uppercase tracking-widest font-black block">Category</label>
                        <select
                          id="new-poster-category"
                          value={newCategory}
                          onChange={(e) => setNewCategory(e.target.value as Poster['category'])}
                          className="w-full bg-white border border-gray-200 px-3 py-2.5 rounded-lg text-[#0d0d0d] text-xs focus:outline-none cursor-pointer focus:border-[#ff2b2b]/50 transition-all font-semibold"
                        >
                          <option value="Posters">Posters</option>
                          <option value="Social Media">Social Media</option>
                          <option value="Branding">Branding</option>
                          <option value="Festival">Festival</option>
                          <option value="Advertisement">Advertisement</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-gray-400 font-mono text-[8px] uppercase tracking-widest font-black block">PSD Size</label>
                        <input
                          id="new-poster-size"
                          type="text"
                          value={newPsdSize}
                          onChange={(e) => setNewPsdSize(e.target.value)}
                          className="w-full bg-white border border-gray-200 px-3 py-2.5 rounded-lg text-[#0d0d0d] text-xs focus:outline-none focus:border-[#ff2b2b]/50 transition-all font-medium"
                        />
                      </div>
                    </div>

                    {/* Resolution & Software options */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-gray-400 font-mono text-[8px] uppercase tracking-widest font-black block">Resolution</label>
                        <input
                          id="new-poster-resolution"
                          type="text"
                          value={newDimensions}
                          onChange={(e) => setNewDimensions(e.target.value)}
                          className="w-full bg-white border border-gray-200 px-3 py-2.5 rounded-lg text-[#0d0d0d] text-xs focus:outline-none focus:border-[#ff2b2b]/50 transition-all font-medium"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-gray-400 font-mono text-[8px] uppercase tracking-widest font-black block">Software tags</label>
                        <input
                          id="new-poster-software"
                          type="text"
                          value={softwareTags}
                          onChange={(e) => setSoftwareTags(e.target.value)}
                          className="w-full bg-white border border-gray-200 px-3 py-2.5 rounded-lg text-[#0d0d0d] text-xs focus:outline-none focus:border-[#ff2b2b]/50 transition-all font-medium"
                        />
                      </div>
                    </div>

                    {/* Custom image option */}
                    <div className="space-y-1">
                      <label className="text-gray-400 font-mono text-[8px] uppercase tracking-widest font-black block">Design Preview URL</label>
                      <input
                        id="new-poster-imageurl"
                        type="text"
                        value={newImgUrl}
                        onChange={(e) => setNewImgUrl(e.target.value)}
                        placeholder="Leave empty for auto-generated seeds"
                        className="w-full bg-white border border-gray-200 px-3 py-2.5 rounded-lg text-[#0d0d0d] text-xs focus:outline-none focus:border-[#ff2b2b]/50 transition-all font-medium"
                      />
                    </div>

                    {/* Premium badge */}
                    <div className="flex items-center space-x-2.5 py-1">
                      <input
                        id="new-poster-premium"
                        type="checkbox"
                        checked={isPremium}
                        onChange={(e) => setIsPremium(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-350 text-[#ff2b2b] focus:ring-[#ff2b2b] cursor-pointer"
                      />
                      <label htmlFor="new-poster-premium" className="text-gray-500 font-mono text-[9px] uppercase font-bold tracking-wider cursor-pointer">
                        Mark as Premium PSD File
                      </label>
                    </div>

                    {formSuccess && (
                      <div className="bg-emerald-50 border border-emerald-200 py-2 px-3 rounded-lg text-emerald-605 font-mono text-[9px] font-bold text-center">
                        ✓ Design Poster Added To Portfolio!
                      </div>
                    )}

                    <button
                      id="new-poster-submit-btn"
                      type="submit"
                      className="w-full bg-[#0d0d0d] hover:bg-[#ff2b2b] text-white font-bold py-2.5 rounded-lg text-xs tracking-widest uppercase cursor-pointer transition-colors shadow-sm"
                    >
                      Publish to Grid
                    </button>
                  </form>
                </div>

                {/* Existing Poster List for deletion */}
                <div className="md:col-span-12 xl:col-span-7 bg-gray-50 border border-gray-150 p-5 rounded-2xl space-y-4">
                  <h4 className="font-display font-black text-sm text-[#0d0d0d] pb-2 border-b border-gray-200">
                    Active Assets List ({posters.length})
                  </h4>

                  <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
                    {posters.map((poster) => (
                      <div
                        id={`admin-item-row-${poster.id}`}
                        key={poster.id}
                        className="flex items-center justify-between p-3 bg-white hover:bg-gray-50 border border-gray-150 rounded-xl transition-all"
                      >
                        <div className="flex items-center space-x-3 text-left min-w-0">
                          <img
                            src={poster.imageUrl}
                            alt={poster.title}
                            className="w-10 h-12 object-cover rounded-md border border-gray-150 shrink-0 select-none"
                            referrerPolicy="no-referrer"
                          />
                          <div className="min-w-0 flex-grow">
                            <span className="block font-sans font-bold text-[#0d0d0d] text-xs line-clamp-1">{poster.title}</span>
                            <span className="font-mono text-[8.5px] text-[#ff2b2b] font-black uppercase bg-[#ff2b2b]/10 px-1.5 py-0.2 rounded mt-1.5 inline-block">{poster.category}</span>
                            <span className="font-mono text-[8.5px] text-gray-400 font-bold ml-2">Size: {poster.psdSize}</span>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex space-x-1 shrink-0 ml-4">
                          <button
                            id={`admin-delete-poster-btn-${poster.id}`}
                            onClick={() => onDeletePoster(poster.id)}
                            className="p-1.5 text-gray-400 hover:text-[#ff2b2b] hover:bg-[#ff2b2b]/10 rounded-md transition-all cursor-pointer"
                            title="Delete Asset"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: Submission List messages */}
            {activeTab === 'submissions' && (
              <div className="space-y-4 text-left">
                <h4 className="font-display font-black text-sm text-[#0d0d0d] pb-2 border-b border-gray-200">
                  Client Messages Log ({submissions.length} Leads)
                </h4>

                <div className="space-y-4.5 max-h-[500px] overflow-y-auto pr-1">
                  {submissions.length > 0 ? (
                    submissions.slice().reverse().map((sub) => (
                      <div
                        id={`admin-submission-card-${sub.id}`}
                        key={sub.id}
                        className={`p-5 rounded-2xl border flex flex-col space-y-4 transition-all ${
                          sub.status === 'new'
                            ? 'bg-rose-500/[0.015] border-[#ff2b2b]/25 hover:border-[#ff2b2b]/40 shadow-sm'
                            : 'bg-white border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-2.5">
                          {/* Sender meta */}
                          <div className="text-left">
                            <div className="flex items-center gap-2">
                              <strong className="text-[#0d0d0d] font-display font-black text-sm">{sub.name}</strong>
                              {sub.status === 'new' && (
                                <span className="text-[7.5px] font-mono uppercase bg-[#ff2b2b] text-white px-1.5 py-0.5 rounded-sm tracking-wider font-bold">Unread Request</span>
                              )}
                            </div>
                            <span className="font-mono text-[9px] text-gray-400 font-bold block mt-1">{sub.email} • {sub.whatsapp || 'No WhatsApp'}</span>
                          </div>
                          
                          {/* Date details */}
                          <div className="text-right flex flex-col items-end shrink-0">
                            <span className="font-mono text-[8.5px] text-gray-400 font-semibold block">{sub.date}</span>
                            <span className="font-mono text-[8.5px] text-[#ff2b2b] font-bold bg-[#ff2b2b]/10 px-2 py-0.5 mt-1 rounded">{sub.service}</span>
                          </div>
                        </div>

                        {/* Message payload */}
                        <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-150">
                          <p className="font-sans text-xs text-gray-600 leading-relaxed font-normal whitespace-pre-line text-left">
                            {sub.message}
                          </p>
                        </div>

                        {/* Dynamic Toggle buttons */}
                        <div className="flex gap-2 justify-end">
                          {sub.status === 'new' ? (
                            <button
                              id={`admin-mark-responded-${sub.id}`}
                              onClick={() => onToggleSubmissionStatus(sub.id, 'responded')}
                              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-[9px] font-mono bg-emerald-50 border border-emerald-200 text-emerald-605 hover:bg-emerald-100 cursor-pointer font-bold uppercase transition-colors"
                            >
                              <Check className="w-3.5 h-3.5" />
                              <span>Mark Responded</span>
                            </button>
                          ) : (
                            <button
                              id={`admin-mark-unread-${sub.id}`}
                              onClick={() => onToggleSubmissionStatus(sub.id, 'new')}
                              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-[9px] font-mono bg-gray-50 border border-gray-200 text-gray-450 hover:text-[#0d0d0d] hover:bg-gray-100 cursor-pointer font-bold uppercase transition-colors"
                            >
                              <span>Reopen Lead</span>
                            </button>
                          )}
                          <a
                            id={`admin-reply-whatsapp-${sub.id}`}
                            href={`https://wa.me/${sub.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(sub.name)}!%20This%20is%20GFX%2520SOHAN%2520regarding%2520your%2520design%2520inquiry%2520for%2520${encodeURIComponent(sub.service)}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            disabled={!sub.whatsapp}
                            className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-[9px] font-mono bg-[#25D366]/10 border border-[#25D366]/30 text-[#128C7E] hover:bg-[#25D366] hover:text-white transition-colors cursor-pointer font-bold uppercase"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Reply via WhatsApp</span>
                          </a>
                        </div>

                      </div>
                    ))
                  ) : (
                    <div className="py-12 text-center text-gray-400 font-sans text-xs">
                      🛌 No contact submissions logged in the system database yet.
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>

          <div className="pt-4 border-t border-gray-200 text-right font-mono text-[8.5px] text-gray-400 font-bold uppercase shrink-0">
            Design assets and logs securely buffered to client browser sandbox.
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
