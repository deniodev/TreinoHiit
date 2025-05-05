"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Exercicio } from "@/utils/exercicios"

interface CardExercicioProps {
  exercicio: Exercicio
  href: string
  onAdd?: () => void
  showAddButton?: boolean
}

export default function CardExercicio({ exercicio, href, onAdd, showAddButton = false }: CardExercicioProps) {
  // Determinar se a imagem é um GIF
  const isGif = exercicio.imagem?.toLowerCase().endsWith(".gif")

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square w-full overflow-hidden">
        {isGif ? (
          // Para GIFs, usamos um elemento img para garantir animação
          <div className="flex h-full w-full items-center justify-center bg-[#fff]">
            <img
              src={exercicio.imagem || "/placeholder.svg?height=360&width=360"}
              alt={exercicio.nome}
              className="h-[360px] w-[360px] object-contain"
            />
          </div>
        ) : (
          // Para imagens estáticas, continuamos usando o componente Image do Next.js
          <Image
            src={exercicio.imagem || "/placeholder.svg?height=360&width=360"}
            alt={exercicio.nome}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        )}
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{exercicio.nome}</CardTitle>
        <CardDescription>
          Nível:{" "}
          {exercicio.nivel === "iniciante"
            ? "Iniciante"
            : exercicio.nivel === "intermediario"
              ? "Intermediário"
              : "Avançado"}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="line-clamp-2 text-sm text-muted-foreground">{exercicio.descricao}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" asChild className="flex-1">
          <Link href={href}>Ver Detalhes</Link>
        </Button>
        {showAddButton && (
          <Button onClick={onAdd} className="flex-1">
            Adicionar
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
