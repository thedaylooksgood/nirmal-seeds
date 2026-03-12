import * as React from "react"
import { Text } from "@/components/ui/Text"
import { ContactInfo } from "@/features/contact-page/components/ContactInfo"
import { ContactForm } from "@/features/contact-page/components/ContactForm"

export function ContactSection() {
    return (
        <section className="w-full bg-white py-10 sm:py-12 md:py-16">
            <div className="section-container">
                {/* Title */}
                <div className="text-center mb-10 md:mb-14">
                    <Text
                        as="h1"
                        className="text-[32px] sm:text-[38px] md:text-[46px] lg:text-[52px] tracking-wide leading-tight uppercase"
                    >
                        <span className="font-light text-nirmal-green">GET </span>
                        <span className="font-bold text-nirmal-green">IN TOUCH</span>
                    </Text>
                </div>

                {/* Two column layout: Info + Form */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-[1000px] mx-auto">
                    {/* Left - Contact Info */}
                    <div className="w-full lg:w-[50%]">
                        <ContactInfo />
                    </div>

                    {/* Right - Contact Form */}
                    <div className="w-full lg:w-[50%]">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
