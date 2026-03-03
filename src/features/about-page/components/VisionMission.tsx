import * as React from "react"
import Image from "next/image"
import { Text } from "@/components/ui/Text"
import { visionData, missionData } from "@/features/about-page/data"

export function VisionMission() {
    return (
        <section className="w-full bg-gradient-to-b from-[#fdf6e3] via-[#fef9ed] to-[#fefcf5] py-16 sm:py-20 md:py-24">
            <div className="section-container">

                {/* ── Vision ── */}
                <div className="flex items-center gap-6 sm:gap-8 md:gap-10 py-10 md:py-14">
                    {/* Icon — vertically centered */}
                    <div className="flex-shrink-0 relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[110px] md:h-[110px]">
                        <Image
                            src="/about-us/vision-Photoroom.png"
                            alt="Vision"
                            fill
                            sizes="110px"
                            className="object-contain"
                        />
                    </div>

                    {/* Vertical divider */}
                    <div className="flex-shrink-0 w-[6px] bg-[#c9a84c]/100 self-stretch" />

                    {/* Content */}
                    <div className="flex-1">
                        <Text
                            as="h2"
                            className="text-[32px] sm:text-[38px] md:text-[44px] font-bold text-[#333] mb-2 leading-tight tracking-tight"
                        >
                            Vision
                        </Text>
                        <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#555] leading-[1.8]">
                            {visionData.description}
                        </p>
                    </div>
                </div>

                {/* ── Dashed Separator ── */}
                <div className="border-t-[5px] border-dashed border-[#c9a84c]/100" />

                {/* ── Mission ── */}
                <div className="flex items-center gap-6 sm:gap-8 md:gap-10 py-10 md:py-14">
                    {/* Icon — vertically centered */}
                    <div className="flex-shrink-0 relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[110px] md:h-[110px]">
                        <Image
                            src="/about-us/mission-Photoroom.png"
                            alt="Mission"
                            fill
                            sizes="110px"
                            className="object-contain"
                        />
                    </div>

                    {/* Vertical divider */}
                    <div className="flex-shrink-0 w-[6px] bg-[#c9a84c]/100 self-stretch" />

                    {/* Content */}
                    <div className="flex-1">
                        <Text
                            as="h2"
                            className="text-[32px] sm:text-[38px] md:text-[44px] font-bold text-[#333] mb-3 leading-tight tracking-tight"
                        >
                            Mission
                        </Text>

                        <ul className="space-y-1.5 mb-5">
                            {missionData.points.map((point, index) => (
                                <li
                                    key={index}
                                    className="flex items-start text-[13px] sm:text-[14px] md:text-[15px] text-[#555] leading-[1.7]"
                                >
                                    <span className="text-[#555] mr-2 mt-[1px]">•</span>
                                    <span className="whitespace-pre-line">
                                        {point}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-[13px] sm:text-[14px] md:text-[15px] font-bold text-[#c9a84c] leading-[1.7]">
                            {missionData.tagline}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
