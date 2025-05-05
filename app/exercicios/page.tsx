import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Layout from "@/components/Layout"
import { getCategorias } from "@/utils/exercicios"

export const metadata: Metadata = {
  title: "Diretório de Exercícios",
  description: "Explore nossa biblioteca completa de exercícios HIIT categorizados.",
}

export default async function ExerciciosPage() {
  const categorias = await getCategorias()

  return (
    <Layout>
      <div className="container px-4 py-12 md:px-6">
        <h1 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Diretório de Exercícios</h1>
        <p className="mb-8 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Explore nossa biblioteca completa de exercícios HIIT categorizados por tipo e equipamento.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {categorias.map((categoria) => (
            <Card key={categoria.slug} className="overflow-hidden">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={categoria.imagem}
                  alt={categoria.nome}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-0">
                <CardTitle>{categoria.nome}</CardTitle>
                <CardDescription>{categoria.descricao}</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground">{categoria.quantidade} exercícios disponíveis</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/exercicios/${categoria.slug}`}
                  className="w-full rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
                >
                  Ver Exercícios
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}
