import * as React from "react"
import Link from "next/link"
import { Text } from "@/components/ui/Text"
import { legacyData } from "@/features/management-page/data"

export function LegacySection() {
    return (
        <section className="w-full bg-white py-12 sm:py-16 md:py-20">
            <div className="section-container max-w-[1000px]">
                {/* Title */}
                <div className="text-center mb-6">
                    <Text
                        as="h1"
                        className="text-[30px] sm:text-[36px] md:text-[40px] lg:text-[44px] tracking-wide leading-tight"
                    >
                        <span className="font-light text-[#c9a84c] tracking-wider">{legacyData.title}</span>
                        <span className="font-bold text-[#c9a84c] tracking-wide">{legacyData.titleHighlight}</span>
                    </Text>
                </div>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-14">
                    {/* Left: Image */}
                    <div className="w-full md:w-[150px] lg:w-[180px] flex-shrink-0">
                        <img
                            src={legacyData.image}
                            alt={legacyData.name}
                            className="w-full h-auto object-cover rounded-sm shadow-sm"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full flex-1">
                        <div className="mb-3">
                            <h2 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-[#111] mb-1">
                                {legacyData.name}
                            </h2>
                            <p className="text-[15px] sm:text-[16px] mb-3 font-semibold text-[#111]">
                                {legacyData.designation}
                            </p>
                        </div>

                        {/* Top Paragraphs */}
                        <div className="space-y-4 mb-6">
                            {legacyData.paragraphs1.map((p, i) => (
                                <p key={i} className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.4] text-justify font-medium text-[#111]">
                                    {p}
                                </p>
                            ))}
                        </div>

                        {/* Awards link with dotted borders */}
                        <div className="py-4 border-y-4 border-dotted border-[#c9a84c] mb-6 inline-block w-full">
                            <Link
                                href={legacyData.awardsLinkUrl}
                                className="text-[14px] sm:text-[15px] font-bold text-[#111] hover:text-nirmal-green transition-colors"
                            >
                                {legacyData.awardsLinkText}
                            </Link>
                        </div>

                        {/* Bottom Paragraphs */}
                        <div className="space-y-4">
                            {legacyData.paragraphs2.map((p, i) => (
                                <p key={i} className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.4] text-justify font-medium text-[#111]">
                                    {p}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
