"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react"
import { cn } from "@/lib/utils"

interface HIITTimerProps {
  settings: {
    workTime: number
    restTime: number
    rounds: number
    prepare: number
    cooldown: number
  }
  onStop: () => void
}

type TimerPhase = "prepare" | "work" | "rest" | "cooldown" | "complete"

export default function HIITTimer({ settings, onStop }: HIITTimerProps) {
  const [currentTime, setCurrentTime] = useState(settings.prepare)
  const [currentRound, setCurrentRound] = useState(0)
  const [phase, setPhase] = useState<TimerPhase>("prepare")
  const [isRunning, setIsRunning] = useState(true)
  const [isMuted, setIsMuted] = useState(false)

  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const beepRef = useRef<HTMLAudioElement | null>(null)
  const longBeepRef = useRef<HTMLAudioElement | null>(null)
  const whistleRef = useRef<HTMLAudioElement | null>(null)

  // Calcular o tempo total do treino
  const totalTime =
    settings.prepare + (settings.workTime + settings.restTime) * settings.rounds - settings.restTime + settings.cooldown

  // Calcular o tempo restante
  const calculateTimeElapsed = () => {
    let elapsed = settings.prepare - currentTime

    if (phase === "work" || phase === "rest" || phase === "cooldown" || phase === "complete") {
      elapsed += settings.prepare
    }

    if (phase === "work") {
      elapsed += (currentRound - 1) * (settings.workTime + settings.restTime)
    } else if (phase === "rest") {
      elapsed += (currentRound - 1) * (settings.workTime + settings.restTime) + settings.workTime
    } else if (phase === "cooldown" || phase === "complete") {
      elapsed += settings.rounds * settings.workTime + (settings.rounds - 1) * settings.restTime
    }

    return elapsed
  }

  const timeElapsed = calculateTimeElapsed()
  const progress = Math.min((timeElapsed / totalTime) * 100, 100)

  // Efeito para inicializar os sons
  useEffect(() => {
    beepRef.current = new Audio("/sounds/beep.mp3")
    longBeepRef.current = new Audio("/sounds/long-beep.mp3")
    whistleRef.current = new Audio("/sounds/whistle.mp3")

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  // Função para tocar sons
  const playSound = (type: "beep" | "longBeep" | "whistle") => {
    if (isMuted) return

    if (type === "beep" && beepRef.current) {
      beepRef.current.currentTime = 0
      beepRef.current.play().catch((e) => console.error("Error playing sound:", e))
    } else if (type === "longBeep" && longBeepRef.current) {
      longBeepRef.current.currentTime = 0
      longBeepRef.current.play().catch((e) => console.error("Error playing sound:", e))
    } else if (type === "whistle" && whistleRef.current) {
      whistleRef.current.currentTime = 0
      whistleRef.current.play().catch((e) => console.error("Error playing sound:", e))
    }
  }

  // Efeito para gerenciar o timer
  useEffect(() => {
    if (!isRunning) return

    // Tocar som no início
    if (phase === "prepare" && currentTime === settings.prepare) {
      playSound("beep")
    }

    timerRef.current = setInterval(() => {
      setCurrentTime((prevTime) => {
        if (prevTime <= 1) {
          // Transição para a próxima fase
          if (phase === "prepare") {
            playSound("longBeep")
            setPhase("work")
            setCurrentRound(1)
            return settings.workTime
          } else if (phase === "work") {
            if (currentRound < settings.rounds) {
              playSound("beep")
              setPhase("rest")
              return settings.restTime
            } else {
              playSound("beep")
              setPhase("cooldown")
              return settings.cooldown
            }
          } else if (phase === "rest") {
            playSound("longBeep")
            setPhase("work")
            setCurrentRound((prevRound) => prevRound + 1)
            return settings.workTime
          } else if (phase === "cooldown") {
            playSound("whistle")
            setPhase("complete")
            setIsRunning(false)
            return 0
          }
          return prevTime
        }

        // Alertas sonoros para contagem regressiva
        if (prevTime <= 4 && prevTime > 1) {
          playSound("beep")
        }

        return prevTime - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isRunning, phase, currentRound, settings])

  const togglePause = () => {
    setIsRunning((prev) => !prev)
  }

  const resetTimer = () => {
    setCurrentTime(settings.prepare)
    setCurrentRound(0)
    setPhase("prepare")
    setIsRunning(true)
  }

  const toggleMute = () => {
    setIsMuted((prev) => !prev)
  }

  // Formatar o tempo para exibição (MM:SS)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Determinar a cor com base na fase atual
  const getPhaseColor = () => {
    switch (phase) {
      case "prepare":
        return "bg-yellow-500"
      case "work":
        return "bg-red-500"
      case "rest":
        return "bg-green-500"
      case "cooldown":
        return "bg-blue-500"
      case "complete":
        return "bg-purple-500"
      default:
        return "bg-primary"
    }
  }

  // Determinar o texto da fase atual
  const getPhaseText = () => {
    switch (phase) {
      case "prepare":
        return "PREPARAR"
      case "work":
        return "TRABALHO"
      case "rest":
        return "DESCANSO"
      case "cooldown":
        return "RECUPERAÇÃO"
      case "complete":
        return "CONCLUÍDO"
      default:
        return ""
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <Card className="overflow-hidden">
        <div className={cn("flex items-center justify-center py-6 text-white transition-colors", getPhaseColor())}>
          <h2 className="text-3xl font-bold">{getPhaseText()}</h2>
        </div>

        <CardContent className="p-6">
          <div className="mb-8 flex flex-col items-center">
            <div className="mb-2 text-7xl font-bold tabular-nums">{formatTime(currentTime)}</div>
            <div className="flex items-center gap-2 text-lg">
              <span className="font-medium">Round:</span>
              <span className="tabular-nums">
                {phase === "prepare" ? "0" : phase === "complete" ? settings.rounds : currentRound} / {settings.rounds}
              </span>
            </div>
          </div>

          <div className="mb-8">
            <div className="mb-2 flex justify-between text-sm">
              <span>Progresso</span>
              <span className="tabular-nums">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Button variant={isRunning ? "outline" : "default"} onClick={togglePause} className="min-w-[120px]">
              {isRunning ? (
                <>
                  <Pause className="mr-2 h-4 w-4" /> Pausar
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" /> Continuar
                </>
              )}
            </Button>

            <Button variant="outline" onClick={resetTimer} className="min-w-[120px]">
              <RotateCcw className="mr-2 h-4 w-4" /> Reiniciar
            </Button>

            <Button variant="outline" onClick={toggleMute} className="min-w-[120px]">
              {isMuted ? (
                <>
                  <VolumeX className="mr-2 h-4 w-4" /> Som Desligado
                </>
              ) : (
                <>
                  <Volume2 className="mr-2 h-4 w-4" /> Som Ligado
                </>
              )}
            </Button>

            <Button variant="outline" onClick={onStop} className="min-w-[120px]">
              Voltar às Configurações
            </Button>
          </div>

          {phase === "work" && (
            <div className="mt-6 rounded-md bg-red-100 p-4 text-center dark:bg-red-900/20">
              <p className="font-medium text-red-800 dark:text-red-300">
                Dê o seu máximo! Mantenha a intensidade alta!
              </p>
            </div>
          )}

          {phase === "rest" && (
            <div className="mt-6 rounded-md bg-green-100 p-4 text-center dark:bg-green-900/20">
              <p className="font-medium text-green-800 dark:text-green-300">
                Respire fundo e recupere-se para o próximo round!
              </p>
            </div>
          )}

          {phase === "complete" && (
            <div className="mt-6 rounded-md bg-purple-100 p-4 text-center dark:bg-purple-900/20">
              <p className="font-medium text-purple-800 dark:text-purple-300">
                Parabéns! Você completou seu treino HIIT!
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
