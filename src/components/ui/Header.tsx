"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
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
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    // Close menu when route changes
    React.useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Prevent scroll when menu is open
    React.useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
            <div className="section-container flex h-[74px] lg:h-[84px] items-center justify-between">

                {/* LOGO */}
                <Link
                    href="/"
                    className="flex-shrink-0 group py-2"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <div className="relative h-[58px] w-[58px] lg:h-[68px] lg:w-[68px] transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src="/nirmal-seeds-logo.png"
                            alt="Nirmal Seeds"
                            fill
                            sizes="(max-width: 1024px) 58px, 68px"
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* DESKTOP NAV — right aligned */}
                <nav className="hidden md:flex items-center h-full">
                    {navItems.map((item, index) => {
                        const active = item.href === "/"
                            ? pathname === "/"
                            : pathname.startsWith(item.href);

                        return (
                            <Link
                                key={index}
                                href={item.href}
                                className={cn(
                                    "relative h-full flex items-center px-6 lg:px-8",
                                    "text-[12px] lg:text-[13px] font-bold tracking-wider uppercase transition-all duration-300",
                                    active
                                        ? "bg-nirmal-green text-white"
                                        : "text-gray-700 hover:text-nirmal-green hover:bg-gray-50",
                                )}
                            >
                                <span className="relative z-10">{item.label}</span>

                                {active && (
                                    <span className="absolute bottom-0 left-0 w-full h-[4px] bg-nirmal-darkgreen/30" />
                                )}

                                {!active && (
                                    <span className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-0 h-[2px] bg-nirmal-green/40 rounded-full transition-all duration-300 group-hover:w-[40%]" />
                                )}
                            </Link>
                        )
                    })}
                </nav>

                {/* MOBILE MENU TOGGLE */}
                <button
                    className="md:hidden p-2 text-gray-700 hover:text-nirmal-green transition-colors focus:outline-none z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MOBILE NAVIGATION OVERLAY */}
            <div
                className={cn(
                    "fixed inset-0 top-[74px] z-40 bg-white transition-all duration-500 ease-in-out md:hidden flex flex-col",
                    isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                )}
            >
                <div className="flex flex-col p-6 space-y-4 overflow-y-auto h-full bg-gray-50/50">
                    {navItems.map((item, index) => {
                        const active = item.href === "/"
                            ? pathname === "/"
                            : pathname.startsWith(item.href);

                        return (
                            <Link
                                key={index}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={cn(
                                    "p-4 rounded-xl text-[16px] font-bold tracking-wide transition-all duration-300 flex items-center justify-between",
                                    active
                                        ? "bg-nirmal-green text-white shadow-md shadow-green-100"
                                        : "bg-white text-gray-800 hover:bg-white hover:text-nirmal-green border border-gray-100"
                                )}
                            >
                                {item.label}
                                {active && (
                                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                )}
                            </Link>
                        )
                    })}

                    {/* Brand Footer in Mobile Menu */}
                    <div className="mt-auto py-10 text-center">
                        <div className="relative h-16 w-16 mx-auto mb-4 opacity-50 grayscale">
                            <Image
                                src="/nirmal-seeds-logo.png"
                                alt="Nirmal Seeds"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-gray-400 text-xs tracking-widest uppercase">
                            Research Driven. Farmer Centric.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}
