'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Sparkles, BookOpen, Users, Cross } from 'lucide-react'

type Locale = 'en' | 'fr'

interface AboutSectionProps {
  locale: Locale
}

const translations = {
  en: {
    badge: 'Our Story',
    headline: 'Meet The Epoh Abengs',
    subtitle: 'A love story rooted in faith, purpose, and authenticity',
    esther: {
      name: 'Esther Judith',
      role: 'Content Creator & Wife',
      bio: 'Born Kollo Judith, Esther brings warmth, creativity, and a heart for authentic content. She shares beauty tips, recipes, and daily inspirations that uplift families.',
    },
    nathanael: {
      name: 'Nathanaèl',
      role: 'MBA & Husband',
      bio: 'With an MBA from ESSEC Douala and a background in financial analysis and customer relations at MTN Cameroon, Nathanaèl brings wisdom and structure to their mission.',
    },
    origin: {
      title: 'Why We Started',
      text: 'We noticed a lot of content on social media that lacked purpose. There was a need for quality, godly counsel for families and marriages. We are here to fill that gap.',
    },
    values: [
      { icon: Cross, label: 'Faith-Centered' },
      { icon: Heart, label: 'Authentic Love' },
      { icon: Users, label: 'Family First' },
      { icon: BookOpen, label: 'Godly Counsel' },
    ],
    location: 'Based in NYALLA PARISO, Douala, Cameroon',
  },
  fr: {
    badge: 'Notre Histoire',
    headline: 'Découvrez Les Epoh Abengs',
    subtitle: "Une histoire d'amour enracinée dans la foi, le but et l'authenticité",
    esther: {
      name: 'Esther Judith',
      role: 'Créatrice de Contenu & Épouse',
      bio: "Née Kollo Judith, Esther apporte chaleur, créativité et un cœur pour le contenu authentique. Elle partage conseils beauté, recettes et inspirations quotidiennes.",
    },
    nathanael: {
      name: 'Nathanaèl',
      role: 'MBA & Époux',
      bio: "Titulaire d'un MBA de l'ESSEC Douala avec une expérience en analyse financière chez MTN Cameroun, Nathanaèl apporte sagesse et structure à leur mission.",
    },
    origin: {
      title: 'Pourquoi Nous Avons Commencé',
      text: "Nous avons remarqué beaucoup de contenu sans but sur les réseaux sociaux. Il y avait un besoin de conseils de qualité et divins pour les familles. Nous sommes là pour combler ce vide.",
    },
    values: [
      { icon: Cross, label: 'Centré sur la Foi' },
      { icon: Heart, label: 'Amour Authentique' },
      { icon: Users, label: "Famille D'abord" },
      { icon: BookOpen, label: 'Conseil Divin' },
    ],
    location: 'Basés à NYALLA PARISO, Douala, Cameroun',
  },
}

export function AboutSection({ locale }: AboutSectionProps) {
  const t = translations[locale]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-24 bg-secondary overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Couple Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Esther Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group relative bg-card rounded-3xl overflow-hidden shadow-xl border border-gold/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Image Placeholder with Decorative Pattern */}
            <div className="h-64 bg-gradient-to-br from-primary/20 to-primary/10 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                  <Heart className="w-16 h-16 text-primary/40" />
                </div>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-card to-transparent"
                style={{ height: '50%', top: '50%' }}
              />
            </div>

            <div className="relative p-6 -mt-8">
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                  {t.esther.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-4">{t.esther.role}</p>
                <p className="text-muted-foreground leading-relaxed">{t.esther.bio}</p>
              </div>
            </div>
          </motion.div>

          {/* Nathanael Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative bg-card rounded-3xl overflow-hidden shadow-xl border border-gold/10"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-gold/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Image Placeholder with Decorative Pattern */}
            <div className="h-64 bg-gradient-to-bl from-gold/20 to-gold/10 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gold/20 flex items-center justify-center">
                  <Heart className="w-16 h-16 text-gold/40" />
                </div>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-card to-transparent"
                style={{ height: '50%', top: '50%' }}
              />
            </div>

            <div className="relative p-6 -mt-8">
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                  {t.nathanael.name}
                </h3>
                <p className="text-sm text-gold font-medium mb-4">{t.nathanael.role}</p>
                <p className="text-muted-foreground leading-relaxed">{t.nathanael.bio}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Origin Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-gold/10 mb-16 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-gold/10 to-transparent rounded-tr-full" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              {t.origin.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.origin.text}</p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {t.values.map((value, index) => (
            <motion.div
              key={value.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-card rounded-2xl p-6 text-center shadow-lg border border-border hover:border-primary/30 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="font-medium text-foreground">{value.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-12"
        >
          <span className="text-muted-foreground text-sm">📍 {t.location}</span>
        </motion.div>
      </div>
    </section>
  )
}
