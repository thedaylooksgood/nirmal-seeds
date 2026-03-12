import * as React from "react"
import { Text } from "@/components/ui/Text"
import { awardsContentData } from "@/features/media-page/data"

export function MediaContent() {
    return (
        <section className="w-full bg-white py-10 sm:py-12 md:py-14">
            <div className="section-container">
                {/* Title */}
                <div className="text-center mb-12 md:mb-16">
                    <Text
                        as="h1"
                        className="text-[30px] sm:text-[38px] md:text-[46px] lg:text-[54px] tracking-wide leading-tight"
                    >
                        <span className="font-light text-nirmal-green tracking-wider">{awardsContentData.title} </span>
                        <span className="font-semibold text-nirmal-green tracking-wide">{awardsContentData.titleHighlight}</span>
                    </Text>
                </div>

                {/* Awards — 3-column grid to create a central alternating line */}
                <div className="max-w-[1100px] mx-auto space-y-4 md:space-y-6 lg:space-y-8">
                    {awardsContentData.awards.map((award, index) => {
                        const isImageLeft = index % 2 === 0
                        // Light green for odd rows, Gold/Orange for even rows
                        const barColor = index % 2 === 0 ? "bg-[#8cc63f]" : "bg-[#f0a500]"

                        return (
                            <div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-1 md:gap-1 lg:gap-1"
                            >
                                {/* LEFT COLUMN */}
                                <div className="w-full flex h-[140px] sm:h-[160px] md:h-[180px]">
                                    {isImageLeft ? (
                                        <div className="w-full h-full overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
                                            <img
                                                src={award.image}
                                                alt={award.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full h-full flex flex-col justify-center py-1 lg:pr-4 md:pr-4">
                                            <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#111] mb-1 leading-snug">
                                                {award.title}
                                            </h3>
                                            {award.description && (
                                                <p className="text-[13px] sm:text-[14px] leading-[1.6] font-medium text-gray-700">
                                                    {award.description}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* CENTER BAR - Only visible on desktop/tablet */}
                                <div className="hidden md:flex justify-center w-[4px] lg:w-[6px] h-full shrink-0">
                                    <div className={`w-[4px] lg:w-[6px] h-full ${barColor}`}></div>
                                </div>

                                {/* RIGHT COLUMN */}
                                <div className="w-full flex h-[140px] sm:h-[160px] md:h-[180px]">
                                    {!isImageLeft ? (
                                        <div className="w-full h-full overflow-hidden border border-gray-100 shadow-sm bg-gray-50">                                            <img
                                            src={award.image}
                                            alt={award.title}
                                            className="w-full h-full object-cover"
                                        />
                                        </div>
                                    ) : (
                                        <div className="w-full h-full flex flex-col justify-center py-1 lg:pl-4 md:pl-4">
                                            <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#111] mb-1 leading-snug">
                                                {award.title}
                                            </h3>
                                            {award.description && (
                                                <p className="text-[13px] sm:text-[14px] leading-[1.6] font-medium text-gray-700">
                                                    {award.description}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
