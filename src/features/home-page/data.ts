import { StaticImageData } from "next/image"

// We use placehold.co or similar for actual images, 
// but define the structure strictly.

export const heroData = {
    title: "INNOVATION THAT EMPOWERS THE FUTURE.\nSOLUTIONS THAT ENRICH LIVES.",
    backgroundImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
    // Placeholder close to the farming hand image
}

export const companyGlanceData = {
    title: "COMPANY AT A GLANCE",
    description: "Founded in 1988, Nirmal Seeds is a research-driven seed and agri-biotech company that shapes Indian agriculture through\nscience, innovation, and farmer-centric solutions.\n\nNirmal Seeds continues to build on a strong legacy—combining science, quality and nationwide reach to support India's\nfarmers and strengthen the country's agricultural future.",
    items: [
        {
            icon: "chemistry", // We'll map this to a Lucide icon
            text: "35+ years of\nseed research\n& innovation"
        },
        {
            icon: "certificate",
            text: "DSIR-recognized R&D\necosystem with advanced\nbiotechnology programs"
        },
        {
            icon: "farm",
            text: "80+ hectares research\nfarm + multi-location\ntrials across India"
        }
    ]
}

export const productCategoriesData = {
    title: "PRODUCT CATEGORIES",
    categories: [
        {
            title: "Field Crops",
            subtitle: "(Hybrid & Improved Varieties)",
            description: "Nirmal Seeds develops and markets innovative hybrids and varieties across major crops to meet agricultural and food demands.",
            image: "https://images.unsplash.com/photo-1596728514809-b68a8ababc24?q=80&w=2070&auto=format&fit=crop",
            link: "#"
        },
        {
            title: "Vegetable Seeds",
            subtitle: "(Hybrid & Improved Varieties)",
            description: "A rapidly growing segment supported by advanced breeding program targeting global distribution.",
            image: "https://images.unsplash.com/photo-1592924357228-91a5aadc08d4?q=80&w=2670&auto=format&fit=crop",
            link: "#"
        },
        {
            title: "Nutritionally Enriched / Biofortified Crops",
            description: "Nirmal Seeds is deeply invested in the biofortified ecosystem globally, partnering with ICAR.",
            image: "https://images.unsplash.com/photo-1500937386664-56d1dfefcb19?q=80&w=2070&auto=format&fit=crop",
            link: "#"
        }
    ]
}

export const networkData = {
    title: "NIRMAL SEEDS - A STRONG\nNATIONWIDE DISTRIBUTION NETWORK",
    description: "Nirmal Seeds operates one of India's largest seed distribution networks spanning across major states.",
    stats: [
        {
            icon: "users",
            title: "5,000+ dealers\nand distributors"
        },
        {
            icon: "map-pin",
            title: "32 regional offices & depots\nstrategically located in\nhigh-demand markets"
        },
        {
            icon: "globe",
            title: "33 states covered\nacross all major\nagro-climatic zones"
        },
        {
            icon: "truck",
            title: "A robust supply chain\nsupporting 179+ seed products\nacross 32 major crops"
        }
    ],
    footerText: "This extensive network ensures consistent market access and predictable, uninterrupted seed supply to mitigate farmer's risk."
}

export const awardsData = {
    title: "AWARDS & ACHIEVEMENTS",
    awards: [
        {
            title: "BIRAC Innovator Award - 2020",
            description: "Awarded for breakthrough research in agricultural biotechnology.",
            image: "https://images.unsplash.com/photo-1531545514251-26ec03987258?q=80&w=2074&auto=format&fit=crop"
        },
        {
            title: "Vasantrao Naik Krushi Pratishthan Award",
            description: "The Chief Minister of Maharashtra, Hon. Shri Devendra Fadnavis presenting the Vasantrao Naik Krushi Puraskar.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2074&auto=format&fit=crop"
        },
        {
            title: "State Level Best Seed Company",
            description: "Recognized by the Ministry of Agriculture for outstanding contribution.",
            image: "https://images.unsplash.com/photo-1531545514251-26ec03987258?q=80&w=2074&auto=format&fit=crop"
        }
    ]
}

export const testimonialData = {
    title: "FARMER TESTIMONIAL",
    quotes: [
        {
            text: "I have been farming for the past 20 years and have always relied on Nirmal Seeds for my crops. The yield is consistently high and the seed quality is excellent. I highly recommend them to all farmers.",
            author: "Shri Ashokrao Bhamare",
            location: "Village Andur, Taluka & District Osmanabad",
            image: "https://i.pravatar.cc/150?img=11"
        },
        {
            text: "The vegetable seeds from Nirmal Seeds are disease resistant and provide a great harvest. My income has grown significantly.",
            author: "Ramesh Patil",
            location: "Pune, Maharashtra",
            image: "https://i.pravatar.cc/150?img=12"
        },
        {
            text: "Exceptional quality and great customer support from the local depots. Best seeds in the market.",
            author: "Vikram Singh",
            location: "Indore, MP",
            image: "https://i.pravatar.cc/150?img=13"
        }
    ]
}

// Global Nav Data
export const navItems = [
    { label: "Home", href: "/", isActive: true },
    { label: "About Us", href: "#" },
    { label: "Products", href: "#" },
    { label: "R&D", href: "#" },
    { label: "Media", href: "#" },
    { label: "Contact Us", href: "#" }
]

export const footerData = {
    sections: [
        {
            title: "About Nirmal Seeds",
            content: "Nirmal Seeds is a research-driven, innovative seed company providing hybrid and improved varieties of Field and Vegetable crops. We strive to empower farmers and enrich lives through sustainable agriculture."
        },
        {
            title: "Nirmal Departments",
            links: [
                { label: "Research & Development", href: "#" },
                { label: "Quality Assurance", href: "#" },
                { label: "Seed Processing", href: "#" },
                { label: "Biotech Lab Facilities", href: "#" }
            ]
        },
        {
            title: "Products",
            links: [
                { label: "Field Crops", href: "#" },
                { label: "Vegetable Crops", href: "#" },
                { label: "Biofortified", href: "#" }
            ]
        },
        {
            title: "Contact Us",
            links: [
                { label: "PO Box No. 63, Bhadgaon Road, Pachora, Jalgaon (MS)", href: "#" },
                { label: "+91 2596 244444 (100 Lines)", href: "tel:+912596244444" },
                { label: "info@nirmalseedsindia.com", href: "mailto:info@nirmalseedsindia.com" }
            ]
        }
    ],
    copyrightText: "Copyright © 2024 Nirmal Seeds Ltd.,. All Rights Reserved."
}
