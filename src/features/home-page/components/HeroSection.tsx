import * as React from "react"
import { Text } from "@/components/ui/Text"
import { heroData } from "../data"

export function HeroSection() {
    return (
        <section
            className="relative w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] max-h-[700px] flex items-center bg-gray-900 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent" />

            {/* Align content with the logo in the header (container px-4 lg:px-8) */}
            <div className="container relative z-10 mx-auto px-4 lg:px-8 mt-[-10%] sm:mt-[-5%]">
                <div className="max-w-[800px]">
                    <Text as="h1" className="drop-shadow-sm mb-1 text-[38px] sm:text-[50px] md:text-[56px] lg:text-[66px] leading-[1.1] tracking-normal text-nirmal-darkgreen font-normal">
                        INNOVATION THAT<br />EMPOWERS THE FUTURE.
                    </Text>
                    <Text as="h1" className="drop-shadow-sm text-[42px] sm:text-[54px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-tight text-black font-extrabold mt-2">
                        SOLUTIONS THAT<br />ENRICH LIVES.
                    </Text>
                </div>
            </div>

            {/* Fake Carousel Navigation Circles */}
            <div className="absolute bottom-[20%] w-full px-12 lg:px-40 flex justify-between pointer-events-none z-20">
                <div className="w-[38px] h-[38px] sm:w-[46px] sm:h-[46px] rounded-full border-[1.5px] border-white/60 flex items-center justify-center pointer-events-auto cursor-pointer hover:bg-white/20 hover:border-white transition-all bg-transparent">
                    <span className="text-white/80 font-light text-[26px] mt-[-4px] ml-[-2px]">&larr;</span>
                </div>
                <div className="w-[38px] h-[38px] sm:w-[46px] sm:h-[46px] rounded-full border-[1.5px] border-white/60 flex items-center justify-center pointer-events-auto cursor-pointer hover:bg-white/20 hover:border-white transition-all bg-transparent">
                    <span className="text-white/80 font-light text-[26px] mt-[-4px] ml-[2px]">&rarr;</span>
                </div>
            </div>
        </section>
    )
}
