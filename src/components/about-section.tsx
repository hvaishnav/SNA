"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Leaf, Heart, Shield, Sparkles } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Pure herbal formulations with no side effects",
  },
  {
    icon: Heart,
    title: "Root Cause Healing",
    description: "Treating the source of ailments, not just symptoms",
  },
  {
    icon: Shield,
    title: "Authentic Panchkarma",
    description: "Classical detox therapies by trained therapists",
  },
  {
    icon: Sparkles,
    title: "Holistic Approach",
    description: "Mind, body, and soul wellness through ancient wisdom",
  },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-16 lg:py-24 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-ayurveda-gold font-medium tracking-widest uppercase text-sm mb-3">About Us</p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground text-balance">
            Rooted in Tradition, <span className="text-primary">Focused on You</span>
          </h2>
          <div className="section-divider mx-auto mt-6 w-24" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 max-w-md"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-24%20at%2015.17.55%20%281%29-ebuJK8X4LUchelCPyyufuGyWVU28vQ.jpeg"
              alt="Ayurvedic daily cycle showing Vata, Pitta, and Kapha time periods for optimal health"
              className="w-full rounded-3xl shadow-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1"
          >
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Shreenidhi Ayurved
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded by <strong className="text-foreground">Dr. Mayank Sahu</strong> and <strong className="text-foreground">Dr. Nidhi Chandrakar</strong>, both B.A.M.S. qualified Ayurvedic physicians, Shreenidhi Ayurved is a trusted name for authentic Ayurvedic healing in Durg, Chhattisgarh.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We specialize in classical Panchkarma detox therapies, chronic disease management, skin & hair treatments, women&apos;s health, pediatric care (Suvarnaprashan), and personalized diet & lifestyle correction rooted in the principles of Ayurveda.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-secondary/50 rounded-2xl"
                >
                  <div className="p-2 bg-ayurveda-gold/10 rounded-xl shrink-0">
                    <feature.icon className="w-5 h-5 text-ayurveda-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                    <p className="text-muted-foreground text-xs mt-0.5">{feature.description}</p>
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
