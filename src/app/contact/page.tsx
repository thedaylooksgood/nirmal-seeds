import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner"
import { contactHeroData } from "@/features/contact-page/data"
import { ContactSection } from "@/features/contact-page/components/ContactSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us - Nirmal Seeds | Get In Touch",
    description:
        "Get in touch with Nirmal Seeds. Visit our corporate office, call us, or fill out the form for any inquiries about our seed products and services.",
}

export default function ContactPage() {
    return (
        <main className="flex min-h-screen flex-col items-center w-full">
            <InnerPageHeroBanner 
                breadcrumb={contactHeroData.breadcrumb}
                backgroundImage={contactHeroData.backgroundImage}
            />
            <ContactSection />
        </main>
    )
}
