import * as React from "react"
import Link from "next/link"

export interface FooterLink {
    label: string
    href: string
    icon?: React.ReactNode
}

export interface FooterSection {
    title: string
    links?: FooterLink[]
    content?: React.ReactNode
}

export interface FooterProps {
    sections: FooterSection[]
    copyrightText: string
    bottomLinks?: { label: string; href: string }[]
}

export function Footer({ sections, copyrightText, bottomLinks }: FooterProps) {
    return (
        <footer className="bg-nirmal-darkgreen text-white pt-16">
            <div className="section-container pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h4 className="text-[15px] font-bold mb-6 tracking-wide text-white">{section.title}</h4>
                            {section.links && (
                                <ul className="space-y-4">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex} className="flex items-start">
                                            {link.icon && <span className="mr-2 mt-0.5">{link.icon}</span>}
                                            <Link
                                                href={link.href}
                                                className="text-[13px] font-medium text-white/80 hover:text-white transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {section.content && (
                                <div className="text-[13px] font-medium text-white/80 mt-4 space-y-2 leading-relaxed pr-4">
                                    {section.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#084821] border-t border-white/10 py-5 text-white/70 text-[12px] font-medium">
                <div className="section-container flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="tracking-wide">{copyrightText}</p>
                    {/* Hardcoded bottom links based on design */}
                    <div className="flex flex-wrap space-x-4 sm:space-x-6">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                        <Link href="/management" className="hover:text-white transition-colors">Management</Link>
                        <Link href="/products" className="hover:text-white transition-colors">Products</Link>
                        <Link href="/patent" className="hover:text-white transition-colors">Patent</Link>
                        <Link href="/csr" className="hover:text-white transition-colors">CSR & R&D</Link>
                        <Link href="/media" className="hover:text-white transition-colors">Media</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
