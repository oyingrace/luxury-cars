// app/page.js
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import FeaturedCars from './components/FeaturedCars'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden hide-scrollbar">
      <Navbar />
      <Hero />
      <FeaturedCars />
      <Services />
      <About />
      {/* <Testimonials /> */}
      <Contact />
      <Footer /> 
    </main>
  )
}