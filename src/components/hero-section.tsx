"use client"

import { motion } from "framer-motion"
import { Phone, Calendar } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden mandala-bg">
      {/* Subtle decorative mandala */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg viewBox="0 0 800 800" className="w-full h-full">
          <circle cx="400" cy="400" r="350" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="300" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="250" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="200" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="400"
              y1="50"
              x2="400"
              y2="750"
              stroke="#c9a84c"
              strokeWidth="0.3"
              transform={`rotate(${i * 30} 400 400)`}
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-16 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-ayurveda-gold font-medium tracking-widest uppercase text-sm mb-4">
              Ancient Wisdom, Modern Care
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Holistic Healing <br />
              <span className="text-primary">Through Ayurveda</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
              Ayurveda treats the root cause, not just the symptoms. Experience authentic Panchkarma therapies and personalized Ayurvedic care at Shreenidhi Ayurved.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="tel:+918962414401"
                className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-8 py-4 border-2 border-ayurveda-gold text-ayurveda-brown rounded-2xl font-semibold hover:bg-ayurveda-gold/10 transition-all w-full sm:w-auto justify-center"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Open Today
              </span>
              <span>Mon - Sat</span>
              <span>10 AM - 2 PM | 4 PM - 9 PM</span>
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 max-w-md lg:max-w-lg"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-ayurveda-gold/10 rounded-full blur-3xl" />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-24%20at%2015.17.55-9mZzU7L2Ue9N5fdBfEaroA00hWutnB.jpeg"
                alt="Heal from the Root - Ayurveda treats the root cause, not just the symptoms. Meditation and chakra healing illustration"
                className="relative w-full rounded-3xl shadow-2xl animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0 60L48 52C96 44 192 28 288 22C384 16 480 20 576 26C672 32 768 40 864 42C960 44 1056 40 1152 34C1248 28 1344 20 1392 16L1440 12V60H0Z"
            fill="var(--card)"
          />
        </svg>
      </div>
    </section>
  )
}
