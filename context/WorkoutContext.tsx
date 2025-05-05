"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Exercicio } from "@/utils/exercicios"

interface WorkoutExercise extends Exercicio {
  duration?: number
  repetitions?: number
}

interface WorkoutContextType {
  exercises: WorkoutExercise[]
  addExercise: (exercise: Exercicio) => void
  removeExercise: (id: string) => void
  updateExercise: (id: string, updates: Partial<WorkoutExercise>) => void
  moveExercise: (fromIndex: number, toIndex: number) => void
  clearWorkout: () => void
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined)

export function WorkoutProvider({ children }: { children: React.ReactNode }) {
  const [exercises, setExercises] = useState<WorkoutExercise[]>([])

  // Carregar treino salvo do localStorage (apenas no cliente)
  useEffect(() => {
    const savedWorkout = localStorage.getItem("workout")
    if (savedWorkout) {
      try {
        setExercises(JSON.parse(savedWorkout))
      } catch (error) {
        console.error("Erro ao carregar treino salvo:", error)
      }
    }
  }, [])

  // Salvar treino no localStorage quando mudar
  useEffect(() => {
    localStorage.setItem("workout", JSON.stringify(exercises))
  }, [exercises])

  const addExercise = (exercise: Exercicio) => {
    const workoutExercise: WorkoutExercise = {
      ...exercise,
      duration: 30, // Duração padrão em segundos
      repetitions: 10, // Repetições padrão
    }
    setExercises((prev) => [...prev, workoutExercise])
  }

  const removeExercise = (id: string) => {
    setExercises((prev) => prev.filter((ex) => ex.id !== id))
  }

  const updateExercise = (id: string, updates: Partial<WorkoutExercise>) => {
    setExercises((prev) => prev.map((ex) => (ex.id === id ? { ...ex, ...updates } : ex)))
  }

  const moveExercise = (fromIndex: number, toIndex: number) => {
    setExercises((prev) => {
      const result = [...prev]
      const [removed] = result.splice(fromIndex, 1)
      result.splice(toIndex, 0, removed)
      return result
    })
  }

  const clearWorkout = () => {
    setExercises([])
  }

  return (
    <WorkoutContext.Provider
      value={{
        exercises,
        addExercise,
        removeExercise,
        updateExercise,
        moveExercise,
        clearWorkout,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  )
}

export function useWorkout() {
  const context = useContext(WorkoutContext)
  if (context === undefined) {
    throw new Error("useWorkout must be used within a WorkoutProvider")
  }
  return context
}
