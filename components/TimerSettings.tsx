"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface TimerSettingsProps {
  settings: {
    workTime: number
    restTime: number
    rounds: number
    prepare: number
    cooldown: number
  }
  onSettingsChange: (settings: any) => void
}

export default function TimerSettings({ settings, onSettingsChange }: TimerSettingsProps) {
  const [localSettings, setLocalSettings] = useState(settings)

  useEffect(() => {
    setLocalSettings(settings)
  }, [settings])

  const handleChange = (key: string, value: number) => {
    const newSettings = { ...localSettings, [key]: value }
    setLocalSettings(newSettings)
    onSettingsChange(newSettings)
  }

  const handleInputChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value) || 0
    handleChange(key, value)
  }

  // Calcular o tempo total do treino
  const calculateTotalTime = () => {
    const { workTime, restTime, rounds, prepare, cooldown } = localSettings
    return prepare + (workTime + restTime) * rounds - restTime + cooldown
  }

  const totalTime = calculateTotalTime()
  const minutes = Math.floor(totalTime / 60)
  const seconds = totalTime % 60

  return (
    <Card>
      <CardHeader>
        <CardTitle>Configurações do Cronômetro</CardTitle>
        <CardDescription>Personalize os intervalos e duração do seu treino HIIT</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="work-time">Tempo de Trabalho</Label>
            <div className="flex items-center gap-2">
              <Input
                id="work-time"
                type="number"
                min="5"
                max="180"
                value={localSettings.workTime}
                onChange={(e) => handleInputChange("workTime", e)}
                className="w-16 text-right"
              />
              <span className="text-sm text-muted-foreground">seg</span>
            </div>
          </div>
          <Slider
            id="work-time-slider"
            min={5}
            max={180}
            step={5}
            value={[localSettings.workTime]}
            onValueChange={(value) => handleChange("workTime", value[0])}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="rest-time">Tempo de Descanso</Label>
            <div className="flex items-center gap-2">
              <Input
                id="rest-time"
                type="number"
                min="5"
                max="120"
                value={localSettings.restTime}
                onChange={(e) => handleInputChange("restTime", e)}
                className="w-16 text-right"
              />
              <span className="text-sm text-muted-foreground">seg</span>
            </div>
          </div>
          <Slider
            id="rest-time-slider"
            min={5}
            max={120}
            step={5}
            value={[localSettings.restTime]}
            onValueChange={(value) => handleChange("restTime", value[0])}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="rounds">Número de Rounds</Label>
            <div className="flex items-center gap-2">
              <Input
                id="rounds"
                type="number"
                min="1"
                max="20"
                value={localSettings.rounds}
                onChange={(e) => handleInputChange("rounds", e)}
                className="w-16 text-right"
              />
              <span className="text-sm text-muted-foreground">rounds</span>
            </div>
          </div>
          <Slider
            id="rounds-slider"
            min={1}
            max={20}
            step={1}
            value={[localSettings.rounds]}
            onValueChange={(value) => handleChange("rounds", value[0])}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="prepare-time">Tempo de Preparação</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="prepare-time"
                  type="number"
                  min="0"
                  max="60"
                  value={localSettings.prepare}
                  onChange={(e) => handleInputChange("prepare", e)}
                  className="w-16 text-right"
                />
                <span className="text-sm text-muted-foreground">seg</span>
              </div>
            </div>
            <Slider
              id="prepare-time-slider"
              min={0}
              max={60}
              step={5}
              value={[localSettings.prepare]}
              onValueChange={(value) => handleChange("prepare", value[0])}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="cooldown-time">Tempo de Recuperação</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="cooldown-time"
                  type="number"
                  min="0"
                  max={120}
                  value={localSettings.cooldown}
                  onChange={(e) => handleInputChange("cooldown", e)}
                  className="w-16 text-right"
                />
                <span className="text-sm text-muted-foreground">seg</span>
              </div>
            </div>
            <Slider
              id="cooldown-time-slider"
              min={0}
              max={120}
              step={5}
              value={[localSettings.cooldown]}
              onValueChange={(value) => handleChange("cooldown", value[0])}
            />
          </div>
        </div>

        <div className="rounded-md bg-muted p-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">Tempo Total do Treino:</span>
            <span className="font-bold tabular-nums">
              {minutes}:{seconds.toString().padStart(2, "0")}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
