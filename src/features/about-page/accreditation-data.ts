export const accreditationHeroData = {
    breadcrumb: [
        { label: "Overview", href: "#" },
        { label: "Accreditation", href: "/accreditation" },
    ],
    backgroundImage: "/images/Overview-Accerditation/hero.png",
};

export const accreditationTabsData: {
    id: string;
    title: string;
    media: { type: "image" | "pdf" | "none" | "images"; src?: string | string[] };
}[] = [
    {
        id: "bureau",
        title: "Bureau Veritas Certification",
        media: { type: "image", src: "/Certificates/ISO.jpg" },
    },
    {
        id: "ista",
        title: "International Seed Testing Association",
        media: { type: "none" },
    },
    {
        id: "noca",
        title: "Accreditation NOCA",
        media: { type: "pdf", src: "/Certificates/NOCA Certificate.pdf" },
    },
    {
        id: "dsir",
        title: "The R & D Unit Recognized by DSIR",
        media: { type: "image", src: "/Certificates/DSIR.jpg" },
    },
    {
        id: "aicpmip",
        title: "AICPMIP Best Private Sector",
        media: { type: "none" },
    },
    {
        id: "aicr",
        title: "All India Coordinated Research",
        media: { type: "none" },
    },
    {
        id: "nabl",
        title: "NABL certification",
        media: { type: "image", src: "/Certificates/NABL Certificate.jpg" },
    },
];

export const nablData = {
    title: "NABL-Accredited Testing Excellence",
    paragraphs: [
        "Nirmal Seeds Pvt. Ltd. has achieved a significant milestone with the NABL accreditation for its Seed Testing and Molecular Testing Laboratory in Pachora. The accreditation (Certificate No. TC-15724) was granted on 20 March 2025, and remains valid through 20 March 2029.",
        "This recognition from the National Accreditation Board for Testing and Calibration Laboratories (NABL) affirms that our testing systems meet the highest standards of technical competence, accuracy, and quality management, aligned with globally accepted ISO/IEC standards.",
        "For investors, this accreditation strengthens confidence in our scientific rigour, regulatory compliance, and our commitment to delivering reliable, high-quality seed solutions at scale."
    ],
    whyNabl: {
        title: "Why NABL Accreditation Matters",
        points: [
            { normal: "Validates the ", bold: "technical competence", end: " of the laboratory" },
            { normal: "Ensures ", bold: "standardised, globally accepted test methods", end: "" },
            { normal: "Strengthens ", bold: "market credibility and customer trust", end: "" },
            { normal: "Demonstrates compliance with ", bold: "national and international quality requirements", end: "" },
            { normal: "Enhances ", bold: "regulatory preparedness", end: "" },
            { normal: "Supports ", bold: "long-term business sustainability", end: " through consistent testing quality" }
        ]
    },
    services: {
        title: "Testing Services Offered",
        columns: [
            {
                title: "Seed Testing Laboratory",
                items: [
                    "Physical Purity Test",
                    "Germination Test",
                    "Moisture Content Test"
                ]
            },
            {
                title: "Molecular Testing Laboratory",
                items: [
                    "DNA Fingerprinting",
                    "Hybrid Genetic Purity Analysis",
                    "Line Purity Testing"
                ]
            }
        ],
        footerText: "These services not only support our internal quality systems but also serve farmers, partners, and institutional clients seeking dependable, science-backed results."
    }
};
