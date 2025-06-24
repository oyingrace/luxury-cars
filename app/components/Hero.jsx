// app/components/Hero.jsx
'use client'
import { motion } from 'framer-motion'
import { ChevronDown, Star, Shield, Clock } from 'lucide-react'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden" ref={ref}>
      {/* Background Image with stronger gradient overlay on mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/20 md:from-black/80 md:via-black/50 md:to-transparent">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-amber-400 mb-2">PREMIUM</span>
                <span className="block text-white">TRANSPORTATION</span>
                <span className="block text-white">SERVICES</span>
              </h1>
            </motion.div>

            

            {/* Features */}
            {/* <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-8 mb-12"
            >
              <div className="flex items-center space-x-3 text-amber-400">
                <Star size={24} className="flex-shrink-0" />
                <span className="text-white text-lg font-medium">Premium Fleet</span>
              </div>
              <div className="flex items-center space-x-3 text-amber-400">
                <Shield size={24} className="flex-shrink-0" />
                <span className="text-white text-lg font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center space-x-3 text-amber-400">
                <Clock size={24} className="flex-shrink-0" />
                <span className="text-white text-lg font-medium">24/7 Service</span>
              </div>
            </motion.div> */}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <button className="bg-amber-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-500 transform hover:scale-105 transition-all duration-300 shadow-amber-lg hover:shadow-amber">
                Explore Our Fleet
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
                Get Instant Quote
              </button>
            </motion.div>
          </div>

          {/* Right side - Empty space for car image visibility on desktop */}
          <div className="hidden lg:block lg:w-1/2">
            {/* This space allows the background car image to be visible */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white cursor-pointer hover:text-amber-400 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      
      {/* Mobile overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 lg:hidden pointer-events-none" />
    </section>
  )
}