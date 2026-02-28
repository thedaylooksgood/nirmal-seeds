import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface NavItem {
    label: string
    href: string
    isActive?: boolean
}

export interface HeaderProps {
    navItems: NavItem[]
    logoPlaceholderText?: string
}

export function Header({ navItems, logoPlaceholderText = "NIRMAL SEEDS" }: HeaderProps) {
    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm h-16 lg:h-[76px]">
            <div className="container mx-auto flex h-full items-center justify-between px-4 lg:px-8">

                {/* LOGO */}
                <div className="flex h-full items-center py-2">
                    <Link href="/">
                        <div className="flex h-12 w-12 lg:h-[60px] lg:w-[60px] items-center justify-center border-2 lg:border-[2.5px] border-nirmal-darkgreen bg-white shadow-sm rounded-sm">
                            <span className="text-[7.5px] lg:text-[9px] leading-tight text-center font-extrabold text-nirmal-darkgreen uppercase">
                                {logoPlaceholderText.split(" ").map((w, i) => (
                                    <React.Fragment key={i}>
                                        {w}<br />
                                    </React.Fragment>
                                ))}
                            </span>
                        </div>
                    </Link>
                </div>

                {/* NAV */}
                <nav className="hidden md:flex flex-1 items-center justify-end h-full">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={cn(
                                "h-full flex items-center px-4 lg:px-6 text-[12.5px] lg:text-[13.5px] font-bold uppercase tracking-widest transition-colors duration-300",
                                item.isActive
                                    ? "bg-nirmal-green text-white"
                                    : "text-gray-800 hover:text-nirmal-green bg-transparent"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}
