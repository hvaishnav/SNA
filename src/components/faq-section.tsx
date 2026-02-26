"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

const faqs = [
  {
    q: "What is Panchkarma and who should take it?",
    a: "Panchkarma is a five-fold Ayurvedic detoxification therapy that cleanses the body of accumulated toxins. It is beneficial for anyone seeking deep cleansing, rejuvenation, or relief from chronic conditions like arthritis, skin issues, digestive problems, and stress.",
  },
  {
    q: "What is Suvarnaprashan and at what age can children take it?",
    a: "Suvarnaprashan is an ancient Ayurvedic immunization practice using purified gold (Swarna Bhasma) combined with honey and ghee. It is given to children aged 0-16 years to boost immunity, enhance memory, improve digestion, and support overall growth.",
  },
  {
    q: "Are Ayurvedic treatments safe? Do they have side effects?",
    a: "Ayurvedic treatments, when administered by qualified practitioners using authentic herbal preparations, are completely safe and free from harmful side effects. All our treatments use 100% natural, pure herbal formulations.",
  },
  {
    q: "How long does a Panchkarma treatment course take?",
    a: "A typical Panchkarma course ranges from 7 to 21 days depending on the condition and the therapies required. Some individual therapies like Shirodhara or Abhyanga can be done as standalone sessions.",
  },
  {
    q: "Do I need to follow a special diet during treatment?",
    a: "Yes, diet plays a crucial role in Ayurvedic treatment. Our doctors provide personalized dietary guidelines based on your body constitution (Prakriti) and the treatment being administered.",
  },
  {
    q: "What are the clinic timings and how can I book an appointment?",
    a: "We are open Monday to Sunday. Morning: 10:00 AM - 2:00 PM, Evening: 4:00 PM - 9:00 PM. You can book an appointment by calling +91 89624-14401 or +91 87702-25974, or through our contact form.",
  },
]

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 lg:py-24 mandala-bg" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-ayurveda-gold font-medium tracking-widest uppercase text-sm mb-3">FAQ</p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground text-balance">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="section-divider mx-auto mt-6 w-24" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card rounded-2xl border border-border/50 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-foreground font-medium text-left hover:text-primary hover:no-underline py-5 text-sm lg:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
