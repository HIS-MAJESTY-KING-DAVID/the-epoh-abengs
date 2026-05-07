'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

type Locale = 'en' | 'fr'

interface NavigationProps {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

const translations = {
  en: {
    home: 'Home',
    about: 'About Us',
    blog: 'Blog',
    gallery: 'Gallery',
    collaborations: 'Collaborations',
    contact: 'Contact',
  },
  fr: {
    home: 'Accueil',
    about: 'À Propos',
    blog: 'Le Blog',
    gallery: 'Galerie',
    collaborations: 'Collaborations',
    contact: 'Contact',
  },
}

export function Navigation({ locale, onLocaleChange }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const t = translations[locale]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: t.home },
    { href: '#about', label: t.about },
    { href: '#blog', label: t.blog },
    { href: '#gallery', label: t.gallery },
    { href: '#collaborations', label: t.collaborations },
    { href: '#contact', label: t.contact },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-gold/20'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Heart className="w-8 h-8 text-primary fill-primary/20 group-hover:fill-primary/40 transition-colors" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-gold/20"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-foreground tracking-wide">
                  The Epoh Abengs
                </span>
                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
                  Marriage • Family • Faith
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors group"
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-gold group-hover:w-3/4 transition-all duration-300"
                      layoutId="nav-underline"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Language Toggle & Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onLocaleChange(locale === 'en' ? 'fr' : 'en')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all"
              >
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary uppercase">
                  {locale === 'en' ? 'FR' : 'EN'}
                </span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-card shadow-2xl border-l border-gold/20"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
            >
              <div className="flex flex-col h-full pt-24 px-6 pb-8">
                <div className="flex-1 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className="pt-6 border-t border-border">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Heart className="w-5 h-5 text-primary fill-primary/30" />
                    <span className="text-sm">
                      {locale === 'en'
                        ? 'Building godly homes together'
                        : 'Construisons des foyers bénis'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
