import * as React from "react"
import { rdData } from "@/features/department-page/r-d-data"

export function RDContent() {
    const { mainTitle, mainTitleHighlight, sections } = rdData

    return (
        <>
            {/* Main Title — White Background */}
            <section className="w-full bg-white pt-10 sm:pt-14 md:pt-16 pb-2">
                <div className="section-container max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="text-center">
                        <h1 className="leading-[1.1] text-[#3c8e00]">
                            <span className="block font-light text-[32px] sm:text-[42px] md:text-[52px] tracking-wide mb-1">
                                {mainTitle} <span className="font-bold">{mainTitleHighlight}</span>
                            </span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Department Sections */}
            <section className="w-full bg-white py-4 sm:py-6 md:py-8">
                <div className="section-container max-w-5xl mx-auto px-4 sm:px-6">
                    {/* Intro Paragraphs */}
                    <div className="flex flex-col gap-4 mb-8">
                        <p
                            className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.4] text-justify font-medium text-[#111]"
                        >
                            {sections[0].introParagraph}
                        </p>
                        <p
                            className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.4] text-justify font-medium text-[#111]"
                        >
                            {sections[0].contentParagraphs[0]}
                        </p>
                    </div>

                    {/* Full Width Image Here */}
                    <div className="w-full h-auto mb-8 rounded-sm overflow-hidden shadow-sm">
                        <img
                            src="/images/rd-field.png"
                            alt="Research Farmland"
                            className="w-full h-auto min-h-[150px] md:min-h-[200px] max-h-[350px] object-cover"
                        />
                    </div>

                    {/* Bottom Paragraphs */}
                    <div className="flex flex-col gap-4">
                        <p
                            className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.4] text-justify font-medium text-[#111]"
                        >
                            {sections[1].introParagraph}
                        </p>
                        <p
                            className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.4] text-justify font-medium text-[#111]"
                        >
                            {sections[1].contentParagraphs[0]}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
