// Contact Page Data

export const contactHeroData = {
    breadcrumb: [
        { label: "Contact us", href: "/contact" },
    ],
    backgroundImage:
        "images/Contact-location/locations-hero-section.png",
}

export const contactInfoData = {
    office: {
        title: "Corporate and Register Office",
        address:
            "Nirmal Seeds Pvt. Ltd. Bhadgaon Road, Pachora,\nDist-Jalgaon, Maharashtra, India - 424201.",
    },
    phone: {
        title: "Talk to Us",
        label: "Phone: +91-2596-244366",
        href: "tel:+912596244366",
    },
    email: {
        title: "Write to Us",
        label: "Email: info@nirmalseedsindia.com",
        href: "mailto:info@nirmalseedsindia.com",
    },
}

export const contactFormFields = [
    { name: "fullName", placeholder: "Full Name", type: "text" as const },
    { name: "phoneNumber", placeholder: "Phone Number", type: "tel" as const },
    { name: "emailAddress", placeholder: "Email Address", type: "email" as const },
    { name: "crop", placeholder: "Crop", type: "text" as const },
    { name: "message", placeholder: "Enter Message", type: "textarea" as const },
]

// ── Location / "We Are Here" Section ──

export const locationHeroData = {
    breadcrumb: [
        { label: "Contact us", href: "/contact" },
        { label: "Locations", href: "/contact#locations" },
    ],
    backgroundImage: "/images/Contact-location/locations-hero-section.png",
}

export const locationSectionData = {
    title: "WE ARE",
    titleBold: "HERE",
    mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.123!2d75.333!3d20.667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf16b11a1a1a1a%3A0x1a1a1a1a1a1a1a1a!2sNirmal%20Seeds%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    mapStaticImage:
        "https://maps.googleapis.com/maps/api/staticmap?center=20.667,75.333&zoom=12&size=600x400&markers=color:red%7C20.667,75.333&key=placeholder",
    officeInfo: {
        title: "Corporate and Register Office",
        address:
            "Nirmal Seeds Pvt. Ltd. Bhadgaon Road, Pachora,\nDist-Jalgaon, Maharashtra, India - 424201.",
        phone: "Phone: +91-2596-244366",
        phoneHref: "tel:+912596244366",
        email: "Email: info@nirmalseedsindia.com",
        emailHref: "mailto:info@nirmalseedsindia.com",
        directionsUrl: "https://www.google.com/maps/dir//Nirmal+Seeds+Pvt+Ltd+Pachora",
    },
}

export const stateOptions = [
    "Maharashtra",
    "Gujarat",
    "Madhya Pradesh",
    "Rajasthan",
    "Karnataka",
    "Andhra Pradesh",
    "Telangana",
    "Tamil Nadu",
    "Uttar Pradesh",
    "Punjab",
    "Haryana",
]

export const districtOptions: Record<string, string[]> = {
    Maharashtra: [
        "Jalgaon",
        "Nashik",
        "Pune",
        "Aurangabad",
        "Ahmednagar",
        "Solapur",
        "Osmanabad",
        "Latur",
    ],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
    "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Ujjain"],
    Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
    Karnataka: ["Bangalore", "Mysore", "Hubli", "Belgaum"],
    "Andhra Pradesh": ["Hyderabad", "Visakhapatnam", "Vijayawada", "Guntur"],
    Telangana: ["Hyderabad", "Warangal", "Karimnagar", "Nizamabad"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi"],
    Punjab: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
    Haryana: ["Karnal", "Hisar", "Rohtak", "Sonipat"],
}
