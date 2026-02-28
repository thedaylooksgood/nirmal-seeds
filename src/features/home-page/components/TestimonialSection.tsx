"use client"

import * as React from "react"
import { Text } from "@/components/ui/Text"
import { testimonialData } from "../data"
import { cn } from "@/lib/utils"

export function TestimonialSection() {
    const [activeIndex, setActiveIndex] = React.useState(0)
    const currentQuote = testimonialData.quotes[activeIndex]

    return (
        <section className="w-full pt-16 pb-24 px-4 bg-nirmal-lightyellow flex flex-col items-center text-center">
            <div className="container mx-auto max-w-4xl relative">

                <Text as="h2" className="mb-16 text-black border-b-[3px] border-nirmal-darkgreen inline-block pb-1 px-2 uppercase tracking-wide text-[28px] sm:text-[32px] font-light">
                    FARMER <span className="font-extrabold ml-1">TESTIMONIAL</span>
                </Text>

                <div className="relative px-12 md:px-24 mb-16 min-h-[140px] flex items-center justify-center">
                    <span className="absolute top-[-30px] left-0 text-[100px] leading-[0.5] text-nirmal-yellow font-serif select-none">“</span>
                    <Text className="text-[14px] sm:text-[16px] md:leading-[1.8] font-medium text-[#4a4a4a] relative z-10 transition-opacity duration-300">
                        {currentQuote.text}
                    </Text>
                    <span className="absolute bottom-[-20px] right-0 text-[100px] leading-[0.5] text-nirmal-yellow font-serif select-none rotate-180 block align-bottom">“</span>
                </div>

                <div className="flex justify-center items-center space-x-6 mb-8 mt-4">
                    {testimonialData.quotes.map((quote, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={cn(
                                "relative rounded-full overflow-hidden transition-all duration-300 transform outline-none",
                                activeIndex === index
                                    ? "w-20 h-20 shadow-md ring-2 ring-white"
                                    : "w-16 h-16 opacity-70 hover:opacity-100 grayscale hover:grayscale-0 cursor-pointer"
                            )}
                        >
                            <img
                                src={quote.image}
                                alt={quote.author}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>

                <div className="h-[70px] transition-all duration-300 flex flex-col items-center">
                    <Text className="font-extrabold text-[15px] sm:text-[16px] text-[#333] mb-[2px]">{currentQuote.author}</Text>
                    <Text className="text-[13px] text-gray-600 font-medium">{currentQuote.location}</Text>
                </div>

                {/* Small dot indicators */}
                <div className="flex justify-center space-x-2 mt-2">
                    {testimonialData.quotes.map((_, index) => (
                        <div
                            key={index}
                            className={cn(
                                "h-[6px] rounded-full transition-all duration-300",
                                activeIndex === index ? "bg-nirmal-darkgreen w-[18px]" : "bg-[#c4c4c4] w-[6px]"
                            )}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}
