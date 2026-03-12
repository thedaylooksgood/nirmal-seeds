"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { contactFormFields } from "@/features/contact-page/data"

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [submitted, setSubmitted] = React.useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1200))
        setIsSubmitting(false)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <div>
            <h3 className="text-[16px] xl:text-[18px] font-bold text-[#111] mb-4 leading-none">
                Fill the form
            </h3>

            {submitted && (
                <div className="mb-4 rounded-none bg-nirmal-green/10 border border-nirmal-green/30 px-4 py-2 text-[13px] text-nirmal-darkgreen font-medium">
                    Thank you! Your message has been sent successfully.
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
                {contactFormFields.map((field) =>
                    field.type === "textarea" ? (
                        <textarea
                            key={field.name}
                            name={field.name}
                            placeholder={field.placeholder}
                            required
                            rows={3}
                            className={cn(
                                "w-full rounded-none border-0 bg-[#f0f0f0] px-4 py-3 text-[14px] text-[#444] placeholder:text-gray-500",
                                "outline-none ring-0 focus:ring-1 focus:ring-gray-300 transition-all duration-200",
                                "resize-none"
                            )}
                        />
                    ) : (
                        <input
                            key={field.name}
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            required
                            className={cn(
                                "w-full rounded-none border-0 bg-[#f0f0f0] px-4 py-3 text-[14px] text-[#444] placeholder:text-gray-500",
                                "outline-none ring-0 focus:ring-1 focus:ring-gray-300 transition-all duration-200"
                            )}
                        />
                    )
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                        "px-8 py-2.5 rounded-none bg-[#999999] text-white text-[14px] font-bold tracking-wide",
                        "hover:bg-[#888888] active:scale-[0.98] transition-all duration-200",
                        "disabled:opacity-60 disabled:cursor-not-allowed"
                    )}
                >
                    {isSubmitting ? "Sending..." : "Submit"}
                </button>
            </form>
        </div>
    )
}
