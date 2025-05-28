import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Eye,
  Lock,
  Users,
  FileText,
  ArrowLeft,
  Calendar,
  Mail,
  Database,
  UserCheck,
  Settings,
  AlertCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PoliticaPrivacidade() {
  const secoes = [
    {
      numero: "1",
      titulo: "Coleta de Informações",
      descricao:
        "Coletamos informações pessoais fornecidas voluntariamente pelo usuário ao preencher formulários, entrar em contato conosco ou utilizar os serviços da plataforma DATTIX. As informações coletadas podem incluir nome, e-mail, telefone, nome da empresa, cargo, CNPJ, e demais dados necessários para prestação de serviços de conformidade digital.",
      icon: Database,
      color: "from-blue-500 to-blue-600",
    },
    {
      numero: "2",
      titulo: "Uso das Informações",
      descricao:
        "As informações coletadas são utilizadas para: Prestar os serviços contratados; Realizar diagnósticos de conformidade com a LGPD; Enviar comunicações sobre atualizações, conteúdos, eventos ou promoções relacionadas à DATTIX; Atender solicitações e exercer direitos previstos pela legislação de proteção de dados.",
      icon: Settings,
      color: "from-green-500 to-green-600",
    },
    {
      numero: "3",
      titulo: "Compartilhamento de Dados",
      descricao:
        "A DATTIX não compartilha dados pessoais com terceiros, exceto quando necessário para execução dos serviços contratados, cumprimento de obrigações legais ou mediante consentimento do titular.",
      icon: Users,
      color: "from-purple-500 to-purple-600",
    },
    {
      numero: "4",
      titulo: "Armazenamento e Segurança",
      descricao:
        "As informações são armazenadas em ambientes seguros, com acesso restrito e controle de confidencialidade. Adotamos medidas técnicas e administrativas adequadas para proteger os dados pessoais contra acessos não autorizados, vazamentos, alterações ou destruição.",
      icon: Lock,
      color: "from-red-500 to-red-600",
    },
    {
      numero: "5",
      titulo: "Direitos do Titular",
      descricao:
        "Em conformidade com a Lei Geral de Proteção de Dados (LGPD), o titular tem o direito de: Confirmar a existência de tratamento; Acessar os dados; Corrigir dados incompletos, inexatos ou desatualizados; Solicitar anonimização, bloqueio ou eliminação; Revogar consentimento a qualquer momento.",
      icon: UserCheck,
      color: "from-orange-500 to-orange-600",
    },
    {
      numero: "6",
      titulo: "Cookies e Tecnologias de Rastreamento",
      descricao:
        "Nosso site pode utilizar cookies e tecnologias semelhantes para melhorar a experiência do usuário, lembrar preferências e coletar informações estatísticas. Você pode ajustar as configurações do seu navegador para recusar cookies, caso deseje.",
      icon: Eye,
      color: "from-cyan-500 to-cyan-600",
    },
    {
      numero: "7",
      titulo: "Contato",
      descricao:
        "Para exercer seus direitos ou esclarecer dúvidas relacionadas a esta Política de Privacidade, entre em contato com nosso Encarregado de Dados (DPO) pelo e-mail: dattix@dattix.com.br",
      icon: Mail,
      color: "from-pink-500 to-pink-600",
    },
    {
      numero: "8",
      titulo: "Atualizações desta Política",
      descricao:
        "A DATTIX poderá atualizar esta Política de Privacidade periodicamente. Recomendamos a revisão regular deste documento. A versão mais recente estará sempre disponível em nosso site.",
      icon: AlertCircle,
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
            <span>Documento Legal</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Política de{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Privacidade
            </span>
          </h1>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8 mb-8">
            <p className="text-lg text-slate-700 leading-relaxed">
              Esta Política de Privacidade descreve como a DATTIX, startup de tecnologia com foco em soluções para
              conformidade à LGPD, coleta, utiliza, armazena e compartilha informações pessoais de usuários de sua
              plataforma e visitantes do site.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-2 text-slate-600">
            <Calendar className="h-5 w-5" />
            <span className="font-medium">Atualizada em 26 de maio de 2025</span>
          </div>
        </div>
      </section>

      {/* Seções da Política */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Como Tratamos Seus Dados</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transparência total sobre como coletamos, utilizamos e protegemos suas informações pessoais.
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

      {/* Contato DPO */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur text-white px-6 py-3 rounded-full text-sm font-medium">
              <Shield className="h-4 w-4" />
              <span>Seus Direitos</span>
            </div>

            <h2 className="text-4xl font-black leading-tight">
              Exercite seus direitos com{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                transparência
              </span>
            </h2>

            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Entre em contato com nosso Encarregado de Dados (DPO) para exercer qualquer direito previsto na LGPD ou
              esclarecer dúvidas sobre o tratamento de seus dados pessoais.
            </p>

            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full p-3">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">Contato DPO</h3>
                  <p className="text-blue-200">Encarregado de Proteção de Dados</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <p className="text-lg font-semibold text-blue-100">dattix@dattix.com.br</p>
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
                <span>Atualizada em 26 de maio de 2025</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
