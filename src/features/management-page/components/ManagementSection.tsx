import * as React from "react"
import { Text } from "@/components/ui/Text"
import { boardOfDirectorsData } from "@/features/management-page/data"

export function ManagementSection() {
    return (
        <section className="w-full py-10 sm:py-14" style={{ background: 'linear-gradient(to bottom, #dbebc7 0%, #ebf5df 15%, #ffffff 40%)' }}>
            <div className="section-container max-w-[1000px]">
                {/* Title */}
                <div className="text-center mb-8 flex flex-col items-center">
                    <Text
                        as="h2"
                        className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-[#111] leading-tight"
                    >
                        <span className="font-light tracking-wide block">{boardOfDirectorsData.title1}</span>
                        <span className="font-bold tracking-wide block">{boardOfDirectorsData.title2}</span>
                    </Text>
                </div>

                {/* Director List */}
                <div className="flex flex-col">
                    {boardOfDirectorsData.directors.map((director, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-14 ${index !== 0 ? "pt-8 mt-6 border-t-4 border-dotted border-[#8cc63f]" : ""
                                }`}
                        >
                            {/* Left: Image (No borders, precise user-defined framing zooms) */}
                            <div className="w-[140px] sm:w-[150px] md:w-[160px] h-[160px] sm:h-[180px] md:h-[190px] flex-shrink-0 overflow-hidden relative rounded-sm shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
                                <img
                                    src={director.image}
                                    alt={director.name}
                                    className="w-full h-full object-cover"
                                    style={director.imageTransform ? {
                                        transform: director.imageTransform,
                                        transformOrigin: 'center center'
                                    } : undefined}
                                />
                            </div>

                            {/* Right: Content */}
                            <div className="w-full flex-1 pt-1 md:pt-0">
                                {/* Name and Designation */}
                                <div className="mb-3">
                                    <span className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-[#111] mb-1">
                                        {director.name}
                                    </span>
                                    <span className="text-[17px] sm:text-[19px] md:text-[21px] font-normal text-[#111] ml-2">
                                        {director.designation}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.4] text-justify font-medium text-[#111]">
                                    {director.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
