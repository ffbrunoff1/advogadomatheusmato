import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { Scale, ArrowLeft, Phone, Mail, CheckCircle, Shield, Users, Clock } from 'lucide-react'

export default function ProductDetail() {
  const { serviceName } = useParams()

  const serviceData = {
    name: "Casos Penais",
    description: "Casos Penais oferece a você um serviço especializado em assessoria e defesa em questões criminais. Nossa equipe é composta por profissionais experientes e dedicados, prontos para lidar com as mais diversas situações legais. Atuamos em defensas de réus em processos penais, consultorias para prevenir problemas legais e orientação em casos de investigação criminal.",
    fullDescription: "Nosso objetivo é garantir que os direitos do cliente sejam plenamente respeitados e que recebam a melhor defesa possível. Trabalhamos com ética, transparência e comprometimento, visando alcançar os melhores resultados para cada caso. Além disso, oferecemos suporte em situações complexas, incluindo crimes contra o patrimônio, crimes relacionados ao tráfico de drogas e delitos financeiros. Estamos disponíveis para esclarecer dúvidas e fornecer informações detalhadas sobre nossos serviços. Confie na nossa expertise para enfrentar os desafios do sistema penal com segurança e tranquilidade. Entre em contato e saiba como podemos ajudar você.",
    image: "https://qotdxwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/Casos_penal_1756419860588.png",
    features: [
      "Defesa de réus em processos penais",
      "Consultoria para prevenir problemas legais",
      "Orientação em casos de investigação criminal",
      "Crimes contra o patrimônio",
      "Crimes relacionados ao tráfico de drogas",
      "Delitos financeiros",
      "Recursos em todas as instâncias",
      "Acompanhamento processual completo",
      "Atendimento 24 horas para emergências",
      "Suporte jurídico especializado"
    ],
    benefits: [
      {
        icon: Shield,
        title: "Proteção Completa",
        description: "Defendemos seus direitos em todas as fases do processo penal com estratégias especializadas."
      },
      {
        icon: Users,
        title: "Equipe Especializada",
        description: "Profissionais experientes e dedicados exclusivamente ao direito penal."
      },
      {
        icon: Clock,
        title: "Atendimento Emergencial",
        description: "Disponibilidade 24 horas para casos urgentes que necessitam de ação imediata."
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar ao Início</span>
          </Link>

          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-lg">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <span className="text-primary-600 font-medium">Serviço Especializado</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
            {serviceData.name}
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={serviceData.image}
              alt={serviceData.name}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">
                Sobre o Serviço
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {serviceData.description}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {serviceData.fullDescription}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/#contato"
                  className="btn-primary flex items-center justify-center space-x-2"
                >
                  <span>Solicitar Consulta</span>
                  <Scale className="w-5 h-5" />
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">
            O que está incluso neste serviço
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 card-hover"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">
            Benefícios do Nosso Atendimento
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceData.benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 text-center border border-primary-100"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-primary-800 mb-4">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4">
              Precisa de Atendimento Especializado?
            </h3>
            
            <p className="text-xl mb-8 opacity-90">
              Entre em contato conosco agora mesmo e descubra como podemos defender seus direitos com expertise e dedicação.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/#contato"
                  className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100 hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Enviar Mensagem</span>
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="tel:(55) 44991-0407"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-primary-700 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Ligar Agora</span>
                </a>
              </motion.div>
            </div>

            <p className="mt-6 text-sm opacity-80">
              Atendimento disponível 24 horas para casos de emergência
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}