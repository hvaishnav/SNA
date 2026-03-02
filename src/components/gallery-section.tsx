"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-24%20at%2015.17.53%20%282%29-EpP6xAxPdrIx3YY7RwWTnbN12gbKTs.jpeg",
    alt: "Panchkarma Chikitsa - Various treatment therapies at Shreenidhi Ayurved",
    label: "Panchkarma Therapies",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-24%20at%2015.17.53%20%281%29-IfCpY60wARZQrTB2T6I3zAXeeWtldg.jpeg",
    alt: "Saundarya Chikitsa - Ayurvedic beauty therapy treatments",
    label: "Beauty Therapies",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-24%20at%2015.17.52%20%281%29-lYiEGweiJReqj6bQmKa24WHNu1i7yi.jpeg",
    alt: "Shirodhara - Traditional oil pouring therapy for mental peace",
    label: "Shirodhara",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-24%20at%2015.17.53-CxygihPYH27gKkXAhyA9W5Sv5DNbkT.jpeg",
    alt: "Netra Tarpan - Ayurvedic eye nourishment therapy",
    label: "Netra Tarpan",
  },
]

export default function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="py-16 lg:py-24 mandala-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-ayurveda-gold font-medium tracking-widest uppercase text-sm mb-3">Gallery</p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-foreground text-balance">
            A Glimpse of <span className="text-primary">Our Clinic</span>
          </h2>
          <div className="section-divider mx-auto mt-6 w-24" />
        </motion.div>

        <div className="relative group">
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex">
              {images.map((img, i) => (
                <div key={img.label} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] pl-4 first:pl-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                    className="relative group/item overflow-hidden rounded-3xl shadow-lg h-[280px] sm:h-[350px]"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover/item:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-serif text-lg font-semibold">{img.label}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center text-primary hover:bg-white transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center text-primary hover:bg-white transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  selectedIndex === index ? "bg-primary w-8" : "bg-ayurveda-gold/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
