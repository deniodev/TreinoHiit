import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import Layout from "@/components/Layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/card"
import { getExercicio, getCategorias, getExerciciosPorCategoria } from "@/utils/exercicios"
import { Clock, Dumbbell, BarChart2, AlertCircle } from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: { categoria: string; id: string }
}): Promise<Metadata> {
  const exercicio = await getExercicio(params.categoria, params.id)

  if (!exercicio) {
    return {
      title: "Exercício não encontrado",
    }
  }

  return {
    title: exercicio.nome,
    description: exercicio.descricao,
    openGraph: {
      images: [
        {
          url: exercicio.imagem,
          width: 800,
          height: 600,
          alt: exercicio.nome,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  const categorias = await getCategorias()
  const params = []

  for (const categoria of categorias) {
    const exercicios = await getExerciciosPorCategoria(categoria.slug)

    for (const exercicio of exercicios) {
      params.push({
        categoria: categoria.slug,
        id: exercicio.id,
      })
    }
  }

  return params
}

export default async function ExercicioPage({
  params,
}: {
  params: { categoria: string; id: string }
}) {
  const exercicio = await getExercicio(params.categoria, params.id)

  if (!exercicio) {
    notFound()
  }

  // Buscar exercícios relacionados (mesma categoria)
  const exerciciosRelacionados = await getExerciciosPorCategoria(params.categoria)
  const exerciciosRecomendados = exerciciosRelacionados.filter((ex) => ex.id !== exercicio.id).slice(0, 3)

  // Variações do exercício (simulado - em um sistema real, isso viria do banco de dados)
  const variacoes = [
    {
      nome: `${exercicio.nome} com Peso`,
      descricao: `Versão mais intensa do ${exercicio.nome} utilizando halteres ou kettlebells para aumentar a resistência.`,
    },
    {
      nome: `${exercicio.nome} Isométrico`,
      descricao: `Mantenha a posição de tensão do ${exercicio.nome} por 30-60 segundos para trabalhar resistência muscular.`,
    },
    {
      nome: `${exercicio.nome} Pliométrico`,
      descricao: `Versão explosiva do ${exercicio.nome} para desenvolver potência e velocidade.`,
    },
  ]

  // Dicas para execução correta (simulado)
  const dicas = [
    "Mantenha a coluna neutra durante todo o movimento",
    "Respire de forma controlada, exalando durante o esforço",
    "Foque na contração muscular e não apenas em completar o movimento",
    "Comece com menos repetições e aumente gradualmente",
    "Priorize a técnica correta em vez de velocidade",
  ]

  // Benefícios específicos (simulado)
  const beneficios = [
    "Aumento da resistência cardiovascular",
    "Fortalecimento dos músculos trabalhados",
    "Melhora da coordenação motora",
    "Queima calórica eficiente",
    "Adaptável para diferentes níveis de condicionamento",
  ]

  return (
    <Layout>
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Coluna principal */}
          <div className="lg:col-span-2">
            <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl">{exercicio.nome}</h1>

            <div className="relative mb-6 overflow-hidden rounded-lg">
              {exercicio.imagem?.toLowerCase().endsWith(".gif") ? (
                <div className="flex h-[360px] w-full items-center justify-center bg-[#fff]">
                  <img
                    src={exercicio.imagem || "/placeholder.svg?height=360&width=360"}
                    alt={exercicio.nome}
                    className="h-[360px] max-w-full object-contain"
                  />
                </div>
              ) : (
                <div className="relative aspect-video">
                  <Image
                    src={exercicio.imagem || "/placeholder.svg"}
                    alt={exercicio.nome}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </div>

            <div className="mb-6">
              <h2 className="mb-2 text-xl font-semibold">Descrição</h2>
              <p className="text-gray-700 dark:text-gray-300">{exercicio.descricao}</p>
            </div>

            <Tabs defaultValue="instrucoes" className="mb-8">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="instrucoes">Instruções</TabsTrigger>
                <TabsTrigger value="dicas">Dicas</TabsTrigger>
                <TabsTrigger value="variacoes">Variações</TabsTrigger>
                <TabsTrigger value="beneficios">Benefícios</TabsTrigger>
              </TabsList>
              <TabsContent value="instrucoes" className="mt-4">
                <div className="rounded-lg border p-4">
                  <h3 className="mb-4 text-lg font-medium">Como Executar</h3>
                  <ol className="ml-6 list-decimal space-y-2 text-gray-700 dark:text-gray-300">
                    {exercicio.instrucoes.map((instrucao, index) => (
                      <li key={index}>{instrucao}</li>
                    ))}
                  </ol>
                </div>
              </TabsContent>
              <TabsContent value="dicas" className="mt-4">
                <div className="rounded-lg border p-4">
                  <h3 className="mb-4 text-lg font-medium">Dicas para Execução Perfeita</h3>
                  <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    {dicas.map((dica, index) => (
                      <li key={index}>{dica}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="variacoes" className="mt-4">
                <div className="rounded-lg border p-4">
                  <h3 className="mb-4 text-lg font-medium">Variações do Exercício</h3>
                  <div className="space-y-4">
                    {variacoes.map((variacao, index) => (
                      <div key={index} className="rounded-md bg-muted p-3">
                        <h4 className="font-medium">{variacao.nome}</h4>
                        <p className="text-sm text-muted-foreground">{variacao.descricao}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="beneficios" className="mt-4">
                <div className="rounded-lg border p-4">
                  <h3 className="mb-4 text-lg font-medium">Benefícios</h3>
                  <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    {beneficios.map((beneficio, index) => (
                      <li key={index}>{beneficio}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mb-8">
              <h2 className="mb-4 text-xl font-semibold">Informações do Exercício</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                <Card>
                  <CardContent className="flex items-center gap-3 p-4">
                    <Dumbbell className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Nível</p>
                      <p className="text-sm text-muted-foreground">
                        {exercicio.nivel === "iniciante"
                          ? "Iniciante"
                          : exercicio.nivel === "intermediario"
                            ? "Intermediário"
                            : "Avançado"}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center gap-3 p-4">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Duração Recomendada</p>
                      <p className="text-sm text-muted-foreground">30-45 segundos</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center gap-3 p-4">
                    <BarChart2 className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Intensidade</p>
                      <p className="text-sm text-muted-foreground">
                        {exercicio.nivel === "iniciante"
                          ? "Baixa"
                          : exercicio.nivel === "intermediario"
                            ? "Média"
                            : "Alta"}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center gap-3 p-4">
                    <AlertCircle className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Equipamento</p>
                      <p className="text-sm text-muted-foreground">
                        {exercicio.equipamento && exercicio.equipamento.length > 0
                          ? exercicio.equipamento.join(", ")
                          : "Nenhum"}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-xl font-semibold">Músculos Trabalhados</h2>
              <div className="flex flex-wrap gap-2">
                {exercicio.musculos.map((musculo) => (
                  <Link href={`/musculos/${musculo.toLowerCase().replace(/\s+/g, "-")}`} key={musculo}>
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary transition-colors hover:bg-primary/20">
                      {musculo}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <Button size="lg">Adicionar ao Treino</Button>
            </div>
          </div>

          {/* Coluna lateral */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Exercícios Relacionados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {exerciciosRecomendados.map((ex) => (
                  <div key={ex.id} className="flex items-start gap-3">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                      <Image src={ex.imagem || "/placeholder.svg"} alt={ex.nome} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium">
                        <Link
                          href={`/exercicios/${ex.categoria}/${ex.id}`}
                          className="hover:text-primary hover:underline"
                        >
                          {ex.nome}
                        </Link>
                      </h3>
                      <p className="line-clamp-2 text-xs text-muted-foreground">{ex.descricao}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dicas de Segurança</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                      1
                    </span>
                    <span>Sempre aqueça adequadamente antes de iniciar o exercício</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                      2
                    </span>
                    <span>Pare imediatamente se sentir dor aguda ou desconforto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                      3
                    </span>
                    <span>Consulte um profissional se tiver condições médicas pré-existentes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                      4
                    </span>
                    <span>Mantenha-se hidratado durante toda a sessão de treino</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Adicione a um Treino</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Adicione este exercício ao seu treino personalizado ou crie um novo treino.
                </p>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" className="w-full">
                    Adicionar ao Treino Atual
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/builder">Criar Novo Treino</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}
