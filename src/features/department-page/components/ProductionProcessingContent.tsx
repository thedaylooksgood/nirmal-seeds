import * as React from "react"
import { Text } from "@/components/ui/Text"
import { productionProcessingData } from "@/features/department-page/production-processing-data"

export function ProductionProcessingContent() {
    const { sections } = productionProcessingData

    return (
        <>
            {/* Main Title — White Background */}
            <section className="w-full bg-white pt-10 sm:pt-14 md:pt-16 pb-2">
                <div className="section-container max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="text-center">
                        <h1 className="leading-[1.1] uppercase text-[#3c8e00]">
                            <span className="block font-light text-[32px] sm:text-[42px] md:text-[52px] tracking-wide mb-1">
                                {productionProcessingData.mainTitle}
                            </span>
                            <span className="block font-bold text-[34px] sm:text-[44px] md:text-[54px] tracking-wide">
                                {productionProcessingData.mainTitleHighlight}
                            </span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Department Sections */}
            {sections.map((section, index) => (
                <section
                    key={index}
                    className="w-full py-4 sm:py-6 md:py-8"
                    style={
                        section.background === "gradient"
                            ? {
                                background:
                                    "linear-gradient(to bottom, #F9E6A1 0%, #FFF4CB 50%, #ffffff 100%)",
                            }
                            : { background: "#ffffff" }
                    }
                >
                    <div className="section-container max-w-5xl mx-auto px-4 sm:px-6">
                        {index === 0 ? (
                            <>
                                {/* Section Title */}
                                <h2 className="text-[17px] sm:text-[19px] md:text-[21px] font-bold text-[#111] mb-4 tracking-normal">
                                    {section.title}
                                </h2>

                                {/* Intro Paragraph — full width */}
                                <p
                                    className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.4] text-justify mb-4 font-medium text-[#111]"
                                    dangerouslySetInnerHTML={{
                                        __html: section.introParagraph,
                                    }}
                                />

                                {/* Image + Content Layout */}
                                <div className="flex flex-col md:flex-row gap- lg:gap-5 items-stretch">
                                    {/* Image Left */}
                                    <div className="w-full md:w-[45%] flex-shrink-0 relative">
                                        <div className="w-full h-[200px] sm:h-[240px] md:h-full md:absolute md:inset-0 rounded-sm overflow-hidden shadow-sm">
                                            <img
                                                src={section.image}
                                                alt={section.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Content Paragraphs Right */}
                                    {section.contentParagraphs.length > 0 && (
                                        <div className="w-full md:w-[55%] flex flex-col gap-4">
                                            {section.contentParagraphs.map((para, pIndex) => (
                                                <p
                                                    key={pIndex}
                                                    className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.4] text-justify font-medium text-[#111]"
                                                >
                                                    {para}
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <div className="flex flex-col md:flex-row gap-3 lg:gap-6 items-start">
                                {/* Text Left */}
                                <div className="w-full md:w-[45%] flex flex-col gap-4">
                                    {/* Section Title */}
                                    <h2 className="text-[17px] sm:text-[19px] md:text-[21px] font-bold text-[#111] tracking-normal mb-1">
                                        {section.title}
                                    </h2>
                                    {/* Intro Paragraph */}
                                    <p
                                        className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.4] text-justify font-medium text-[#111]"
                                        dangerouslySetInnerHTML={{
                                            __html: section.introParagraph,
                                        }}
                                    />
                                </div>

                                {/* Image Right */}
                                <div className="w-full md:w-[55%] flex-shrink-0">
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="w-full h-auto min-h-[300px] md:max-h-[300px] object-cover rounded-sm shadow-sm"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            ))}
        </>
    )
}
