'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, MessageCircle, X, Send, Heart } from 'lucide-react'

type Locale = 'en' | 'fr'

interface FloatingElementsProps {
  locale: Locale
}

const translations = {
  en: {
    backToTop: 'Back to top',
    chat: {
      title: 'Quick Message',
      placeholder: 'Type your message...',
      send: 'Send',
      greeting: "Hi there! Have a question? We'd love to help!",
    },
  },
  fr: {
    backToTop: 'Retour en haut',
    chat: {
      title: 'Message Rapide',
      placeholder: 'Tapez votre message...',
      send: 'Envoyer',
      greeting: 'Bonjour! Une question? Nous serions ravis de vous aider!',
    },
  },
}

export function FloatingElements({ locale }: FloatingElementsProps) {
  const t = translations[locale]
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // Here you could integrate with a messaging service
      console.log('Message sent:', message)
      setMessage('')
      setShowChat(false)
    }
  }

  return (
    <>
      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 flex items-center justify-center hover:bg-primary-dark transition-colors"
            aria-label={t.backToTop}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-gold text-primary-foreground shadow-lg shadow-primary/30 flex items-center justify-center"
        aria-label="Chat"
      >
        <AnimatePresence mode="wait">
          {showChat ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulse Animation */}
        {!showChat && (
          <motion.div
            className="absolute inset-0 rounded-full bg-primary"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-40 w-80 bg-card rounded-2xl shadow-2xl border border-border overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-gold p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-foreground fill-primary-foreground/50" />
                </div>
                <div>
                  <h3 className="font-medium text-primary-foreground">{t.chat.title}</h3>
                  <p className="text-xs text-primary-foreground/80">The Epoh Abengs</p>
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-muted/30 min-h-[120px]">
              <div className="bg-card rounded-xl p-3 shadow-sm max-w-[85%]">
                <p className="text-sm text-foreground">{t.chat.greeting}</p>
              </div>
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.chat.placeholder}
                  className="flex-1 px-4 py-2 rounded-full bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground text-sm transition-colors"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary-dark transition-colors"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Floating Hearts - Only on larger screens */}
      <div className="hidden lg:block">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="fixed z-30 pointer-events-none"
            initial={{
              x: Math.random() * 100 + 50,
              y: window.innerHeight + 50,
              opacity: 0.5,
            }}
            animate={{
              y: -100,
              x: [
                Math.random() * 100 + 50,
                Math.random() * 150 + 30,
                Math.random() * 100 + 50,
              ],
              rotate: [0, 360],
              opacity: [0.5, 0.8, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 8,
              ease: 'linear',
            }}
          >
            <Heart className="w-4 h-4 text-primary/30 fill-primary/20" />
          </motion.div>
        ))}
      </div>
    </>
  )
}
