import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label"
}

export function Text({ className, as: Component = "p", ...props }: TextProps) {
    const baseStyles = {
        h1: "text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-green-900 uppercase",
        h2: "text-3xl lg:text-4xl font-semibold tracking-wide transition-colors text-green-800 uppercase",
        h3: "text-2xl font-medium tracking-tight text-gray-900",
        h4: "text-xl font-medium tracking-tight text-gray-800",
        h5: "text-lg font-medium tracking-tight text-gray-800",
        h6: "text-base font-medium tracking-tight text-gray-800",
        p: "leading-relaxed text-gray-600",
        span: "",
        label: "text-sm font-medium leading-none",
    }

    return (
        <Component
            className={cn(baseStyles[Component as keyof typeof baseStyles], className)}
            {...props}
        />
    )
}
