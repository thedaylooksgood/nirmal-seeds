import * as React from "react"
import { Text } from "@/components/ui/Text"
import { patentContentData } from "@/features/patent-page/data"

export function PatentContent() {
    return (
        <section className="w-full bg-white py-14 sm:py-16 md:py-20">
            <div className="section-container">
                {/* Title */}
                <div className="text-center mb-6 md:mb-8">
                    <Text
                        as="h1"
                        className="text-[30px] sm:text-[38px] md:text-[46px] lg:text-[54px] tracking-wide leading-tight"
                    >
                        <span className="font-light text-[#111]">PATENTS & </span>
                        <span className="font-extrabold text-nirmal-green">INTELLECTUAL PROPERTY</span>
                    </Text>
                </div>

                {/* Intro */}
                <p
                    className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.85] mb-10 md:mb-14 text-justify font-medium text-[#111]"
                    dangerouslySetInnerHTML={{
                        __html: patentContentData.introParagraph,
                    }}
                />

                {/* Patent Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {patentContentData.patents.map((patent, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 border border-gray-100 rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Counter */}
                            <div className="flex items-end gap-2 mb-4">
                                <span className="text-[40px] sm:text-[48px] font-extrabold text-nirmal-green leading-none">
                                    {patent.count}
                                </span>
                                <span className="text-[12px] sm:text-[13px] font-medium text-[#111] uppercase tracking-wider mb-1.5">
                                    {patent.label}
                                </span>
                            </div>

                            <Text
                                as="h3"
                                className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-nirmal-darkgreen mb-3"
                            >
                                {patent.title}
                            </Text>
                            <p className="text-[13px] sm:text-[14px] leading-[1.8] text-justify font-medium text-[#111]">
                                {patent.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
