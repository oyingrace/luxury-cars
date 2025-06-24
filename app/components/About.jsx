// app/components/About.jsx
'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Shield, Clock, Users } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const stats = [
    { number: '500+', label: 'Premium Vehicles', icon: Award },
    { number: '10K+', label: 'Happy Customers', icon: Users },
    { number: '24/7', label: 'Customer Support', icon: Clock },
    { number: '100%', label: 'Insured Fleet', icon: Shield }
  ]

  return (
    <section id="about" className="py-20 bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Drive Something <span className="text-amber-400">Extraordinary</span>
            </h2>

            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-2" />
                <p className="text-gray-300">
                  <span className="text-white font-semibold">Curated Fleet:</span> Every vehicle 
                  in our collection is meticulously maintained and regularly updated
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-2" />
                <p className="text-gray-300">
                  <span className="text-white font-semibold">Professional Service:</span> Our team 
                  provides discreet, first-class service tailored to your needs
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-2" />
                <p className="text-gray-300">
                  <span className="text-white font-semibold">Nationwide Coverage:</span> Delivery 
                  and collection services available across the UK
                </p>
              </div>
            </div>

            <button className="bg-amber-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-amber-500 transition-colors duration-300">
              Learn More About Us
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-amber-400/50 transition-all duration-300"
              >
                <div className="text-amber-400 mx-auto mb-4">
                  <stat.icon size={48} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}