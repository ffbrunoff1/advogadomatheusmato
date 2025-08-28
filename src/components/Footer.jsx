import React from 'react'
import { motion } from 'framer-motion'
import { Scale, Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/#sobre' },
    { name: 'Serviços', href: '/#servicos' },
    { name: 'Contato', href: '/#contato' }
  ]

  const services = [
    'Defesa Criminal',
    'Consultoria Preventiva',
    'Habeas Corpus',
    'Defesa em Júri',
    'Recursos Criminais'
  ]

  const contactInfo = [
    { icon: Phone, text: '(55) 44991-0407', href: 'tel:(55) 44991-0407' },
    { icon: Mail, text: 'ffbrunoff@yahoo.com.br', href: 'mailto:ffbrunoff@yahoo.com.br' },
    { icon: MapPin, text: 'Padre Lebret 801 G05 Bloco 03', href: 'https://maps.google.com/?q=Padre+Lebret+801+G05+Bloco+03' },
    { icon: Clock, text: 'Segunda a Sexta: 8h às 18h', href: null }
  ]

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800 text-white pb-20">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-secondary-400 to-secondary-500 p-2 rounded-lg">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Advogado Matheus Mato</h3>
                  <p className="text-secondary-300 text-sm">Advocacia Penal Especializada</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Defendendo seus direitos com experiência, dedicação e resultados comprovados 
                em advocacia penal há mais de 10 anos.
              </p>

              <div className="flex items-center space-x-2 text-secondary-300">
                <Scale className="w-5 h-5" />
                <span className="font-medium">OAB - Ordem dos Advogados do Brasil</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-secondary-300">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-secondary-300 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-secondary-400 rounded-full group-hover:w-2 transition-all duration-300"></span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-secondary-300">Nossos Serviços</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-300 flex items-center space-x-2">
                      <span className="w-1 h-1 bg-secondary-400 rounded-full"></span>
                      <span>{service}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-secondary-300">Contato</h4>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  const ContentComponent = info.href ? 'a' : 'div'
                  
                  return (
                    <li key={index}>
                      <ContentComponent
                        {...(info.href ? { 
                          href: info.href, 
                          target: info.href.startsWith('http') ? '_blank' : undefined,
                          rel: info.href.startsWith('http') ? 'noopener noreferrer' : undefined
                        } : {})}
                        className={`flex items-start space-x-3 text-gray-300 ${
                          info.href ? 'hover:text-secondary-300 transition-colors duration-300 cursor-pointer' : ''
                        }`}
                      >
                        <IconComponent className="w-5 h-5 mt-0.5 text-secondary-400 flex-shrink-0" />
                        <span className="leading-relaxed">{info.text}</span>
                      </ContentComponent>
                    </li>
                  )
                })}
              </ul>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-6"
              >
                <Link
                  to="/#contato"
                  className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:from-secondary-600 hover:to-secondary-700 hover:shadow-lg inline-block"
                >
                  Consulta Gratuita
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-primary-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-gray-400 text-sm">
              <p>&copy; 2024 Advogado Matheus Mato. Todos os direitos reservados.</p>
              <span className="hidden md:block">•</span>
              <p>
                Criado com{' '}
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary-400 hover:text-secondary-300 transition-colors duration-300"
                >
                  <em>Papum</em>
                </a>
              </p>
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-secondary-600 hover:bg-secondary-700 p-3 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-primary-700"
        >
          <div className="bg-gradient-to-r from-secondary-900/30 to-primary-900/30 rounded-lg p-6 text-center">
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-secondary-300">Importante:</strong> Este site tem caráter meramente informativo. 
              As informações aqui contidas não constituem consulta jurídica. Para orientação específica sobre seu caso, 
              agende uma consulta com nosso escritório.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}