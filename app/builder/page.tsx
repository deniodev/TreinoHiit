"use client"
import { useState } from "react"
import Layout from "@/components/Layout"
import WorkoutBuilder from "@/components/WorkoutBuilder"
import { useToast } from "@/hooks/use-toast"
import { exportPDF } from "@/utils/export"
import { WorkoutProvider, useWorkout } from "@/context/WorkoutContext"

function BuilderContent() {
  const { toast } = useToast()
  const [isExporting, setIsExporting] = useState(false)
  const { exercises } = useWorkout()

  const handleExport = async () => {
    if (exercises.length === 0) {
      toast({
        title: "Treino vazio",
        description: "Adicione exercícios ao seu treino antes de exportar.",
        variant: "destructive",
      })
      return
    }

    setIsExporting(true)
    try {
      await exportPDF(exercises)
      toast({
        title: "Treino exportado com sucesso!",
        description: "O PDF do seu treino foi gerado e baixado.",
      })
    } catch (error) {
      console.error("Erro ao exportar:", error)
      toast({
        title: "Erro ao exportar treino",
        description: "Ocorreu um erro ao gerar o PDF. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <Layout>
      <div className="container px-4 py-12 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Workout Builder</h1>
          <p className="mt-2 max-w-[700px] text-gray-500 dark:text-gray-400">
            Arraste e solte exercícios para criar seu treino HIIT personalizado.
          </p>
        </div>

        <WorkoutBuilder onExport={handleExport} isExporting={isExporting} />
      </div>
    </Layout>
  )
}

export default function BuilderPage() {
  return (
    <WorkoutProvider>
      <BuilderContent />
    </WorkoutProvider>
  )
}
