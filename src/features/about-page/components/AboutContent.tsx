import * as React from "react"
import { Text } from "@/components/ui/Text"
import { aboutContentData } from "@/features/about-page/data"

export function AboutContent() {
    return (
        <section className="w-full bg-white py-6 md:py-8">
            <div className="section-container">
                {/* Title */}
                <div className="text-center mb-4 flex flex-col items-center">
                    <Text
                        as="h1"
                        className="mb-4 text-[28px] sm:text-[36px] md:text-[46px] lg:text-[52px] xl:text-[56px] tracking-tight leading-[1.1] relative uppercase text-[#3c8e00]"
                    >
                        <span className="font-light pr-2 sm:pr-3">ABOUT</span>
                        <span className="font-medium">NIRMAL SEEDS</span>
                    </Text>
                </div>

                {/* Intro paragraph — full width, left aligned */}
                <p
                    className="text-[13px] sm:text-[14px] md:text-[15px] leading-snug mb-4 text-justify font-medium text-[#111]"
                    dangerouslySetInnerHTML={{
                        __html: aboutContentData.introParagraph,
                    }}
                />

                {/* Image + Text block */}
                <div className="flex flex-col lg:flex-row gap-4 items-stretch mb-4">
                    {/* Image with play button */}
                    <div className="w-full lg:w-[45%] flex-shrink-0 relative rounded-sm overflow-hidden group">
                        <div className="w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-full lg:absolute lg:inset-0">
                            <img
                                src={aboutContentData.image}
                                alt="Nirmal Seeds facility"
                                className="w-full h-full object-cover"
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
                    </div>

                    {/* Text content — justified */}
                    <div className="w-full lg:w-[55%] space-y-3">
                        {aboutContentData.paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-[13px] sm:text-[14px] md:text-[15px] leading-snug text-justify font-medium text-[#111]"
                                dangerouslySetInnerHTML={{
                                    __html: paragraph,
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom paragraph — full width, left aligned */}
                <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-snug text-justify font-medium text-[#111]">
                    {aboutContentData.bottomParagraph}
                </p>
            </div>
        </section>
    )
}
