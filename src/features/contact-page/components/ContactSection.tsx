import * as React from "react"
import { Text } from "@/components/ui/Text"
import { ContactInfo } from "@/features/contact-page/components/ContactInfo"
import { ContactForm } from "@/features/contact-page/components/ContactForm"

export function ContactSection() {
    return (
        <section className="w-full bg-white py-10 sm:py-12 md:py-16">
            <div className="section-container">
                {/* Title */}
                <div className="text-center mb-10 md:mb-12">
                    <Text
                        as="h1"
                        className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-bold tracking-wide leading-tight !text-[#333]"
                    >
                        GET{" "}
                        <span className="italic font-bold text-nirmal-darkgreen">
                            IN TOUCH
                        </span>
                    </Text>
                    <div className="w-20 h-[3px] bg-nirmal-yellow mx-auto mt-3 rounded-full" />
                </div>

                {/* Two column layout: Info + Form */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 max-w-4xl mx-auto">
                    {/* Left - Contact Info */}
                    <div className="w-full lg:w-[42%]">
                        <ContactInfo />
                    </div>

                    {/* Right - Contact Form */}
                    <div className="w-full lg:w-[58%]">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
