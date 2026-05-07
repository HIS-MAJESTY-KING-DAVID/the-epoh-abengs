'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Download, CheckCircle2, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Locale = 'en' | 'fr'

interface CollaborationsSectionProps {
  locale: Locale
}

const translations = {
  en: {
    badge: 'Work With Us',
    headline: 'Collaborations',
    subtitle: 'Partner with us to reach engaged families and couples worldwide',
    mediaKit: 'Download Media Kit',
    contact: 'Get in Touch',
    stats: [
      { label: 'Facebook Views', value: '1.1M+' },
      { label: 'Platforms', value: '5' },
      { label: 'Languages', value: '2' },
      { label: 'Countries Reached', value: '20+' },
    ],
    offerings: [
      'Sponsored Content',
      'Brand Ambassadorships',
      'Product Reviews',
      'Social Media Takeovers',
      'Collaborative Videos',
      'Event Appearances',
    ],
    testimonial: {
      quote: 'Always open for collaborations and professional inquiries',
      author: 'The Epoh Abengs',
    },
    whyUs: {
      title: 'Why Partner With Us?',
      points: [
        'Authentic, faith-centered content',
        'Bilingual reach (French & English)',
        'Engaged family-focused audience',
        'High-quality production values',
        'Proven viral content (1.1M+ views)',
      ],
    },
  },
  fr: {
    badge: 'Travaillez Avec Nous',
    headline: 'Collaborations',
    subtitle: 'Associez-vous à nous pour toucher des familles et couples engagés dans le monde',
    mediaKit: 'Télécharger le Media Kit',
    contact: 'Nous Contacter',
    stats: [
      { label: 'Vues Facebook', value: '1.1M+' },
      { label: 'Plateformes', value: '5' },
      { label: 'Langues', value: '2' },
      { label: 'Pays Atteints', value: '20+' },
    ],
    offerings: [
      'Contenu Sponsorisé',
      'Ambassadeur de Marque',
      'Avis Produits',
      'Reprises Réseaux Sociaux',
      'Vidéos Collaboratives',
      'Apparitions Événements',
    ],
    testimonial: {
      quote: 'Toujours ouverts aux collaborations et demandes professionnelles',
      author: 'Les Epoh Abengs',
    },
    whyUs: {
      title: 'Pourquoi Nous Choisir?',
      points: [
        'Contenu authentique centré sur la foi',
        'Portée bilingue (Français & Anglais)',
        'Audience familiale engagée',
        'Production de haute qualité',
        'Contenu viral prouvé (1.1M+ vues)',
      ],
    },
  },
}

export function CollaborationsSection({ locale }: CollaborationsSectionProps) {
  const t = translations[locale]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="collaborations" className="relative py-24 bg-secondary overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-background to-transparent" />
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {t.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card rounded-2xl p-6 text-center shadow-lg border border-border"
            >
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Why Us Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-card rounded-3xl p-8 shadow-xl border border-gold/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-full" />

            <div className="relative z-10">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                {t.whyUs.title}
              </h3>
              <ul className="space-y-4">
                {t.whyUs.points.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Offerings Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-card rounded-3xl p-8 shadow-xl border border-primary/10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-br-full" />

            <div className="relative z-10">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                {locale === 'en' ? 'What We Offer' : 'Ce Que Nous Offrons'}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {t.offerings.map((offering, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-muted/50 border border-border"
                  >
                    <Star className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{offering}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-12"
        >
          <blockquote className="relative max-w-2xl mx-auto">
            <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">"</div>
            <p className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed px-8">
              {t.testimonial.quote}
            </p>
            <footer className="mt-4 text-muted-foreground">— {t.testimonial.author}</footer>
          </blockquote>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg shadow-primary/25"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              <span className="relative flex items-center gap-2">
                <Download className="w-5 h-5" />
                {t.mediaKit}
              </span>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg rounded-full border-2 border-gold/30 hover:border-gold hover:bg-gold/5 text-foreground"
            >
              {t.contact}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
