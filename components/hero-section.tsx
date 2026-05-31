'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Play, ArrowDown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useMousePosition } from '@/hooks/use-mouse-position'
import { useRipple } from '@/hooks/use-ripple'

type Locale = 'en' | 'fr'

interface HeroSectionProps {
  locale: Locale
}

const translations = {
  en: {
    greeting: 'Welcome to our world',
    headline: 'Building Beautiful',
    headlineAccent: 'Marriages',
    subheadline: 'Together',
    description:
      'We share real moments, couple content, beauty tips, recipes and daily inspirations for a fulfilling life and home.',
    cta: 'Watch Our Story',
    secondary: 'Explore More',
    married: 'Married since February 13, 2021',
  },
  fr: {
    greeting: 'Bienvenue dans notre monde',
    headline: 'Construisons de Beaux',
    headlineAccent: 'Mariages',
    subheadline: 'Ensemble',
    description:
      'Je partage des moments vrais, du contenu de couple, des conseils beauté, des recettes et des inspirations du quotidien pour une vie et un foyer épanoui.',
    cta: 'Notre Histoire',
    secondary: 'Découvrir',
    married: 'Mariés depuis le 13 février 2021',
  },
}

export function HeroSection({ locale }: HeroSectionProps) {
  const t = translations[locale]
  const mouse = useMousePosition()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const orb1X = useTransform(springX, [0, 1], [-30, 30])
  const orb1Y = useTransform(springY, [0, 1], [-20, 20])
  const orb2X = useTransform(springX, [0, 1], [20, -20])
  const orb2Y = useTransform(springY, [0, 1], [30, -30])
  const orb3X = useTransform(springX, [0, 1], [-15, 15])
  const orb3Y = useTransform(springY, [0, 1], [10, -10])

  const { addRipple, renderRipples } = useRipple()
  const { addRipple: addRipple2, renderRipples: ripples2 } = useRipple()

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX / window.innerWidth)
    mouseY.set(e.clientY / window.innerHeight)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-muted">
        {/* Floating Orbs with Mouse Parallax */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
          style={{ x: orb1X, y: orb1Y }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold/10 blur-3xl"
          style={{ x: orb2X, y: orb2Y }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-gold/5 blur-3xl"
          style={{ x: orb3X, y: orb3Y }}
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold/10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px),
                             linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
        >
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-sm font-medium text-primary">{t.greeting}</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-foreground">{t.headline}</span>
          <br />
          <motion.span
            className="relative inline-block text-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t.headlineAccent}
            <motion.svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.path
                d="M0 6 Q 75 0, 150 6 T 300 6"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </motion.svg>
          </motion.span>
          <br />
          <span className="text-foreground">{t.subheadline}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8"
        >
          {t.description}
        </motion.p>

        {/* Marriage Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-sm text-gold-dark font-medium">{t.married}</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              onClick={addRipple}
              className="group relative overflow-hidden bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg shadow-primary/25"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              {renderRipples}
              <span className="relative flex items-center gap-2">
                <Play className="w-5 h-5 fill-current" />
                {t.cta}
              </span>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              onClick={addRipple2}
              className="group relative overflow-hidden px-8 py-6 text-lg rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 text-foreground"
            >
              {ripples2}
              <span className="relative">{t.secondary}</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
