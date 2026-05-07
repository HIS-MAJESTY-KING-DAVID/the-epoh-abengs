'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Sparkles, Send, Mail, MapPin, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type Locale = 'en' | 'fr'

interface ContactSectionProps {
  locale: Locale
}

const translations = {
  en: {
    badge: 'Get In Touch',
    headline: 'Contact Us',
    subtitle: "We'd love to hear from you. Send us a message!",
    form: {
      name: 'Your Name',
      email: 'Email Address',
      subject: 'Subject',
      message: 'Your Message',
      submit: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
    },
    info: {
      email: 'estherjudith255@gmail.com',
      location: 'NYALLA PARISO, Douala, Cameroon',
      availability: 'Always open for collaborations',
    },
  },
  fr: {
    badge: 'Contactez-Nous',
    headline: 'Contact',
    subtitle: 'Nous serions ravis de vous entendre. Envoyez-nous un message!',
    form: {
      name: 'Votre Nom',
      email: 'Adresse Email',
      subject: 'Sujet',
      message: 'Votre Message',
      submit: 'Envoyer le Message',
      sending: 'Envoi en cours...',
      success: 'Message envoyé avec succès!',
    },
    info: {
      email: 'estherjudith255@gmail.com',
      location: 'NYALLA PARISO, Douala, Cameroun',
      availability: 'Toujours ouverts aux collaborations',
    },
  },
}

export function ContactSection({ locale }: ContactSectionProps) {
  const t = translations[locale]
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-24 bg-background overflow-hidden" ref={ref}>
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

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Email Card */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Email</h3>
                  <a
                    href={`mailto:${t.info.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t.info.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:border-gold/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">
                    {locale === 'en' ? 'Location' : 'Emplacement'}
                  </h3>
                  <p className="text-muted-foreground">{t.info.location}</p>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="bg-gradient-to-br from-primary/10 to-gold/10 rounded-2xl p-6 border border-gold/20">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-foreground font-medium">{t.info.availability}</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl p-8 shadow-xl border border-border relative overflow-hidden"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gold/5 to-transparent rounded-tr-full" />

              <div className="relative z-10 space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.form.name}
                    </label>
                    <Input
                      type="text"
                      required
                      className="bg-muted/50 border-border focus:border-primary rounded-xl h-12"
                      placeholder={t.form.name}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.form.email}
                    </label>
                    <Input
                      type="email"
                      required
                      className="bg-muted/50 border-border focus:border-primary rounded-xl h-12"
                      placeholder={t.form.email}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.form.subject}
                  </label>
                  <Input
                    type="text"
                    required
                    className="bg-muted/50 border-border focus:border-primary rounded-xl h-12"
                    placeholder={t.form.subject}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.form.message}
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl resize-none text-foreground placeholder:text-muted-foreground transition-colors"
                    placeholder={t.form.message}
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full relative overflow-hidden bg-primary hover:bg-primary-dark text-primary-foreground py-6 text-lg rounded-xl shadow-lg shadow-primary/25 disabled:opacity-70"
                  >
                    {!isSubmitting && !isSubmitted && (
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      />
                    )}
                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                          />
                          {t.form.sending}
                        </>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          {t.form.success}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          {t.form.submit}
                        </>
                      )}
                    </span>
                  </Button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
