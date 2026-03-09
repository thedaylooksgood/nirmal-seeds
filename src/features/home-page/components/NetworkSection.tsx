import * as React from "react"
import { Text } from "@/components/ui/Text"
import { networkData } from "../data"

const IconMap: Record<string, React.ReactNode> = {
    users: <img src="/images/home-page/distribution-section-1.png" alt="Users" className="h-[80px] md:h-[100px] w-auto object-contain" />,
    "map-pin": <img src="/images/home-page/distribution-section-2.png" alt="Offices" className="h-[80px] md:h-[100px] w-auto object-contain" />,
    globe: <img src="/images/home-page/distribution-section-3.png" alt="Globe" className="h-[80px] md:h-[100px] w-auto object-contain" />,
    truck: <img src="/images/home-page/distribution-section-4.png" alt="Truck" className="h-[80px] md:h-[100px] w-auto object-contain" />
}

export function NetworkSection() {
    return (
        <section className="w-full pt-20 pb-24 bg-white overflow-hidden">
            <div className="flex flex-col items-center">
                {/* Heading - wider container to prevent unwanted wrapping */}
                {/* Heading - wide container to match design proportions */}
                <div className="text-center mb-8 px-4 max-w-[1300px] flex flex-col items-center">
                    {networkData.title.split('\n').map((line, i) => (
                        <Text
                            key={i}
                            as="h2"
                            className={`tracking-tight text-[30px] sm:text-[42px] md:text-[52px] lg:text-[64px] whitespace-nowrap leading-[1.1] ${i === 0 ? "text-nirmal-green font-light" : "text-nirmal-darkgreen font-extrabold"}`}
                        >
                            {line}
                        </Text>
                    ))}
                </div>

                <Text className="mb-16 text-gray-700 text-[15px] md:text-[18px] font-medium max-w-4xl px-8 text-center leading-[1.4]">
                    {networkData.description}
                </Text>

                {/* Main Content Grid - wider container to align with heading ends (blue lines) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-0 justify-center mb-20 w-full max-w-[1300px] mx-auto items-start relative px-4">
                    {networkData.stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-start text-center px-4 relative h-full">
                            {/* Vertical divider for desktop - shows after columns 1, 2, 3 */}
                            {index < networkData.stats.length - 1 && (
                                <div className="hidden lg:block absolute -right-[0.5px] top-1/2 -translate-y-1/2 w-[1px] h-[110px] bg-gray-200" />
                            )}
                            
                            <div className="flex-shrink-0 flex items-center justify-center h-[110px] md:h-[130px] mb-2">
                                {IconMap[stat.icon]}
                            </div>
                            
                            <div className="w-full">
                                <Text className="text-black font-extrabold text-[16px] sm:text-[21px] leading-[1.2] tracking-tight text-center max-w-[280px] mx-auto">
                                    {stat.title.split('\n').map((line, i) => (
                                        <div key={i} className="font-extrabold block">
                                            {line}
                                        </div>
                                    ))}
                                </Text>
                            </div>
                        </div>
                    ))}
                </div>

                <Text className="text-[14px] sm:text-[16px] font-medium text-gray-700 max-w-4xl mx-auto italic opacity-90 leading-relaxed text-center px-4">
                    {networkData.footerText}
                </Text>
            </div>
        </section>
    )
}
