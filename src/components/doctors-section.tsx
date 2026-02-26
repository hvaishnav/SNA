"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, Stethoscope } from "lucide-react"

const doctors = [
  {
    name: "Dr. Mayank Sahu",
    nameHi: "वैद्य मयंक साहू",
    degree: "B.A.M.S.",
    regNo: "CG05186",
    specialty: "Nadi Vaidya (Pulse Diagnosis Specialist)",
    specialtyHi: "नाड़ी वैद्य",
    description:
      "Expert in pulse diagnosis and classical Ayurvedic treatments with deep knowledge of Panchakarma therapies and chronic disease management.",
  },
  {
    name: "Dr. Nidhi Chandrakar",
    nameHi: "वैद्य निधि चंद्राकर",
    degree: "B.A.M.S.",
    regNo: "CG05617",
    specialty: "Skin, Hair & Dermatology Specialist",
    specialtyHi: "चर्म रोग केश रोग विशेषज्ञ",
    description:
      "Specializes in Ayurvedic dermatology, women's health, beauty therapies, and holistic skin & hair care treatments.",
  },
]

export default function DoctorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="doctors" className="py-16 lg:py-24 mandala-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-ayurveda-gold font-medium tracking-widest uppercase text-sm mb-3">Our Doctors</p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground text-balance">
            Experienced <span className="text-primary">Ayurvedic Physicians</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our qualified B.A.M.S. doctors combine ancient Ayurvedic wisdom with modern diagnostic understanding.
          </p>
          <div className="section-divider mx-auto mt-6 w-24" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctors.map((doctor, i) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              className="bg-card rounded-3xl shadow-lg border border-border/50 overflow-hidden"
            >
              {/* Top accent */}
              <div className="h-2 bg-gradient-to-r from-ayurveda-gold via-primary to-ayurveda-gold" />
              <div className="p-8">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 bg-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Stethoscope className="w-8 h-8 text-ayurveda-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground text-center">{doctor.name}</h3>
                <p className="font-serif text-primary text-center text-sm mt-1">{doctor.nameHi}</p>
                <div className="flex items-center justify-center gap-4 mt-4 text-sm">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <GraduationCap className="w-4 h-4 text-ayurveda-gold" />
                    {doctor.degree}
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Award className="w-4 h-4 text-ayurveda-gold" />
                    Reg. {doctor.regNo}
                  </span>
                </div>
                <div className="mt-4 p-3 bg-ayurveda-gold/10 rounded-xl text-center">
                  <p className="text-foreground font-medium text-sm">{doctor.specialty}</p>
                  <p className="text-primary text-xs font-serif">{doctor.specialtyHi}</p>
                </div>
                <p className="mt-4 text-muted-foreground text-sm text-center leading-relaxed">
                  {doctor.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
