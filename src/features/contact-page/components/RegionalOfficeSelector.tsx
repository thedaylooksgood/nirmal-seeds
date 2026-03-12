"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { stateOptions, districtOptions } from "@/features/contact-page/data"

export function RegionalOfficeSelector() {
    const [selectedState, setSelectedState] = React.useState("")
    const [selectedDistrict, setSelectedDistrict] = React.useState("")

    const availableDistricts = selectedState
        ? districtOptions[selectedState] || []
        : []

    const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedState(e.target.value)
        setSelectedDistrict("")
    }

    const selectClasses = cn(
        "w-full appearance-none rounded-sm border border-gray-300 bg-white px-4 py-2.5",
        "text-[12.5px] sm:text-[13px] text-[#111] placeholder:text-gray-400",
        "outline-none focus:ring-2 focus:ring-nirmal-green/40 focus:border-nirmal-green/50 transition-all duration-200",
        "cursor-pointer"
    )

    return (
        <div className="space-y-3">
            <h3 className="text-[13px] sm:text-[14px] font-bold text-gray-900">
                Select Regional Office
            </h3>

            {/* State dropdown */}
            <div className="relative">
                <select
                    value={selectedState}
                    onChange={handleStateChange}
                    className={selectClasses}
                >
                    <option value="">State</option>
                    {stateOptions.map((state) => (
                        <option key={state} value={state}>
                            {state}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                        className="w-4 h-4 text-[#111]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>

            {/* District dropdown */}
            <div className="relative">
                <select
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    disabled={!selectedState}
                    className={cn(selectClasses, !selectedState && "opacity-60 cursor-not-allowed")}
                >
                    <option value="">District</option>
                    {availableDistricts.map((district) => (
                        <option key={district} value={district}>
                            {district}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                        className="w-4 h-4 text-[#111]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}
