"use client"

import { useState } from "react"
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { restrictToVerticalAxis, restrictToWindowEdges } from "@dnd-kit/modifiers"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useWorkout } from "@/context/WorkoutContext"
import { getTodosExercicios } from "@/utils/exercicios"
import CardExercicio from "@/components/CardExercicio"
import SortableExerciseItem from "@/components/SortableExerciseItem"
import { Search } from "lucide-react"

interface WorkoutBuilderProps {
  onExport: () => Promise<void>
  isExporting: boolean
}

export default function WorkoutBuilder({ onExport, isExporting }: WorkoutBuilderProps) {
  const { exercises, addExercise, removeExercise, updateExercise, moveExercise, clearWorkout } = useWorkout()
  const [searchTerm, setSearchTerm] = useState("")
  const [availableExercises, setAvailableExercises] = useState([])
  const [loading, setLoading] = useState(true)

  // Configuração do DnD
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  // Carregar exercícios disponíveis
  useState(() => {
    const loadExercises = async () => {
      try {
        const exercises = await getTodosExercicios()
        setAvailableExercises(exercises)
      } catch (error) {
        console.error("Erro ao carregar exercícios:", error)
      } finally {
        setLoading(false)
      }
    }

    loadExercises()
  })

  // Filtrar exercícios com base na pesquisa
  const filteredExercises = availableExercises.filter((exercise) =>
    exercise.nome.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Manipular eventos de DnD
  const handleDragEnd = (event) => {
    const { active, over } = event

    if (active.id !== over.id) {
      const oldIndex = exercises.findIndex((ex) => ex.id === active.id)
      const newIndex = exercises.findIndex((ex) => ex.id === over.id)
      moveExercise(oldIndex, newIndex)
    }
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* Seção "Seu Treino" - Aparece primeiro em dispositivos móveis */}
      <div className="order-1 lg:order-2">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Seu Treino</h2>
          <div className="flex gap-2">
            {exercises.length > 0 && (
              <Button variant="outline" onClick={clearWorkout} size="sm">
                Limpar
              </Button>
            )}
            <Button onClick={onExport} disabled={isExporting} size="sm">
              {isExporting ? "Exportando..." : "Exportar PDF"}
            </Button>
          </div>
        </div>

        {exercises.length === 0 ? (
          <div className="rounded-lg border border-dashed p-8 text-center">
            <p className="text-muted-foreground">Seu treino está vazio. Adicione exercícios da lista abaixo.</p>
          </div>
        ) : (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
          >
            <SortableContext items={exercises.map((ex) => ex.id)} strategy={verticalListSortingStrategy}>
              <div className="space-y-4">
                {exercises.map((exercise) => (
                  <SortableExerciseItem
                    key={exercise.id}
                    exercise={exercise}
                    onRemove={() => removeExercise(exercise.id)}
                    onUpdate={(updates) => updateExercise(exercise.id, updates)}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        )}
      </div>

      {/* Seção "Exercícios Disponíveis" - Aparece segundo em dispositivos móveis */}
      <div className="order-2 lg:order-1">
        <h2 className="mb-4 text-xl font-semibold">Exercícios HIIT Disponíveis</h2>

        <div className="relative mb-4">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Pesquisar exercícios..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Tabs defaultValue="todos">
          <TabsList className="mb-4 flex">
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="sem-equipamento">Em Casa</TabsTrigger>
            <TabsTrigger value="corrida">De Corrida</TabsTrigger>
          </TabsList>

          <TabsList className="mb-4 flex">            
            <TabsTrigger value="academia">Na Academia</TabsTrigger>
            <TabsTrigger value="acessorios-simples">Com Accesorios</TabsTrigger>
          </TabsList>

          <TabsContent value="todos" className="mt-0">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {loading ? (
                <p>Carregando exercícios...</p>
              ) : filteredExercises.length > 0 ? (
                filteredExercises.map((exercise) => (
                  <CardExercicio
                    key={exercise.id}
                    exercicio={exercise}
                    href={`/exercicios/${exercise.categoria}/${exercise.id}`}
                    onAdd={() => addExercise(exercise)}
                    showAddButton
                  />
                ))
              ) : (
                <p>Nenhum exercício encontrado.</p>
              )}
            </div>
          </TabsContent>

          <TabsContent value="sem-equipamento" className="mt-0">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {loading ? (
                <p>Carregando exercícios...</p>
              ) : (
                filteredExercises
                  .filter((ex) => ex.categoria === "sem-equipamento")
                  .map((exercise) => (
                    <CardExercicio
                      key={exercise.id}
                      exercicio={exercise}
                      href={`/exercicios/${exercise.categoria}/${exercise.id}`}
                      onAdd={() => addExercise(exercise)}
                      showAddButton
                    />
                  ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="corrida" className="mt-0">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {loading ? (
                <p>Carregando exercícios...</p>
              ) : (
                filteredExercises
                  .filter((ex) => ex.categoria === "corrida")
                  .map((exercise) => (
                    <CardExercicio
                      key={exercise.id}
                      exercicio={exercise}
                      href={`/exercicios/${exercise.categoria}/${exercise.id}`}
                      onAdd={() => addExercise(exercise)}
                      showAddButton
                    />
                  ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="academia" className="mt-0">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {loading ? (
                <p>Carregando exercícios...</p>
              ) : (
                filteredExercises
                  .filter((ex) => ex.categoria === "academia")
                  .map((exercise) => (
                    <CardExercicio
                      key={exercise.id}
                      exercicio={exercise}
                      href={`/exercicios/${exercise.categoria}/${exercise.id}`}
                      onAdd={() => addExercise(exercise)}
                      showAddButton
                    />
                  ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="acessorios-simples" className="mt-0">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {loading ? (
                <p>Carregando exercícios...</p>
              ) : (
                filteredExercises
                  .filter((ex) => ex.categoria === "acessorios-simples")
                  .map((exercise) => (
                    <CardExercicio
                      key={exercise.id}
                      exercicio={exercise}
                      href={`/exercicios/${exercise.categoria}/${exercise.id}`}
                      onAdd={() => addExercise(exercise)}
                      showAddButton
                    />
                  ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
