'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ContentPillars } from '@/components/content-pillars'
import { VideoShowcase } from '@/components/video-showcase'
import { GallerySection } from '@/components/gallery-section'
import { TestimonialSection } from '@/components/testimonial-section'
import { SocialLinks } from '@/components/social-links'
import { CollaborationsSection } from '@/components/collaborations-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { FloatingElements } from '@/components/floating-elements'

type Locale = 'en' | 'fr'

export default function Home() {
  const [locale, setLocale] = useState<Locale>('en')

  return (
    <main className="min-h-screen">
      <Navigation locale={locale} onLocaleChange={setLocale} />
      <HeroSection locale={locale} />
      <AboutSection locale={locale} />
      <ContentPillars locale={locale} />
      <VideoShowcase locale={locale} />
      <GallerySection locale={locale} />
      <TestimonialSection locale={locale} />
      <SocialLinks locale={locale} />
      <CollaborationsSection locale={locale} />
      <ContactSection locale={locale} />
      <Footer locale={locale} />
      <FloatingElements locale={locale} />
    </main>
  )
}
