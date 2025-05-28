import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Eye,
  Minimize2,
  Lock,
  Scale,
  MessageSquare,
  Users,
  Heart,
  Search,
  ArrowLeft,
  Calendar,
  FileText,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CodigoEtica() {
  const principios = [
    {
      numero: "1",
      titulo: "Finalidade Legítima e Transparência",
      descricao:
        "A DATTIX compromete-se a utilizar dados e tecnologias de IA exclusivamente para finalidades legítimas, informadas ao titular de forma clara e acessível, assegurando a transparência dos processos automatizados.",
      icon: Eye,
      color: "from-blue-500 to-blue-600",
    },
    {
      numero: "2",
      titulo: "Minimização e Necessidade",
      descricao:
        "O tratamento de dados pessoais será limitado ao mínimo necessário para a finalidade específica, evitando a coleta excessiva ou o uso de dados irrelevantes.",
      icon: Minimize2,
      color: "from-green-500 to-green-600",
    },
    {
      numero: "3",
      titulo: "Segurança e Integridade",
      descricao:
        "Adotamos medidas técnicas e administrativas para proteger os dados pessoais contra acessos não autorizados, vazamentos, perdas ou alterações indevidas, preservando sua integridade, confidencialidade e disponibilidade.",
      icon: Lock,
      color: "from-red-500 to-red-600",
    },
    {
      numero: "4",
      titulo: "Não Discriminação e Vieses Algorítmicos",
      descricao:
        "A DATTIX atua na identificação, mitigação e correção de vieses algorítmicos que possam causar discriminação injusta ou tratamento desigual. Nossos sistemas são auditáveis e passam por validações periódicas.",
      icon: Scale,
      color: "from-purple-500 to-purple-600",
    },
    {
      numero: "5",
      titulo: "Explicabilidade e Responsabilidade",
      descricao:
        "As decisões automatizadas geradas por IA devem ser compreensíveis aos usuários. A DATTIX oferece meios para que os titulares entendam a lógica por trás das recomendações automatizadas, com responsabilização clara por seus efeitos.",
      icon: MessageSquare,
      color: "from-orange-500 to-orange-600",
    },
    {
      numero: "6",
      titulo: "Consentimento e Controle pelo Titular",
      descricao:
        "Nenhum dado pessoal será tratado pela IA sem base legal ou consentimento válido. O titular terá sempre acesso a mecanismos para revisar, corrigir, excluir ou revogar permissões.",
      icon: Users,
      color: "from-cyan-500 to-cyan-600",
    },
    {
      numero: "7",
      titulo: "Desenvolvimento Ético e Sustentável",
      descricao:
        "A DATTIX se compromete com a construção de sistemas de IA que promovam impacto social positivo, inclusão digital e respeito aos valores humanos, incentivando uma cultura ética no uso da tecnologia.",
      icon: Heart,
      color: "from-pink-500 to-pink-600",
    },
    {
      numero: "8",
      titulo: "Fiscalização e Aperfeiçoamento Contínuo",
      descricao:
        "Este Código será revisado regularmente para acompanhar a evolução da tecnologia, da legislação e das expectativas sociais. Qualquer conduta em desacordo com estes princípios será apurada com seriedade e transparência.",
      icon: Search,
      color: "from-indigo-500 to-indigo-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-end">
            <Link href="/">
              <Button variant="outline" className="border-blue-300 text-blue-100 hover:bg-blue-600 backdrop-blur-sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Site
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="h-4 w-4" />
            <span>Documento Oficial</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Código de Ética no Uso de Dados por{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Inteligência Artificial
            </span>
          </h1>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8 mb-8">
            <p className="text-lg text-slate-700 leading-relaxed">
              Este Código de Ética reflete os princípios fundamentais da DATTIX no uso de dados e inteligência
              artificial (IA), com o objetivo de garantir práticas responsáveis, transparentes e alinhadas à proteção de
              direitos fundamentais, especialmente no contexto da Lei Geral de Proteção de Dados (LGPD).
            </p>
          </div>

          <div className="flex items-center justify-center space-x-2 text-slate-600">
            <Calendar className="h-5 w-5" />
            <span className="font-medium">Última atualização: 26 de maio de 2025</span>
          </div>
        </div>
      </section>

      {/* Princípios */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Nossos Princípios Fundamentais</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cada princípio representa nosso compromisso com o uso ético e responsável da inteligência artificial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {principios.map((principio, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`bg-gradient-to-r ${principio.color} rounded-2xl w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      <span className="text-2xl font-black text-white">{principio.numero}</span>
                    </div>
                    <div
                      className={`bg-gradient-to-r ${principio.color} rounded-2xl w-14 h-14 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      <principio.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                      {principio.titulo}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-justify">{principio.descricao}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compromisso */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur text-white px-6 py-3 rounded-full text-sm font-medium">
              <Shield className="h-4 w-4" />
              <span>Nosso Compromisso</span>
            </div>

            <h2 className="text-4xl font-black leading-tight">
              Construindo o futuro da IA com{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                responsabilidade
              </span>
            </h2>

            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Na DATTIX, acreditamos que a tecnologia deve servir às pessoas, respeitando seus direitos e promovendo um
              futuro mais justo e inclusivo para todos.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center">
                <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Proteção</h3>
                <p className="text-blue-200 text-sm">Seus dados estão seguros conosco</p>
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center">
                <Eye className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Transparência</h3>
                <p className="text-blue-200 text-sm">Processos claros e compreensíveis</p>
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center">
                <Heart className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Ética</h3>
                <p className="text-blue-200 text-sm">Valores humanos em primeiro lugar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <Image
                src="/logo-dattix-new.png"
                alt="DATTIX Logo"
                width={200}
                height={60}
                className="h-48 w-auto brightness-0 invert"
              />
              <p className="text-slate-400 text-sm leading-relaxed">
                Solução inteligente para conformidade
                <br />
                LGPD em startups e pequenos negócios.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Documentos Legais</h3>
              <div className="space-y-2">
                <Link href="/codigo-etica" className="block text-slate-300 hover:text-white transition-colors text-sm">
                  → Código de Ética
                </Link>
                <Link href="#" className="block text-slate-300 hover:text-white transition-colors text-sm">
                  → Política de Privacidade
                </Link>
                <Link href="#" className="block text-slate-300 hover:text-white transition-colors text-sm">
                  → Termos de Uso
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Fundadores & Co-Fundadores</h3>
              <div className="grid grid-cols-2 gap-4">
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
          </div>

          <div className="border-t border-slate-800 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} DATTIX. Todos os direitos reservados.
              </p>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <Calendar className="h-4 w-4" />
                <span>Atualizado em 26 de maio de 2025</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
