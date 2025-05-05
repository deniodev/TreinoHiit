import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Layout from "@/components/Layout"
import CardExercicio from "@/components/CardExercicio"
import { getExerciciosPorCategoria, getCategorias } from "@/utils/exercicios"

export async function generateMetadata({
  params,
}: {
  params: { categoria: string }
}): Promise<Metadata> {
  const categorias = await getCategorias()
  const categoria = categorias.find((cat) => cat.slug === params.categoria)

  if (!categoria) {
    return {
      title: "Categoria não encontrada",
    }
  }

  return {
    title: `${categoria.nome}`,
    description: `Explore nossa biblioteca de exercícios HIIT para ${categoria.nome.toLowerCase()}.`,
  }
}

export async function generateStaticParams() {
  const categorias = await getCategorias()

  return categorias.map((categoria) => ({
    categoria: categoria.slug,
  }))
}

export default async function CategoriaPage({
  params,
}: {
  params: { categoria: string }
}) {
  const categorias = await getCategorias()
  const categoria = categorias.find((cat) => cat.slug === params.categoria)

  if (!categoria) {
    notFound()
  }

  const exercicios = await getExerciciosPorCategoria(params.categoria)

  return (
    <Layout>
      <div className="container px-4 py-12 md:px-6">
        <h1 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{categoria.nome}</h1>
        <p className="mb-8 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">{categoria.descricao}</p>

        {exercicios.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {exercicios.map((exercicio) => (
              <CardExercicio
                key={exercicio.id}
                exercicio={exercicio}
                href={`/exercicios/${params.categoria}/${exercicio.id}`}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed p-8 text-center">
            <p className="text-muted-foreground">
              Nenhum exercício encontrado para esta categoria. Estamos trabalhando para adicionar mais conteúdo em
              breve!
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
}
