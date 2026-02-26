"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"

export default function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)
  const audioRef = useRef<any>(null)

  // Use a free Indian flute/bansuri ambient audio
  // We generate a soft synth tone using Web Audio API as fallback
  const initAudio = useCallback(() => {
    if (audioRef.current) return

    const AudioContext = window.AudioContext || (window as any).webkitAudioContext
    if (!AudioContext) return

    const ctx = new AudioContext()
    
    // Create a soft, calming flute-like drone
    const createTone = (freq: number, gain: number, detune: number = 0) => {
      const osc = ctx.createOscillator()
      const gainNode = ctx.createGain()
      const filter = ctx.createBiquadFilter()
      
      osc.type = "sine"
      osc.frequency.setValueAtTime(freq, ctx.currentTime)
      osc.detune.setValueAtTime(detune, ctx.currentTime)
      
      filter.type = "lowpass"
      filter.frequency.setValueAtTime(800, ctx.currentTime)
      filter.Q.setValueAtTime(1, ctx.currentTime)
      
      gainNode.gain.setValueAtTime(0, ctx.currentTime)
      gainNode.gain.linearRampToValueAtTime(gain, ctx.currentTime + 3)
      
      osc.connect(filter)
      filter.connect(gainNode)
      gainNode.connect(ctx.destination)
      
      osc.start()
      return { osc, gainNode }
    }

    // Indian scale tones (Sa, Pa, Sa high) - very soft ambient drone
    const tones = [
      createTone(261.63, 0.015), // Sa (C4)
      createTone(392.00, 0.008, 2), // Pa (G4) slightly detuned
      createTone(523.25, 0.005), // Sa (C5)
      createTone(329.63, 0.006, -1), // Ga (E4)
    ]

    // Slow LFO for gentle volume modulation (breathing effect)
    const lfo = ctx.createOscillator()
    const lfoGain = ctx.createGain()
    lfo.type = "sine"
    lfo.frequency.setValueAtTime(0.1, ctx.currentTime)
    lfoGain.gain.setValueAtTime(0.003, ctx.currentTime)
    lfo.connect(lfoGain)
    tones.forEach(t => lfoGain.connect(t.gainNode.gain))
    lfo.start()

    // Store refs for cleanup
    const audioData = {
      ctx,
      tones,
      lfo,
      lfoGain,
      suspend: () => ctx.suspend(),
      resume: () => ctx.resume(),
      isCtx: true,
    }

    audioRef.current = audioData
    return audioData
  }, [])

  useEffect(() => {
    // Auto-hide tooltip after 5 seconds
    const timer = setTimeout(() => setShowTooltip(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  const toggleAudio = () => {
    if (!hasInteracted) {
      setHasInteracted(true)
      const audio = initAudio()
      if (audio) {
        setIsPlaying(true)
      }
    } else {
      const audio = audioRef.current
      if (audio && audio.isCtx) {
        if (isPlaying) {
          audio.suspend()
          setIsPlaying(false)
        } else {
          audio.resume()
          setIsPlaying(true)
        }
      }
    }
    setShowTooltip(false)
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
      <motion.button
        onClick={toggleAudio}
        className={`p-3 rounded-full shadow-lg transition-all ${
          isPlaying
            ? "bg-ayurveda-gold text-ayurveda-brown"
            : "bg-card text-muted-foreground border border-border"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        aria-label={isPlaying ? "Mute ambient music" : "Play ambient music"}
      >
        {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
      </motion.button>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="bg-card text-foreground text-xs px-3 py-2 rounded-xl shadow-md border border-border max-w-[160px]"
          >
            Click to play soft ambient music
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
