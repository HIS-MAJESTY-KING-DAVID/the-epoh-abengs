'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Play, Eye, Heart, MessageCircle, Share2 } from 'lucide-react'

type Locale = 'en' | 'fr'

interface VideoShowcaseProps {
  locale: Locale
}

const translations = {
  en: {
    badge: 'Featured Content',
    headline: 'Trending Videos',
    subtitle: 'Watch our most popular content that resonates with families worldwide',
    views: 'views',
    watch: 'Watch Now',
  },
  fr: {
    badge: 'Contenu Vedette',
    headline: 'Vidéos Tendances',
    subtitle: 'Regardez notre contenu le plus populaire qui résonne avec les familles du monde entier',
    views: 'vues',
    watch: 'Regarder',
  },
}

const featuredVideos = [
  {
    id: 1,
    title: { en: 'Our Marriage Journey', fr: 'Notre Parcours de Mariage' },
    platform: 'YouTube',
    views: '250K',
    gradient: 'from-red-500/20 to-orange-500/20',
    accent: 'red-500',
  },
  {
    id: 2,
    title: { en: 'Faith in Marriage', fr: 'La Foi dans le Mariage' },
    platform: 'Facebook',
    views: '1.1M',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    accent: 'blue-500',
  },
  {
    id: 3,
    title: { en: 'Beauty Tips', fr: 'Conseils Beauté' },
    platform: 'TikTok',
    views: '500K',
    gradient: 'from-pink-500/20 to-purple-500/20',
    accent: 'pink-500',
  },
]

export function VideoShowcase({ locale }: VideoShowcaseProps) {
  const t = translations[locale]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null)

  return (
    <section className="relative py-24 bg-gradient-to-b from-background to-secondary overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Play className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-primary">{t.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            {t.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Video Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {featuredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
              className="group relative"
            >
              <div className="relative bg-card rounded-3xl overflow-hidden shadow-xl border border-border hover:border-primary/30 transition-all duration-500">
                {/* Video Thumbnail */}
                <div className={`relative aspect-[9/16] sm:aspect-video bg-gradient-to-br ${video.gradient}`}>
                  {/* Pattern Overlay */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 0)`,
                      backgroundSize: '24px 24px',
                    }}
                  />

                  {/* Play Button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={false}
                    animate={{ scale: hoveredVideo === video.id ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-2xl cursor-pointer group-hover:bg-primary transition-colors duration-300"
                    >
                      <Play className="w-8 h-8 text-primary group-hover:text-primary-foreground fill-current transition-colors" />
                    </motion.div>
                  </motion.div>

                  {/* Platform Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium text-foreground">
                      {video.platform}
                    </span>
                  </div>

                  {/* Views */}
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium text-foreground">
                      <Eye className="w-3 h-3" />
                      {video.views}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {video.title[locale]}
                  </h3>

                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Heart className="w-4 h-4" />
                        <span className="text-xs">Like</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-xs">Comment</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Share2 className="w-4 h-4" />
                        <span className="text-xs">Share</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${video.gradient} blur-xl -z-10 opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
