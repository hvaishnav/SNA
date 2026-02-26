"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Verma",
    location: "Durg",
    text: "I suffered from chronic back pain for years. After Panchkarma therapy at Shreenidhi Ayurved, I feel completely rejuvenated. Dr. Mayank's pulse diagnosis was remarkably accurate.",
    rating: 5,
  },
  {
    name: "Sunita Sharma",
    location: "Bhilai",
    text: "My daughter's immunity improved significantly after starting Suvarnaprashan. She hardly falls sick now. Truly grateful to Dr. Nidhi for her guidance and care.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    location: "Raipur",
    text: "The Shirodhara therapy was a life-changing experience for my anxiety and insomnia. The entire team is very professional and the clinic has such a calming atmosphere.",
    rating: 5,
  },
  {
    name: "Amit Soni",
    location: "Durg",
    text: "Best Ayurvedic clinic in the region. Dr. Sahu treated my chronic skin condition that allopathy couldn't solve. Highly recommend their Panchkarma treatments.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 lg:py-24 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-ayurveda-gold font-medium tracking-widest uppercase text-sm mb-3">Testimonials</p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground text-balance">
            What Our <span className="text-primary">Patients Say</span>
          </h2>
          <div className="section-divider mx-auto mt-6 w-24" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="p-6 bg-background rounded-2xl shadow-sm border border-border/50"
            >
              <Quote className="w-8 h-8 text-ayurveda-gold/30 mb-3" />
              <p className="text-muted-foreground leading-relaxed text-sm">{t.text}</p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.location}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-ayurveda-gold text-ayurveda-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
