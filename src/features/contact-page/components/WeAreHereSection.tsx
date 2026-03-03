import * as React from "react"
import { Text } from "@/components/ui/Text"
import { RegionalOfficeSelector } from "@/features/contact-page/components/RegionalOfficeSelector"
import { OfficeInfoCard } from "@/features/contact-page/components/OfficeInfoCard"
import { LocationMap } from "@/features/contact-page/components/LocationMap"

export function WeAreHereSection() {
    return (
        <section className="w-full bg-white py-10 sm:py-12 md:py-16">
            <div className="section-container">
                {/* Title */}
                <div className="text-center mb-10 md:mb-12">
                    <Text
                        as="h2"
                        className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-normal tracking-wide leading-tight !text-nirmal-green !uppercase"
                    >
                        WE ARE{" "}
                        <span className="font-extrabold text-gray-900">
                            HERE
                        </span>
                    </Text>
                </div>

                {/* Two column layout: Selector/Info + Map */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {/* Left - Selector + Office Info */}
                    <div className="w-full lg:w-[42%] space-y-5">
                        <RegionalOfficeSelector />
                        <OfficeInfoCard />
                    </div>

                    {/* Right - Google Map */}
                    <div className="w-full lg:w-[58%]">
                        <LocationMap />
                    </div>
                </div>
            </div>
        </section>
    )
}
