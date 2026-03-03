import * as React from "react"
import Link from "next/link"
import { locationHeroData } from "@/features/contact-page/data"

export function LocationHeroBanner() {
    return (
        <section
            id="locations"
            className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] flex items-center justify-center bg-gray-900 bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{
                backgroundImage: `url(${locationHeroData.backgroundImage})`,
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Large location pin in center */}
            <div className="relative z-10 flex flex-col items-center">
                <svg
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 drop-shadow-xl"
                    viewBox="0 0 64 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Pin body */}
                    <path
                        d="M32 0C14.327 0 0 14.327 0 32c0 24 32 48 32 48s32-24 32-48C64 14.327 49.673 0 32 0z"
                        fill="#E53E3E"
                    />
                    {/* Inner circle */}
                    <circle cx="32" cy="28" r="12" fill="#C53030" />
                    <circle cx="32" cy="28" r="8" fill="white" />
                    {/* Highlight */}
                    <ellipse cx="26" cy="20" rx="4" ry="6" fill="white" opacity="0.3" />
                </svg>
            </div>

            {/* Green breadcrumb bar at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-nirmal-green py-2.5">
                <div className="section-container">
                    <nav className="flex items-center space-x-2 text-white/90 text-[12px] sm:text-[13px] font-medium">
                        {locationHeroData.breadcrumb.map((item, index) => (
                            <React.Fragment key={index}>
                                {index > 0 && (
                                    <span className="text-nirmal-yellow font-bold text-[14px]">
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
            </div>
        </section>
    )
}
