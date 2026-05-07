'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

type Locale = 'en' | 'fr'

interface TestimonialSectionProps {
  locale: Locale
}

const translations = {
  en: {
    testimonials: [
      {
        quote: "The Epoh Abengs have been a blessing to our marriage. Their authentic content and godly counsel have transformed how we approach our relationship.",
        author: "Happy Couple",
        location: "Cameroon",
      },
      {
        quote: "Their content is refreshing in a world full of superficial advice. Real, practical, and rooted in faith.",
        author: "Faithful Follower",
        location: "France",
      },
      {
        quote: "I love their bilingual approach - it reaches families across the globe. Their beauty tips are also amazing!",
        author: "Global Viewer",
        location: "Canada",
      },
    ],
    previous: 'Previous',
    next: 'Next',
  },
  fr: {
    testimonials: [
      {
        quote: "Les Epoh Abengs ont été une bénédiction pour notre mariage. Leur contenu authentique et leurs conseils divins ont transformé notre façon d'aborder notre relation.",
        author: "Couple Heureux",
        location: "Cameroun",
      },
      {
        quote: "Leur contenu est rafraîchissant dans un monde plein de conseils superficiels. Réel, pratique et enraciné dans la foi.",
        author: "Fidèle Abonné",
        location: "France",
      },
      {
        quote: "J'adore leur approche bilingue - elle atteint les familles à travers le monde. Leurs conseils beauté sont également incroyables!",
        author: "Spectateur Global",
        location: "Canada",
      },
    ],
    previous: 'Précédent',
    next: 'Suivant',
  },
}

export function TestimonialSection({ locale }: TestimonialSectionProps) {
  const t = translations[locale]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const testimonials = t.testimonials

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-secondary to-background overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Large Quote Mark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Quote className="w-64 h-64 text-primary" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-1 mb-8"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 * i }}
            >
              <Star className="w-6 h-6 text-gold fill-gold" />
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Content */}
        <div className="relative min-h-[250px] flex items-center justify-center">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="text-center"
          >
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground leading-relaxed mb-8 italic">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center mb-4">
                <span className="font-serif text-2xl text-primary">
                  {testimonials[currentIndex].author.charAt(0)}
                </span>
              </div>
              <cite className="not-italic">
                <span className="block font-medium text-foreground">
                  {testimonials[currentIndex].author}
                </span>
                <span className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].location}
                </span>
              </cite>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPrevious}
            className="w-12 h-12 rounded-full bg-card border border-border hover:border-primary flex items-center justify-center transition-colors shadow-lg"
            aria-label={t.previous}
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </motion.button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-border hover:bg-muted-foreground'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            className="w-12 h-12 rounded-full bg-card border border-border hover:border-primary flex items-center justify-center transition-colors shadow-lg"
            aria-label={t.next}
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
