import * as React from "react"
import { Text } from "@/components/ui/Text"
import { csrContentData } from "@/features/csr-page/data"

export function CsrContent() {
    return (
        <section className="w-full bg-white py-6 sm:py-8 md:py-10">
            <div className="section-container">
                {/* Title */}
                <div className="text-center mb-4">
                    <Text
                        as="h1"
                        className="text-[30px] sm:text-[38px] md:text-[46px] lg:text-[54px] tracking-wide leading-tight"
                    >
                        <span className="font-light text-[#333]">{csrContentData.title} </span>
                        <span className="font-extrabold text-nirmal-green">{csrContentData.titleHighlight}</span>
                    </Text>
                </div>

                {/* Subtitle */}
                <h2 className="text-[15px] sm:text-[16px] md:text-[17px] font-bold text-[#333] mb-4">
                    {csrContentData.subtitle}
                </h2>

                {/* Paragraphs */}
                <div className="space-y-2.5 mb-5 md:mb-6">
                    {csrContentData.paragraphs.map((paragraph, index) => (
                        <p
                            key={index}
                            className="text-[13px] sm:text-[14px] md:text-[15px] text-[#444] leading-[1.85]"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* Image */}
                <div className="w-full rounded-sm overflow-hidden">
                    <img
                        src={csrContentData.image}
                        alt={csrContentData.imageAlt}
                        className="w-full h-[180px] sm:h-[220px] md:h-[280px] object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
