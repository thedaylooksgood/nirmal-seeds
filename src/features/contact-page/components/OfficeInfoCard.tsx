import * as React from "react"
import { locationSectionData } from "@/features/contact-page/data"

export function OfficeInfoCard() {
    const { officeInfo } = locationSectionData

    return (
        <div className="border-l-[3px] border-nirmal-green bg-gray-50 px-5 py-4 rounded-r-sm">
            <h4 className="text-[13px] sm:text-[14px] font-bold text-gray-900 mb-2">
                {officeInfo.title}
            </h4>

            <p className="text-[11.5px] sm:text-[12px] text-gray-600 leading-relaxed whitespace-pre-line mb-3">
                {officeInfo.address}
            </p>

            <p className="text-[11.5px] sm:text-[12px] text-gray-600 mb-1">
                <a
                    href={officeInfo.phoneHref}
                    className="hover:text-nirmal-green transition-colors"
                >
                    {officeInfo.phone}
                </a>
            </p>

            <p className="text-[11.5px] sm:text-[12px] text-gray-600 mb-4">
                <a
                    href={officeInfo.emailHref}
                    className="hover:text-nirmal-green transition-colors"
                >
                    {officeInfo.email}
                </a>
            </p>

            <a
                href={officeInfo.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-nirmal-darkgreen text-white text-[11.5px] sm:text-[12px] font-bold uppercase tracking-wider rounded-sm hover:bg-nirmal-green active:scale-[0.98] transition-all duration-200"
            >
                Get Direction
            </a>
        </div>
    )
}
