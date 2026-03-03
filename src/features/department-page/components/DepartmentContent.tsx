import * as React from "react"
import { Text } from "@/components/ui/Text"
import { departmentContentData } from "@/features/department-page/data"

export function DepartmentContent() {
    return (
        <section className="w-full bg-white py-14 sm:py-16 md:py-20">
            <div className="section-container">
                {/* Title */}
                <div className="text-center mb-6 md:mb-8">
                    <Text
                        as="h1"
                        className="text-[30px] sm:text-[38px] md:text-[46px] lg:text-[54px] tracking-wide leading-tight"
                    >
                        <span className="font-light text-[#333]">OUR </span>
                        <span className="font-extrabold text-nirmal-green">DEPARTMENTS</span>
                    </Text>
                </div>

                {/* Intro */}
                <p
                    className="text-[13px] sm:text-[14px] md:text-[15px] text-[#444] leading-[1.85] mb-10 md:mb-14 text-justify"
                    dangerouslySetInnerHTML={{
                        __html: departmentContentData.introParagraph,
                    }}
                />

                {/* Department Cards */}
                <div className="space-y-14 md:space-y-20">
                    {departmentContentData.departments.map((dept, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
                        >
                            {/* Image */}
                            <div className="w-full lg:w-[45%] flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={dept.image}
                                    alt={dept.title}
                                    className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="w-full lg:w-[55%]">
                                <Text
                                    as="h2"
                                    className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-nirmal-darkgreen mb-4 leading-tight"
                                >
                                    {dept.title}
                                </Text>
                                <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#444] leading-[1.85] text-justify mb-5">
                                    {dept.description}
                                </p>

                                {/* Highlight badges */}
                                <div className="flex flex-wrap gap-2">
                                    {dept.highlights.map((item, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 bg-nirmal-yellow/20 text-nirmal-darkgreen text-[11px] sm:text-[12px] font-semibold rounded-md border border-nirmal-yellow/40"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
