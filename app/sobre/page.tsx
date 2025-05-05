import type { Metadata } from "next"
import Image from "next/image"
import Layout from "@/components/Layout"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Sobre",
  description: "Sobre o Treno Hiit e nossa missão.",
}

export default function SobrePage() {
  return (
    <Layout>
      <div className="container px-4 py-12 md:px-6">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre o Treno Hiit</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Conheça nossa história, missão e a equipe por trás do Treno Hiit
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Nossa História</h2>
            <div className="prose prose-gray max-w-none dark:prose-invert">
              <p>
                O Treno Hiit nasceu em 2022 da paixão por treinos eficientes e acessíveis. Fundado por um grupo de
                entusiastas de fitness e desenvolvedores de tecnologia, nossa plataforma surgiu da necessidade de
                democratizar o acesso a treinos HIIT de alta qualidade.
              </p>
              <p>
                Após meses de desenvolvimento e testes com usuários reais, lançamos oficialmente o Treno Hiit com a
                missão de ajudar pessoas de todos os níveis de condicionamento físico a alcançarem seus objetivos de
                forma eficiente e personalizada.
              </p>
              <p>
                Desde então, temos crescido constantemente, adicionando novos recursos, expandindo nossa biblioteca de
                exercícios e construindo uma comunidade engajada de entusiastas de HIIT.
              </p>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image src="/placeholder.svg?height=600&width=800" alt="Equipe Treno Hiit" fill className="object-cover" />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-center">Nossa Missão</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-2 text-xl font-semibold">Acessibilidade</h3>
                <p className="text-muted-foreground">
                  Tornar treinos HIIT de alta qualidade acessíveis a todos, independentemente do nível de experiência ou
                  acesso a equipamentos.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-2 text-xl font-semibold">Personalização</h3>
                <p className="text-muted-foreground">
                  Oferecer ferramentas que permitam a criação de treinos verdadeiramente personalizados, adaptados às
                  necessidades e objetivos individuais.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-2 text-xl font-semibold">Educação</h3>
                <p className="text-muted-foreground">
                  Fornecer conteúdo educativo de qualidade sobre HIIT, condicionamento físico e bem-estar para capacitar
                  nossos usuários.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-center">Nossa Equipe</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                name: "Ana Silva",
                role: "Fundadora & CEO",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Carlos Mendes",
                role: "Especialista em HIIT",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Mariana Costa",
                role: "Desenvolvedora Chefe",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Rafael Oliveira",
                role: "Designer de UX",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto mb-4 aspect-square w-40 overflow-hidden rounded-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold">Nossos Valores</h2>
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <ul>
              <li>
                <strong>Qualidade:</strong> Comprometemo-nos a oferecer conteúdo e ferramentas da mais alta qualidade.
              </li>
              <li>
                <strong>Inclusão:</strong> Acreditamos que o fitness deve ser acessível a todos, independentemente de
                idade, nível de condicionamento ou recursos disponíveis.
              </li>
              <li>
                <strong>Inovação:</strong> Buscamos constantemente novas maneiras de melhorar nossa plataforma e a
                experiência do usuário.
              </li>
              <li>
                <strong>Comunidade:</strong> Valorizamos o feedback e a participação ativa de nossa comunidade de
                usuários.
              </li>
              <li>
                <strong>Integridade:</strong> Somos transparentes em nossas práticas e comprometidos com a privacidade e
                segurança dos dados de nossos usuários.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
