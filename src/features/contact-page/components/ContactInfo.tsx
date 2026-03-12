import * as React from "react"
import { contactInfoData } from "@/features/contact-page/data"

export function ContactInfo() {
    return (
        <div className="space-y-8 mt-2">
            {/* Corporate Office */}
            <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 text-nirmal-green">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                        <path d="M12 21s-7.5-6.6-7.5-12a7.5 7.5 0 1 1 15 0c0 5.4-7.5 12-7.5 12z" />
                        <circle cx="12" cy="9" r="3" />
                        <line x1="12" y1="21" x2="12" y2="24" />
                        <path d="M4 21h16" />
                    </svg>
                </div>
                <div className="border-l-[1px] border-gray-300 pl-4 py-1">
                    <h3 className="text-[16px] xl:text-[18px] font-bold text-[#111] mb-1 leading-none">
                        {contactInfoData.office.title}
                    </h3>
                    <p className="text-[13px] xl:text-[14px] leading-relaxed whitespace-pre-line font-medium text-[#444]">
                        {contactInfoData.office.address}
                    </p>
                </div>
            </div>

            {/* Talk to Us */}
            <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 text-nirmal-green">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                        <path d="M14.05 6A5 5 0 0 1 18 10" />
                    </svg>
                </div>
                <div className="border-l-[1px] border-gray-300 pl-4 py-1">
                    <h3 className="text-[16px] xl:text-[18px] font-bold text-[#111] mb-1 leading-none">
                        {contactInfoData.phone.title}
                    </h3>
                    <a
                        href={contactInfoData.phone.href}
                        className="text-[13px] xl:text-[14px] font-medium text-[#444] hover:text-nirmal-green transition-colors"
                    >
                        {contactInfoData.phone.label}
                    </a>
                </div>
            </div>

            {/* Write to Us */}
            <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 text-nirmal-green">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                        <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                        <polyline points="3 7 12 13 21 7" />
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 10a2 2 0 1 0 2 2" />
                    </svg>
                </div>
                <div className="border-l-[1px] border-gray-300 pl-4 py-1">
                    <h3 className="text-[16px] xl:text-[18px] font-bold text-[#111] mb-1 leading-none">
                        {contactInfoData.email.title}
                    </h3>
                    <a
                        href={contactInfoData.email.href}
                        className="text-[13px] xl:text-[14px] font-medium text-[#444] hover:text-nirmal-green transition-colors"
                    >
                        {contactInfoData.email.label}
                    </a>
                </div>
            </div>
        </div>
    )
}
