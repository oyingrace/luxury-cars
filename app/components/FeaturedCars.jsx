// app/components/FeaturedCars.jsx
'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Users, Zap, Star } from 'lucide-react'

export default function FeaturedCars() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const cars = [
    {
      name: 'Lamborghini Huracán STO',
      model: '5.2 V10 LP640-2',
      price: '£1,500',
      period: 'per day',
      weekend: '£2,500 per weekend',
      image: '/car-1.jpg',
      specs: {
        power: '640 HP',
        acceleration: '0-60 in 3.0s',
        seats: '2 Seats',
        type: 'Supercar'
      },
      rating: 5.0,
      available: true
    },
    {
      name: 'Ferrari F8 Tributo',
      model: '3.9 V8 Twin-Turbo',
      price: '£1,200',
      period: 'per day',
      weekend: '£2,000 per weekend',
      image: '/car-2.jpg',
      specs: {
        power: '710 HP',
        acceleration: '0-60 in 2.9s',
        seats: '2 Seats',
        type: 'Supercar'
      },
      rating: 4.9,
      available: true
    },
    {
      name: 'Range Rover Autobiography',
      model: '5.0 V8 Supercharged',
      price: '£400',
      period: 'per day',
      weekend: '£650 per weekend',
      image: '/car-3.jpg',
      specs: {
        power: '518 HP',
        acceleration: '0-60 in 5.1s',
        seats: '5 Seats',
        type: 'Luxury SUV'
      },
      rating: 4.8,
      available: true
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="fleet" className="py-20 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          /* initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }} */
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-amber-400">Fleet</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our handpicked selection of the world's most desirable supercars, 
            luxury vehicles, and high-performance machines
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {cars.map((car, index) => (
            <motion.div
              key={index}
              /* initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }} */
              className="bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 bg-gray-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent z-10" />
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                {car.available && (
                  <div className="absolute top-4 right-4 z-20 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Available
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-amber-400 text-sm font-medium uppercase tracking-wide">
                    {car.specs.type}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-amber-400 fill-current" />
                    <span className="text-white text-sm">{car.rating}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{car.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{car.model}</p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Zap size={16} className="text-amber-400" />
                    <span className="text-sm">{car.specs.power}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Calendar size={16} className="text-amber-400" />
                    <span className="text-sm">{car.specs.acceleration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Users size={16} className="text-amber-400" />
                    <span className="text-sm">{car.specs.seats}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="border-t border-gray-800 pt-4">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-3xl font-bold text-white">{car.price}</span>
                    <span className="text-gray-400">{car.period}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{car.weekend}</p>
                  
                  <button className="w-full bg-amber-400 text-black py-3 rounded-full font-semibold hover:bg-amber-500 transition-colors duration-300">
                    Reserve Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          /* initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }} */
          className="text-center mt-12"
        >
          <button className="border-2 border-amber-400 text-amber-400 px-8 py-3 rounded-full hover:bg-amber-400 hover:text-black transition-all duration-300 font-semibold">
            View Complete Fleet
          </button>
        </motion.div>
      </div>
    </section>
  )
}