import * as React from "react"
import { Text } from "@/components/ui/Text"
import { boardOfDirectorsData } from "@/features/management-page/data"

export function ManagementSection() {
    return (
        <section className="w-full bg-gradient-to-b from-[#cae3c9] via-[#e5f1e4] to-[#ffffff] py-12 sm:py-16 md:py-20">
            <div className="section-container max-w-[1000px]">
                {/* Title */}
                <div className="text-center mb-12 flex flex-col items-center">
                    <Text
                        as="h2"
                        className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] text-[#111] leading-tight"
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
                            className={`flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-14 ${index !== 0 ? "pt-8 mt-8 border-t border-dashed border-[#8cc63f]" : ""
                                }`}
                        >
                            {/* Left: Image */}
                            <div className="w-[120px] sm:w-[140px] md:w-[150px] flex-shrink-0">
                                <img
                                    src={director.image}
                                    alt={director.name}
                                    className="w-full h-[150px] md:h-[180px] object-cover rounded-sm shadow-sm"
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
                                <p className="text-[12px] sm:text-[13px] leading-[1.7] text-justify font-medium text-[#111]">
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
