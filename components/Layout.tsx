import type React from "react"
import { cn } from "@/lib/utils"

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export default function Layout({ children, className }: LayoutProps) {
  return <div className={cn("w-full", className)}>{children}</div>
}
