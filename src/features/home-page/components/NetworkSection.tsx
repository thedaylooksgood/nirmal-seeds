import * as React from "react"
import { Text } from "@/components/ui/Text"
import { networkData } from "../data"
import { Users, MapPin, Globe, Truck } from "lucide-react"

const IconMap: Record<string, React.ReactNode> = {
    users: <Users className="h-[42px] w-[42px] text-nirmal-yellow mb-5" strokeWidth={1.5} />,
    "map-pin": <MapPin className="h-[42px] w-[42px] text-nirmal-yellow mb-5" strokeWidth={1.5} />,
    globe: <Globe className="h-[42px] w-[42px] text-nirmal-yellow mb-5" strokeWidth={1.5} />,
    truck: <Truck className="h-[42px] w-[42px] text-nirmal-yellow mb-5" strokeWidth={1.5} />
}

export function NetworkSection() {
    return (
        <section className="w-full pt-20 pb-24 bg-white">
            <div className="container mx-auto px-4 lg:px-8 text-center">
                {networkData.title.split('\n').map((line, i) => (
                    <Text
                        key={i}
                        as="h2"
                        className={`mb-1 tracking-wide text-[26px] sm:text-[32px] ${i === 0 ? "text-nirmal-green font-light" : "text-nirmal-darkgreen font-bold"}`}
                    >
                        {line}
                    </Text>
                ))}

                <Text className="mt-8 mb-16 text-gray-600 text-[14px] sm:text-[15px] font-medium max-w-2xl mx-auto leading-relaxed">
                    {networkData.description}
                </Text>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-center mb-16 w-full mt-2">
                    {networkData.stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-start text-center p-6 bg-transparent border-[1.5px] border-[#e0e0e0] rounded-sm relative mt-10">
                            <div className="w-[88px] h-[88px] absolute -top-[44px] bg-white border-[1.5px] border-[#e0e0e0] rounded-full flex items-center justify-center p-1">
                                <div className="w-full h-full border border-nirmal-yellow/30 rounded-full flex items-center justify-center">
                                    {IconMap[stat.icon]}
                                </div>
                            </div>
                            <div className="mt-12 w-full">
                                <Text as="h4" className="text-black font-extrabold text-[14px] leading-snug tracking-tight">
                                    {stat.title.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}<br />
                                        </React.Fragment>
                                    ))}
                                </Text>
                            </div>
                        </div>
                    ))}
                </div>

                <Text className="text-[12px] font-medium text-gray-500 max-w-3xl mx-auto italic">
                    * {networkData.footerText}
                </Text>
            </div>
        </section>
    )
}
