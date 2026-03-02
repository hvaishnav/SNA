"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Phone } from "lucide-react"

const products = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-24%20at%2015.17.52-rSnQIaP2Dj6ZVj3GliBf8BQ2OWihHY.jpeg",
    title: "Suvarnaprashan",
    titleHi: "सुवर्णप्राशन",
    description:
      "Ayurvedic gold immunity drops for children (0-16 years). Boosts immunity, enhances strength, memory, digestion, and concentration.",
    highlights: ["Boosts Immunity", "Enhances Strength", "Boosts Memory", "Improves Concentration"],
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-24%20at%2015.17.55%20%282%29-bQBU1hORnhtnt4ck7OFxTtijTQdmYc.jpeg",
    title: "Arogyaprash",
    titleHi: "आरोग्यप्राश",
    description:
      "Your health elixir - purely handmade with 0% preservatives, no refined sugar. Made with desi khand and pure herbs.",
    highlights: ["100% Handmade", "No Preservatives", "Pure Herbs", "No Refined Sugar"],
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-24%20at%2015.17.57%20%281%29-zi38cXntS3RC2UodBkwiSfC33kQTt3.jpeg",
    title: "Suwarnaprashan Drops",
    titleHi: "सुवर्णप्राशन ड्रॉप्स",
    description:
      "Premium 24K Gold Bhasma enriched Ayurvedic immunity drops. Sharper intellect, stronger immunity, 100% pure and handmade.",
    highlights: ["24K Gold Bhasma", "Sharper Intellect", "Stronger Immunity", "100% Pure"],
  },
]

export default function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="products" className="py-16 lg:py-24 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-ayurveda-gold font-medium tracking-widest uppercase text-sm mb-3">Our Products</p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground text-balance">
            Handcrafted <span className="text-primary">Ayurvedic Products</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Authentic, handmade herbal preparations crafted with care for your family&apos;s well-being.
          </p>
          <div className="section-divider mx-auto mt-6 w-24" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="bg-background rounded-3xl shadow-lg border border-border/50 overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] max-h-[220px] overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.title} - ${product.description}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground">{product.title}</h3>
                <p className="font-serif text-primary text-sm mt-1">{product.titleHi}</p>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{product.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.highlights.map((h) => (
                    <span key={h} className="text-xs px-3 py-1 bg-ayurveda-gold/10 text-ayurveda-brown rounded-full font-medium">
                      {h}
                    </span>
                  ))}
                </div>
                <a
                  href="tel:+918962414401"
                  className="mt-5 flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors w-full"
                >
                  <Phone className="w-4 h-4" />
                  Order Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
