'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Play, Sparkles, ExternalLink, X } from 'lucide-react'

type Locale = 'en' | 'fr'

interface GallerySectionProps {
  locale: Locale
}

const translations = {
  en: {
    badge: 'Visual Journey',
    headline: 'Gallery',
    subtitle: 'A glimpse into our beautiful moments and content',
    viewMore: 'View on',
    video: 'Watch Video',
    close: 'Close',
    categories: ['All', 'Couple', 'Beauty', 'Faith', 'Home'],
  },
  fr: {
    badge: 'Voyage Visuel',
    headline: 'Galerie',
    subtitle: 'Un aperçu de nos beaux moments et contenus',
    viewMore: 'Voir sur',
    video: 'Voir Vidéo',
    close: 'Fermer',
    categories: ['Tout', 'Couple', 'Beauté', 'Foi', 'Maison'],
  },
}

const galleryItems = [
  {
    id: 1,
    type: 'image',
    category: 'Couple',
    aspectRatio: 'tall',
    gradient: 'from-primary/30 via-primary/20 to-gold/30',
  },
  {
    id: 2,
    type: 'video',
    category: 'Faith',
    platform: 'YouTube',
    aspectRatio: 'wide',
    gradient: 'from-gold/30 via-gold/20 to-primary/30',
  },
  {
    id: 3,
    type: 'image',
    category: 'Beauty',
    aspectRatio: 'square',
    gradient: 'from-primary/20 to-gold/20',
  },
  {
    id: 4,
    type: 'image',
    category: 'Home',
    aspectRatio: 'square',
    gradient: 'from-gold/20 to-primary/20',
  },
  {
    id: 5,
    type: 'video',
    category: 'Couple',
    platform: 'TikTok',
    aspectRatio: 'tall',
    gradient: 'from-primary/30 to-gold/20',
  },
  {
    id: 6,
    type: 'image',
    category: 'Faith',
    aspectRatio: 'wide',
    gradient: 'from-gold/30 to-primary/20',
  },
]

export function GallerySection({ locale }: GallerySectionProps) {
  const t = translations[locale]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const filteredItems =
    selectedCategory === 'All' || selectedCategory === 'Tout'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="gallery" className="relative py-24 bg-secondary overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-gold/5 blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-gold" />
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
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            {t.subtitle}
          </motion.p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {t.categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                    : 'bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/30'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              onClick={() => setSelectedItem(item.id)}
              className={`group relative cursor-pointer rounded-2xl overflow-hidden shadow-lg ${
                item.aspectRatio === 'tall'
                  ? 'row-span-2'
                  : item.aspectRatio === 'wide'
                  ? 'col-span-2'
                  : ''
              }`}
            >
              {/* Placeholder with Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
              />

              {/* Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 0)`,
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Content */}
              <div
                className={`relative flex items-center justify-center ${
                  item.aspectRatio === 'tall'
                    ? 'h-80 md:h-96'
                    : item.aspectRatio === 'wide'
                    ? 'h-48 md:h-56'
                    : 'h-48'
                }`}
              >
                {item.type === 'video' && (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-xl"
                  >
                    <Play className="w-7 h-7 text-primary fill-primary" />
                  </motion.div>
                )}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-card/90 text-xs font-medium text-foreground mb-2">
                    {item.category}
                  </span>
                  {item.type === 'video' && item.platform && (
                    <div className="flex items-center gap-2 text-primary-foreground text-sm">
                      <ExternalLink className="w-4 h-4" />
                      <span>
                        {t.viewMore} {item.platform}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-card rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>

              <div className="aspect-video bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-20 h-20 mx-auto text-primary/50 mb-4" />
                  <p className="text-muted-foreground">
                    {locale === 'en' ? 'Content preview coming soon' : 'Aperçu bientôt disponible'}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
