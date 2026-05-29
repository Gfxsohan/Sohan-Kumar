import { useState } from 'react';
import { Facebook, Instagram, MessageSquare, ThumbsUp, Radio, Users2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function SocialHub() {
  const [isFollowed, setIsFollowed] = useState(false);
  const [likesCount, setLikesCount] = useState(4852);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const handleToggleFollow = () => {
    if (isFollowed) {
      setIsFollowed(false);
      setLikesCount((prev) => prev - 1);
    } else {
      setIsFollowed(true);
      setLikesCount((prev) => prev + 1);
    }
  };

  const handleLikePost = (postId: number) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  const instagramPosts = [
    { id: 1, imgUrl: 'https://picsum.photos/seed/insta1/500/500', hearts: 342, tag: 'PosterDesign' },
    { id: 2, imgUrl: 'https://picsum.photos/seed/insta2/500/500', hearts: 512, tag: 'Brutalism' },
    { id: 3, imgUrl: 'https://picsum.photos/seed/insta3/500/500', hearts: 289, tag: 'RedVibe' },
  ];

  return (
    <section id="social" className="bg-white py-24 border-b border-gray-150 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-display text-xs font-black text-[#ff2b2b] uppercase tracking-widest animate-pulse">
            Social Proof & Trust
          </h2>
          <p className="font-display text-3xl sm:text-5xl font-black tracking-tight text-[#0d0d0d] leading-none">
            Connect to the <span className="text-[#ff2b2b]">GFX SOHAN Hub</span>
          </p>
          <p className="font-sans text-sm sm:text-base text-gray-550 font-normal max-w-xl mx-auto">
            Stay in sync with daily live creation loops, free direct layouts, and interactive design critique sessions across our digital network.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch font-sans">
          
          {/* Left Column: Interactive Facebook Page Feed Card */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-150 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full space-y-8 text-left relative card-shadow"
            >
              <div className="space-y-6">
                {/* Header Profile Info of Facebook mock */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                    <div className="w-11 h-11 rounded-full bg-[#ff2b2b] flex items-center justify-center font-display font-black text-white text-lg tracking-tighter">
                      gs
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-[#0d0d0d] flex items-center gap-1.5">
                        GFX SOHAN Digital Agency
                        <span className="w-3.5 h-3.5 bg-[#ff2b2b] rounded-full flex items-center justify-center text-[8px] text-white font-bold select-none">✓</span>
                      </h4>
                      <span className="font-mono text-[8px] font-bold text-gray-400 bg-gray-50 py-0.5 px-1.5 rounded-sm border border-gray-150 uppercase">@gfxsohan.graphics</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-[8px] font-mono font-bold text-gray-400 uppercase bg-rose-50 border border-rose-150 text-rose-600 py-1 px-2.5 rounded-md leading-none select-none">
                    <Radio className="w-3 h-3 animate-pulse text-[#ff2b2b]" /> Live Updates
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                  We formulate custom Photoshop PSD layouts, festival templates, and corporate branding creatives. New editable materials are compiled and released weekly. Follow us to stay updated!
                </p>

                {/* Engagement Stats Widget */}
                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl border border-gray-200/70 font-mono text-center">
                  <div className="space-y-1">
                    <span className="text-[8px] text-gray-400 font-bold uppercase tracking-widest block">Followers</span>
                    <strong className="text-xl text-[#0d0d0d] font-black">{likesCount}</strong>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[8px] text-gray-400 font-bold uppercase tracking-widest block">Engagement</span>
                    <strong className="text-xl text-[#ff2b2b] font-black">98.5%</strong>
                  </div>
                </div>
              </div>

              {/* Follow Button Action Area */}
              <div className="pt-6 border-t border-gray-150 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <button
                  id="fb-like-follow-toggle"
                  onClick={handleToggleFollow}
                  className={`w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer transition-all duration-300 ${
                    isFollowed
                      ? 'bg-emerald-50 border border-emerald-200 text-emerald-600 hover:bg-emerald-100'
                      : 'bg-[#0d0d0d] hover:bg-[#ff2b2b] border border-transparent text-white shadow-md'
                  }`}
                >
                  <ThumbsUp className={`w-4 h-4 ${isFollowed ? 'fill-emerald-650' : 'fill-white'}`} />
                  <span>{isFollowed ? 'Page Liked ✓' : 'Like Facebook Page'}</span>
                </button>

                <div className="flex items-center space-x-3">
                  <a
                    id="social-link-facebook"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-50 hover:bg-gray-105 text-gray-400 hover:text-[#ff2b2b] rounded-xl border border-gray-200 transition-all shadow-sm"
                    title="Visit Official Facebook Profile"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    id="social-link-instagram"
                    href="https://www.instagram.com/gfxsohan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-50 hover:bg-gray-105 text-gray-400 hover:text-[#ff2b2b] rounded-xl border border-gray-200 transition-all shadow-sm"
                    title="Follow on Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    id="social-link-whatsapp"
                    href="https://wa.me/919304258233"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-50 hover:bg-gray-105 text-gray-400 hover:text-[#ff2b2b] rounded-xl border border-gray-200 transition-all shadow-sm"
                    title="Direct WhatsApp Helpline"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Simulated Instagram Design Grid */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-150 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full space-y-6 text-left card-shadow"
            >
              <div className="space-y-1">
                <h4 className="font-display font-black text-sm text-[#0d0d0d] uppercase tracking-wide">Live Instagram Portfolio Feed</h4>
                <p className="font-sans text-xs text-gray-400 font-normal">
                  A quick look at my latest visual posters and design micro-tutorials.
                </p>
              </div>

              {/* Instagram post cards grid */}
              <div className="grid grid-cols-3 gap-3.5">
                {instagramPosts.map((post) => (
                  <div
                    key={post.id}
                    className="group relative aspect-square rounded-xl overflow-hidden border border-gray-150 bg-gray-100 cursor-pointer"
                    onClick={() => handleLikePost(post.id)}
                  >
                    <img
                      src={post.imgUrl}
                      alt={post.tag}
                      className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark opacity hover filter */}
                    <div className="absolute inset-0 bg-[#ff2b2b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white scale-90 group-hover:scale-100 transition-transform">
                        <Instagram className="w-4 h-4 mx-auto mb-1 text-white filter drop-shadow animate-pulse" />
                        <span className="font-mono text-[8px] font-bold block bg-black/40 px-1 py-0.5 rounded">#{post.tag}</span>
                      </div>
                    </div>

                    {/* Likes/Hearts hover layout absolute indicator */}
                    <div className="absolute bottom-1.5 right-1.5 bg-white/95 text-gray-500 backdrop-blur-md px-1.5 py-0.5 rounded flex items-center space-x-1 z-10 text-[8px] font-mono border border-gray-200 shadow-sm font-bold">
                      <ThumbsUp className={`w-2.5 h-2.5 ${likedPosts.includes(post.id) ? 'text-[#ff2b2b] fill-[#ff2b2b]' : 'text-gray-400'}`} />
                      <span className={likedPosts.includes(post.id) ? 'text-gray-900' : 'text-gray-500'}>
                        {likedPosts.includes(post.id) ? post.hearts + 1 : post.hearts}
                      </span>
                    </div>

                  </div>
                ))}
              </div>

              {/* Direct Link Tag line */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-150 flex items-center justify-between text-xs font-mono font-bold text-gray-400 uppercase">
                <span className="flex items-center gap-1.5"><Users2 className="w-4 h-4 text-[#ff2b2b]" /> Follow @gfxsohan on IG</span>
                <a
                  id="ig-grid-direct-nav-link"
                  href="https://www.instagram.com/gfxsohan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#ff2b2b] hover:text-black transition-colors"
                >
                  Join Hub
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
