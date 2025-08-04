import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  UserCheck,
  Settings,
  User,
  Monitor,
  Lock,
  Key,
  RefreshCw,
  AlertTriangle,
  FileText,
  ArrowLeft,
  Calendar,
  Mail,
  Gavel,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TermosUso() {
  const secoes = [
    {
      numero: "1",
      titulo: "Aceitação dos Termos",
      descricao:
        "Ao utilizar a plataforma DATTIX, o usuário declara ter lido, compreendido e aceitado integralmente os termos e condições aqui descritos.",
      icon: UserCheck,
      color: "from-blue-500 to-blue-600",
    },
    {
      numero: "2",
      titulo: "Serviços Oferecidos",
      descricao:
        "A DATTIX oferece ferramentas para diagnóstico de conformidade com a LGPD, emissão de relatórios, sugestões automatizadas de adequação, acesso a assistente virtual (katIA®), e recursos de automação e organização de dados para pequenas empresas e startups.",
      icon: Settings,
      color: "from-green-500 to-green-600",
    },
    {
      numero: "3",
      titulo: "Cadastro do Usuário",
      descricao:
        "O usuário é responsável por fornecer informações verídicas e manter seus dados atualizados. O acesso à conta é pessoal e intransferível. A DATTIX não se responsabiliza por acessos indevidos decorrentes de negligência do usuário.",
      icon: User,
      color: "from-purple-500 to-purple-600",
    },
    {
      numero: "4",
      titulo: "Uso da Plataforma",
      descricao:
        "O usuário compromete-se a utilizar a plataforma exclusivamente para fins legais e compatíveis com as funcionalidades contratadas. É proibida a reprodução, modificação, engenharia reversa ou uso da marca DATTIX sem autorização expressa.",
      icon: Monitor,
      color: "from-red-500 to-red-600",
    },
    {
      numero: "5",
      titulo: "Privacidade e Proteção de Dados",
      descricao:
        "A DATTIX adota práticas em conformidade com a LGPD. As informações coletadas são tratadas conforme descrito na Política de Privacidade disponível no site.",
      icon: Lock,
      color: "from-orange-500 to-orange-600",
    },
    {
      numero: "6",
      titulo: "Licença de Uso",
      descricao:
        "O usuário recebe uma licença limitada, não exclusiva e intransferível para utilizar a plataforma conforme os planos contratados. O não cumprimento deste termo poderá acarretar a suspensão ou cancelamento do acesso.",
      icon: Key,
      color: "from-cyan-500 to-cyan-600",
    },
    {
      numero: "7",
      titulo: "Atualizações e Disponibilidade",
      descricao:
        "A DATTIX reserva-se o direito de realizar atualizações, melhorias ou interrupções temporárias dos serviços, sempre que necessário para garantir sua evolução e segurança.",
      icon: RefreshCw,
      color: "from-pink-500 to-pink-600",
    },
    {
      numero: "8",
      titulo: "Limitação de Responsabilidade",
      descricao:
        "A DATTIX não se responsabiliza por eventuais danos decorrentes do uso indevido da plataforma ou interpretações equivocadas dos relatórios gerados. A plataforma não substitui orientação jurídica formal, exceto quando assim indicado expressamente.",
      icon: AlertTriangle,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      numero: "9",
      titulo: "Disposições Gerais",
      descricao:
        "Este Termo poderá ser alterado a qualquer momento, mediante aviso no site. O foro para dirimir eventuais conflitos será o da Comarca de São José dos Campos/SP, com renúncia a qualquer outro.",
      icon: Gavel,
      color: "from-teal-500 to-teal-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-end">
            <Link href="/">
              <Button
                variant="outline"
                className="border-blue-300 text-blue-100 hover:bg-blue-600 backdrop-blur-sm bg-transparent"
              >
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
            <span>Documento Legal</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Termos de{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Uso</span>
          </h1>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8 mb-8">
            <p className="text-lg text-slate-700 leading-relaxed">
              Este Termo de Uso regula as condições de acesso e utilização da plataforma DATTIX, pertencente à empresa
              DATTIX, dedicada ao desenvolvimento de soluções tecnológicas voltadas à adequação à Lei Geral de Proteção
              de Dados (LGPD), disponibilizadas por meio de software como serviço (SaaS).
            </p>
          </div>

          <div className="flex items-center justify-center space-x-2 text-slate-600">
            <Calendar className="h-5 w-5" />
            <span className="font-medium">Última atualização: 26 de maio de 2025</span>
          </div>
        </div>
      </section>

      {/* Seções dos Termos */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Condições de Uso da Plataforma</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Regras claras e transparentes para o uso responsável da plataforma DATTIX.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {secoes.map((secao, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`bg-gradient-to-r ${secao.color} rounded-2xl w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      <span className="text-2xl font-black text-white">{secao.numero}</span>
                    </div>
                    <div
                      className={`bg-gradient-to-r ${secao.color} rounded-2xl w-14 h-14 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      <secao.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                      {secao.titulo}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-justify">{secao.descricao}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contato e Foro */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur text-white px-6 py-3 rounded-full text-sm font-medium">
              <Shield className="h-4 w-4" />
              <span>Suporte Legal</span>
            </div>

            <h2 className="text-4xl font-black leading-tight">
              Dúvidas sobre os{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Termos de Uso?
              </span>
            </h2>

            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Entre em contato conosco para esclarecer qualquer dúvida sobre os termos e condições de uso da plataforma
              DATTIX.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full p-3">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">Contato</h3>
                    <p className="text-blue-200">Suporte e Dúvidas</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <p className="text-lg font-semibold text-blue-100">dattix@dattix.com.br</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-full p-3">
                    <Gavel className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">Foro</h3>
                    <p className="text-blue-200">Jurisdição Legal</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <p className="text-lg font-semibold text-blue-100">São José dos Campos/SP</p>
                </div>
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
                className="h-16 w-auto brightness-0 invert"
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
                <Link
                  href="/politica-privacidade"
                  className="block text-slate-300 hover:text-white transition-colors text-sm"
                >
                  → Política de Privacidade
                </Link>
                <Link href="/termos-uso" className="block text-slate-300 hover:text-white transition-colors text-sm">
                  → Termos de Uso
                </Link>
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
