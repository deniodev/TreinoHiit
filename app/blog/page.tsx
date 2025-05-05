import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Layout from "@/components/Layout"
import { getPosts } from "@/utils/blog"

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos e dicas sobre treinos HIIT e condicionamento físico.",
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <Layout>
      <div className="container px-4 py-12 md:px-6">
        <h1 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h1>
        <p className="mb-8 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Artigos e dicas sobre treinos HIIT e condicionamento físico.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
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
                <Link
                  href={`/blog/${post.slug}`}
                  className="w-full rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
                >
                  Ler Artigo
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}
