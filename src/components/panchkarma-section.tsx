"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const therapies = [
  { name: "Shirodhara", nameHi: "शिरोधारा", description: "Warm herbal oil stream on forehead for deep relaxation" },
  { name: "Nasya", nameHi: "नस्य", description: "Nasal therapy for sinusitis and headaches" },
  { name: "Netra Tarpan", nameHi: "नेत्र तर्पण", description: "Nourishing eye therapy for vision clarity" },
  { name: "Karna Puran", nameHi: "कर्ण पूरण", description: "Ear therapy with warm herbal oils" },
  { name: "Agnikarma", nameHi: "अग्निकर्म", description: "Thermal therapy for joint and nerve pain" },
  { name: "Virechana", nameHi: "विरेचन", description: "Detox purgation for pitta imbalances" },
  { name: "Abhyanga", nameHi: "अभ्यंग", description: "Full body warm oil massage therapy" },
  { name: "Swedan", nameHi: "स्वेदन", description: "Herbal steam therapy for toxin elimination" },
  { name: "Kati Basti", nameHi: "कटि बस्ती", description: "Lower back pain relief therapy" },
  { name: "Janu Basti", nameHi: "जानू बस्ती", description: "Knee joint strengthening therapy" },
  { name: "Mukhalepam", nameHi: "मुखलेपन", description: "Ayurvedic facial rejuvenation therapy" },
  { name: "Patra Pind Swed", nameHi: "पत्र पिंड स्वेद", description: "Bolus fomentation with herbal leaves" },
]

export default function PanchkarmaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="panchkarma" className="py-16 lg:py-24 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-ayurveda-gold font-medium tracking-widest uppercase text-sm mb-3">Panchkarma Therapies</p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground text-balance">
            Classical <span className="text-primary">Detox & Healing</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience authentic Panchkarma therapies performed by trained practitioners using traditional methods and pure herbal preparations.
          </p>
          <div className="section-divider mx-auto mt-6 w-24" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Featured images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 max-w-md"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-24%20at%2015.17.52%20%281%29-lYiEGweiJReqj6bQmKa24WHNu1i7yi.jpeg"
                alt="Shirodhara therapy - warm oil stream on forehead for deep relaxation and mental clarity"
                className="w-full rounded-2xl shadow-lg col-span-2"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-24%20at%2015.17.53-CxygihPYH27gKkXAhyA9W5Sv5DNbkT.jpeg"
                alt="Netra Tarpan - Ayurvedic eye care therapy for calm eyes and clear vision"
                className="w-full rounded-2xl shadow-lg"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-24%20at%2015.17.53%20%281%29-IfCpY60wARZQrTB2T6I3zAXeeWtldg.jpeg"
                alt="Saundarya Chikitsa - Ayurvedic beauty therapy treatments"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>

          {/* Therapy list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {therapies.map((therapy, i) => (
                <motion.div
                  key={therapy.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.04 }}
                  className="p-4 bg-secondary/40 rounded-2xl hover:bg-secondary/70 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-ayurveda-gold rounded-full mt-2 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{therapy.name}</h4>
                      <p className="text-primary text-xs font-serif font-medium">{therapy.nameHi}</p>
                      <p className="text-muted-foreground text-xs mt-1">{therapy.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
