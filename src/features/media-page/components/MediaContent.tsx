"use client"

import * as React from "react"
import { Text } from "@/components/ui/Text"
import { awardsContentData } from "@/features/media-page/data"

const awards = awardsContentData.awards

export function MediaContent() {
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [isAnimating, setIsAnimating] = React.useState(false)
    const totalSlides = awards.length

    const goTo = React.useCallback(
        (newIndex: number) => {
            if (isAnimating) return
            setIsAnimating(true)
            requestAnimationFrame(() => {
                setActiveIndex(newIndex)
            })
            setTimeout(() => setIsAnimating(false), 600)
        },
        [isAnimating]
    )

    const goPrev = React.useCallback(() => {
        const newIndex = (activeIndex - 1 + totalSlides) % totalSlides
        goTo(newIndex)
    }, [activeIndex, totalSlides, goTo])

    const goNext = React.useCallback(() => {
        const newIndex = (activeIndex + 1) % totalSlides
        goTo(newIndex)
    }, [activeIndex, totalSlides, goTo])

    // Keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") goPrev()
            if (e.key === "ArrowRight") goNext()
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [goPrev, goNext])

    // Auto-play
    React.useEffect(() => {
        const timer = setInterval(() => {
            goNext()
        }, 5000)
        return () => clearInterval(timer)
    }, [goNext])

    // Touch/swipe support
    const touchStart = React.useRef<number | null>(null)
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStart.current = e.touches[0].clientX
    }
    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStart.current === null) return
        const diff = touchStart.current - e.changedTouches[0].clientX
        if (Math.abs(diff) > 50) {
            if (diff > 0) goNext()
            else goPrev()
        }
        touchStart.current = null
    }

    // Calculate card position relative to active
    const getOffset = (index: number) => {
        let diff = index - activeIndex
        if (diff > Math.floor(totalSlides / 2)) diff -= totalSlides
        if (diff < -Math.floor(totalSlides / 2)) diff += totalSlides
        return diff
    }

    return (
        <section
            className="w-full py-14 sm:py-16 md:py-20 overflow-hidden"
            style={{
                background:
                    "linear-gradient(to bottom, #fee0a0 0%, #fef0c9 30%, #ffffff 100%)",
            }}
        >
            <div className="section-container">
                {/* Title */}
                <div className="flex justify-center mb-10 md:mb-14">
                    <div className="inline-block border-b-[2px] border-[#c9a84c] pb-3 px-2 md:px-4">
                        <Text
                            as="h1"
                            className="text-[28px] sm:text-[36px] md:text-[46px] lg:text-[54px] tracking-wide leading-tight text-center"
                        >
                            <span className="font-light text-nirmal-green tracking-wider">
                                {awardsContentData.title}{" "}
                            </span>
                            <span className="font-semibold text-nirmal-green tracking-wide">
                                {awardsContentData.titleHighlight}
                            </span>
                        </Text>
                    </div>
                </div>

                {/* Carousel Container */}
                <div
                    className="relative w-full max-w-5xl mx-auto px-12 sm:px-16"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Cards Track */}
                    <div
                        className="relative flex items-center justify-center"
                        style={{
                            height: "520px",
                            perspective: "1200px",
                        }}
                    >
                        {awards.map((award, index) => {
                            const offset = getOffset(index)
                            const isActive = offset === 0
                            const absOffset = Math.abs(offset)
                            const isVisible = absOffset <= 2

                            if (!isVisible) return null

                            // --- Responsive calculations ---
                            // On mobile, move cards less laterally
                            const translateXDesktop = offset * 260
                            const translateZ = isActive
                                ? 0
                                : -120 - absOffset * 50
                            const scale = isActive
                                ? 1
                                : Math.max(0.7, 0.82 - absOffset * 0.06)
                            const opacity = isActive
                                ? 1
                                : Math.max(0.3, 0.65 - absOffset * 0.15)
                            const blur = isActive
                                ? 0
                                : 3 + absOffset * 2
                            const zIndex = 10 - absOffset
                            const rotateY = offset * -4

                            return (
                                <div
                                    key={index}
                                    className="absolute w-[280px] sm:w-[320px] md:w-[360px]"
                                    style={{
                                        transform: `translateX(${translateXDesktop}px) translateZ(${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`,
                                        opacity,
                                        filter: `blur(${blur}px)`,
                                        zIndex,
                                        transition:
                                            "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                                        pointerEvents: isActive
                                            ? "auto"
                                            : "none",
                                    }}
                                    onClick={() => {
                                        if (!isActive) goTo(index)
                                    }}
                                >
                                    <div
                                        className={`
                                            bg-white rounded-2xl overflow-hidden
                                            transition-shadow duration-500
                                            ${isActive ? "shadow-2xl" : "shadow-md"}
                                        `}
                                        style={{
                                            boxShadow: isActive
                                                ? "0 25px 60px rgba(0,0,0,0.18), 0 8px 24px rgba(60,142,0,0.12)"
                                                : "0 6px 20px rgba(0,0,0,0.08)",
                                        }}
                                    >
                                        {/* Image */}
                                        <div className="w-full h-[200px] sm:h-[220px] md:h-[250px] overflow-hidden bg-gray-50 relative">
                                            <img
                                                src={award.image}
                                                alt={award.title}
                                                className={`
                                                    w-full h-full object-cover
                                                    transition-transform duration-700 ease-out
                                                    ${isActive ? "scale-100" : "scale-110"}
                                                `}
                                            />
                                            {/* Subtle gradient overlay at bottom of image */}
                                            <div
                                                className="absolute inset-x-0 bottom-0 h-16"
                                                style={{
                                                    background:
                                                        "linear-gradient(to top, rgba(255,255,255,0.6) 0%, transparent 100%)",
                                                }}
                                            />
                                        </div>

                                        {/* Text Content */}
                                        <div className="p-5 sm:p-6">
                                            {/* Award badge */}
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-1 h-6 rounded-full bg-nirmal-green" />
                                                <span className="text-[11px] sm:text-[12px] uppercase tracking-widest font-semibold text-nirmal-green/70">
                                                    Award
                                                </span>
                                            </div>
                                            <h3 className="text-[15px] sm:text-[17px] font-bold text-[#1a1a1a] mb-2 leading-snug">
                                                {award.title}
                                            </h3>
                                            {award.description && (
                                                <p className="text-[12px] sm:text-[13px] leading-[1.65] text-gray-500 font-medium line-clamp-3">
                                                    {award.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goPrev}
                        disabled={isAnimating}
                        aria-label="Previous award"
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-30
                            w-10 h-10 sm:w-12 sm:h-12 rounded-full
                            bg-white/95 backdrop-blur-md
                            border border-gray-200/60
                            shadow-lg hover:shadow-xl
                            flex items-center justify-center
                            text-nirmal-green
                            transition-all duration-300
                            hover:bg-nirmal-green hover:text-white hover:border-nirmal-green hover:scale-110
                            disabled:opacity-40 disabled:cursor-not-allowed
                            active:scale-90
                            cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 sm:w-5 sm:h-5"
                        >
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>
                    <button
                        onClick={goNext}
                        disabled={isAnimating}
                        aria-label="Next award"
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-30
                            w-10 h-10 sm:w-12 sm:h-12 rounded-full
                            bg-white/95 backdrop-blur-md
                            border border-gray-200/60
                            shadow-lg hover:shadow-xl
                            flex items-center justify-center
                            text-nirmal-green
                            transition-all duration-300
                            hover:bg-nirmal-green hover:text-white hover:border-nirmal-green hover:scale-110
                            disabled:opacity-40 disabled:cursor-not-allowed
                            active:scale-90
                            cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 sm:w-5 sm:h-5"
                        >
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center items-center gap-2.5 mt-6">
                    {awards.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goTo(index)}
                            aria-label={`Go to award ${index + 1}`}
                            className={`
                                rounded-full transition-all duration-500 ease-out cursor-pointer border-0 outline-none
                                ${
                                    index === activeIndex
                                        ? "w-8 h-3 bg-nirmal-green shadow-md scale-110"
                                        : "w-3 h-3 bg-gray-300 hover:bg-nirmal-green/40"
                                }
                            `}
                        />
                    ))}
                </div>

                {/* Slide counter */}
                <div className="text-center mt-4">
                    <span className="text-[14px] sm:text-[15px] font-bold text-nirmal-green tabular-nums">
                        {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[14px] sm:text-[15px] text-gray-300 mx-2 font-light">
                        /
                    </span>
                    <span className="text-[14px] sm:text-[15px] text-gray-400 tabular-nums">
                        {String(totalSlides).padStart(2, "0")}
                    </span>
                </div>
            </div>
        </section>
    )
}
