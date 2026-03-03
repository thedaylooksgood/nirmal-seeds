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
    return (
        <section
            className="relative w-full h-[260px] sm:h-[300px] md:h-[340px] flex items-end bg-gray-900 bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Green gradient overlay from bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-nirmal-green/80 via-nirmal-green/30 to-transparent" />

            {/* Breadcrumb */}
            <div className="section-container relative z-10 pb-6">
                <nav className="flex items-center space-x-2 text-white/90 text-[13px] sm:text-[14px] font-medium">
                    {breadcrumb.map((item, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && (
                                <span className="text-nirmal-yellow font-bold text-[16px]">
                                    &gt;
                                </span>
                            )}
                            <Link
                                href={item.href}
                                className="text-nirmal-yellow hover:text-white transition-colors tracking-wide"
                            >
                                {item.label}
                            </Link>
                        </React.Fragment>
                    ))}
                </nav>
            </div>
        </section>
    )
}
