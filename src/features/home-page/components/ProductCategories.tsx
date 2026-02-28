import * as React from "react"
import { Text } from "@/components/ui/Text"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { productCategoriesData } from "../data"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export function ProductCategories() {
    return (
        <section className="w-full pt-16 pb-24 relative flex flex-col items-center overflow-hidden min-h-[700px]">
            {/* Background Gradients simulating grass/fields */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-nirmal-lightgreen/40 z-0"></div>
            <div className="absolute bottom-0 w-[120%] left-[-10%] h-[50%] bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2664&auto=format&fit=crop')] bg-cover bg-top opacity-30 z-0 mask-image-gradient"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center flex flex-col items-center">
                <Text as="h2" className="mb-12 text-nirmal-darkgreen text-[28px] sm:text-[34px] tracking-normal">
                    <span className="font-light text-[#8c8c8c] mr-2">PRODUCT</span>
                    <span className="font-bold">CATEGORIES</span>
                </Text>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl lg:max-w-[1050px] mx-auto w-full mt-2">
                    {productCategoriesData.categories.map((category, index) => (
                        <Card
                            key={index}
                            className="rounded-sm border-0 border-b-4 border-b-transparent hover:border-b-nirmal-darkgreen transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col bg-white overflow-hidden relative group"
                        >
                            <div className="relative w-full aspect-[4/3] overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <CardHeader className="text-left pb-4 pt-6 px-6">
                                <CardTitle className="text-[17px] font-extrabold text-nirmal-darkgreen mb-1 group-hover:text-nirmal-green transition-colors">
                                    {category.title}
                                </CardTitle>
                                {category.subtitle && (
                                    <em className="text-[13px] font-medium text-nirmal-green block mb-3">
                                        {category.subtitle}
                                    </em>
                                )}
                                <CardDescription className="text-[13px] text-gray-800 font-medium leading-relaxed">
                                    {category.description}
                                </CardDescription>
                            </CardHeader>

                            <div className="px-6 pb-6 pt-2 mt-auto text-left">
                                <Link href={category.link} className="inline-flex items-center justify-center w-8 h-8 rounded-full border-[1.5px] border-gray-400/60 text-gray-500 hover:bg-nirmal-darkgreen hover:border-nirmal-darkgreen hover:text-white transition-all">
                                    <ChevronRight className="w-[14px] h-[14px] ml-[2px]" />
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
