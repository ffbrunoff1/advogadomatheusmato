import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState({ message: '', isError: false })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        recipientEmail: 'ffbrunoff@yahoo.com.br',
        token: token
      }

      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setStatus({ message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', isError: false })
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
      }
      
      recaptchaRef.current.reset()
    } catch (error) {
      setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
    }
    
    setIsSubmitting(false)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(55) 44991-0407",
      link: "tel:(55) 44991-0407"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "ffbrunoff@yahoo.com.br",
      link: "mailto:ffbrunoff@yahoo.com.br"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Padre Lebret 801 G05 Bloco 03",
      link: "https://maps.google.com/?q=Padre+Lebret+801+G05+Bloco+03"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a Sexta: 8h às 18h",
      link: null
    }
  ]

  return (
    <section id="contato" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
              <Phone className="w-6 h-6 text-white" />
            </div>
            <span className="text-primary-600 font-medium">Entre em Contato</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
            Consulta <span className="text-gradient">Gratuita</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Agende sua consulta jurídica gratuita e descubra como podemos defender 
            seus direitos com expertise e dedicação.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-primary-800 mb-6">
                Envie sua Mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Descreva seu caso *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Descreva brevemente sua situação jurídica..."
                  />
                </div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center space-x-2 p-4 rounded-lg ${
                      status.isError 
                        ? 'bg-red-50 text-red-700 border border-red-200' 
                        : 'bg-green-50 text-green-700 border border-green-200'
                    }`}
                  >
                    {status.isError ? (
                      <AlertCircle className="w-5 h-5" />
                    ) : (
                      <CheckCircle className="w-5 h-5" />
                    )}
                    <span>{status.message}</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  * Campos obrigatórios. Suas informações são mantidas em sigilo.
                </p>
              </form>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                size="invisible"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <p className="text-lg mb-8 opacity-90">
                Estamos prontos para atendê-lo e oferecer a melhor defesa jurídica 
                para seu caso. Entre em contato conosco através dos canais abaixo.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  const ContentComponent = info.link ? 'a' : 'div'
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <ContentComponent
                        {...(info.link ? { href: info.link, target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                          info.link ? 'hover:bg-white/10 cursor-pointer' : ''
                        }`}
                      >
                        <div className="bg-white/20 p-3 rounded-lg">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{info.title}</h4>
                          <p className="opacity-90">{info.content}</p>
                        </div>
                      </ContentComponent>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-primary-800 mb-4">
                Atendimento de Emergência
              </h3>
              <p className="text-gray-600 mb-6">
                Casos urgentes que necessitam de atendimento imediato? 
                Estamos disponíveis 24 horas para emergências.
              </p>
              <motion.a
                href="tel:(55) 44991-0407"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Ligar Agora - 24h</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-2xl p-8 border border-secondary-100">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">
              Por que escolher nosso escritório?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                "Consulta inicial gratuita",
                "Atendimento personalizado",
                "Experiência comprovada"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center space-x-2 bg-white p-4 rounded-lg shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span className="font-medium text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}