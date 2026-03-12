import { StaticImageData } from "next/image"

// We use placehold.co or similar for actual images, 
// but define the structure strictly.

export const heroData = {
    title: "INNOVATION THAT EMPOWERS THE FUTURE.\nSOLUTIONS THAT ENRICH LIVES.",
    backgroundImage: [
        "/images/home-page/hero-banner.png",
        "/images/home-page/hero-banner-2.png"
    ],
}

export const companyGlanceData = {
    title: "COMPANY AT A GLANCE",
    description: "Founded in 1988, Nirmal Seeds is a research-driven seed and agri-biotech company that shapes Indian agriculture through\nscience, innovation, and farmer-centric solutions.\n\nNirmal Seeds continues to build on a strong legacy—combining science, quality and nationwide reach to support India's\nfarmers and strengthen the country's agricultural future.",
    items: [
        {
            icon: "chemistry",
            text: "35+ years of\nseed research\n& innovation"
        },
        {
            icon: "certificate",
            text: "DSIR-recognized R&D\necosystem with advanced\nbiotechnology programs"
        },
        {
            icon: "farm",
            text: "80+ hectares research\nfarm + multi-location\ntrials across India"
        },
        {
            icon: "certificate",
            text: "2 NABL-accreditation\none for seed testing lab\nand molecular testing lab"
        },
        {
            icon: "chemistry",
            text: "177+ research seed\nproducts across\n35 crops"
        },
        {
            icon: "farm",
            text: "Growing presence\nacross\n23 states"
        },
        {
            icon: "chemistry",
            text: "6,000+ distributors &\n28,000+ retail\ntouchpoints"
        },
        {
            icon: "chemistry",
            text: "Ultra-modern bio-input\nfacilities in MH,\nGujarat & Assam"
        },
        {
            icon: "certificate",
            text: "2 patented bio-stimulant\ntechnologies for\nsustainable agriculture"
        }
    ]
}

export const productCategoriesData = {
    title: "PRODUCT CATEGORIES",
    categories: [
        {
            title: "Field Crops",
            subtitle: "(Hybrid & improved varieties)",
            description: "Nirmal Seeds develops and markets innovative hybrids and varieties across India's major important field crops.\n\nThis segment is a major contributor to scale, acreage, and consistent demand.",
            image: "/images/home-page/product-categories-field-crops.png",
            link: "/products/field-crops"
        },
        {
            title: "Vegetable Seeds",
            subtitle: "(Hybrid & Improved Varieties)",
            description: "A rapidly growing segment supported by advanced breeding programs and global collaborations.",
            image: "/images/home-page/product-categories-vegetable-seeds.png",
            link: "/products/vegetable-seeds"
        },
        {
            title: "Nutritionally Enriched/\nBiofortified Crops",
            description: "Nirmal Seeds is among the few Indian companies active in nutrition breeding, partnering with global institutions (HarvestPlus, ICRISAT, CIMMYT).",
            image: "/images/home-page/product-categories-biofortified-crops.png",
            link: "#"
        }
    ]
}

export const networkData = {
    title: "NIRMAL SEEDS - A STRONG\nNATIONWIDE DISTRIBUTION NETWORK",
    description: "Nirmal Seeds operates one of India's largest seed distribution networks, reaching farmers across the country through:",
    stats: [
        {
            icon: "users",
            title: "6,000+ dealers\nand distributors"
        },
        {
            icon: "map-pin",
            title: "22 regional offices & depots\nstrategically located in\nhigh-demand markets"
        },
        {
            icon: "globe",
            title: "23 states covered\nacross all major\nagro-climatic zones"
        },
        {
            icon: "truck",
            title: "A robust supply chain\nsupporting 177+ seed products\nand 22 bio-organic inputs"
        }
    ],
    footerText: "This extensive network ensures consistent market access, predictable demand, rapid product adoption, and strong brand visibility."
}

