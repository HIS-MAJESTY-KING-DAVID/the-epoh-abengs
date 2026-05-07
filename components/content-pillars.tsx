'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Sparkles, UtensilsCrossed, Cross, Briefcase } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Locale = 'en' | 'fr'

interface ContentPillarsProps {
  locale: Locale
}

interface Pillar {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

const translations = {
  en: {
    badge: 'What We Share',
    headline: 'Content Pillars',
    subtitle: 'Discover the heart of our content across these five key areas',
    pillars: [
      {
        icon: Heart,
        title: 'Marriage & Couple Life',
        description: 'Our journey since 2021, God-centered love, and relationship advice for a thriving marriage.',
        color: 'primary',
      },
      {
        icon: Sparkles,
        title: 'Beauty & Self-care',
        description: 'Practical beauty tips, skincare routines, and product recommendations for radiant living.',
        color: 'gold',
      },
      {
        icon: UtensilsCrossed,
        title: 'Recipes & Home',
        description: 'Daily culinary inspirations and homemaking tips for a fulfilling domestic life.',
        color: 'primary',
      },
      {
        icon: Cross,
        title: 'Faith & Inspiration',
        description: 'Spiritual guidance, uplifting quotes, and faith-based content to nourish your soul.',
        color: 'gold',
      },
      {
        icon: Briefcase,
        title: 'Professional Collabs',
        description: 'Open for brand partnerships and professional collaborations that align with our values.',
        color: 'primary',
      },
    ] as Pillar[],
  },
  fr: {
    badge: 'Ce Que Nous Partageons',
    headline: 'Piliers de Contenu',
    subtitle: 'Découvrez le cœur de notre contenu à travers ces cinq domaines clés',
    pillars: [
      {
        icon: Heart,
        title: 'Mariage & Vie de Couple',
        description: 'Notre parcours depuis 2021, un amour centré sur Dieu et des conseils pour un mariage épanoui.',
        color: 'primary',
      },
      {
        icon: Sparkles,
        title: 'Beauté & Soins',
        description: 'Conseils beauté pratiques, routines de soins et recommandations produits.',
        color: 'gold',
      },
      {
        icon: UtensilsCrossed,
        title: 'Recettes & Maison',
        description: 'Inspirations culinaires quotidiennes et astuces pour un foyer épanoui.',
        color: 'primary',
      },
      {
        icon: Cross,
        title: 'Foi & Inspiration',
        description: 'Guidance spirituelle, citations inspirantes et contenu basé sur la foi.',
        color: 'gold',
      },
      {
        icon: Briefcase,
        title: 'Collaborations Pro',
        description: 'Ouverts aux partenariats de marques alignés avec nos valeurs.',
        color: 'primary',
      },
    ] as Pillar[],
  },
}

export function ContentPillars({ locale }: ContentPillarsProps) {
  const t = translations[locale]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="blog" className="relative py-24 bg-background overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold-dark">{t.badge}</span>
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

        {/* Pillars Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative bg-card rounded-3xl p-8 shadow-lg border border-border hover:border-${pillar.color}/30 transition-all duration-300 overflow-hidden ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Gradient Overlay on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  pillar.color === 'primary'
                    ? 'from-primary/5 to-transparent'
                    : 'from-gold/5 to-transparent'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Decorative Corner */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 ${
                  pillar.color === 'primary' ? 'bg-primary/5' : 'bg-gold/5'
                } rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-2xl ${
                    pillar.color === 'primary' ? 'bg-primary/10' : 'bg-gold/10'
                  } flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow`}
                >
                  <pillar.icon
                    className={`w-8 h-8 ${
                      pillar.color === 'primary' ? 'text-primary' : 'text-gold'
                    }`}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>

                {/* Animated Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <span className="text-sm font-medium">
                    {locale === 'en' ? 'Explore' : 'Explorer'}
                  </span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
