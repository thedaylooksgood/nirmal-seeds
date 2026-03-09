import * as React from "react"
import { Text } from "@/components/ui/Text"
import { GenericCarousel } from "@/components/ui/GenericCarousel"
import { companyGlanceData } from "../data"

const IconMap: Record<string, React.ReactNode> = {
    chemistry: <img src="/images/home-page/company-at-a-glance-1.png" alt="Chemistry" className="h-[95px] md:h-[110px] w-auto object-contain" />,
    certificate: <img src="/images/home-page/company-at-a-glance-2.png" alt="Certificate" className="h-[95px] md:h-[110px] w-auto object-contain" />,
    farm: <img src="/images/home-page/company-at-a-glance-3.png" alt="Farm" className="h-[95px] md:h-[110px] w-auto object-contain" />
}

export function CompanyAtAGlance() {
    return (
        <section className="w-full">
            {/* Top White Section */}
            <div className="pt-24 pb-16 bg-white text-center">
                <div className="section-container flex flex-col items-center">
                    <Text as="h2" className="mb-10 text-[38px] sm:text-[44px] md:text-[50px] tracking-wide leading-tight relative uppercase">
                        <span className="text-nirmal-green font-light pr-3">COMPANY</span>
                        <span className="text-nirmal-darkgreen font-bold">AT A GLANCE</span>
                    </Text>

                    <div className="flex flex-col gap-5 text-[15px] sm:text-[18px] font-medium text-gray-700 leading-[1.6] max-w-5xl tracking-normal mx-auto px-6">
                        {companyGlanceData.description.split('\n\n').map((paragraph, i) => (
                            <p key={i}>
                                {paragraph.split('\n').map((line, j) => (
                                    <React.Fragment key={j}>
                                        {line}
                                        {j < paragraph.split('\n').length - 1 && <br className="hidden md:block" />}
                                    </React.Fragment>
                                ))}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Yellow Section with Carousel */}
            <div className="bg-nirmal-yellow py-8 relative">
                <div className="section-container relative z-10">
                    <GenericCarousel
                        options={{ align: "start", loop: true, slidesToScroll: 1 }}
                        navigationClassName="!bg-black !hover:bg-black/90 !rounded-none !w-8 !h-8 !md:w-9 !md:h-9 !border-none !text-nirmal-yellow shadow-xl disabled:hidden !opacity-100 absolute top-1/2 -translate-y-1/2 z-20"
                        className="py-1 px-4 md:px-12"
                        slideClassName="md:flex-[0_0_33.333%]"
                    >
                        {companyGlanceData.items.map((item, index) => (
                            <div key={index} className="flex h-full items-center justify-center relative">
                                <div className="flex flex-row items-center justify-center text-left h-full select-none gap-4 md:gap-5 px-4">
                                    <div className="flex-shrink-0">
                                        {IconMap[item.icon] || IconMap['chemistry']}
                                    </div>
                                    <div className="max-w-[260px]">
                                        <Text className="font-extrabold text-[#000000] text-[16px] sm:text-[21px] leading-[1.1] tracking-tight">
                                            {item.text.split('\n').map((line, i) => (
                                                <React.Fragment key={i}>
                                                    {line}{i < item.text.split('\n').length - 1 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </Text>
                                    </div>
                                </div>
                                {/* Vertical Divider - visible on desktop between items */}
                                {index < companyGlanceData.items.length - 1 && (
                                    <div className="hidden md:block absolute -right-[15px] top-1/2 -translate-y-1/2 w-[2px] h-[75px] bg-black/80" />
                                )}
                            </div>
                        ))}
                    </GenericCarousel>
                </div>
            </div>
        </section>
    )
}
