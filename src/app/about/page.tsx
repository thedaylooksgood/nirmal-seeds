import { AboutHeroBanner } from "@/features/about-page/components/AboutHeroBanner"
import { AboutContent } from "@/features/about-page/components/AboutContent"
import { VisionMission } from "@/features/about-page/components/VisionMission"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us - Nirmal Seeds | Innovation That Empowers The Future",
    description:
        "Founded in 1988, Nirmal Seeds is one of India's most established seed research and development companies delivering hybrid seeds across 35+ crops.",
}

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col items-center w-full">
            <AboutHeroBanner />
            <AboutContent />
            <VisionMission />
        </main>
    )
}
