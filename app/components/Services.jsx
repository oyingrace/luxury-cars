// app/components/Services.jsx
'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Car, Users, Truck, Shield, Calendar, MapPin } from 'lucide-react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const services = [
    {
      icon: Car,
      title: 'Self Drive',
      description: 'Experience the thrill of driving luxury supercars yourself. Age 25+ required.',
      features: ['Daily & Weekly Rates', 'Full Insurance', 'Roadside Assistance']
    },
    {
      icon: Users,
      title: 'Chauffeur Service',
      description: 'Professional, discreet chauffeur service for the ultimate luxury experience.',
      features: ['Professional Drivers', 'Airport Transfers', 'Corporate Events']
    },
    {
      icon: Truck,
      title: 'Nationwide Delivery',
      description: 'We deliver your chosen vehicle directly to your preferred location.',
      features: ['Free Local Delivery', 'Nationwide Coverage', 'Flexible Timing']
    },
    {
      icon: Shield,
      title: 'Temporary Insurance',
      description: 'Flexible car insurance for borrowed cars, test drives, and short-term needs.',
      features: ['Instant Coverage', 'No Long Contracts', 'Competitive Rates']
    },
    {
      icon: Calendar,
      title: 'Event Packages',
      description: 'Specialized packages for weddings, photoshoots, and corporate events.',
      features: ['Custom Packages', 'Multiple Vehicles', 'Event Coordination']
    },
    {
      icon: MapPin,
      title: 'Airport Transfers',
      description: 'Arrive in style with our premium airport transfer service.',
      features: ['Flight Tracking', 'Meet & Greet', 'Luggage Assistance']
    }
  ]

  // Split services into two rows
  const topRowServices = services.slice(0, 3)
  const bottomRowServices = services.slice(3, 6)

  // Duplicate services for infinite scroll effect
  const duplicatedTopServices = [...topRowServices, ...topRowServices, ...topRowServices]
  const duplicatedBottomServices = [...bottomRowServices, ...bottomRowServices, ...bottomRowServices]

  const ServiceCard = ({ service, index }) => (
    <div className="flex-shrink-0 w-80 md:w-96 mx-4">
      <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-amber-400/50 transition-all duration-300 group h-full">
        <div className="text-amber-400 mb-6 group-hover:scale-110 transition-transform duration-300">
          <service.icon size={48} />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
        
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-400">
              <div className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <section id="services" className="py-20 bg-gray-900 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Premium <span className="text-amber-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From self-drive adventures to chauffeur-driven luxury, we provide comprehensive 
            services tailored to your unique requirements
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Top Row - Sliding Right */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="flex"
              animate={{
                x: [0, -1152] // Width of 3 cards (384px each) = 1152px
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTopServices.map((service, index) => (
                <ServiceCard key={`top-${index}`} service={service} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Bottom Row - Sliding Left */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              className="flex"
              animate={{
                x: [-1152, 0] // Sliding in opposite direction
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {duplicatedBottomServices.map((service, index) => (
                <ServiceCard key={`bottom-${index}`} service={service} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}