import * as React from "react"
import { Text } from "@/components/ui/Text"
import { fieldCropsContentData } from "@/features/products-page/field-crops-data"
import Link from "next/link"

function CropCard({ crop }: { crop: typeof fieldCropsContentData.crops[0] }) {
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

export function FieldCropsContent() {
    const { crops } = fieldCropsContentData

    return (
        <>
            {/* Title & Description — White Background */}
            <section className="w-full bg-white py-10 sm:py-14 md:py-16">
                <div className="section-container">
                    {/* Title */}
                    <div className="text-center mb-5 md:mb-6">
                        <Text
                            as="h1"
                            className="text-[28px] sm:text-[34px] md:text-[40px] tracking-wide leading-tight inline-block border-b-[3px] border-nirmal-darkgreen pb-1"
                        >
                            <span className="font-light text-nirmal-green">
                                {fieldCropsContentData.title}{" "}
                            </span>
                            <span className="font-extrabold text-nirmal-green">
                                {fieldCropsContentData.titleHighlight}
                            </span>
                        </Text>
                    </div>

                    {/* Description */}
                    <p className="text-[12px] sm:text-[13px] text-[#444] leading-[1.8] text-justify">
                        {fieldCropsContentData.description}
                    </p>
                </div>
            </section>

            {/* Crop Cards Grid — Orange Gradient Background */}
            <section
                className="w-full py-10 sm:py-14 md:py-16 pb-20 sm:pb-28"
                style={{
                    background:
                        "linear-gradient(to bottom, #F5D57A 0%, #FFF0B7 35%, #ffffff 100%)",
                }}
            >
                <div className="section-container">
                    {/* Main 4-column grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-6">
                        {crops.slice(0, 8).map((crop, index) => (
                            <CropCard key={index} crop={crop} />
                        ))}
                    </div>

                    {/* Last row - centered */}
                    {crops.length > 8 && (
                        <div className="flex justify-center gap-x-5 mt-6">
                            {crops.slice(8).map((crop, index) => (
                                <div key={index} className="w-[calc(25%-15px)]">
                                    <CropCard crop={crop} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
