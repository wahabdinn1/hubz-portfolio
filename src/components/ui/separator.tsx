"use client"

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator"
import { cn } from "cn"

function Separator({
  className,
  orientation = "horizontal",
  variant = "hairline",
  ...props
}: SeparatorPrimitive.Props & { variant?: "hairline" | "double" }) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(
        variant === "double"
          ? "rule-double w-full shrink-0 bg-transparent"
          : "shrink-0 bg-rule data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
