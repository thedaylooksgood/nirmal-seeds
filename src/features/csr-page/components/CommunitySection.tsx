import * as React from "react"
import { communityData } from "@/features/csr-page/data"

export function CommunitySection() {
    return (
        <section className="w-full bg-gradient-to-b from-[#fdf6e3] via-[#fef9ed] to-[#fefcf5] py-8 sm:py-10 md:py-12">
            <div className="section-container">

                {/* Row 1: Text (left) + Image (right) — align bottoms */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-end mb-4 lg:mb-5">
                    {/* Left: Title + Text */}
                    <div className="w-full lg:w-[50%]">
                        <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#333] mb-3">
                            {communityData.subtitle}
                        </h2>
                        {communityData.paragraphsLeft.map((p, i) => (
                            <p
                                key={i}
                                className="text-[13px] sm:text-[14px] text-[#444] leading-[1.8] text-justify mb-3 last:mb-0"
                            >
                                {p}
                            </p>
                        ))}
                    </div>

                    {/* Right: Image (community/yoga) */}
                    <div className="w-full lg:w-[50%] rounded-sm overflow-hidden">
                        <img
                            src={communityData.imageRight}
                            alt={communityData.imageRightAlt}
                            className="w-full h-[180px] sm:h-[200px] md:h-[210px] object-cover"
                        />
                    </div>
                </div>

                {/* Row 2: Image (left) + Text (right) — align tops */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                    {/* Left: Image (water tap) */}
                    <div className="w-full lg:w-[50%] rounded-sm overflow-hidden">
                        <img
                            src={communityData.imageLeft}
                            alt={communityData.imageLeftAlt}
                            className="w-full h-[180px] sm:h-[200px] md:h-[210px] object-cover"
                        />
                    </div>

                    {/* Right: Text */}
                    <div className="w-full lg:w-[50%]">
                        {communityData.paragraphsRight.map((p, i) => (
                            <p
                                key={i}
                                className="text-[13px] sm:text-[14px] text-[#444] leading-[1.8] text-justify mb-3 last:mb-0"
                            >
                                {p}
                            </p>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
