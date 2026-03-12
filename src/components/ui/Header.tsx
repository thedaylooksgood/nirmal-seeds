"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export interface NavItem {
    label: string
    href: string
    isActive?: boolean
    children?: { label: string; href: string }[]
}

export interface HeaderProps {
    navItems: NavItem[]
}

export function Header({ navItems }: HeaderProps) {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [openMobileSubmenu, setOpenMobileSubmenu] = React.useState<string | null>(null);

    // Close menu when route changes
    React.useEffect(() => {
        setIsMenuOpen(false);
        setOpenMobileSubmenu(null);
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

    const toggleMobileSubmenu = (label: string) => {
        setOpenMobileSubmenu(openMobileSubmenu === label ? null : label);
    }

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
            <div className="w-full max-w-[1110px] mx-auto px-4 sm:px-6 lg:px-8 flex h-[74px] lg:h-[84px] items-center justify-between">

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
                        const isChildActive = item.children?.some(child => {
                            if (!child.href || child.href === "#" || child.href === "") return false;
                            // Check for exact match or sub-path match
                            return pathname === child.href || pathname.startsWith(child.href + "/");
                        });
                        const baseActive = item.href && item.href !== "#" && item.href !== ""
                            ? (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href))
                            : false;
                        const active = baseActive || isChildActive;

                        const hasChildren = item.children && item.children.length > 0;

                        return (
                            <div key={index} className="relative h-full group">
                                <Link
                                    href={hasChildren ? "#" : item.href}
                                    onClick={(e) => {
                                        if (hasChildren) {
                                            e.preventDefault();
                                        }
                                    }}
                                    className={cn(
                                        "relative h-full flex items-center px-3 lg:px-4 whitespace-nowrap",
                                        "text-[12px] lg:text-[13px] font-semibold tracking-wider uppercase transition-all duration-300",
                                        active
                                            ? "bg-[#3c8e00] text-white"
                                            : "text-gray-700 hover:text-[#3c8e00] hover:bg-gray-50",
                                    )}
                                >
                                    <span className="relative z-10 flex items-center gap-1">
                                        {item.label}
                                        {hasChildren && <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />}
                                    </span>
                                </Link>

                                {/* DESKTOP DROPDOWN */}
                                {hasChildren && (
                                    <div className="absolute top-full left-0 w-64 bg-white shadow-xl border border-gray-100 py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 rounded-b-lg">
                                        {item.children?.map((child, idx) => (
                                            <Link
                                                key={idx}
                                                href={child.href}
                                                className={cn(
                                                    "block px-7 py-3 text-[13px] lg:text-[15px] transition-colors duration-200 font-semibold",
                                                    pathname === child.href
                                                        ? "bg-[#3c8e00] text-white"
                                                        : "text-gray-700 hover:bg-[#3c8e00] hover:text-white"
                                                )}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </nav>

                {/* MOBILE MENU TOGGLE */}
                <button
                    className="md:hidden p-2 text-gray-700 hover:text-[#3c8e00] transition-colors focus:outline-none z-50"
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
                        const isChildActive = item.children?.some(child => {
                            if (!child.href || child.href === "#" || child.href === "") return false;
                            // Check for exact match or sub-path match
                            return pathname === child.href || pathname.startsWith(child.href + "/");
                        });
                        const baseActive = item.href && item.href !== "#" && item.href !== ""
                            ? (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href))
                            : false;
                        const active = baseActive || isChildActive;

                        const hasChildren = item.children && item.children.length > 0;
                        const isOpen = openMobileSubmenu === item.label;

                        return (
                            <div key={index} className="flex flex-col">
                                {hasChildren ? (
                                    <button
                                        onClick={() => toggleMobileSubmenu(item.label)}
                                        className={cn(
                                            "p-5 rounded-xl text-[18px] font-semibold tracking-wide transition-all duration-300 flex items-center justify-between",
                                            active || isOpen
                                                ? "bg-[#3c8e00] text-white shadow-md shadow-green-100"
                                                : "bg-white text-gray-800 border border-gray-100"
                                        )}
                                    >
                                        {item.label}
                                        <ChevronDown size={20} className={cn("transition-transform duration-300", isOpen && "rotate-180")} />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={cn(
                                            "p-5 rounded-xl text-[18px] font-semibold tracking-wide transition-all duration-300 flex items-center justify-between",
                                            active
                                                ? "bg-[#3c8e00] text-white shadow-md shadow-green-100"
                                                : "bg-white text-gray-800 border border-gray-100"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                )}

                                {/* MOBILE SUBMENU */}
                                {hasChildren && (
                                    <div className={cn(
                                        "overflow-hidden transition-all duration-300 ease-in-out flex flex-col pl-4 mt-2 space-y-2",
                                        isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                                    )}>
                                        {item.children?.map((child, idx) => (
                                            <Link
                                                key={idx}
                                                href={child.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={cn(
                                                    "p-4 rounded-lg text-[16px] font-semibold transition-all duration-300 flex items-center justify-between shadow-sm",
                                                    pathname === child.href
                                                        ? "bg-[#3c8e00] text-white shadow-md shadow-green-100"
                                                        : "bg-white text-gray-700 border border-gray-50 hover:text-[#3c8e00]"
                                                )}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
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

