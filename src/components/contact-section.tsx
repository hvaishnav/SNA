"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-ayurveda-gold font-medium tracking-widest uppercase text-sm mb-3">Contact Us</p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground text-balance">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="section-divider mx-auto mt-6 w-24" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Contact info + map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-2xl">
                <div className="p-2 bg-ayurveda-gold/10 rounded-xl shrink-0">
                  <MapPin className="w-5 h-5 text-ayurveda-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Address</h4>
                  <p className="text-muted-foreground text-sm">Amayra Palace, Ganjpara, Durg, Chhattisgarh 491001</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-2xl">
                <div className="p-2 bg-ayurveda-gold/10 rounded-xl shrink-0">
                  <Phone className="w-5 h-5 text-ayurveda-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Phone</h4>
                  <p className="text-muted-foreground text-sm">
                    <a href="tel:+918962414401" className="hover:text-primary transition-colors">+91 89624-14401</a>
                    {" | "}
                    <a href="tel:+918770225974" className="hover:text-primary transition-colors">+91 87702-25974</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-2xl">
                <div className="p-2 bg-ayurveda-gold/10 rounded-xl shrink-0">
                  <Mail className="w-5 h-5 text-ayurveda-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Email</h4>
                  <p className="text-muted-foreground text-sm">
                    <a href="mailto:shreenidhiayurved9@gmail.com" className="hover:text-primary transition-colors">
                      shreenidhiayurved9@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-2xl">
                <div className="p-2 bg-ayurveda-gold/10 rounded-xl shrink-0">
                  <Clock className="w-5 h-5 text-ayurveda-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Timings</h4>
                  <p className="text-muted-foreground text-sm">Monday to Sunday</p>
                  <p className="text-muted-foreground text-sm">Morning: 10:00 AM - 2:00 PM</p>
                  <p className="text-muted-foreground text-sm">Evening: 4:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50">
            
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.208023258511!2d81.26893877504841!3d21.183893680504436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293dcd05a1f2dd%3A0xef52c2506ea4c02a!2sShreenidhi%20Ayurved%20%26%20Panchkarma%20Clinic!5e0!3m2!1sen!2sin!4v1772015912593!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shreenidhi Ayurved Location Map"
              />
            </div>
          </motion.div>

          {/* Contact form */}
          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1"
          >
            <form onSubmit={handleSubmit} className="p-6 lg:p-8 bg-background rounded-3xl shadow-lg border border-border/50 space-y-5">
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">Book an Appointment</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Fill in the form and we will get back to you shortly.
              </p>

              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground text-sm font-medium">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  required
                  className="rounded-xl bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground text-sm font-medium">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="rounded-xl bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground text-sm font-medium">Email (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="rounded-xl bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground text-sm font-medium">Describe Your Condition</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your health concern..."
                  rows={4}
                  required
                  className="rounded-xl bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all disabled:opacity-70"
              >
                {submitted ? (
                  "Thank you! We will contact you soon."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Enquiry
                  </>
                )}
              </button>
            </form>
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}
