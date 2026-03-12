"use client"

import * as React from "react"
import { Text } from "@/components/ui/Text"
import { networkData } from "../data"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"

const IconMap: Record<string, React.ReactNode> = {
    users: <img src="/images/home-page/distribution-section-1.png" alt="Users" className="h-[70px] sm:h-[80px] md:h-[95px] lg:h-[110px] w-auto object-contain drop-shadow-[0px_0px_0.5px_#d99e00] contrast-125 transform scale-[1.3] md:scale-110 transition-transform" />,
    "map-pin": <img src="/images/home-page/distribution-section-2.png" alt="Offices" className="h-[70px] sm:h-[80px] md:h-[95px] lg:h-[110px] w-auto object-contain drop-shadow-[0px_0px_0.5px_#d99e00] contrast-125 transform scale-[1.3] md:scale-110 transition-transform" />,
    globe: <img src="/images/home-page/distribution-section-3.png" alt="Globe" className="h-[70px] sm:h-[80px] md:h-[95px] lg:h-[110px] w-auto object-contain drop-shadow-[0px_0px_0.5px_#d99e00] contrast-125 transform scale-[1.3] md:scale-110 transition-transform" />,
    truck: <img src="/images/home-page/distribution-section-4.png" alt="Truck" className="h-[70px] sm:h-[80px] md:h-[95px] lg:h-[110px] w-auto object-contain drop-shadow-[0px_0px_0.5px_#d99e00] contrast-125 transform scale-[1.3] md:scale-110 transition-transform" />
}

const AUTOPLAY_DELAY = 2500;

export function NetworkSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: false })])
    const [selectedIndex, setSelectedIndex] = React.useState(0)

    const onSelect = React.useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    React.useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on("select", onSelect)
        return () => {
            emblaApi.off("select", onSelect)
        }
    }, [emblaApi, onSelect])

    return (
        <section className="w-full pt-12 pb-12 bg-white overflow-hidden relative">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes dotFill {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }
                .animate-dot-fill {
                    animation: dotFill ${AUTOPLAY_DELAY}ms linear forwards;
                }
                `
            }} />

            <div className="flex flex-col items-center">
                {/* Heading */}
                <div className="text-center mb-6 lg:mb-8 w-full max-w-[1100px] flex flex-col items-center mx-auto px-4 lg:px-0">
                    {networkData.title.split('\n').map((line, i) => (
                        <Text
                            key={i}
                            as="h2"
                            className={`tracking-tight text-[24px] sm:text-[32px] md:text-[46px] lg:text-[52px] xl:text-[56px] leading-[1.1] uppercase text-nirmal-green ${i === 0 ? "font-light" : "font-semibold"}`}
                        >
                            {line}
                        </Text>
                    ))}
                </div>

                <div className="flex flex-col gap-4 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-medium text-[#111] leading-[1.6] max-w-5xl tracking-normal mx-auto px-6 text-center mb-8 md:mb-10">
                    {networkData.description.split('\n\n').map((paragraph, i) => (
                        <p key={i}>
                            {paragraph.split('\n').map((line, j) => (
                                <React.Fragment key={j}>
                                    {line}{j < paragraph.split('\n').length - 1 && <br className="hidden md:block" />}
                                </React.Fragment>
                            ))}
                        </p>
                    ))}
                </div>

                {/* Mobile: Carousel view */}
                <div className="md:hidden w-full relative mb-10 pb-8 px-2 max-w-[400px] mx-auto">
                    <div className="overflow-hidden bg-white/50" ref={emblaRef}>
                        <div className="flex h-full">
                            {networkData.stats.map((stat, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 flex flex-col items-center justify-center text-center px-4 py-2">
                                    <div className="flex-shrink-0 flex items-center justify-center h-[70px] sm:h-[85px] mb-4">
                                        {IconMap[stat.icon]}
                                    </div>
                                    <div className="w-full">
                                        <Text className="font-bold text-[#1f1f1f] text-[15px] sm:text-[17px] leading-[1.3] tracking-normal block w-full max-w-[280px] mx-auto">
                                            {stat.title.split('\n').map((line, i) => (
                                                <React.Fragment key={i}>
                                                    <span className="whitespace-normal sm:whitespace-nowrap block">{line}</span>
                                                </React.Fragment>
                                            ))}
                                        </Text>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots indicator with Timer Animation */}
                    <div className="absolute -bottom-1 left-0 right-0 flex justify-center items-center gap-2">
                        {networkData.stats.map((_, index) => (
                            <div
                                key={`dot-${index}-${selectedIndex === index}`}
                                className={cn(
                                    "h-[6px] rounded-full transition-all duration-300 overflow-hidden relative",
                                    selectedIndex === index ? "w-[40px] bg-gray-200" : "bg-gray-300 w-[8px]"
                                )}
                            >
                                {selectedIndex === index && (
                                    <div className="absolute top-0 left-0 h-full bg-[#028e4f] rounded-full animate-dot-fill" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop & Tablet: Flex view with auto-width containers */}
                <div className="hidden md:flex flex-wrap lg:flex-nowrap justify-between mb-10 md:mb-12 w-full max-w-[950px] mx-auto items-stretch relative px-4 lg:px-0 lg:gap-y-0 gap-y-10">
                    {networkData.stats.map((stat, index) => (
                        <React.Fragment key={index}>
                            <div className="flex flex-col items-center justify-start text-center h-full w-[45%] lg:w-auto">
                                <div className="flex-shrink-0 flex items-center justify-center h-[95px] lg:h-[110px] mb-3 md:mb-5">
                                    {IconMap[stat.icon]}
                                </div>

                                <div>
                                    <Text className="font-bold text-[#1f1f1f] text-[15px] md:text-[15px] lg:text-[16px] xl:text-[18px] leading-[1.3] tracking-tight block mx-auto">
                                        {stat.title.split('\n').map((line, i) => (
                                            <React.Fragment key={i}>
                                                <span className="block whitespace-nowrap">{line}</span>
                                            </React.Fragment>
                                        ))}
                                    </Text>
                                </div>
                            </div>

                            {/* Divider for Desktop (LG) */}
                            {index < networkData.stats.length - 1 && (
                                <div className="hidden lg:block w-[1px] bg-gray-400 shrink-0 self-stretch my-2" />
                            )}

                            {/* Divider and row breaking for Tablet (MD) */}
                            {index === 0 && <div className="hidden md:block lg:hidden w-[1px] bg-gray-400 shrink-0 self-stretch my-2" />}
                            {index === 1 && <div className="hidden md:block lg:hidden w-full h-0" />}
                            {index === 2 && <div className="hidden md:block lg:hidden w-[1px] bg-gray-400 shrink-0 self-stretch my-2" />}
                        </React.Fragment>
                    ))}
                </div>

                <Text className="text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#111] max-w-[650px] mx-auto opacity-100 leading-[1.2] text-center px-4">
                    {networkData.footerText}
                </Text>
            </div>
        </section>
    )
}
