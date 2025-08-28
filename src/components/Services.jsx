import React from 'react'
import { motion } from 'framer-motion'
import { Scale, Shield, FileText, Users, Phone, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Services() {
  const mainService = {
    name: "Casos Penais",
    description: "Casos Penais oferece a você um serviço especializado em assessoria e defesa em questões criminais. Nossa equipe é composta por profissionais experientes e dedicados, prontos para lidar com as mais diversas situações legais. Atuamos em defensas de réus em processos penais, consultorias para prevenir problemas legais e orientação em casos de investigação criminal.",
    image: "https://qotdxwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/Casos_penal_1756419860588.png",
    features: [
      "Defesa de réus em processos penais",
      "Consultoria para prevenir problemas legais",
      "Orientação em casos de investigação criminal",
      "Crimes contra o patrimônio",
      "Crimes relacionados ao tráfico de drogas",
      "Delitos financeiros"
    ]
  }

  const services = [
    {
      icon: Scale,
      title: "Defesa Criminal",
      description: "Representação jurídica especializada em todas as fases do processo penal, desde o inquérito até os recursos.",
      features: ["Inquérito Policial", "Ação Penal", "Recursos", "Execução Penal"]
    },
    {
      icon: Shield,
      title: "Consultoria Preventiva",
      description: "Orientação jurídica para empresas e pessoas físicas evitarem situações que possam gerar responsabilidade criminal.",
      features: ["Compliance Criminal", "Auditoria Legal", "Treinamento", "Prevenção"]
    },
    {
      icon: FileText,
      title: "Habeas Corpus",
      description: "Impetração de habeas corpus para garantir o direito de liberdade em casos de prisão ilegal ou abusiva.",
      features: ["Habeas Corpus Preventivo", "Habeas Corpus Liberatório", "Relaxamento de Prisão", "Revogação de Prisão"]
    },
    {
      icon: Users,
      title: "Defesa em Júri",
      description: "Especialização em defesa nos crimes dolosos contra a vida julgados pelo Tribunal do Júri.",
      features: ["Estratégia de Defesa", "Preparação para Júri", "Sustentação Oral", "Recursos de Apelação"]
    }
  ]

  return (
    <section id="servicos" className="section-padding bg-white">
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
            <span className="text-primary-600 font-medium">Nossos Serviços</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
            Advocacia <span className="text-gradient">Especializada</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos serviços jurídicos especializados em direito penal com foco na proteção 
            dos direitos dos nossos clientes e na busca pelos melhores resultados.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 mb-16 border border-primary-100"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-primary-800 mb-6">
                  {mainService.name}
                </h3>
                
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {mainService.description}
                </p>

                <div className="space-y-3 mb-8">
                  {mainService.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/servico/casos-penais"
                      className="btn-primary flex items-center justify-center space-x-2"
                    >
                      <span>Saiba Mais</span>
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
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={mainService.image}
                alt={mainService.name}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              <motion.div
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-4 rounded-xl shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                <Scale className="w-8 h-8" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 card-hover"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mb-6"
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-primary-800 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mt-6"
                >
                  <Link
                    to="/#contato"
                    className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:from-primary-700 hover:to-secondary-700 flex items-center justify-center space-x-2"
                  >
                    <span>Consultar</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4">
              Precisa de Atendimento Jurídico Especializado?
            </h3>
            
            <p className="text-xl mb-8 opacity-90">
              Entre em contato conosco para uma consulta gratuita e descubra como podemos ajudar com seu caso.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/#contato"
                  className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100 hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Agendar Consulta</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="tel:(55) 44991-0407"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-primary-700 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Emergência 24h</span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}