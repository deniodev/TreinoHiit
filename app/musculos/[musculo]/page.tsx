import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Layout from "@/components/Layout"
import CardExercicio from "@/components/CardExercicio"
import { getExerciciosPorMusculo } from "@/utils/exercicios"

export async function generateMetadata({
  params,
}: {
  params: { musculo: string }
}): Promise<Metadata> {
  // Converter o slug do músculo para um formato legível
  const musculoFormatado = params.musculo
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return {
    title: `Exercícios para ${musculoFormatado}`,
    description: `Explore nossa biblioteca de exercícios HIIT para trabalhar ${musculoFormatado}.`,
  }
}

export default async function MusculoPage({
  params,
}: {
  params: { musculo: string }
}) {
  // Converter o slug do músculo para um formato legível
  const musculoFormatado = params.musculo
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // Buscar exercícios que trabalham este músculo
  const exercicios = await getExerciciosPorMusculo(musculoFormatado)

  if (exercicios.length === 0) {
    notFound()
  }

  return (
    <Layout>
      <div className="container px-4 py-12 md:px-6">
        <h1 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Exercícios para {musculoFormatado}
        </h1>
        <p className="mb-8 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Explore nossa seleção de exercícios que trabalham especificamente o(s) músculo(s) {musculoFormatado}. Estes
          exercícios são ideais para incluir em seu treino HIIT quando quiser focar nesta área.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exercicios.map((exercicio) => (
            <CardExercicio
              key={exercicio.id}
              exercicio={exercicio}
              href={`/exercicios/${exercicio.categoria}/${exercicio.id}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
