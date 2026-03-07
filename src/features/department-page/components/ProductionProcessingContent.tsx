import * as React from "react"
import { Text } from "@/components/ui/Text"
import { productionProcessingData } from "@/features/department-page/production-processing-data"

export function ProductionProcessingContent() {
    const { sections } = productionProcessingData

    return (
        <>
            {/* Main Title — White Background */}
            <section className="w-full bg-white pt-10 sm:pt-14 md:pt-16 pb-2">
                <div className="section-container">
                    <div className="text-center mb-6 md:mb-8">
                        <h1 className="leading-[1.15]">
                            <span className="block text-nirmal-green font-normal text-[28px] sm:text-[36px] md:text-[46px] tracking-wide">
                                {productionProcessingData.mainTitle}
                            </span>
                            <span className="block text-nirmal-green font-bold text-[30px] sm:text-[40px] md:text-[50px] tracking-wide">
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
                    className="w-full py-8 sm:py-12 md:py-14"
                    style={
                        section.background === "gradient"
                            ? {
                                background:
                                    "linear-gradient(to bottom, #F5D57A 0%, #FFF0B7 35%, #ffffff 100%)",
                            }
                            : { background: "#ffffff" }
                    }
                >
                    <div className="section-container">
                        {/* Section Title — bold black like reference */}
                        <h2 className="text-[15px] sm:text-[17px] md:text-[19px] font-bold text-black mb-3 tracking-normal">
                            {section.title}
                        </h2>

                        {/* Intro Paragraph — justified, full width */}
                        <p
                            className="text-[13px] sm:text-[14px] text-[#333] leading-[1.85] text-justify mb-5"
                            dangerouslySetInnerHTML={{
                                __html: section.introParagraph,
                            }}
                        />

                        {/* Image + Content Layout */}
                        <div
                            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                } gap-5 lg:gap-8 items-start`}
                        >
                            {/* Image */}
                            <div className="w-full lg:w-[40%] flex-shrink-0 overflow-hidden">
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full h-[180px] sm:h-[220px] md:h-[250px] object-cover"
                                />
                            </div>

                            {/* Content Paragraphs beside image */}
                            {section.contentParagraphs.length > 0 && (
                                <div className="w-full lg:w-[60%]">
                                    {section.contentParagraphs.map((para, pIndex) => (
                                        <p
                                            key={pIndex}
                                            className="text-[13px] sm:text-[14px] text-[#333] leading-[1.85] text-justify mb-4 last:mb-0"
                                        >
                                            {para}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            ))}
        </>
    )
}
