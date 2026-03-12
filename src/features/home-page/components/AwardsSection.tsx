import * as React from "react"
import { Text } from "@/components/ui/Text"
import { GenericCarousel } from "@/components/ui/GenericCarousel"
import { awardsData } from "../data"

function AwardCard({ award }: { award: typeof awardsData.awards[0] }) {
    return (
        <div className="flex bg-transparent h-full w-full transition-transform hover:-translate-y-1 duration-300">
            <div className="w-[8px] md:w-[10px] bg-[#9BB73B] flex-shrink-0" />
            <div className="flex flex-col flex-1 bg-transparent">
                <div className="w-full relative h-[140px] sm:h-[160px] md:h-[180px]">
                    <img
                        src={award.image}
                        alt={award.title}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="pl-3 sm:pl-4 pr-1 pt-3 pb-2 flex-grow flex flex-col items-start bg-transparent">
                    <Text as="h4" className="text-[#000000] font-bold mb-1 leading-[1.2] text-[15px] sm:text-[16px] lg:text-[17px] xl:text-[18px] text-left">
                        {award.title}
                    </Text>
                    <Text className="text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] text-[#424242] leading-[1.4] font-medium text-left">
                        {award.description}
                    </Text>
                </div>
            </div>
        </div>
    )
}

export function AwardsSection() {
    return (
        <section className="w-full pt-10 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #dbebc7 0%, #ebf5df 40%, #ffffff 100%)' }}>
            <div className="w-full max-w-[1100px] mx-auto text-center px-4 md:px-0 relative">
                <Text as="h2" className="mb-6 lg:mb-8 mt-2 text-[#000000] font-light text-[28px] sm:text-[36px] md:text-[46px] lg:text-[52px] xl:text-[56px] tracking-normal uppercase">
                    AWARDS & <span className="font-semibold">ACHIEVEMENTS</span>
                </Text>

                <div className="relative w-full">
                    <GenericCarousel
                        options={{ align: "start", loop: true, slidesToScroll: 1, inViewThreshold: 1 }}
                        navigationClassName="!bg-black hover:bg-black/90 !rounded-none !w-7 !h-7 sm:!w-9 sm:!h-9 md:!w-11 md:!h-11 border-none !text-nirmal-yellow !opacity-100 !visible z-20 flex items-center justify-center top-[40%] -translate-y-1/2"
                        prevButtonClassName="!left-0 md:!left-2"
                        nextButtonClassName="!right-0 md:!right-2"
                        className="py-1 mx-auto w-full px-8 sm:px-12 md:px-16 lg:px-20"
                        slideClassName="flex-[0_0_100%] md:flex-[0_0_50%] px-1 sm:px-2 md:px-3"
                        iconStrokeWidth={4}
                    >
                        {awardsData.awards.map((award, index) => (
                            <div key={index} className="h-full w-[88%] sm:w-[90%] md:w-[calc(100%-24px)] mx-auto">
                                <AwardCard award={award} />
                            </div>
                        ))}
                    </GenericCarousel>
                </div>
            </div>
        </section>
    )
}
