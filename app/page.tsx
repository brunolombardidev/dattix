"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Shield,
  FileText,
  BarChart3,
  Users,
  Brain,
  Target,
  ArrowRight,
  Sparkles,
  Zap,
  Lock,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function DattixLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showCookieModal, setShowCookieModal] = useState(true)
  const [showCookieOptions, setShowCookieOptions] = useState(false)
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    functionality: false,
    statistics: false,
    marketing: false,
    unclassified: false,
  })

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleAcceptCookies = () => {
    // Accept only necessary cookies (current state)
    setShowCookieModal(false)
    setShowCookieOptions(false)
    // Here you would implement actual cookie setting logic
    console.log("Accepted necessary cookies only")
  }

  const handleRejectCookies = () => {
    // Reject all non-necessary cookies
    setCookiePreferences({
      necessary: true,
      functionality: false,
      statistics: false,
      marketing: false,
      unclassified: false,
    })
    setShowCookieModal(false)
    setShowCookieOptions(false)
    // Here you would implement actual cookie rejection logic
    console.log("Rejected all non-necessary cookies")
  }

  const handleAcceptSelected = () => {
    // Accept selected cookies
    setShowCookieModal(false)
    setShowCookieOptions(false)
    // Here you would implement actual cookie setting logic based on preferences
    console.log("Accepted selected cookies:", cookiePreferences)
  }

  const toggleCookiePreference = (type: keyof typeof cookiePreferences) => {
    if (type === "necessary") return // Cannot disable necessary cookies
    setCookiePreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] mx-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors duration-300"
            >
              <X className="h-6 w-6" />
            </button>
            <iframe
              src="https://webhook2.atrativozap.com.br/webhook/f818a8bb-c054-4fe3-a2c7-6c2e5fd33ec9/chat"
              className="w-full h-full rounded-2xl"
              title="Entenda como funciona"
            />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.03&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="relative container mx-auto max-w-7xl py-24 px-4">
          {/* Logo centralizado no topo */}
          <div className="flex justify-center mb-16">
            <Image
              src="/logo-dattix-new.png"
              alt="DATTIX Logo"
              width={700}
              height={900}
              className="h-[133px] w-auto brightness-0 invert"
            />
          </div>

          {/* Duas colunas lado a lado */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tight text-center lg:text-left">
                A liberdade de estar em{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  conformidade
                </span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                Uma solução inteligente e acessível para startups e pequenos negócios que querem se adequar à LGPD com
                agilidade, autonomia e zero complicação.
              </p>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full p-2">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">
                        <strong className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                          katIA
                        </strong>
                        , a consultora virtual que entende as dores de quem está começando.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={openModal}
                  className="border-2 border-blue-400/50 text-blue-400 hover:bg-blue-400 hover:text-white backdrop-blur-sm px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Fale com a KatIA
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-8 w-8 text-blue-400" />
                      <span className="text-xl font-bold text-white">LGPD Compliance</span>
                    </div>
                    <div className="bg-green-500 rounded-full w-3 h-3 animate-pulse"></div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 text-green-300 px-4 py-3 rounded-xl text-sm font-medium">
                      ✓ Diagnóstico completo em 60 perguntas
                    </div>
                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 text-blue-300 px-4 py-3 rounded-xl text-sm font-medium">
                      ✓ katIA orientando 24/7
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 px-4 py-3 rounded-xl text-sm font-medium">
                      ✓ Documentos personalizados
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-sm font-medium">Progresso de Conformidade</span>
                        <span className="text-blue-400 text-sm font-bold">85%</span>
                      </div>
                      <div className="bg-white/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full w-[85%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              <span>Processo Simplificado</span>
            </div>
            <h2 className="text-5xl font-black text-slate-900 mb-6">
              Sua jornada de conformidade
              <br />
              <span className="text-blue-700">começa aqui</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Um processo inteligente e automatizado que transforma a complexidade da LGPD em passos simples e claros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                icon: Target,
                title: "Diagnóstico automatizado",
                description: "60 perguntas simples e matriz de conformidade instantânea.",
                color: "from-blue-500 to-blue-600",
              },
              {
                number: "2",
                icon: Brain,
                title: "Orientação com katIA",
                description: "IA que orienta, responde e sugere os próximos passos.",
                color: "from-purple-500 to-purple-600",
              },
              {
                number: "3",
                icon: FileText,
                title: "Documentação pronta",
                description: "Termos e políticas adaptadas à operação.",
                color: "from-green-500 to-green-600",
              },
              {
                number: "4",
                icon: BarChart3,
                title: "Painel com indicadores",
                description: "Acompanhe sua evolução em tempo real.",
                color: "from-orange-500 to-orange-600",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-8 text-center space-y-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative">
                    <div
                      className={`bg-gradient-to-r ${step.color} rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      <span className="text-2xl font-black text-white">{step.number}</span>
                    </div>
                    <div
                      className={`bg-gradient-to-r ${step.color} rounded-2xl w-14 h-14 flex items-center justify-center mx-auto shadow-lg`}
                    >
                      <step.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  <div className="relative">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é o DATTIX */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="text-center">
                <div className="inline-flex items-center justify-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Users className="h-4 w-4" />
                  <span>Público-Alvo</span>
                </div>
                <h2 className="text-5xl font-black text-slate-900 mb-6">
                  Feito para startups e negócios em crescimento
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  "Startups early-stage",
                  "Negócios digitais em estruturação",
                  "Pequenos empreendedores",
                  "Empresas sem DPO ou consultoria jurídica",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-3">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">DATTIX é B2S</h3>
                      <p className="text-slate-700 font-medium text-lg leading-relaxed">
                        Feito para quem precisa lidar com a LGPD com autonomia e responsabilidade, sem tempo a perder.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-10 text-white shadow-2xl">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl p-4">
                      <Shield className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Autonomia Total</h3>
                      <p className="text-blue-200">Sem dependência externa</p>
                    </div>
                  </div>

                  <p className="text-lg text-slate-300 leading-relaxed">
                    Desenvolvido especificamente para empresas que precisam de conformidade LGPD sem a complexidade e
                    custos de consultorias tradicionais.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-blue-400">90%</div>
                      <div className="text-sm text-slate-300">Economia vs Consultoria</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-green-400">24h</div>
                      <div className="text-sm text-slate-300">Para começar</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que você ganha */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Benefícios Exclusivos</span>
            </div>
            <h2 className="text-5xl font-black text-slate-900 mb-6">O que você ganha com o DATTIX</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Plataforma simples e acessível",
                description: "Interface intuitiva pensada para não-especialistas em compliance.",
                icon: Target,
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "katIA te orienta a cada etapa",
                description: "Consultora virtual com IA para esclarecer dúvidas e guiar decisões.",
                icon: Brain,
                color: "from-purple-500 to-purple-600",
              },
              {
                title: "Documentos e plano de ação claros",
                description: "Políticas e termos personalizados para seu negócio.",
                icon: FileText,
                color: "from-green-500 to-green-600",
              },
              {
                title: "Sem depender de consultorias caras",
                description: "Economia significativa comparado a serviços tradicionais.",
                icon: Shield,
                color: "from-orange-500 to-orange-600",
              },
              {
                title: "Digital, direto e com linguagem do seu negócio",
                description: "Comunicação clara, sem juridiquês desnecessário.",
                icon: Zap,
                color: "from-cyan-500 to-cyan-600",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-white"
              >
                <CardContent className="p-8 space-y-6">
                  <div
                    className={`bg-gradient-to-r ${benefit.color} rounded-2xl w-14 h-14 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre a plataforma */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.03&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="relative container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Lock className="h-4 w-4" />
                  <span>Sobre a Plataforma</span>
                </div>
                <h2 className="text-5xl font-black text-white mb-6">O que é o DATTIX?</h2>
              </div>

              <p className="text-xl text-slate-300 leading-relaxed">
                O DATTIX é um aplicativo inteligente para ajudar pequenas empresas a se adequarem à LGPD com agilidade,
                simplicidade e segurança. Ele oferece uma jornada prática de conformidade — do diagnóstico até a
                implementação — com o apoio da katIA, consultora virtual com IA.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">60</div>
                  <div className="text-sm text-slate-300">Perguntas de Diagnóstico</div>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">24/7</div>
                  <div className="text-sm text-slate-300">Suporte katIA</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Target,
                  title: "Diagnóstico automatizado",
                  description: "Avaliação completa e instantânea do seu nível de conformidade.",
                  color: "from-blue-400 to-cyan-400",
                },
                {
                  icon: FileText,
                  title: "Documentação personalizada",
                  description: "Políticas e termos adaptados especificamente para sua operação.",
                  color: "from-green-400 to-emerald-400",
                },
                {
                  icon: Brain,
                  title: "katIA com IA para orientar",
                  description: "Assistente virtual inteligente disponível 24/7.",
                  color: "from-purple-400 to-pink-400",
                },
                {
                  icon: BarChart3,
                  title: "Matriz de conformidade + painel de controle",
                  description: "Acompanhamento visual do progresso e indicadores-chave.",
                  color: "from-orange-400 to-red-400",
                },
                {
                  icon: Users,
                  title: "Gestão de solicitações de titulares de dados",
                  description: "Ferramenta completa para atender direitos dos usuários.",
                  color: "from-cyan-400 to-blue-400",
                },
              ].map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`bg-gradient-to-r ${feature.color} rounded-xl p-3 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

        <div className="relative container mx-auto max-w-5xl text-center text-white">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur text-white px-6 py-3 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                <span>Transforme seu Negócio</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-black leading-tight">
                Transforme a LGPD em um{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  diferencial competitivo
                </span>
              </h2>
            </div>

            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Comece com o DATTIX e mostre que sua startup cresce com responsabilidade desde o início.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
              <Button
                size="lg"
                onClick={openModal}
                className="bg-blue-400 text-white hover:bg-blue-500 px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Quero adequar minha startup
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>

              <div className="flex items-center space-x-2 text-blue-200">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Sem compromisso • Comece grátis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            <div className="space-y-6">
              <Image
                src="/logo-dattix-new.png"
                alt="DATTIX Logo"
                width={1000}
                height={300}
                className="h-8 w-auto brightness-0 invert"
              />
              <p className="text-slate-400 leading-relaxed">
                Solução inteligente para conformidade
                <br />
                LGPD em startups e pequenos negócios.
              </p>
              <div className="flex space-x-4">
                <div className="bg-slate-800 rounded-lg p-3 hover:bg-slate-700 transition-colors cursor-pointer">
                  <Shield className="h-5 w-5 text-blue-400" />
                </div>
                <div className="bg-slate-800 rounded-lg p-3 hover:bg-slate-700 transition-colors cursor-pointer">
                  <Brain className="h-5 w-5 text-purple-400" />
                </div>
                <div className="bg-slate-800 rounded-lg p-3 hover:bg-slate-700 transition-colors cursor-pointer">
                  <Lock className="h-5 w-5 text-green-400" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold">Fundadores & Co-Fundadores</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Fundadores</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                      <span className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                        Katia Daud
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                      <span className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                        João Oliveira
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Co-Fundadores</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="bg-purple-600 rounded-full w-2 h-2"></div>
                      <span className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                        Bruno Lombardi
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-purple-600 rounded-full w-2 h-2"></div>
                      <span className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                        Taciane Garcia
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold">Links Importantes</h3>
              <div className="space-y-3">
                <Link
                  href="/codigo-etica"
                  onClick={scrollToTop}
                  className="block text-slate-300 hover:text-white transition-colors hover:translate-x-1 duration-300"
                >
                  → Código de Ética
                </Link>
                <Link
                  href="/termos-uso"
                  onClick={scrollToTop}
                  className="block text-slate-300 hover:text-white transition-colors hover:translate-x-1 duration-300"
                >
                  → Termos de Uso
                </Link>
                <Link
                  href="/politica-privacidade"
                  onClick={scrollToTop}
                  className="block text-slate-300 hover:text-white transition-colors hover:translate-x-1 duration-300"
                >
                  → Política de Privacidade
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400">&copy; {new Date().getFullYear()} DATTIX. Todos os direitos reservados.</p>
              <div className="flex items-center space-x-6 text-slate-400 text-sm">
                <span>Feito com ❤️ para startups brasileiras</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Modal */}
      {showCookieModal && (
        <div className="fixed bottom-4 left-4 z-50 max-w-sm">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full p-2">
                <Shield className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 mb-2">Ajustar Preferências de Cookies</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Utilizamos cookies para melhorar sua experiência. Você pode gerenciar suas preferências abaixo.
                </p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <Link
                href="/politica-privacidade"
                onClick={scrollToTop}
                className="block text-blue-600 hover:text-blue-700 hover:underline transition-colors"
              >
                → Política de Privacidade
              </Link>
              <Link
                href="/termos-uso"
                onClick={scrollToTop}
                className="block text-blue-600 hover:text-blue-700 hover:underline transition-colors"
              >
                → Termos de Uso
              </Link>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowCookieOptions(true)}
                  className="flex-1 text-xs"
                >
                  Opções
                </Button>
                <Button variant="outline" size="sm" onClick={handleRejectCookies} className="flex-1 text-xs">
                  Rejeitar
                </Button>
              </div>
              <Button size="sm" onClick={handleAcceptCookies} className="w-full bg-blue-600 hover:bg-blue-700 text-xs">
                Aceitar
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Options Modal */}
      {showCookieOptions && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-y-auto">
            <div className="p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">Preferências de Cookies</h2>
                <button
                  onClick={() => setShowCookieOptions(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <p className="text-slate-600 leading-relaxed">
                Existem diversos tipos de cookies na internet, com diferentes propósitos. Você tem o direito de escolher
                quais deles deseja permitir.
              </p>

              <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between p-4 bg-slate-50 rounded-xl">
                  <div className="flex-1 pr-4">
                    <h3 className="font-semibold text-slate-900 mb-2">Necessários</h3>
                    <p className="text-sm text-slate-600">
                      São cookies necessários para o funcionamento do site. Sem eles o site não funciona e portanto
                      devem estar sempre habilitados.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-500 rounded-full w-12 h-6 flex items-center justify-end px-1">
                      <div className="bg-white rounded-full w-4 h-4"></div>
                    </div>
                  </div>
                </div>

                {/* Functionality Cookies */}
                <div className="flex items-start justify-between p-4 border border-slate-200 rounded-xl">
                  <div className="flex-1 pr-4">
                    <h3 className="font-semibold text-slate-900 mb-2">Funcionalidade</h3>
                    <p className="text-sm text-slate-600">
                      São cookies que adicionam funcionalidades desejáveis ao site, como relembrar preferências, idioma.
                      Permitem personalização de sua experiência.
                    </p>
                  </div>
                  <button
                    onClick={() => toggleCookiePreference("functionality")}
                    className={`rounded-full w-12 h-6 flex items-center px-1 transition-colors ${
                      cookiePreferences.functionality ? "bg-green-500 justify-end" : "bg-slate-300 justify-start"
                    }`}
                  >
                    <div className="bg-white rounded-full w-4 h-4"></div>
                  </button>
                </div>

                {/* Statistics Cookies */}
                <div className="flex items-start justify-between p-4 border border-slate-200 rounded-xl">
                  <div className="flex-1 pr-4">
                    <h3 className="font-semibold text-slate-900 mb-2">Estatísticas</h3>
                    <p className="text-sm text-slate-600">
                      São cookies utilizados para adquirir dados de como os usuários utilizam a página (quais páginas
                      são mais visitadas, se ocorreram mensagens de erro, etc.).
                    </p>
                  </div>
                  <button
                    onClick={() => toggleCookiePreference("statistics")}
                    className={`rounded-full w-12 h-6 flex items-center px-1 transition-colors ${
                      cookiePreferences.statistics ? "bg-green-500 justify-end" : "bg-slate-300 justify-start"
                    }`}
                  >
                    <div className="bg-white rounded-full w-4 h-4"></div>
                  </button>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-4 border border-slate-200 rounded-xl">
                  <div className="flex-1 pr-4">
                    <h3 className="font-semibold text-slate-900 mb-2">Marketing</h3>
                    <p className="text-sm text-slate-600">
                      São cookies utilizados para te apresentar propagandas personalizadas.
                    </p>
                  </div>
                  <button
                    onClick={() => toggleCookiePreference("marketing")}
                    className={`rounded-full w-12 h-6 flex items-center px-1 transition-colors ${
                      cookiePreferences.marketing ? "bg-green-500 justify-end" : "bg-slate-300 justify-start"
                    }`}
                  >
                    <div className="bg-white rounded-full w-4 h-4"></div>
                  </button>
                </div>

                {/* Unclassified Cookies */}
                <div className="flex items-start justify-between p-4 border border-slate-200 rounded-xl">
                  <div className="flex-1 pr-4">
                    <h3 className="font-semibold text-slate-900 mb-2">Não classificados</h3>
                    <p className="text-sm text-slate-600">
                      São cookies que ainda não classificamos em nenhuma das outras categorias.
                    </p>
                  </div>
                  <button
                    onClick={() => toggleCookiePreference("unclassified")}
                    className={`rounded-full w-12 h-6 flex items-center px-1 transition-colors ${
                      cookiePreferences.unclassified ? "bg-green-500 justify-end" : "bg-slate-300 justify-start"
                    }`}
                  >
                    <div className="bg-white rounded-full w-4 h-4"></div>
                  </button>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button onClick={handleAcceptSelected} className="bg-blue-600 hover:bg-blue-700 px-8">
                  Aceitar Todos Selecionados
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
