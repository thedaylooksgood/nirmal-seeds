import * as React from "react"
import Link from "next/link"

export interface BreadcrumbItem {
    label: string
    href: string
}

export interface InnerPageHeroBannerProps {
    breadcrumb: BreadcrumbItem[]
    backgroundImage: string
}

export function InnerPageHeroBanner({ breadcrumb, backgroundImage }: InnerPageHeroBannerProps) {
    // Filter out "Home" as it's not shown in the reference image
    const filteredBreadcrumb = breadcrumb.filter(
        (item) => item.label.toLowerCase() !== "home"
    )

    return (
        <section
            className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] flex items-end bg-gray-100 bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{
                backgroundImage: `url('${backgroundImage}')`,
            }}
        >
            {/* NO OVERLAY on the image - as requested */}

            {/* Solid Green Breadcrumb Bar at the bottom */}
            <div className="w-full bg-[#65b32e] py-2 z-10">
                <div className="section-container px-4">
                    <nav className="flex items-center justify-start space-x-3 text-white text-[14px] font-bold">
                        {filteredBreadcrumb.map((item, index) => (
                            <React.Fragment key={index}>
                                {index > 0 && (
                                    <span className="text-white font-bold">
                                        &gt;
                                    </span>
                                )}
                                <Link
                                    href={item.href}
                                    className="text-white hover:text-white/80 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            </React.Fragment>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    )
}
