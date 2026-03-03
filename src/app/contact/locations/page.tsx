import { LocationHeroBanner } from "@/features/contact-page/components/LocationHeroBanner"
import { WeAreHereSection } from "@/features/contact-page/components/WeAreHereSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Locations - Nirmal Seeds | We Are Here",
    description:
        "Find Nirmal Seeds regional offices across India. Browse by state and district to find office locations, contact details, and directions.",
}

export default function LocationsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center w-full">
            <LocationHeroBanner />
            <WeAreHereSection />
        </main>
    )
}
