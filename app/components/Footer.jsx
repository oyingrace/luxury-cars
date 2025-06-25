// app/components/Footer.jsx
'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const quickLinks = [
    { name: 'Our Fleet', href: '#fleet' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    { name: 'Self Drive Rental' },
    { name: 'Chauffeur Service' },
    { name: 'Corporate Events' },
    { name: 'Wedding Packages' },
    { name: 'Airport Transfers' }
  ]

  const legalLinks = [
    { name: 'Terms & Conditions' },
    { name: 'Privacy Policy' },
    { name: 'Insurance Policy' },
    { name: 'Rental Agreement' },
    { name: 'Cancellation Policy' }
  ]

  const socialLinks = [
    { icon: Facebook, name: 'Facebook' },
    { icon: Instagram, name: 'Instagram' },
    { icon: Twitter, name: 'Twitter' },
    { icon: Linkedin, name: 'LinkedIn' }
  ]

  return (
    <footer className="bg-gray-50 border-t border-gray-200" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="text-1xl font-bold text-amber-500 mb-6">
                LUXURY RENTALS
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The UK's premier luxury car rental service.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone size={16} className="text-amber-500" />
                  <span>+44 20 7123 4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <MessageCircle size={16} className="text-amber-500" />
                  <span>+44 7912 345 678</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail size={16} className="text-amber-500" />
                  <span>hello@luxuryrentals.co.uk</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-700">
                  <MapPin size={16} className="text-amber-500 mt-1" />
                  <span>123 Luxury Lane, Mayfair<br />London W1K 5RT</span>
                </div>
              </div>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-gray-900 font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-600 hover:text-amber-500 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Services */}
            <div>
              <h3 className="text-gray-900 font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-600 hover:text-amber-500 transition-colors duration-300 cursor-pointer">
                      {service.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Legal & Social */}
            <div>
              <h3 className="text-gray-900 font-semibold text-lg mb-6">Legal</h3>
              <ul className="space-y-3 mb-8">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <span className="text-gray-600 hover:text-amber-500 transition-colors duration-300 cursor-pointer">
                      {link.name}
                    </span>
                  </li>
                ))}
              </ul>
  
              {/* Social Links */}
              <h3 className="text-gray-900 font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-amber-500 hover:text-white transition-all duration-300"
                    title={social.name}
                  >
                    <social.icon size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
  
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-gray-200 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © 2024 Luxury Rentals Ltd. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>VAT Reg: GB123456789</span>
              <span>•</span>
              <span>Company No: 12345678</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}