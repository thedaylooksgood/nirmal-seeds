import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost" | "link" | "secondary"
    size?: "default" | "sm" | "lg" | "icon"
}

const buttonVariants = {
    base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 disabled:pointer-events-none disabled:opacity-50",
    variant: {
        default: "bg-green-700 text-white hover:bg-green-800 shadow-sm",
        secondary: "bg-yellow-500 text-green-900 hover:bg-yellow-600 shadow-sm font-bold",
        outline: "border border-green-700 text-green-700 bg-transparent hover:bg-green-50",
        ghost: "hover:bg-green-50 hover:text-green-800 text-green-700",
        link: "text-green-700 underline-offset-4 hover:underline",
    },
    size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
    },
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        return (
            <button
                className={cn(
                    buttonVariants.base,
                    buttonVariants.variant[variant],
                    buttonVariants.size[size],
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
