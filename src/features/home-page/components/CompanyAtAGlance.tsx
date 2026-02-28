import * as React from "react"
import { Text } from "@/components/ui/Text"
import { GenericCarousel } from "@/components/ui/GenericCarousel"
import { companyGlanceData } from "../data"
import { FlaskConical, FileBadge, Layers } from "lucide-react"

const IconMap: Record<string, React.ReactNode> = {
    chemistry: <FlaskConical className="h-12 w-12 text-black" strokeWidth={1.5} />,
    certificate: <FileBadge className="h-12 w-12 text-black" strokeWidth={1.5} />,
    farm: <Layers className="h-12 w-12 text-black" strokeWidth={1.5} />
}

export function CompanyAtAGlance() {
    return (
        <section className="w-full">
            {/* Top White Section */}
            <div className="pt-20 pb-16 bg-white text-center">
                <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center">
                    <Text as="h2" className="mb-8 text-[36px] sm:text-[42px] tracking-wide relative">
                        <span className="text-nirmal-green font-light pr-2">COMPANY</span>
                        <span className="text-nirmal-darkgreen font-semibold">AT A GLANCE</span>
                    </Text>

                    <div className="flex flex-col gap-6 text-[13.5px] font-medium text-[#444] leading-relaxed max-w-4xl tracking-wide mx-auto">
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
            <div className="bg-nirmal-yellow py-6 relative border-y border-black/10">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <GenericCarousel
                        options={{ align: "start", loop: true, slidesToScroll: 1 }}
                        navigationClassName="bg-black hover:bg-black/90 !rounded-none w-8 h-8 md:w-10 md:h-10 text-nirmal-yellow shadow-md disabled:hidden !opacity-100"
                        className="py-1"
                        slideClassName="md:flex-[0_0_33.333%]"
                    >
                        {companyGlanceData.items.map((item, index) => (
                            <div key={index} className="flex flex-col sm:flex-row items-center justify-center sm:justify-center text-center sm:text-left px-2 sm:px-6 h-full border-r-[1.5px] border-black/30">
                                <div className="flex flex-row items-center justify-center md:justify-center text-left h-full select-none gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        {IconMap[item.icon] || <FlaskConical className="h-12 w-12 text-black" strokeWidth={1.5} />}
                                    </div>
                                    <Text className="font-extrabold text-black text-[14px] leading-snug tracking-tight">
                                        {item.text.split('\n').map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}<br />
                                            </React.Fragment>
                                        ))}
                                    </Text>
                                </div>
                            </div>
                        ))}
                    </GenericCarousel>
                </div>
            </div>
        </section>
    )
}
