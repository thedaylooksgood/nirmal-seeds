import * as React from "react"
import { Text } from "@/components/ui/Text"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { productCategoriesData } from "../data"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export function ProductCategories() {
    return (
        <section className="w-full pt-10 pb-16 relative flex flex-col items-center overflow-hidden min-h-[auto]">
            {/* Background Gradients simulating grass/fields */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-nirmal-lightgreen/40 z-0"></div>
            <div className="absolute bottom-0 w-[120%] left-[-10%] h-[50%] bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2664&auto=format&fit=crop')] bg-cover bg-top opacity-30 z-0 mask-image-gradient"></div>

            <div className="section-container relative z-10 text-center flex flex-col items-center">
                <Text as="h2" className="mb-8 text-[36px] sm:text-[46px] md:text-[52px] lg:text-[56px] tracking-tight leading-[1.1] relative uppercase">
                    <span className="font-light text-[#b37a08] mr-3">PRODUCT</span>
                    <span className="text-[#b37a08]">CATEGORIES</span>
                </Text>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl lg:max-w-[1050px] mx-auto w-full mt-2">
                    {productCategoriesData.categories.map((category, index) => (
                        <Card
                            key={index}
                            className="rounded-sm border-0 border-b-4 border-b-transparent hover:border-b-nirmal-darkgreen transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col bg-white overflow-hidden relative group"
                        >
                            <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] overflow-hidden bg-[#fbfbfb]">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <CardHeader className="text-left py-3 px-4 md:px-5">
                                <CardTitle className="text-[17px] sm:text-[18px] lg:text-[20px] font-bold text-[#009b45] mb-1 group-hover:text-nirmal-darkgreen transition-colors leading-[1.2]">
                                    {category.title.split('\n').map((line, i, arr) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            {i < arr.length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </CardTitle>
                                {category.subtitle && (
                                    <div className="text-[12px] sm:text-[13px] lg:text-[14px] font-normal text-[#009b45] block mb-2 leading-[1.2]">
                                        {category.subtitle}
                                    </div>
                                )}
                                <div className="text-[12px] sm:text-[13px] md:text-[14px] text-[#222222] font-normal leading-[1.35] flex flex-col gap-[2px] mt-1">
                                    {category.description.split('\n\n').map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>
                            </CardHeader>

                            <div className="px-4 md:px-5 pb-4 pt-0 mt-auto text-left">
                                <Link href={category.link} className="inline-flex items-center justify-center w-8 h-8 rounded-full border-[1px] border-gray-400 text-gray-600 hover:bg-nirmal-darkgreen hover:border-nirmal-darkgreen hover:text-white transition-all">
                                    <ChevronRight className="w-[14px] h-[14px] ml-[1px]" />
                                </Link>
                            </div>
                        </Card>
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
