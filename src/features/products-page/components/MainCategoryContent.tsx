import * as React from "react"
import { Text } from "@/components/ui/Text"
import Link from "next/link"

export interface CropSummary {
    name: string;
    image: string;
    href: string;
}

export interface MainCategoryContentProps {
    title: string;
    titleHighlight: string;
    description: string;
    crops: CropSummary[];
}

function CropCard({ crop }: { crop: CropSummary }) {
    return (
        <Link href={crop.href} className="group block">
            <div className="bg-white rounded-sm p-2 pb-3 shadow-sm border border-gray-100">
                <div className="w-full h-[140px] sm:h-[160px] overflow-hidden">
                    <img
                        src={crop.image}
                        alt={crop.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <Text className="text-nirmal-green font-bold text-[13px] sm:text-[14px] mt-2 pl-1">
                    {crop.name}
                </Text>
            </div>
        </Link>
    )
}

export function MainCategoryContent({ title, titleHighlight, description, crops }: MainCategoryContentProps) {
    return (
        <>
            {/* Title & Description — White Background */}
            <section className="w-full bg-white py-10 sm:py-14 md:py-16">
                <div className="section-container">
                    {/* Title */}
                    <div className="flex justify-center mb-6 md:mb-8">
                        <div className="inline-block border-b-[2px] border-[#c9a84c] pb-3 px-2 md:px-4">
                            <Text
                                as="h1"
                                className="text-[28px] sm:text-[36px] md:text-[46px] lg:text-[52px] xl:text-[56px] tracking-tight leading-[1.1] uppercase text-nirmal-green text-center"
                            >
                                <span className="font-light pr-2 sm:pr-3">
                                    {title}
                                </span>
                                <span className="font-medium">
                                    {titleHighlight}
                                </span>
                            </Text>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-[14px] sm:text-[16px] leading-[1.4] text-justify font-medium text-[#111]">
                        {description}
                    </p>
                </div>
            </section>

            {/* Crop Cards Grid — Yellow Gradient Background */}
            <section
                className="w-full py-10 sm:py-14 md:py-16 pb-20 sm:pb-28"
                style={{
                    background:
                        "linear-gradient(to bottom, #fee0a0 0%, #fee0a0 20%, #fef0c9 50%, #ffffff 100%)",
                }}
            >
                <div className="section-container">
                    {/* Unified responsive grid for all crops */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-6">
                        {crops.map((crop, index) => (
                            <CropCard key={index} crop={crop} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
