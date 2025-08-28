import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Scale, Phone, Mail, MapPin } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/#sobre' },
    { name: 'Serviços', href: '/#servicos' },
    { name: 'Contato', href: '/#contato' },
  ]

  const handleNavClick = (href) => {
    setIsOpen(false)
    if (href.includes('#')) {
      const element = document.querySelector(href.split('#')[1])
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <motion.div 
        className="bg-primary-800 text-white py-2 text-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(55) 44991-0407</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>ffbrunoff@yahoo.com.br</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Padre Lebret 801 G05 Bloco 03</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.header
        className={`fixed w-full top-12 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <nav className="container-custom">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-lg">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className={`text-xl font-bold transition-colors duration-300 ${
                  scrolled ? 'text-primary-800' : 'text-white'
                }`}>
                  Advogado Matheus Mato
                </h1>
                <p className={`text-sm transition-colors duration-300 ${
                  scrolled ? 'text-primary-600' : 'text-white/90'
                }`}>
                  Advocacia Penal Especializada
                </p>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`font-medium transition-all duration-300 hover:scale-105 ${
                    scrolled 
                      ? 'text-primary-700 hover:text-secondary-600' 
                      : 'text-white hover:text-secondary-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/#contato"
                  onClick={() => handleNavClick('/#contato')}
                  className="btn-primary"
                >
                  Consulta Gratuita
                </Link>
              </motion.div>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                scrolled 
                  ? 'text-primary-700 hover:bg-primary-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg mb-4"
            >
              <div className="py-4 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="block px-6 py-2 text-primary-700 hover:text-secondary-600 hover:bg-primary-50 rounded-lg transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-6">
                  <Link
                    to="/#contato"
                    onClick={() => handleNavClick('/#contato')}
                    className="btn-primary w-full text-center block"
                  >
                    Consulta Gratuita
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>
    </>
  )
}