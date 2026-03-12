import * as React from "react"
import { Text } from "@/components/ui/Text"
import { GenericCarousel } from "@/components/ui/GenericCarousel"
import { companyGlanceData } from "../data"
import { cn } from "@/lib/utils"

const IconMap: Record<string, React.ReactNode> = {
    chemistry: <img src="/images/home-page/company-at-a-glance-1.png" alt="Chemistry" className="h-[65px] md:h-[75px] w-auto object-contain" />,
    certificate: <img src="/images/home-page/company-at-a-glance-2.png" alt="Certificate" className="h-[65px] md:h-[75px] w-auto object-contain" />,
    farm: <img src="/images/home-page/company-at-a-glance-3.png" alt="Farm" className="h-[65px] md:h-[75px] w-auto object-contain" />
}

export function CompanyAtAGlance() {
    return (
        <section className="w-full">
            {/* Top White Section */}
            <div className="pt-12 pb-5 bg-white text-center">
                <div className="section-container flex flex-col items-center">
                    <Text as="h2" className="mb-4 text-[28px] sm:text-[36px] md:text-[46px] lg:text-[52px] xl:text-[56px] tracking-tight leading-[1.1] relative uppercase text-nirmal-green">
                        <span className="font-light pr-2 sm:pr-3">COMPANY</span>
                        <span className="font-semibold">AT A GLANCE</span>
                    </Text>

                    <div className="flex flex-col gap-3 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[17px] font-medium text-[#111] leading-[1.3] sm:leading-[1.2] max-w-5xl tracking-normal mx-auto px-4 sm:px-6 text-center">
                        {companyGlanceData.description.split('\n\n').map((paragraph, i) => (
                            <p key={i}>
                                {paragraph.split('\n').map((line, j) => (
                                    <React.Fragment key={j}>
                                        {line}{j < paragraph.split('\n').length - 1 && <br className="hidden md:block" />}
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
                        options={{ 
                            align: "start", 
                            loop: true, 
                            slidesToScroll: 1,
                            breakpoints: {
                                '(min-width: 768px)': { slidesToScroll: 3 }
                            }
                        }}
                        navigationClassName="!bg-black hover:bg-black/90 !rounded-none !w-9 !h-9 sm:!w-11 sm:!h-11 !border-none !text-nirmal-yellow !opacity-100 !visible z-20 flex items-center justify-center"
                        prevButtonClassName="!left-0"
                        nextButtonClassName="!right-0"
                        className="py-2 px-10 sm:px-14 md:px-16 lg:px-20 mx-auto w-full max-w-[1100px]"
                        slideClassName="md:flex-[0_0_33.333%] !pl-2"
                        iconStrokeWidth={4}
                    >
                        {companyGlanceData.items.map((item, index) => (
                            <div key={index} className="flex h-full items-center justify-center relative">
                                <div className={cn(
                                    "flex flex-row items-center text-left h-full select-none gap-3 lg:gap-4 px-2 w-fit md:w-full mx-auto md:mx-0"
                                )}>
                                    <div className="flex-shrink-0">
                                        {IconMap[item.icon] || IconMap['chemistry']}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <Text className="font-extrabold text-[#000000] text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] leading-[1.3] tracking-tight block">
                                            {item.text.split('\n').map((line, i) => (
                                                <React.Fragment key={i}>
                                                    <span className="whitespace-nowrap block">{line}</span>
                                                </React.Fragment>
                                            ))}
                                        </Text>
                                    </div>
                                </div>
                                {/* Vertical Divider - visible on desktop, exactly 2 between 3 items */}
                                {index % 3 !== 2 && (
                                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1.5px] h-[75px] lg:h-[85px] bg-black/90 z-10" />
                                )}
                            </div>
                        ))}
                    </GenericCarousel>
                </div>
            </div>
        </section>
    )
}
