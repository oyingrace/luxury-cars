// app/components/Testimonials.jsx
'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'James Wellington',
      role: 'Corporate Executive',
      image: '/avatar-1.jpg',
      rating: 5,
      text: 'Exceptional service from start to finish. The Lamborghini Huracán was immaculate and the team went above and beyond to ensure our corporate event was memorable. Professional, discrete, and absolutely worth every penny.'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Wedding Planner',
      image: '/avatar-2.jpg',
      rating: 5,
      text: 'We\'ve used their services for multiple high-end weddings. The Range Rover fleet for our bridal party was stunning, and their attention to detail is unmatched. Our clients always leave glowing reviews.'
    },
    {
      name: 'David Thompson',
      role: 'Entrepreneur',
      image: '/avatar-3.jpg',
      rating: 5,
      text: 'Rented the Ferrari F8 for a weekend getaway. The booking process was seamless, delivery was punctual, and the car was in perfect condition. This is how luxury car rental should be done.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Fashion Photographer',
      image: '/avatar-4.jpg',
      rating: 5,
      text: 'Perfect for our luxury photoshoot. The team understood our creative vision and provided exactly what we needed. The vehicles were stunning and added incredible value to our final shots.'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Client <span className="text-amber-400">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover why discerning clients choose us for their luxury car rental needs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main Testimonial */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-amber-400 opacity-20">
              <Quote size={48} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className="text-amber-400 fill-current"
                  />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed font-light">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-700 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-xl">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-400">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full text-white transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-amber-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full text-white transition-colors duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}