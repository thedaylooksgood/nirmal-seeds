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
                        <span className="font-extrabold text-nirmal-green tracking-wide">{awardsContentData.titleHighlight}</span>
                    </Text>
                </div>

                {/* Awards — 3-column grid to create a central alternating line */}
                <div className="max-w-[1100px] mx-auto space-y-10 md:space-y-14">
                    {awardsContentData.awards.map((award, index) => {
                        const isImageLeft = index % 2 === 0
                        // Light green for odd rows, Gold/Orange for even rows
                        const barColor = index % 2 === 0 ? "bg-[#8cc63f]" : "bg-[#f0a500]"

                        return (
                            <div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 lg:gap-14"
                            >
                                {/* LEFT COLUMN */}
                                <div className="w-full flex">
                                    {isImageLeft ? (
                                        <div className="w-full h-full">
                                            <img
                                                src={award.image}
                                                alt={award.title}
                                                className="w-full h-full min-h-[160px] md:max-h-[240px] object-cover rounded-sm shadow-sm"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full flex flex-col justify-center py-2 lg:pr-8">
                                            <h3 className="text-[17px] sm:text-[19px] md:text-[21px] font-bold text-[#111] mb-2 leading-snug">
                                                {award.title}
                                            </h3>
                                            {award.description && (
                                                <p className="text-[13px] sm:text-[14px] text-[#444] leading-[1.7]">
                                                    {award.description}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* CENTER BAR - Only visible on desktop/tablet */}
                                <div className="hidden md:flex justify-center w-[6px] lg:w-[8px]">
                                    <div className={`w-full h-full ${barColor}`}></div>
                                </div>

                                {/* RIGHT COLUMN */}
                                <div className="w-full flex">
                                    {!isImageLeft ? (
                                        <div className="w-full h-full">
                                            <img
                                                src={award.image}
                                                alt={award.title}
                                                className="w-full h-full min-h-[160px] md:max-h-[240px] object-cover rounded-sm shadow-sm"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full flex flex-col justify-center py-2 lg:pr-8">
                                            <h3 className="text-[17px] sm:text-[19px] md:text-[21px] font-bold text-[#111] mb-2 leading-snug">
                                                {award.title}
                                            </h3>
                                            {award.description && (
                                                <p className="text-[13px] sm:text-[14px] text-[#444] leading-[1.7]">
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
