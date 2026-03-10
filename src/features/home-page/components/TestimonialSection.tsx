"use client"

import * as React from "react"
import { Text } from "@/components/ui/Text"
import { testimonialData } from "../data"
import { cn } from "@/lib/utils"

export function TestimonialSection() {
    const [activeIndex, setActiveIndex] = React.useState(0)
    const currentQuote = testimonialData.quotes[activeIndex]

    return (
        <section className="w-full pt-8 pb-10 px-4 flex flex-col items-center text-center" style={{ background: 'linear-gradient(to bottom, #F5D57A 0%, #F5D57A 25%, #FFF0B7 55%, #ffffff 100%)' }}>
            <div className="section-container max-w-4xl relative">

                <Text as="h2" className="mb-6 text-black inline-block uppercase tracking-tight text-[36px] sm:text-[46px] md:text-[52px] lg:text-[56px] leading-[1.1] relative">
                    <span className="font-light pr-2">FARMER</span>
                    <span className="font-semibold">TESTIMONIAL</span>
                </Text>

                <div className="relative px-12 md:px-24 mb-6 min-h-[80px] flex items-center justify-center">
                    <span className="absolute top-[-20px] left-0 text-[80px] leading-none text-[#D4A017] font-black select-none opacity-40" style={{ fontFamily: 'Georgia, serif' }}>“</span>
                    <Text className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-[1.5] md:leading-[1.6] font-medium text-[#4a4a4a] relative z-10 transition-opacity duration-300">
                        {currentQuote.text}
                    </Text>
                    <span className="absolute bottom-[-35px] right-0 text-[80px] leading-none text-[#D4A017] font-black select-none opacity-40" style={{ fontFamily: 'Georgia, serif' }}>”</span>
                </div>

                <div className="flex justify-center items-center space-x-4 mb-4 mt-2">
                    {testimonialData.quotes.map((quote, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={cn(
                                "relative rounded-full overflow-hidden transition-all duration-300 transform outline-none",
                                activeIndex === index
                                    ? "w-20 h-20 sm:w-24 sm:h-24 shadow-md ring-2 ring-white"
                                    : "w-14 h-14 sm:w-16 sm:h-16 opacity-70 hover:opacity-100 grayscale hover:grayscale-0 cursor-pointer"
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

                <div className="h-[40px] transition-all duration-300 flex flex-col items-center justify-center">
                    <Text className="font-bold text-[13px] sm:text-[14px] text-[#333] mb-[1px] leading-[1.2]">{currentQuote.author}</Text>
                    <Text className="text-[11px] text-gray-600 font-medium leading-[1.2]">{currentQuote.location}</Text>
                </div>

                {/* Small dot indicators */}
                <div className="flex justify-center space-x-2 mt-1">
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
