import React from 'react'
import { motion } from 'framer-motion'
import { Scale, Award, Users, BookOpen, Shield, Clock, Heart, Target } from 'lucide-react'

export default function About() {
  const stats = [
    { number: "500+", label: "Casos Atendidos", icon: Scale },
    { number: "10+", label: "Anos de Experiência", icon: Award },
    { number: "95%", label: "Taxa de Sucesso", icon: Target },
    { number: "24/7", label: "Atendimento", icon: Clock }
  ]

  const values = [
    {
      icon: Shield,
      title: "Proteção Total",
      description: "Defendemos seus direitos com máxima dedicação e expertise jurídica especializada."
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Tratamos cada cliente com respeito, compreensão e suporte emocional necessário."
    },
    {
      icon: BookOpen,
      title: "Conhecimento Profundo",
      description: "Atualizamos constantemente nossos conhecimentos em direito penal e jurisprudência."
    },
    {
      icon: Users,
      title: "Abordagem Personalizada",
      description: "Cada caso é único e merece uma estratégia de defesa específica e eficaz."
    }
  ]

  return (
    <section id="sobre" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-lg">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <span className="text-primary-600 font-medium">Sobre Nosso Escritório</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
            Expertise em <span className="text-gradient">Direito Penal</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Com mais de uma década de experiência em advocacia penal, oferecemos defesa 
            especializada e atendimento humanizado para proteger seus direitos em todas 
            as fases do processo criminal.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center"
                >
                  <Scale className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-800">Dr. Matheus Mato</h3>
                  <p className="text-primary-600">Advogado Criminalista</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Formado em Direito com especialização em Direito Penal, possuo mais de 10 anos 
                  de experiência atuando na defesa criminal. Minha trajetória é marcada pela dedicação 
                  incansável aos direitos dos meus clientes e pela busca constante por resultados eficazes.
                </p>
                
                <p className="leading-relaxed">
                  Atuo em todas as fases do processo penal, desde o inquérito policial até os recursos 
                  em tribunais superiores, sempre com foco na proteção dos direitos fundamentais e na 
                  construção de estratégias de defesa sólidas e inovadoras.
                </p>

                <p className="leading-relaxed font-medium text-primary-700">
                  "Cada caso é uma oportunidade de fazer a diferença na vida de uma pessoa. 
                  Esta é a motivação que me move todos os dias."
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-primary-800 mb-3">Especialidades:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Crimes contra o Patrimônio',
                    'Tráfico de Drogas',
                    'Crimes Financeiros',
                    'Defesa em Júri',
                    'Recursos Criminais'
                  ].map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-primary-800 mb-8">
              Nossos Valores e Compromissos
            </h3>

            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-3 rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-primary-800 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-primary-800 mb-2"
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}