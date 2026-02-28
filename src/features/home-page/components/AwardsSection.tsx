import * as React from "react"
import { Text } from "@/components/ui/Text"
import { GenericCarousel } from "@/components/ui/GenericCarousel"
import { awardsData } from "../data"
import { Card, CardContent } from "@/components/ui/Card"

function AwardCard({ award }: { award: typeof awardsData.awards[0] }) {
    return (
        <Card className="rounded-sm shadow-[0_2px_10px_rgb(0,0,0,0.1)] overflow-hidden flex flex-col h-full bg-white transition-transform hover:-translate-y-1 duration-300 border-[0.5px] border-gray-100">
            <div className="h-40 w-full relative">
                <img
                    src={award.image}
                    alt={award.title}
                    className="object-cover w-full h-full"
                />
            </div>
            <CardContent className="p-5 flex-grow flex flex-col pt-5">
                <Text as="h4" className="text-nirmal-darkgreen font-bold mb-2 leading-tight text-[15px]">{award.title}</Text>
                <Text className="text-[13px] text-gray-600 leading-relaxed font-medium">
                    {award.description}
                </Text>
            </CardContent>
        </Card>
    )
}

export function AwardsSection() {
    return (
        <section className="w-full py-20 bg-gradient-to-b from-nirmal-lightgreen via-white to-white relative pb-28">
            <div className="container mx-auto max-w-4xl text-center px-4">
                <Text as="h2" className="mb-14 text-nirmal-darkgreen font-light text-[28px] sm:text-[32px] tracking-normal">
                    <span className="text-[#595959]">AWARDS &</span>
                    <span className="font-bold ml-2">ACHIEVEMENTS</span>
                </Text>

                <div className="px-4 md:px-10 relative">
                    <GenericCarousel
                        options={{ align: "start", loop: true }}
                        navigationClassName="bg-black hover:bg-black/80 rounded-sm w-7 h-7 sm:w-8 sm:h-8 text-white"
                    >
                        {awardsData.awards.map((award, index) => (
                            <div key={index} className="w-full md:w-1/2 p-2 h-full">
                                <AwardCard award={award} />
                            </div>
                        ))}
                    </GenericCarousel>
                </div>
            </div>
        </section>
    )
}
