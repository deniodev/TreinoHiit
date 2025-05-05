import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getPost, getPosts } from "@/utils/blog"
import { Calendar, User, Tag } from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPost(params.slug)

  if (!post) {
    return {
      title: "Artigo não encontrado",
    }
  }

  return {
    title: post.titulo,
    description: post.resumo,
    openGraph: {
      images: [
        {
          url: post.imagem,
          width: 800,
          height: 600,
          alt: post.titulo,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  // Buscar posts relacionados (excluindo o atual)
  const allPosts = await getPosts()
  const postsRelacionados = allPosts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3)

  return (
    <Layout>
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Coluna principal */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link href="/blog" className="text-sm text-primary hover:underline">
                ← Voltar para o Blog
              </Link>
            </div>

            <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl">{post.titulo}</h1>

            <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.data}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.autor}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Tag className="h-4 w-4" />
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mb-8 aspect-video overflow-hidden rounded-lg">
              <Image src={post.imagem || "/placeholder.svg"} alt={post.titulo} fill className="object-cover" priority />
            </div>

            <div className="prose prose-gray max-w-none dark:prose-invert">
              {/* Aqui renderizamos o conteúdo do post */}
              {/* Em um sistema real, isso seria HTML ou Markdown renderizado */}
              <p className="lead">{post.resumo}</p>

              {/* Conteúdo simulado para o artigo */}
              <p>
                O treinamento intervalado de alta intensidade (HIIT) tem se tornado cada vez mais popular nos últimos
                anos, e por boas razões. Este método de treinamento não apenas economiza tempo, mas também oferece uma
                série de benefícios para a saúde e condicionamento físico que superam muitas formas tradicionais de
                exercício.
              </p>

              <h2>O que é HIIT?</h2>
              <p>
                HIIT consiste em curtos períodos de exercício intenso alternados com períodos de recuperação ou
                exercício de baixa intensidade. Uma sessão típica de HIIT pode durar de 10 a 30 minutos, tornando-o uma
                opção eficiente para pessoas com agendas ocupadas.
              </p>

              <h2>Principais Benefícios</h2>
              <p>
                Os benefícios do HIIT são numerosos e bem documentados por pesquisas científicas. Vamos explorar alguns
                dos mais significativos:
              </p>

              <h3>1. Queima de Calorias Eficiente</h3>
              <p>
                O HIIT queima mais calorias em menos tempo comparado ao exercício de intensidade moderada. Além disso, o
                efeito pós-queima (EPOC - Excess Post-exercise Oxygen Consumption) significa que seu corpo continua
                queimando calorias mesmo após o término do treino.
              </p>

              <h3>2. Melhora da Saúde Cardiovascular</h3>
              <p>
                Estudos mostram que o HIIT pode melhorar a saúde do coração, reduzir a pressão arterial e melhorar a
                capacidade cardiorrespiratória tão eficientemente quanto o exercício de resistência tradicional, mas em
                menos tempo.
              </p>

              <h3>3. Preservação da Massa Muscular</h3>
              <p>
                Ao contrário do cardio tradicional, que pode levar à perda de massa muscular junto com a gordura, o HIIT
                ajuda a preservar e até mesmo construir massa muscular enquanto queima gordura.
              </p>

              <h3>4. Melhora da Sensibilidade à Insulina</h3>
              <p>
                O HIIT pode melhorar significativamente a sensibilidade à insulina, ajudando seu corpo a utilizar a
                glicose de forma mais eficiente e potencialmente reduzindo o risco de diabetes tipo 2.
              </p>

              <h3>5. Adaptabilidade</h3>
              <p>
                Uma das maiores vantagens do HIIT é sua versatilidade. Pode ser adaptado para qualquer nível de
                condicionamento físico e pode incorporar uma variedade de exercícios, desde corrida e ciclismo até
                exercícios com o peso corporal ou pesos livres.
              </p>

              <h2>Como Incorporar o HIIT em Sua Rotina</h2>
              <p>
                Para obter os benefícios do HIIT, considere adicionar 2-3 sessões por semana à sua rotina de exercícios.
                Comece com intervalos mais curtos e menos intensos, aumentando gradualmente à medida que seu
                condicionamento melhora.
              </p>

              <p>
                Lembre-se de que a qualidade é mais importante que a quantidade. Concentre-se em dar o máximo durante os
                intervalos de alta intensidade e permita-se recuperar adequadamente entre as sessões.
              </p>

              <h2>Conclusão</h2>
              <p>
                O HIIT oferece uma abordagem eficiente e eficaz para melhorar a saúde e o condicionamento físico. Ao
                incorporar este método de treinamento em sua rotina, você pode maximizar seus resultados enquanto
                minimiza o tempo gasto se exercitando.
              </p>

              <p>
                Como sempre, consulte um profissional de saúde antes de iniciar qualquer novo programa de exercícios,
                especialmente se você tiver condições médicas pré-existentes.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image src="/placeholder.svg?height=100&width=100" alt={post.autor} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-medium">{post.autor}</p>
                  <p className="text-sm text-muted-foreground">Especialista em HIIT</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Compartilhar
                </Button>
                <Button size="sm">Salvar</Button>
              </div>
            </div>
          </div>

          {/* Coluna lateral */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Posts Relacionados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {postsRelacionados.length > 0 ? (
                  postsRelacionados.map((relatedPost) => (
                    <div key={relatedPost.slug} className="flex items-start gap-3">
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={relatedPost.imagem || "/placeholder.svg"}
                          alt={relatedPost.titulo}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">
                          <Link href={`/blog/${relatedPost.slug}`} className="hover:text-primary hover:underline">
                            {relatedPost.titulo}
                          </Link>
                        </h3>
                        <p className="line-clamp-2 text-xs text-muted-foreground">{relatedPost.resumo}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">Nenhum post relacionado encontrado.</p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary hover:bg-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Inscreva-se na Newsletter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Receba as últimas atualizações e dicas sobre HIIT diretamente em seu email.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button className="w-full">Inscrever-se</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}
