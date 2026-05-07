'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart } from 'lucide-react'

type Locale = 'en' | 'fr'

interface FooterProps {
  locale: Locale
}

const translations = {
  en: {
    tagline: 'Building beautiful marriages, one day at a time.',
    links: {
      title: 'Quick Links',
      items: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Blog', href: '#blog' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Collaborations', href: '#collaborations' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    social: {
      title: 'Follow Us',
    },
    copyright: '© 2024 The Epoh Abengs. All rights reserved.',
    madeWith: 'Made with',
    inCameroon: 'in Cameroon',
  },
  fr: {
    tagline: 'Construire de beaux mariages, un jour à la fois.',
    links: {
      title: 'Liens Rapides',
      items: [
        { label: 'Accueil', href: '#home' },
        { label: 'À Propos', href: '#about' },
        { label: 'Blog', href: '#blog' },
        { label: 'Galerie', href: '#gallery' },
        { label: 'Collaborations', href: '#collaborations' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    social: {
      title: 'Suivez-Nous',
    },
    copyright: '© 2024 Les Epoh Abengs. Tous droits réservés.',
    madeWith: 'Fait avec',
    inCameroon: 'au Cameroun',
  },
}

const socialLinks = [
  { name: 'YouTube', url: 'https://youtube.com/@the_epohabengs' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@the_epohabengs' },
  { name: 'Instagram', url: 'https://www.instagram.com/the_epohabengs' },
  { name: 'Facebook', url: 'https://www.facebook.com/share/18UFB3i3dP/' },
  { name: 'Threads', url: 'https://www.threads.com/@the_epohabengs' },
]

export function Footer({ locale }: FooterProps) {
  const t = translations[locale]

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="#home" className="inline-flex items-center gap-2 mb-4">
              <Heart className="w-7 h-7 text-primary fill-primary/20" />
              <span className="font-serif text-2xl font-bold text-foreground">
                The Epoh Abengs
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">{t.tagline}</p>

            {/* Newsletter Signup */}
            <div className="flex gap-2 max-w-sm">
              <input
                type="email"
                placeholder={locale === 'en' ? 'Your email' : 'Votre email'}
                className="flex-1 px-4 py-2.5 rounded-full bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary-dark transition-colors"
              >
                {locale === 'en' ? 'Join' : 'Rejoindre'}
              </motion.button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-4">
              {t.links.title}
            </h3>
            <ul className="space-y-3">
              {t.links.items.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-4">
              {t.social.title}
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">{t.copyright}</p>
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              {t.madeWith}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-primary fill-primary" />
              </motion.span>
              {t.inCameroon}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
