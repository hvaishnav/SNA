"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Activity, Brain, Eye, Heart, Baby, Stethoscope, Thermometer, Moon, Scissors, Apple, Flower2
} from "lucide-react"

const services = [
  {
    icon: Activity,
    title: "Joint & Bone Disorders",
    titleHi: "वात रोग",
    description: "Arthritis, Spondylitis, Paralysis, Sciatica",
  },
  {
    icon: Stethoscope,
    title: "Digestive Issues",
    titleHi: "पेट रोग",
    description: "Acidity, Gas, Constipation, Loss of Appetite",
  },
  {
    icon: Heart,
    title: "Liver, Kidney & Urinary",
    titleHi: "लिवर, किडनी, मूत्र विकार",
    description: "Complete organ care through Ayurveda",
  },
  {
    icon: Flower2,
    title: "Skin Disorders",
    titleHi: "त्वचा रोग",
    description: "Psoriasis, Eczema, Itching, Acne",
  },
  {
    icon: Baby,
    title: "Women's Health",
    titleHi: "स्त्री रोग",
    description: "PCOD, Infertility, Leucorrhea",
  },
  {
    icon: Brain,
    title: "Migraine & Thyroid",
    titleHi: "माइग्रेन, थायरॉइड",
    description: "BP, Sugar, Hormonal imbalances",
  },
  {
    icon: Thermometer,
    title: "Fever & Infections",
    titleHi: "टायफाइड, सर्दी-खाँसी",
    description: "Typhoid, Cold, Cough, Fever",
  },
  {
    icon: Moon,
    title: "Mental Health",
    titleHi: "नींद न आना, डिप्रेशन",
    description: "Insomnia, Depression, Stress relief",
  },
  {
    icon: Scissors,
    title: "Hair Disorders",
    titleHi: "केश विकार",
    description: "Hair fall, Premature greying, Dandruff",
  },
  {
    icon: Eye,
    title: "Eye Care",
    titleHi: "नेत्र चिकित्सा",
    description: "Netra Tarpan for vision clarity",
  },
  {
    icon: Apple,
    title: "Diet & Lifestyle",
    titleHi: "आहार विहार",
    description: "Personalized diet and lifestyle correction",
  },
  {
    icon: Flower2,
    title: "Beauty Therapy",
    titleHi: "सौंदर्य चिकित्सा",
    description: "Ayurvedic beauty and skin rejuvenation",
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-16 lg:py-24 mandala-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-ayurveda-gold font-medium tracking-widest uppercase text-sm mb-3">Our Services</p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground text-balance">
            Comprehensive <span className="text-primary">Ayurvedic Care</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            We provide holistic treatment for a wide range of conditions using time-tested Ayurvedic principles and herbal formulations.
          </p>
          <div className="section-divider mx-auto mt-6 w-24" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              className="group p-6 bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-ayurveda-gold/30"
            >
              <div className="p-3 bg-ayurveda-gold/10 rounded-xl w-fit mb-4 group-hover:bg-ayurveda-gold/20 transition-colors">
                <service.icon className="w-6 h-6 text-ayurveda-gold" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
              <p className="text-primary text-sm font-medium font-serif mb-2">{service.titleHi}</p>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
