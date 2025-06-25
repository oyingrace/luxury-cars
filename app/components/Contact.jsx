// app/components/Contact.jsx
'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      value: '+44 20 7123 4567',
      action: 'Call Now'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick responses via WhatsApp',
      value: '+44 7912 345 678',
      action: 'Message Us'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us your requirements',
      value: 'hello@luxuryrentals.co.uk',
      action: 'Send Email'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          /* initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }} */
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-amber-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience luxury? Contact our team for instant quotes, 
            availability, and bespoke packages tailored to your needs
          </p>
        </motion.div>
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            /* initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }} */
            className="bg-gray-50/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Phone</label>
                <input 
                  type="tel" 
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="+44 7123 456 789"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Preferred Vehicle</label>
                <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-amber-500 focus:outline-none transition-colors">
                  <option>Select a vehicle type</option>
                  <option>Supercar</option>
                  <option>Luxury SUV</option>
                  <option>Executive Saloon</option>
                  <option>Sports Car</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your requirements, rental dates, and any special requests..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-amber-500 text-white py-4 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
  
          {/* Contact Information */}
          <motion.div
            /* initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }} */
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  className="bg-gray-50/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300 shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-amber-500 mt-1">
                      <method.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 font-semibold text-lg mb-2">{method.title}</h4>
                      <p className="text-gray-600 mb-3">{method.description}</p>
                      <p className="text-amber-500 font-medium mb-3">{method.value}</p>
                      <button className="text-gray-900 hover:text-amber-500 transition-colors font-medium">
                        {method.action} →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Business Hours */}
            <div className="bg-gray-50/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="text-amber-500 mt-1">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-lg mb-4">Business Hours</h4>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                  <p className="text-amber-500 text-sm mt-4">
                    Emergency bookings available 24/7
                  </p>
                </div>
              </div>
            </div>
  
            {/* Location */}
            <div className="bg-gray-50/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="text-amber-500 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-lg mb-2">Location</h4>
                  <p className="text-gray-700 mb-2">
                    123 Luxury Lane<br />
                    Mayfair, London W1K 5RT<br />
                    United Kingdom
                  </p>
                  <p className="text-gray-600 text-sm">
                    Nationwide delivery and collection available
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}