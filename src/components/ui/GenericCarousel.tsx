"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CarouselProps {
    children: React.ReactNode
    className?: string
    options?: any // any for embla options simply
    navigationClassName?: string
    slideClassName?: string
}

export function GenericCarousel({ children, className, options, navigationClassName, slideClassName }: CarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true)

    const scrollPrev = React.useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi]
    )
    const scrollNext = React.useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi]
    )

    const onSelect = React.useCallback((emblaApi: any) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    React.useEffect(() => {
        if (!emblaApi) return
        onSelect(emblaApi)
        emblaApi.on("reInit", onSelect).on("select", onSelect)
    }, [emblaApi, onSelect])

    return (
        <div className={cn("relative group w-full", className)}>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-4">
                    {React.Children.map(children, (child) => (
                        <div className={cn("flex-[0_0_100%] min-w-0 pl-4", slideClassName)}>{child}</div>
                    ))}
                </div>
            </div>

            <button
                onClick={scrollPrev}
                disabled={prevBtnDisabled}
                className={cn(
                    "absolute left-4 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white transition-all disabled:opacity-0 opacity-0 group-hover:opacity-100",
                    !prevBtnDisabled && "hover:bg-black/90 cursor-pointer",
                    navigationClassName
                )}
            >
                <ChevronLeft className="h-5 w-5" />
            </button>

            <button
                onClick={scrollNext}
                disabled={nextBtnDisabled}
                className={cn(
                    "absolute right-4 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white transition-all disabled:opacity-0 opacity-0 group-hover:opacity-100",
                    !nextBtnDisabled && "hover:bg-black/90 cursor-pointer",
                    navigationClassName
                )}
            >
                <ChevronRight className="h-5 w-5" />
            </button>
        </div>
    )
}
