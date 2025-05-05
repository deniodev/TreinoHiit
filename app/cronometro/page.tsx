"use client"

import { useState, useEffect } from "react"
import Layout from "@/components/Layout"
import HIITTimer from "@/components/HIITTimer"
import TimerSettings from "@/components/TimerSettings"
import { useWorkout } from "@/context/WorkoutContext"
import { WorkoutProvider } from "@/context/WorkoutContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Clock, Dumbbell, RotateCcw } from "lucide-react"
import Link from "next/link"

function TimerContent() {
  const { exercises } = useWorkout()
  const [activeTab, setActiveTab] = useState("manual")

  const [settings, setSettings] = useState({
    workTime: 30,
    restTime: 10,
    rounds: 8,
    prepare: 10,
    cooldown: 30,
  })

  const [isTimerActive, setIsTimerActive] = useState(false)
  const [hasWorkoutExercises, setHasWorkoutExercises] = useState(false)

  useEffect(() => {
    setHasWorkoutExercises(exercises.length > 0)
  }, [exercises])

  const handleStartTimer = () => {
    setIsTimerActive(true)
  }

  const handleStopTimer = () => {
    setIsTimerActive(false)
  }

  const handleSettingsChange = (newSettings) => {
    setSettings(newSettings)
  }

  const loadWorkoutSettings = () => {
    if (exercises.length > 0) {
      // Calcular a média de duração dos exercícios ou usar um valor padrão
      const avgDuration = exercises.reduce((sum, ex) => sum + (ex.duration || 30), 0) / exercises.length

      setSettings({
        ...settings,
        workTime: Math.round(avgDuration),
        rounds: exercises.length,
      })

      setActiveTab("manual")
      // Não iniciamos o timer automaticamente para dar chance ao usuário de revisar as configurações
    }
  }

  return (
    <Layout>
      <div className="container px-4 py-12 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cronômetro HIIT</h1>
          <p className="mt-2 max-w-[700px] text-gray-500 dark:text-gray-400">
            Configure e acompanhe seus treinos intervalados de alta intensidade com nosso cronômetro gratuito.
          </p>
        </div>

        {!isTimerActive ? (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-4 grid w-full grid-cols-2">
                  <TabsTrigger value="manual">Configuração Manual</TabsTrigger>
                  <TabsTrigger value="workout" disabled={!hasWorkoutExercises}>
                    Usar Meu Treino
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="manual" className="space-y-4">
                  <TimerSettings settings={settings} onSettingsChange={handleSettingsChange} />

                  <div className="flex justify-end">
                    <Button onClick={handleStartTimer} className="mt-4">
                      Iniciar Cronômetro <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="workout" className="space-y-4">
                  {hasWorkoutExercises ? (
                    <div className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Seu Treino</CardTitle>
                          <CardDescription>Você tem {exercises.length} exercícios no seu treino atual</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {exercises.slice(0, 5).map((exercise, index) => (
                              <li key={exercise.id} className="flex items-center gap-2">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                                  {index + 1}
                                </span>
                                <span>{exercise.nome}</span>
                                <span className="ml-auto text-sm text-muted-foreground">
                                  {exercise.duration ? `${exercise.duration}s` : `${exercise.repetitions} reps`}
                                </span>
                              </li>
                            ))}
                            {exercises.length > 5 && (
                              <li className="text-center text-sm text-muted-foreground">
                                + {exercises.length - 5} mais exercícios
                              </li>
                            )}
                          </ul>
                        </CardContent>
                      </Card>

                      <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={loadWorkoutSettings}>
                          Carregar Configurações
                        </Button>
                        <Button onClick={handleStartTimer}>
                          Iniciar Cronômetro <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-lg border border-dashed p-8 text-center">
                      <Dumbbell className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                      <h3 className="mb-2 text-lg font-medium">Nenhum treino encontrado</h3>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Você ainda não criou nenhum treino. Use nosso builder para criar um treino personalizado.
                      </p>
                      <Button asChild>
                        <Link href="/builder">Criar Treino</Link>
                      </Button>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Como Usar o Cronômetro HIIT</CardTitle>
                  <CardDescription>Guia rápido para aproveitar ao máximo seu treino</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <Clock className="h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="font-medium">Configure seu treino</h3>
                      <p className="text-sm text-muted-foreground">
                        Defina o tempo de trabalho, descanso, número de rounds e tempos de preparação e recuperação.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Dumbbell className="h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="font-medium">Importe seu treino personalizado</h3>
                      <p className="text-sm text-muted-foreground">
                        Use a aba "Usar Meu Treino" para carregar exercícios que você criou no Workout Builder.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <RotateCcw className="h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="font-medium">Controle seu treino</h3>
                      <p className="text-sm text-muted-foreground">
                        Pause, retome ou reinicie o cronômetro a qualquer momento. Alertas sonoros indicarão as
                        transições.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-md bg-primary/10 p-3 text-sm">
                    <p>
                      <strong>Dica:</strong> Ative o som do seu dispositivo para ouvir os alertas de transição entre
                      intervalos.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <HIITTimer settings={settings} onStop={handleStopTimer} />
        )}
      </div>
    </Layout>
  )
}

export default function CronometroPage() {
  return (
    <WorkoutProvider>
      <TimerContent />
    </WorkoutProvider>
  )
}