export const awardsData = {
    title: "AWARDS & ACHIEVEMENTS",
    awards: [
        {
            title: "BIRAC Innovative Award – 2016",
            description: "Awarded for breakthrough innovation in agricultural biotechnology.",
            image: "/images/home-page/awards-birac.png"
        },
        {
            title: "Vasantrao Naik Krushi Falotpadan Award",
            description: "The Chief Minister of Maharashtra, Hon. Shri Devendra Fadnavis presenting \"Vasantrao Naik Krushi Falotpadan Award\" to Shri R.O.Patil (CMD) for his significant contributions in the field of Horticulture.",
            image: "/images/home-page/awards-vasantro-award.png"
        },
        {
            title: "State Level Best Seed Company",
            description: "Recognized by the Ministry of Agriculture for outstanding contribution.",
            image: "/images/home-page/awards-state-level.png"
        }
    ]
}


export const testimonialData = {
    title: "FARMER  TESTIMONIAL",
    quotes: [
        {
            text: "I have been farming for the past 20 years and have always relied on Nirmal Seeds for my crops. The yield is consistently high and the seed quality is excellent. I highly recommend them to all farmers.",
            author: "Shri Ashokrao Bhamare",
            location: "Village Andur, Taluka & District Osmanabad",
            image: "/images/home-page/testimonial-section-1.png"
        },
        {
            text: "The vegetable seeds from Nirmal Seeds are disease resistant and provide a great harvest. My income has grown significantly.",
            author: "Ramesh Patil",
            location: "Pune, Maharashtra",
            image: "/images/home-page/testimonial-section-2.png"
        },
        {
            text: "Exceptional quality and great customer support from the local depots. Best seeds in the market.",
            author: "Vikram Singh",
            location: "Indore, MP",
            image: "/images/home-page/testimonial-section-3.png"
        }
    ]
}

// Global Nav Data
export interface NavItem {
    label: string
    href: string
    children?: { label: string; href: string }[]
}

export const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    {
        label: "Overview",
        href: "#",
        children: [
            { label: "About Us", href: "/about" },
            { label: "Management", href: "/management" },
            { label: "Accreditation", href: "/accreditation" },
        ]
    },
    {
        label: "Products",
        href: "#",
        children: [
            { label: "Field Crops", href: "/products/field-crops" },
            { label: "Vegetable Seeds", href: "/products/vegetable-seeds" },
            { label: "Bio Products", href: "/products/bio-products" },
        ]
    },
    {
        label: "Departments",
        href: "#",
        children: [
            { label: "Research & Development", href: "/department/r-d" },
            { label: "Quality Assurance", href: "/department/quality-assurance" },
            { label: "Production & Processing", href: "/department/production-processing" },
        ]
    },
    { label: "CSR @ Nirmal", href: "/csr" },
    { label: "Media", href: "/media" },
    { label: "Contact Us", href: "/contact" },
]


export const footerData = {
    sections: [
        {
            title: "About Nirmal Seeds",
            content: "(NSPL) was established in 1988 by a group of agropreneurs at Pachora in Jalgaon district of Maharashtra, India. The organization was started with an idea of 'Need based Research' in the field of seed technology for the farming community."
        },
        {
            title: "Nirmal Departments",
            links: [
                { label: "Research & development", href: "/department/r-d" },
                { label: "Quality Assurance", href: "/department/quality-assurance" },
                { label: "Production & processing", href: "/department/production-processing" }
            ]
        },
        {
            title: "Products",
            links: [
                { label: "Field Crops", href: "/products/field-crops" },
                { label: "Vegetable Seeds", href: "/products/vegetable-seeds" },
                { label: "Bio Products", href: "/products/bio-products" }
            ]
        },
        {
            title: "Contact Us",
            links: [
                { label: "P.O.Box No.: 63, Bhadgaon Road, Pachora-424201. Jalgaon (MH).", href: "#", icon: "map-pin" },
                { label: "Phone : +91-2596-244366", href: "tel:+912596244366", icon: "phone" },
                { label: "Email: info@nirmalseedsindia.com", href: "mailto:info@nirmalseedsindia.com", icon: "mail" }
            ]
        }
    ],
    copyrightText: "Copyright © 2026 Nirmal Seeds Ltd. All rights reserved. Crafted by Greysell"
}
