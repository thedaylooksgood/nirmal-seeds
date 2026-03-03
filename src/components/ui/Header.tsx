import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export interface NavItem {
    label: string
    href: string
    isActive?: boolean
}

export interface HeaderProps {
    navItems: NavItem[]
}

export function Header({ navItems }: HeaderProps) {
    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-gray-100">
            <div className="section-container flex h-[74px] lg:h-[84px] items-center justify-between">

                {/* LOGO */}
                <Link
                    href="/"
                    className="flex-shrink-0 group"
                >
                    <div className="relative h-[64px] w-[64px] lg:h-[76px] lg:w-[76px] transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src="/nirmal-seeds-logo.png"
                            alt="Nirmal Seeds"
                            fill
                            sizes="76px"
                            className="object-contain drop-shadow-sm"
                            priority
                        />
                    </div>
                </Link>

                {/* NAV — right aligned */}
                <nav className="hidden md:flex items-center h-full">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={cn(
                                "relative h-full flex items-center px-7 lg:px-9",
                                "text-[12px] lg:text-[13.5px] font-semibold tracking-[0.08em] transition-all duration-300",
                                item.isActive
                                    ? "bg-nirmal-green text-white"
                                    : "text-gray-800 hover:text-nirmal-green",
                                !item.isActive && "group/nav"
                            )}
                        >
                            {item.label}
                            {/* Animated underline on hover */}
                            {!item.isActive && (
                                <span className="absolute bottom-[18px] left-1/2 -translate-x-1/2 w-0 h-[2px] bg-nirmal-green rounded-full transition-all duration-300 group-hover/nav:w-[60%]" />
                            )}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}
