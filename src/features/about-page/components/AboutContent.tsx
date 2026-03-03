import * as React from "react"
import { Text } from "@/components/ui/Text"
import { aboutContentData } from "@/features/about-page/data"

export function AboutContent() {
    return (
        <section className="w-full bg-white py-14 sm:py-16 md:py-20">
            <div className="section-container">
                {/* Title */}
                <div className="text-center mb-6 md:mb-8">
                    <Text
                        as="h1"
                        className="text-[30px] sm:text-[38px] md:text-[46px] lg:text-[54px] tracking-wide leading-tight"
                    >
                        <span className="font-light text-[#333]">ABOUT </span>
                        <span className="font-extrabold text-nirmal-green">NIRMAL SEEDS</span>
                    </Text>
                </div>

                {/* Intro paragraph — full width, left aligned */}
                <p
                    className="text-[13px] sm:text-[14px] md:text-[15px] text-[#444] leading-[1.85] mb-8 md:mb-10 text-justify"
                    dangerouslySetInnerHTML={{
                        __html: aboutContentData.introParagraph,
                    }}
                />

                {/* Image + Text block */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start mb-8 md:mb-10">
                    {/* Image with play button */}
                    <div className="w-full lg:w-[45%] flex-shrink-0 relative rounded-sm overflow-hidden group">
                        <img
                            src={aboutContentData.image}
                            alt="Nirmal Seeds facility"
                            className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover"
                        />
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-black/70 hover:scale-110 transition-all duration-300">
                                <svg
                                    className="w-6 h-6 sm:w-7 sm:h-7 text-white ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Text content — justified */}
                    <div className="w-full lg:w-[55%] space-y-5">
                        {aboutContentData.paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-[13px] sm:text-[14px] md:text-[15px] text-[#444] leading-[1.85] text-justify"
                                dangerouslySetInnerHTML={{
                                    __html: paragraph,
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom paragraph — full width, left aligned */}
                <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#444] leading-[1.85] text-justify">
                    {aboutContentData.bottomParagraph}
                </p>
            </div>
        </section>
    )
}
