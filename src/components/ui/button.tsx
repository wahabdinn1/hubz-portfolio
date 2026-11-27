import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-none border border-ink bg-clip-padding text-sm font-medium whitespace-nowrap transition-colors outline-none select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-ink text-paper border-ink hover:bg-ink-2",
        outline:
          "bg-transparent text-ink border-ink hover:bg-paper-2",
        secondary:
          "bg-paper-2 text-ink border-rule-2 hover:bg-paper-3",
        ghost:
          "border-transparent bg-transparent text-ink hover:bg-paper-2",
        link: "border-transparent bg-transparent text-ink underline decoration-signal underline-offset-4 hover:decoration-2 hover:text-signal",
      },
      size: {
        default: "min-h-12 gap-2 px-6 py-2.5",
        sm: "min-h-10 gap-1.5 px-4 py-2 text-sm",
        xs: "min-h-8 gap-1 px-3 py-1 text-xs",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
