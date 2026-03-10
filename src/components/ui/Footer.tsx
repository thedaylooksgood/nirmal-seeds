import * as React from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react"

export interface FooterLink {
    label: string
    href: string
    icon?: string | React.ReactNode
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
    const getIcon = (iconName?: string | React.ReactNode) => {
        if (!iconName) return null;
        if (typeof iconName !== 'string') return iconName;

        switch (iconName) {
            case 'map-pin': return <MapPin className="w-[14px] h-[14px]" strokeWidth={2.5} />;
            case 'phone': return <Phone className="w-[14px] h-[14px]" strokeWidth={2.5} />;
            case 'mail': return <Mail className="w-[14px] h-[14px]" strokeWidth={2.5} />;
            default: return null;
        }
    }

    return (
        <footer className="bg-[#028e4f] text-white pt-12">
            <div className="section-container pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {sections.map((section, index) => (
                        <div key={index} className={index > 0 ? "lg:flex lg:flex-col lg:items-center" : ""}>
                            <div className="w-full lg:w-fit">
                                <h4 className="text-[18px] sm:text-[20px] font-semibold mb-5 tracking-wide text-white">{section.title}</h4>
                                {section.links && (
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex} className={`flex ${link.icon ? 'items-start' : 'items-center'}`}>
                                            {link.icon ? (
                                                <div className="mr-3 flex-shrink-0 bg-white text-[#028e4f] p-[4px] sm:p-[5px] rounded-full mt-[2px]">
                                                    {getIcon(link.icon)}
                                                </div>
                                            ) : (
                                                <div className="mr-2 text-white text-[12px] sm:text-[13px] font-bold select-none leading-none pb-[1px] flex items-center justify-center">{'>'}</div>
                                            )}
                                            <Link
                                                href={link.href}
                                                className="text-[12px] sm:text-[13px] font-medium text-white hover:text-gray-200 transition-colors leading-[1.3] md:leading-[1.4]"
                                            >
                                                {link.label.split('\n').map((line, i) => (
                                                    <React.Fragment key={i}>
                                                        {line}{i < link.label.split('\n').length - 1 && <br />}
                                                    </React.Fragment>
                                                ))}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {section.content && (
                                <div className="text-[12px] sm:text-[13px] font-medium text-white/95 leading-[1.3] md:leading-[1.4] pr-2">
                                    {(typeof section.content === 'string')
                                        ? section.content.split('\n').map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}{i < (section.content as string).split('\n').length - 1 && <br />}
                                            </React.Fragment>
                                        ))
                                        : section.content
                                    }
                                </div>
                            )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#0b4728] border-t-0 py-5 text-white/[0.85] text-[12px] sm:text-[13px] font-medium">
                <div className="section-container flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-4 lg:space-y-0 px-4 lg:px-0">
                    <p className="tracking-wide text-center lg:text-left lg:max-w-[400px] leading-[1.6]">
                        {copyrightText.includes('Crafted by') ? (
                            <>
                                {copyrightText.split('Crafted by')[0]}
                                <br className="hidden lg:block" />
                                Crafted by{copyrightText.split('Crafted by')[1]}
                            </>
                        ) : (
                            copyrightText
                        )}
                    </p>
                    {/* Hardcoded bottom links based on design */}
                    <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-end items-center gap-x-3 sm:gap-x-4 lg:gap-x-6 gap-y-2 lg:w-auto">
                        <Link href="/" className="hover:text-white transition-colors whitespace-nowrap">Home</Link>
                        <Link href="/about" className="hover:text-white transition-colors whitespace-nowrap">Overview</Link>
                        <Link href="/products" className="hover:text-white transition-colors whitespace-nowrap">Products</Link>
                        <Link href="/department" className="hover:text-white transition-colors whitespace-nowrap">Department</Link>
                        <Link href="/csr" className="hover:text-white transition-colors whitespace-nowrap">CSR @ Nirmal</Link>
                        <Link href="/media" className="hover:text-white transition-colors whitespace-nowrap">Media</Link>
                        <Link href="/contact" className="hover:text-white transition-colors whitespace-nowrap">Contact Us</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
