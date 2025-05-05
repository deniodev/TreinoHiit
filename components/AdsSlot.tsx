import { cn } from "@/lib/utils"

interface AdsSlotProps {
  size: "300x250" | "300x600" | "728x90" | "320x50"
  className?: string
}

export default function AdsSlot({ size, className }: AdsSlotProps) {
  // Get dimensions from size
  const [width, height] = size.split("x").map(Number)

  return (
    <div
      className={cn(
        "flex items-center justify-center border border-dashed border-gray-300 bg-gray-50 text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400",
        className,
      )}
      style={{ width, height }}
    >
      Ad Slot ({size})
    </div>
  )
}
