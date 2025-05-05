"use client"

import { useState } from "react"
import Image from "next/image"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { GripVertical, X } from "lucide-react"

export default function SortableExerciseItem({ exercise, onRemove, onUpdate }) {
  const [mode, setMode] = useState("time") // "time" ou "reps"

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: exercise.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const handleDurationChange = (value) => {
    onUpdate({ duration: value[0] })
  }

  const handleRepetitionsChange = (e) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value)) {
      onUpdate({ repetitions: value })
    }
  }

  return (
    <Card ref={setNodeRef} style={style} className="relative">
      <div
        {...attributes}
        {...listeners}
        className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing"
      >
        <GripVertical className="h-5 w-5 text-muted-foreground" />
      </div>

      <CardHeader className="flex flex-row items-center justify-between p-4">
        <div className="flex items-center gap-3 pl-6">
          <div className="relative h-10 w-10 overflow-hidden rounded-md">
            <Image
              src={exercise.imagem || "/placeholder.svg?height=100&width=100"}
              alt={exercise.nome}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium">{exercise.nome}</h3>
            <p className="text-xs text-muted-foreground">
              {exercise.categoria.charAt(0).toUpperCase() + exercise.categoria.slice(1)}
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onRemove} className="h-8 w-8">
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>

      <CardContent className="pb-4">
        <Tabs value={mode} onValueChange={setMode} className="w-full">
          <TabsList className="mb-2 grid w-full grid-cols-2">
            <TabsTrigger value="time">Tempo</TabsTrigger>
            <TabsTrigger value="reps">Repetições</TabsTrigger>
          </TabsList>

          <TabsContent value="time">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Duração: {exercise.duration} segundos</span>
              </div>
              <Slider
                defaultValue={[exercise.duration]}
                min={5}
                max={120}
                step={5}
                onValueChange={handleDurationChange}
              />
            </div>
          </TabsContent>

          <TabsContent value="reps">
            <div className="space-y-2">
              <label htmlFor={`reps-${exercise.id}`} className="text-sm">
                Repetições:
              </label>
              <Input
                id={`reps-${exercise.id}`}
                type="number"
                min={1}
                max={100}
                value={exercise.repetitions}
                onChange={handleRepetitionsChange}
              />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
