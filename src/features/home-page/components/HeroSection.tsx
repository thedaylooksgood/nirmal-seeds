"use client"

import * as React from "react"
import { Text } from "@/components/ui/Text"
import { heroData } from "../data"

export function HeroSection() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const images = Array.isArray(heroData.backgroundImage) ? heroData.backgroundImage : [heroData.backgroundImage];

    React.useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 5000); // 5 seconds auto-slide

        return () => clearInterval(interval);
    }, [images.length]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <section
            className="relative w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] max-h-[700px] flex items-start pt-32 md:pt-40 lg:pt-48 bg-gray-900 overflow-hidden"
        >
            {/* Background Images with Crossfade */}
            {images.map((img, index) => (
                <div
                    key={index}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
                    style={{
                        backgroundImage: `url(${img})`,
                        opacity: index === currentIndex ? 1 : 0,
                    }}
                />
            ))}

            {/* Align content with the logo in the header (container px-4 lg:px-8) */}
            <div className="section-container relative z-20">
                <div className="max-w-[800px]">
                    <Text as="h1" className="drop-shadow-sm mb-1 text-[38px] sm:text-[50px] md:text-[56px] lg:text-[66px] leading-[1.1] tracking-normal text-nirmal-darkgreen font-normal">
                        INNOVATION THAT<br />EMPOWERS THE FUTURE.
                    </Text>
                    <Text as="h1" className="drop-shadow-sm text-[42px] sm:text-[54px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-tight text-black font-extrabold mt-2">
                        SOLUTIONS THAT<br />ENRICH LIVES.
                    </Text>
                </div>
            </div>

            {/* Carousel Navigation Circles */}
            {images.length > 1 && (
                <div className="absolute bottom-[20%] w-full px-12 lg:px-40 flex justify-between pointer-events-none z-30">
                    <div
                        onClick={handlePrev}
                        className="w-[38px] h-[38px] sm:w-[46px] sm:h-[46px] rounded-full border-[1.5px] border-white/60 flex items-center justify-center pointer-events-auto cursor-pointer hover:bg-white/20 hover:border-white transition-all bg-transparent"
                    >
                        <span className="text-white/80 font-light text-[26px] mt-[-4px] ml-[-2px]">&larr;</span>
                    </div>
                    <div
                        onClick={handleNext}
                        className="w-[38px] h-[38px] sm:w-[46px] sm:h-[46px] rounded-full border-[1.5px] border-white/60 flex items-center justify-center pointer-events-auto cursor-pointer hover:bg-white/20 hover:border-white transition-all bg-transparent"
                    >
                        <span className="text-white/80 font-light text-[26px] mt-[-4px] ml-[2px]">&rarr;</span>
                    </div>
                </div>
            )}
        </section>
    )
}
