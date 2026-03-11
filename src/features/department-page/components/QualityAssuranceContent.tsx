import * as React from "react"
import { qaData } from "@/features/department-page/quality-assurance-data"
import { Text } from "@/components/ui/Text"

export function QualityAssuranceContent() {
    return (
        <section className="w-full bg-white pt-7 sm:pt-10 md:pt-12 pb-15">
            <div className="section-container max-w-5xl mx-auto px-4 sm:px-6">

                {/* Main Title Section */}
                <div className="text-center mb-4 sm:mb-6">
                    <Text
                        as="h1"
                        className="text-[28px] sm:text-[36px] md:text-[46px] lg:text-[52px] xl:text-[56px] tracking-tight leading-[1.1] mb-4 uppercase text-[#3c8e00]"
                    >
                        <span className="font-light pr-2 sm:pr-3">
                            {qaData.mainTitle}
                        </span>
                        <span className="font-medium">
                            {qaData.mainTitleHighlight}
                        </span>
                    </Text>
                </div>

                {/* Banner Image */}
                <div className="w-full h-auto mb-5 sm:mb-6 rounded-sm overflow-hidden shadow-sm">
                    <img
                        src={qaData.image}
                        alt="Quality Assurance Testing"
                        className="w-full h-auto object-cover aspect-[2/1] sm:aspect-[21/9] md:aspect-[3/1] max-h-[250px]"
                    />
                </div>

                {/* Content Paragraphs */}
                <div className="flex flex-col gap-6 w-full">
                    {qaData.paragraphs.map((p, index) => (
                        <p
                            key={index}
                            className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.2] text-justify font-medium text-[#111]"
                            dangerouslySetInnerHTML={{ __html: p }}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}
