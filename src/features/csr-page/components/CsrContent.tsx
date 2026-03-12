import * as React from "react"
import { Text } from "@/components/ui/Text"
import { csrContentData, communityData, environmentData } from "@/features/csr-page/data"

export function CsrContent() {
    return (
        <React.Fragment>
            {/* SECTION 1: Soil, Nutrition & Knowledge Transfer */}
            <section className="w-full bg-white pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-10">
                <div className="section-container max-w-6xl mx-auto px-4 sm:px-6">
                    {/* Main Title */}
                    <div className="max-w-5xl mx-auto text-center mb-5 sm:mb-6">
                        <Text
                            as="h1"
                            className="text-[32px] sm:text-[42px] md:text-[50px] lg:text-[56px] tracking-tight leading-[1.1] uppercase text-[#3c8e00]"
                        >
                            <span className="font-light pr-2">
                                {csrContentData.title}
                            </span>
                            <span className="font-semibold">
                                {csrContentData.titleHighlight}
                            </span>
                        </Text>
                    </div>

                    {/* Subtitle & Paragraphs */}
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-[17px] sm:text-[19px] md:text-[21px] font-bold text-[#111] mb-2">
                            {csrContentData.subtitle}
                        </h2>

                        <div className="flex flex-col gap-2 mb-4 sm:mb-5">
                            {csrContentData.paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.4] text-justify font-medium text-[#111]"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Image */}
                        <div className="w-full rounded-sm overflow-hidden shadow-sm aspect-[3/1] sm:aspect-[21/6] max-h-[250px]">
                            <img
                                src={csrContentData.image}
                                alt={csrContentData.imageAlt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Community & Well-Being */}
            <section
                className="w-full py-6 sm:py-8"
                style={{ background: "linear-gradient(180deg, #FDECA6 0%, #FFFDF7 40%, #FFFFFF 100%)" }}
            >
                <div className="section-container max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">

                        {/* Left Column */}
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <h2 className="text-[17px] sm:text-[19px] md:text-[21px] font-bold text-[#111] mb-1">
                                    {communityData.subtitle}
                                </h2>
                                <div className="flex flex-col gap-2 mb-3">
                                    {communityData.paragraphsLeft.map((paragraph, index) => (
                                        <p
                                            key={index}
                                            className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.4] text-justify font-medium text-[#111]"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full rounded-sm overflow-hidden shadow-sm aspect-[16/8] mt-auto">
                                <img
                                    src={communityData.imageLeft}
                                    alt={communityData.imageLeftAlt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col h-full justify-between">
                            <div className="w-full rounded-sm overflow-hidden shadow-sm aspect-[16/8] mb-3 mt-2 md:mt-0">
                                <img
                                    src={communityData.imageRight}
                                    alt={communityData.imageRightAlt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                {communityData.paragraphsRight.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.4] text-justify font-medium text-[#111]"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 3: Environment & Climate Responsibility */}
            <section
                className="w-full pt-6 pb-12 sm:pt-8 sm:pb-20"
                style={{ background: "linear-gradient(180deg, #DCECCC 0%, #F5FBF2 50%, #FFFFFF 100%)" }}
            >
                <div className="section-container max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 items-stretch">

                        {/* Left Column */}
                        <div className="flex flex-col h-full">
                            <h2 className="text-[17px] sm:text-[19px] md:text-[21px] font-bold text-[#111] mb-1">
                                {environmentData.subtitle}
                            </h2>
                            <div className="flex flex-col gap-2 border-r border-transparent md:border-transparent pr-0">
                                {environmentData.paragraphs.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.4] text-justify font-medium text-[#111]"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Right Column (Image) */}
                        <div className="w-full h-full rounded-sm overflow-hidden shadow-sm aspect-[16/8] min-h-[180px] sm:min-h-[220px] relative">
                            <img
                                src={environmentData.image}
                                alt={environmentData.imageAlt}
                                className="w-full h-full object-cover absolute inset-0"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
