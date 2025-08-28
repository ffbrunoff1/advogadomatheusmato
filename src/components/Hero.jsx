import React from 'react'
import { motion } from 'framer-motion'
import { Scale, Shield, Users, Award, Phone, Mail, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const features = [
    { icon: Scale, text: "Advocacia Penal Especializada" },
    { icon: Shield, text: "Defesa Experiente e Dedicada" },
    { icon: Users, text: "Atendimento Personalizado" },
    { icon: Award, text: "Resultados Comprovados" }
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{ 
          background: [
            'radial-gradient(circle at 20% 80%, #fbbf24 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, #fbbf24 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, #fbbf24 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="container-custom relative z-10 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="bg-gradient-to-r from-secondary-400 to-secondary-500 p-2 rounded-lg">
                <Scale className="w-6 h-6" />
              </div>
              <span className="text-secondary-300 font-medium">Advocacia Penal</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Defesa Criminal
              <span className="block text-gradient">Especializada</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-200 mb-8 leading-relaxed"
            >
              Com anos de experiência em direito penal, oferecemos defesa criminal 
              especializada com atendimento personalizado e resultados eficazes. 
              Protegemos seus direitos com dedicação e expertise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3"
                  >
                    <IconComponent className="w-5 h-5 text-secondary-300" />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/#contato"
                  className="btn-primary flex items-center justify-center space-x-2"
                >
                  <span>Consulta Gratuita</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="tel:(55) 44991-0407"
                  className="btn-secondary flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Ligar Agora</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-8 flex items-center space-x-6 text-sm text-gray-300"
            >
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(55) 44991-0407</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>ffbrunoff@yahoo.com.br</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Scale className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Matheus Mato</h3>
                <p className="text-secondary-300">Advogado Criminalista</p>
              </div>

              <div className="space-y-4 text-white">
                <div className="flex items-center justify-between">
                  <span>Casos Atendidos</span>
                  <span className="font-bold text-secondary-300">500+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Anos de Experiência</span>
                  <span className="font-bold text-secondary-300">10+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Taxa de Sucesso</span>
                  <span className="font-bold text-secondary-300">95%</span>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-6"
              >
                <Link
                  to="/#sobre"
                  className="w-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:from-secondary-600 hover:to-secondary-700 flex items-center justify-center space-x-2"
                >
                  <span>Conheça Mais</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-secondary-400 to-accent-500 rounded-full opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-accent-400 to-secondary-500 rounded-full opacity-20"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}