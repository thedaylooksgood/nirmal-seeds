import * as React from "react"
import { Text } from "@/components/ui/Text"
import { productsContentData } from "@/features/products-page/data"

export function ProductsContent() {
    return (
        <section className="w-full bg-white py-14 sm:py-16 md:py-20">
            <div className="section-container">
                {/* Title */}
                <div className="text-center mb-6 md:mb-8">
                    <Text
                        as="h1"
                        className="text-[30px] sm:text-[38px] md:text-[46px] lg:text-[54px] tracking-wide leading-tight"
                    >
                        <span className="font-light text-[#333]">OUR </span>
                        <span className="font-extrabold text-nirmal-green">PRODUCTS</span>
                    </Text>
                </div>

                {/* Intro */}
                <p
                    className="text-[13px] sm:text-[14px] md:text-[15px] text-[#444] leading-[1.85] mb-10 md:mb-14 text-justify"
                    dangerouslySetInnerHTML={{
                        __html: productsContentData.introParagraph,
                    }}
                />

                {/* Product Categories */}
                <div className="space-y-14 md:space-y-20">
                    {productsContentData.categories.map((category, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
                        >
                            {/* Image */}
                            <div className="w-full lg:w-[45%] flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="w-full lg:w-[55%]">
                                <Text
                                    as="h2"
                                    className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-nirmal-darkgreen mb-1 leading-tight"
                                >
                                    {category.title}
                                </Text>
                                {category.subtitle && (
                                    <p className="text-[13px] text-nirmal-green font-medium mb-4">
                                        {category.subtitle}
                                    </p>
                                )}
                                <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#444] leading-[1.85] text-justify mb-5">
                                    {category.description}
                                </p>

                                {/* Crop tags */}
                                {category.crops && (
                                    <div className="flex flex-wrap gap-2">
                                        {category.crops.map((crop, cropIndex) => (
                                            <span
                                                key={cropIndex}
                                                className="px-3 py-1.5 bg-nirmal-lightgreen text-nirmal-darkgreen text-[11px] sm:text-[12px] font-semibold rounded-md"
                                            >
                                                {crop}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
