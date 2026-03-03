import * as React from "react"
import { environmentData } from "@/features/csr-page/data"

export function EnvironmentSection() {
    return (
        <section className="w-full bg-gradient-to-b from-[#f0f7ec] via-[#f5faf2] to-[#f9fcf7] py-8 sm:py-10 md:py-12">
            <div className="section-container">
                {/* Two-column: text left, image right — image aligns with first line */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                    {/* Left column — title + text */}
                    <div className="w-full lg:w-[50%] space-y-3">
                        <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#333] mb-1">
                            {environmentData.subtitle}
                        </h2>
                        {environmentData.paragraphs.map((p, i) => (
                            <p
                                key={i}
                                className="text-[13px] sm:text-[14px] text-[#444] leading-[1.8] text-justify"
                            >
                                {p}
                            </p>
                        ))}
                    </div>

                    {/* Right column — image starts at first line of text */}
                    <div className="w-full lg:w-[50%] rounded-sm overflow-hidden">
                        <img
                            src={environmentData.image}
                            alt={environmentData.imageAlt}
                            className="w-full h-[250px] sm:h-[280px] md:h-[320px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
