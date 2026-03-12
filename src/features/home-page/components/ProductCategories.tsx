"use client"

import * as React from "react"
import { Text } from "@/components/ui/Text"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { GenericCarousel } from "@/components/ui/GenericCarousel"
import { productCategoriesData } from "../data"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

function ProductCard({ category }: { category: typeof productCategoriesData.categories[0] }) {
    return (
        <Card
            className="rounded-sm border-0 border-b-4 border-b-transparent hover:border-b-nirmal-darkgreen transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col bg-white overflow-hidden relative group h-full"
        >
            <div className="relative w-full h-[180px] sm:h-[200px] md:h-[240px] lg:h-[280px] overflow-hidden bg-[#fbfbfb]">
                <img
                    src={category.image}
                    alt={category.title}
                    className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
            </div>

            <CardHeader className="text-left py-3 px-4 md:px-5">
                <CardTitle className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-bold text-[#009b45] mb-1 group-hover:text-nirmal-darkgreen transition-colors leading-[1.2]">
                    {category.title.split('\n').map((line, i, arr) => (
                        <React.Fragment key={i}>
                            {line}
                            {i < arr.length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </CardTitle>
                {category.subtitle && (
                    <div className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-normal text-[#009b45] block mb-2 leading-[1.2]">
                        {category.subtitle}
                    </div>
                )}
                <div className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-[#222222] font-normal leading-[1.35] flex flex-col gap-[2px] mt-1">
                    {category.description.split('\n\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </div>
            </CardHeader>

            <div className="px-4 md:px-5 pb-4 pt-0 mt-auto text-left">
                <Link href={category.link} className="inline-flex items-center justify-center w-8 h-8 rounded-full border-[1px] border-gray-400 text-[#111] hover:bg-nirmal-darkgreen hover:border-nirmal-darkgreen hover:text-white transition-all">
                    <ChevronRight className="w-[14px] h-[14px] ml-[1px]" />
                </Link>
            </div>
        </Card>
    )
}

export function ProductCategories() {
    return (
        <section className="w-full pt-8 sm:pt-10 pb-12 sm:pb-16 relative flex flex-col items-center overflow-hidden min-h-[auto]">
            {/* Background Gradients simulating grass/fields */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-nirmal-lightgreen/40 z-0"></div>
            <div className="absolute bottom-0 w-[120%] left-[-10%] h-[50%] bg-[url('/images/home-page/hero-banner.png')] bg-cover bg-top opacity-30 z-0 mask-image-gradient"></div>

            <div className="section-container relative z-10 text-center flex flex-col items-center w-full">
                <Text as="h2" className="mb-6 sm:mb-8 text-[28px] sm:text-[36px] md:text-[46px] lg:text-[52px] xl:text-[56px] tracking-tight leading-[1.1] relative uppercase">
                    <span className="font-light text-[#b37a08] mr-2 sm:mr-3">PRODUCT</span>
                    <span className="text-[#b37a08]">CATEGORIES</span>
                </Text>

                {/* Mobile: Carousel */}
                <div className="md:hidden w-full">
                    <GenericCarousel
                        options={{ align: "center", loop: true, slidesToScroll: 1 }}
                        navigationClassName="!bg-black hover:bg-black/90 !rounded-none !w-9 !h-9 !border-none !text-white !opacity-100 !visible z-20 flex items-center justify-center"
                        prevButtonClassName="!left-1"
                        nextButtonClassName="!right-1"
                        className="py-2 px-10 mx-auto w-full"
                        slideClassName="flex-[0_0_100%]"
                        iconStrokeWidth={3}
                    >
                        {productCategoriesData.categories.map((category, index) => (
                            <div key={index} className="h-full w-[85%] sm:w-[75%] mx-auto">
                                <ProductCard category={category} />
                            </div>
                        ))}
                    </GenericCarousel>
                </div>

                {/* Desktop: Grid */}
                <div className="hidden md:grid grid-cols-3 gap-6 md:gap-8 max-w-5xl lg:max-w-[1050px] mx-auto w-full mt-2">
                    {productCategoriesData.categories.map((category, index) => (
                        <ProductCard key={index} category={category} />
                    ))}
                </div>
            </div>

            {/* Simple inline style hack to fade the fake grass image */}
            <style dangerouslySetInnerHTML={{
                __html: `
          .mask-image-gradient {
            -webkit-mask-image: linear-gradient(to top, black 0%, transparent 100%);
            mask-image: linear-gradient(to top, black 0%, transparent 100%);
          }
        `}} />
        </section>
    )
}
