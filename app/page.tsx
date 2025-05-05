import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Layout from "@/components/Layout"
import { getCategorias } from "@/utils/exercicios"
import { getPosts } from "@/utils/blog"

export const metadata: Metadata = {
  title: "Treno Hiit – Treinos HIIT Otimizados",
  description: "Blog, diretório de exercícios e criador de treinos HIIT personalizados.",
}

export default async function Home() {
  const categorias = await getCategorias()
  const posts = await getPosts()
  const recentPosts = posts.slice(0, 3)

  // Imagens para os recursos principais
  const recursosPrincipais = [
    {
      titulo: "Diretório de Exercícios",
      descricao: "Explore nossa biblioteca completa de exercícios HIIT",
      texto: "Acesse mais de 100 exercícios categorizados por grupo muscular, equipamento e nível de dificuldade.",
      link: "/exercicios",
      linkTexto: "Ver Exercícios",
      imagem: "/diretorio-de-exercicios.png",
    },
    {
      titulo: "Workout Builder",
      descricao: "Crie treinos personalizados com nossa ferramenta de arrastar e soltar",
      texto: "Arraste e solte exercícios, defina tempos ou repetições e exporte seu treino em PDF.",
      link: "/builder",
      linkTexto: "Criar Treino",
      imagem: "/builder.png",
    },
    {
      titulo: "Cronômetro HIIT",
      descricao: "Acompanhe seus treinos com nosso cronômetro intervalado",
      texto: "Configure intervalos de trabalho e descanso, com alertas sonoros e contagem de rounds.",
      link: "/cronometro",
      linkTexto: "Usar Cronômetro",
      imagem: "/cronometro-hiit.png",
    },
    {
      titulo: "Blog Especializado",
      descricao: "Artigos e dicas sobre treinos HIIT e condicionamento físico",
      texto: "Conteúdo atualizado regularmente com as melhores práticas, dicas e novidades sobre HIIT.",
      link: "/blog",
      linkTexto: "Ler Blog",
      imagem: "/blog.png",
    },
  ]

  return (
    <Layout>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Treino Hiit</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Crie treinos HIIT personalizados, explore nosso diretório de exercícios e acompanhe seus treinos com nosso
              cronômetro.
            </p>
            <div className="space-x-4">
              <Button asChild>
                <Link href="/builder">Criar Treino</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/cronometro">Usar Cronômetro</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-center mb-8">
            Recursos Principais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recursosPrincipais.map((recurso, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={recurso.imagem || "/placeholder.svg"}
                    alt={recurso.titulo}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{recurso.titulo}</CardTitle>
                  <CardDescription>{recurso.descricao}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{recurso.texto}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={recurso.link}>{recurso.linkTexto}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categorias de Exercícios */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Categorias de Exercícios</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Explore nosso diretório de exercícios por categoria
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/exercicios">Ver Todas as Categorias</Link>
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categorias.slice(0, 4).map((categoria) => (
              <Card key={categoria.slug} className="overflow-hidden">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={categoria.imagem}
                    alt={categoria.nome}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{categoria.nome}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="line-clamp-2 text-sm text-muted-foreground">{categoria.descricao}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{categoria.quantidade} exercícios</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/exercicios/${categoria.slug}`}>Ver Exercícios</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Destaque do Cronômetro */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-4">
                Cronômetro HIIT Gratuito
              </h2>
              <p className="mb-6 text-gray-500 dark:text-gray-400">
                Nosso cronômetro HIIT gratuito é a ferramenta perfeita para acompanhar seus treinos intervalados.
                Configure tempos de trabalho e descanso personalizados, receba alertas sonoros e acompanhe seu progresso
                em tempo real.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                    ✓
                  </span>
                  <span>Intervalos de trabalho e descanso personalizáveis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                    ✓
                  </span>
                  <span>Alertas sonoros para transições entre intervalos</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                    ✓
                  </span>
                  <span>Integração com treinos criados no Workout Builder</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                    ✓
                  </span>
                  <span>Interface intuitiva e fácil de usar</span>
                </li>
              </ul>
              <Button asChild size="lg">
                <Link href="/cronometro">Experimentar Agora</Link>
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/cronometro-hiit.png"
                alt="Cronômetro HIIT"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Recentes */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Posts Recentes</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Confira nossos artigos mais recentes sobre HIIT e condicionamento físico
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/blog">Ver Todos os Posts</Link>
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image src={post.imagem || "/placeholder.svg"} alt={post.titulo} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{post.titulo}</CardTitle>
                  <CardDescription>{post.data}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-sm text-muted-foreground">{post.resumo}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/blog/${post.slug}`}>Ler Artigo</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Pronto para começar seu treino?
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Crie seu treino HIIT personalizado e use nosso cronômetro para maximizar seus resultados.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/builder">Criar Meu Treino</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/cronometro">Usar Cronômetro</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
