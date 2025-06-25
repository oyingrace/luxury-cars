// app/components/Navbar.jsx
'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-1xl font-bold text-amber-500">
            LUXURY RENTALS
          </div>
  
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 font-medium ${
                  scrolled 
                    ? 'text-gray-700 hover:text-amber-500' 
                    : 'text-white hover:text-amber-400'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
  
          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`flex items-center space-x-2 transition-colors ${
              scrolled 
                ? 'text-gray-700 hover:text-amber-500' 
                : 'text-white hover:text-amber-400'
            }`}>
              <Phone size={18} />
              <span>Call</span>
            </button>
            <button className="flex items-center space-x-2 bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-colors font-medium">
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </button>
          </div>
  
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
  
        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden mt-4 pb-4 ${
              scrolled ? 'bg-white/95 rounded-lg px-4 py-2 shadow-lg' : ''
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block py-2 transition-colors ${
                  scrolled 
                    ? 'text-gray-700 hover:text-amber-500' 
                    : 'text-white hover:text-amber-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col space-y-2 mt-4">
              <button className={`flex items-center space-x-2 justify-center py-2 ${
                scrolled 
                  ? 'text-gray-700' 
                  : 'text-white'
              }`}>
                <Phone size={18} />
                <span>Call Now</span>
              </button>
              <button className="flex items-center space-x-2 bg-amber-500 text-white px-6 py-2 rounded-full justify-center hover:bg-amber-600 transition-colors">
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}