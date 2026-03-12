import * as React from "react"
import { Text } from "@/components/ui/Text"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export interface ProductDetailProps {
    categoryName: string;
    categoryTitleHighlight?: string;
    sidebarLinks: {
        sectionTitle: string;
        links: {
            name: string;
            href: string;
            isActive: boolean;
            isSubCategory?: string; // e.g. "Hybrid Deshi (Arboreum) Cotton"
        }[]
    }[];
    product: {
        name: string;
        image: string;
        characteristics: { label: string; value: string }[];
        specialFeatures: string[];
    };
    prevLink?: string;
    nextLink?: string;
}

export function ProductDetailsContent({ categoryName, sidebarLinks, product, prevLink, nextLink }: ProductDetailProps) {
    return (
        <section
            className="w-full pt-4 pb-8 sm:pt-6 sm:pb-10 px-4"
            style={{
                background:
                    "linear-gradient(to bottom, #fee0a0 0%, #fee0a0 20%, #fef0c9 50%, #ffffff 100%)",
            }}
        >
            <div className="section-container max-w-2xl mx-auto flex flex-col md:flex-row gap-4 md:gap-6 items-start">

                {/* Sidebar */}
                <aside className="w-full md:w-[240px] lg:w-[260px] shrink-0">
                    <div className="bg-[#F8D24E] p-4 sm:p-5 shadow-sm sticky top-24">
                        <Text className="font-bold text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.4] mb-3 text-[#111]">
                            Explore<br />
                            {categoryName} Seed Varieties
                        </Text>
                        <div className="w-full h-[1.5px] bg-[#111] mb-4"></div>

                        <div className="space-y-4">
                            {sidebarLinks.map((section, idx) => (
                                <div key={idx} className="flex flex-col gap-4">
                                    {section.links.map((link, lIdx) => (
                                        <div key={lIdx} className="border-b border-black/10 pb-2.5 last:border-0 last:pb-0">
                                            {link.isSubCategory && (
                                                <Text className="text-[11px] sm:text-[12px] text-[#4a4a4a] mb-[2px] leading-[1.4]">
                                                    {link.isSubCategory}
                                                </Text>
                                            )}
                                            <Link href={link.href}>
                                                <Text className={`text-[13px] sm:text-[14px] font-bold leading-[1.4] transition-colors ${link.isActive ? 'text-[#e52125]' : 'text-[#365A9F] hover:text-[#111]'}`}>
                                                    {link.name.split('\n').map((line, i) => (
                                                        <React.Fragment key={i}>
                                                            {line}
                                                            {i !== link.name.split('\n').length - 1 && <br />}
                                                        </React.Fragment>
                                                    ))}
                                                </Text>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex-1 bg-white p-5 sm:p-6 shadow-sm rounded-sm">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                        <Text as="h1" className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#111] leading-[1.4]">
                            {product.name.replace('\n', ' ')}
                        </Text>
                        <div className="flex gap-2">
                            {prevLink ? (
                                <Link href={prevLink} className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:border-[#111] hover:text-[#111] hover:bg-gray-50 transition-colors">
                                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
                                </Link>
                            ) : (
                                <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-300 cursor-not-allowed">
                                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
                                </div>
                            )}
                            {nextLink ? (
                                <Link href={nextLink} className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:border-[#111] hover:text-[#111] hover:bg-gray-50 transition-colors">
                                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
                                </Link>
                            ) : (
                                <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-300 cursor-not-allowed">
                                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[250px] mb-4 overflow-hidden rounded-sm bg-gray-50 flex justify-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Characteristics */}
                    <div className="mb-3 pl-1">
                        <Text as="h3" className="text-[14px] sm:text-[15px] font-bold text-[#5EB533] mb-1 leading-[1.4]">
                            Characteristics
                        </Text>
                        <div className="w-full grid grid-cols-1">
                            {product.characteristics.map((char, idx) => (
                                <div key={idx} className="flex flex-col sm:flex-row gap-0 sm:gap-4 py-[1px] border-none">
                                    <Text className="text-[12px] sm:text-[13px] font-bold text-[#111] min-w-[180px] sm:min-w-[200px] leading-[1.4]">
                                        {char.label}
                                    </Text>
                                    <Text className="text-[12px] sm:text-[13px] text-[#333] leading-[1.4]">
                                        {char.value}
                                    </Text>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-[#D1A142] mb-3"></div>

                    {/* Special Features */}
                    <div className="mb-4 pl-1">
                        <Text as="h3" className="text-[14px] sm:text-[15px] font-bold text-[#5EB533] mb-1 leading-[1.4]">
                            Special features
                        </Text>
                        <ul className="space-y-[1px]">
                            {product.specialFeatures.map((feature, idx) => (
                                <li key={idx} className="flex gap-2 items-start">
                                    <span className="text-[#111] mt-[3px] leading-[1.4] text-[12px]">•</span>
                                    <Text className="text-[12px] sm:text-[13px] text-[#333] leading-[1.4]">
                                        {feature}
                                    </Text>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Download Button */}
                    <div className="pl-1">
                        <button className="bg-[#4CAF50] hover:bg-[#388E3C] text-white px-5 py-2 font-bold text-[12px] sm:text-[13px] transition-colors rounded-sm inline-flex items-center shadow-none">
                            Download PDF
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}
