import * as React from "react"
import { Text } from "@/components/ui/Text"
import { networkData } from "../data"

const IconMap: Record<string, React.ReactNode> = {
    users: <img src="/images/home-page/distribution-section-1.png" alt="Users" className="h-[70px] md:h-[80px] w-auto object-contain drop-shadow-[0px_0px_0.5px_#d99e00] contrast-125" />,
    "map-pin": <img src="/images/home-page/distribution-section-2.png" alt="Offices" className="h-[70px] md:h-[80px] w-auto object-contain drop-shadow-[0px_0px_0.5px_#d99e00] contrast-125" />,
    globe: <img src="/images/home-page/distribution-section-3.png" alt="Globe" className="h-[70px] md:h-[80px] w-auto object-contain drop-shadow-[0px_0px_0.5px_#d99e00] contrast-125" />,
    truck: <img src="/images/home-page/distribution-section-4.png" alt="Truck" className="h-[70px] md:h-[80px] w-auto object-contain drop-shadow-[0px_0px_0.5px_#d99e00] contrast-125" />
}

export function NetworkSection() {
    return (
        <section className="w-full pt-12 pb-12 bg-white overflow-hidden">
            <div className="flex flex-col items-center">
                {/* Heading */}
                <div className="text-center mb-6 lg:mb-8 w-full max-w-[1100px] flex flex-col items-center mx-auto px-4 lg:px-0">
                    {networkData.title.split('\n').map((line, i) => (
                        <Text
                            key={i}
                            as="h2"
                            className={`tracking-tight text-[36px] sm:text-[46px] md:text-[52px] xl:text-[56px] whitespace-nowrap leading-[1.1] uppercase text-nirmal-green ${i === 0 ? "font-light" : "font-semibold"}`}
                        >
                            {line}
                        </Text>
                    ))}
                </div>

                <div className="flex flex-col gap-4 text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] font-medium text-gray-700 leading-[1.6] max-w-5xl tracking-normal mx-auto px-6 text-center mb-8 md:mb-10">
                    {networkData.description.split('\n\n').map((paragraph, i) => (
                        <p key={i}>
                            {paragraph.split('\n').map((line, j) => (
                                <React.Fragment key={j}>
                                    {line}{j < paragraph.split('\n').length - 1 && <br className="hidden md:block" />}
                                </React.Fragment>
                            ))}
                        </p>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-0 justify-center mb-10 md:mb-12 w-full max-w-[1200px] mx-auto items-stretch relative px-4 lg:px-0">
                    {networkData.stats.map((stat, index) => (
                        <div key={index} className={`flex flex-col items-center justify-start text-center px-3 lg:px-4 relative h-full w-full ${index < networkData.stats.length - 1 ? 'lg:border-r-[2px] border-gray-400' : ''}`}>
                            <div className="flex-shrink-0 flex items-center justify-center h-[70px] md:h-[80px] mb-2 md:mb-4">
                                {IconMap[stat.icon]}
                            </div>

                            <div className="w-full">
                                <Text className="font-bold text-[#1f1f1f] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] leading-[1.2] tracking-normal block w-full max-w-[260px] mx-auto">
                                    {stat.title.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            <span className="whitespace-normal sm:whitespace-nowrap block">{line}</span>
                                        </React.Fragment>
                                    ))}
                                </Text>
                            </div>
                        </div>
                    ))}
                </div>

                <Text className="text-[14px] sm:text-[16px] font-medium text-gray-700 max-w-[650px] mx-auto opacity-100 leading-[1.2] text-center px-4">
                    {networkData.footerText}
                </Text>
            </div>
        </section>
    )
}
