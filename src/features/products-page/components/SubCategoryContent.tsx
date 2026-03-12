import * as React from "react"
import { Text } from "@/components/ui/Text"
import Link from "next/link"

export interface ProductItem {
    name: string;
    image: string;
    href?: string;
}

export interface ProductSection {
    title: string;
    products: ProductItem[];
}

export interface SubCategoryContentProps {
    title: string;
    titleHighlight: string;
    sections: ProductSection[];
}

function ProductCard({ product }: { product: ProductItem }) {
    const CardContent = (
        <div className="bg-white rounded-sm p-2 pb-3 shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-md transition-shadow">
            <div className="w-full aspect-[4/3] sm:aspect-[4/3.5] overflow-hidden bg-gray-50 border border-gray-50">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="mt-3 px-1 flex-1 flex flex-col justify-start">
                <Text className="text-[#1a1a1a] font-bold text-[14px] sm:text-[15px] leading-tight">
                    {product.name.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                            {line}
                            {i !== product.name.split('\n').length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </Text>
            </div>
        </div>
    )

    if (product.href && product.href !== "#") {
        return (
            <Link href={product.href} className="group block h-full">
                {CardContent}
            </Link>
        )
    }

    return (
        <div className="group block h-full">
            {CardContent}
        </div>
    )
}

export function SubCategoryContent({ title, titleHighlight, sections }: SubCategoryContentProps) {
    return (
        <section
            className="w-full pt-12 pb-20 sm:pt-16 sm:pb-28"
            style={{
                background:
                    "linear-gradient(to bottom, #fee0a0 0%, #fee0a0 20%, #fef0c9 50%, #ffffff 100%)",
            }}
        >
            <div className="section-container max-w-6xl">
                {/* Title */}
                <div className="text-center mb-3 md:mb-6">
                    <Text
                        as="h1"
                        className="text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] tracking-tight leading-[1.1] mb-2 uppercase text-nirmal-green"
                    >
                        <span className="font-semibold pr-2 sm:pr-3">
                            {title}
                        </span>
                        <span className="font-light">
                            {titleHighlight}
                        </span>
                    </Text>
                </div>

                {/* Sections */}
                <div className="space-y-16 sm:space-y-20">
                    {sections.map((section, sIdx) => (
                        <div key={sIdx}>
                            {/* Section Header */}
                            <div className="flex justify-center mb-10 w-full">
                                <div className="flex items-center w-full max-w-[800px] justify-center">
                                    <div className="h-[1.5px] bg-[#C1A041] flex-grow max-w-[100px] sm:max-w-[150px]"></div>
                                    <div className="bg-[#565961] text-white px-6 py-2 sm:px-10 sm:py-2.5 rounded-full font-medium text-[15px] sm:text-[18px] lg:text-[20px] z-10 mx-[-2px] tracking-wide shadow-sm text-center min-w-[280px] sm:min-w-[400px] md:min-w-[480px]">
                                        {section.title}
                                    </div>
                                    <div className="h-[1.5px] bg-[#C1A041] flex-grow max-w-[100px] sm:max-w-[150px]"></div>
                                </div>
                            </div>

                            {/* Products Grid */}
                            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6">
                                {section.products.map((product, pIdx) => (
                                    <div key={pIdx} className="w-[calc(50%-8px)] sm:w-[calc(33.333%-14px)] md:w-[calc(25%-18px)] min-w-[150px] max-w-[280px]">
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
