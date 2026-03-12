const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'features', 'products-page');
const appDir = path.join(__dirname, 'src', 'app', 'products', 'vegetable-seeds');

const toSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const dummyCharacteristics = [
    { label: "Plant habit", value: "Tall, robust and erect" },
    { label: "Duration", value: "Early (80-90 days)" },
    { label: "Fruit shape", value: "Oval" },
    { label: "Fruit Weight (gm)", value: "80-100" },
    { label: "Color", value: "Attractive red" },
    { label: "Disease Tolerance", value: "Tolerant to major viruses" }
];

const dummyFeatures = [
    "Excellent firmness and keeping quality",
    "Suitable for long-distance transport",
    "High yield potential under correct agronomic practices",
    "Recommended for all major growing regions of India."
];

const categories = [
    {
        id: 'tomato',
        name: 'Tomato',
        title: 'TOMATO SEEDS',
        titleHighlight: 'HYBRID',
        sections: [
            {
                title: "Hybrid Tomato",
                products: [
                    { name: "Nirmal Tomato Red", image: "https://images.unsplash.com/photo-1592924357228-91a5aadc08d4?q=80&w=600&auto=format&fit=crop" },
                    { name: "Nirmal Tomato Plus", image: "https://images.unsplash.com/photo-1592924357228-91a5aadc08d4?q=80&w=600&auto=format&fit=crop" },
                ]
            }
        ]
    },
    {
        id: 'chilli',
        name: 'Chilli',
        title: 'CHILLI SEEDS',
        titleHighlight: 'HYBRID',
        sections: [
            {
                title: "Hybrid Hot Pepper",
                products: [
                    { name: "Spicy Wonder", image: "https://images.unsplash.com/photo-1592924357228-91a5aadc08d4?q=80&w=600&auto=format&fit=crop" },
                    { name: "Flame King", image: "https://images.unsplash.com/photo-1592924357228-91a5aadc08d4?q=80&w=600&auto=format&fit=crop" },
                ]
            }
        ]
    },
    {
        id: 'okra',
        name: 'Okra',
        title: 'OKRA SEEDS',
        titleHighlight: 'HYBRID',
        sections: [
            {
                title: "Hybrid Okra",
                products: [
                    { name: "Green Lady", image: "https://images.unsplash.com/photo-1592924357228-91a5aadc08d4?q=80&w=600&auto=format&fit=crop" },
                ]
            }
        ]
    },
    {
        id: 'brinjal',
        name: 'Brinjal',
        title: 'BRINJAL SEEDS',
        titleHighlight: 'HYBRID',
        sections: [
            {
                title: "Hybrid Brinjal",
                products: [
                    { name: "Purple Prince", image: "https://images.unsplash.com/photo-1592924357228-91a5aadc08d4?q=80&w=600&auto=format&fit=crop" },
                ]
            }
        ]
    },
    {
        id: 'watermelon',
        name: 'Watermelon',
        title: 'WATERMELON',
        titleHighlight: 'SEEDS',
        sections: [
            {
                title: "Hybrid Watermelon",
                products: [
                    { name: "Sugar King", image: "https://images.unsplash.com/photo-1592924357228-91a5aadc08d4?q=80&w=600&auto=format&fit=crop" },
                ]
            }
        ]
    },
    {
        id: 'bottle-gourd',
        name: 'Bottle Gourd',
        title: 'BOTTLE GOURD',
        titleHighlight: 'SEEDS',
        sections: [
            {
                title: "Hybrid Bottle Gourd",
                products: [
                    { name: "Long Green", image: "https://images.unsplash.com/photo-1592924357228-91a5aadc08d4?q=80&w=600&auto=format&fit=crop" },
                ]
            }
        ]
    },
    {
        id: 'onion',
        name: 'Onion',
        title: 'ONION',
        titleHighlight: 'SEEDS',
        sections: [
            {
                title: "Hybrid Onion",
                products: [
                    { name: "Red Globe", image: "https://images.unsplash.com/photo-1592924357228-91a5aadc08d4?q=80&w=600&auto=format&fit=crop" },
                ]
            }
        ]
    },
    {
        id: 'cabbage',
        name: 'Cabbage',
        title: 'CABBAGE',
        titleHighlight: 'SEEDS',
        sections: [
            {
                title: "Hybrid Cabbage",
                products: [
                    { name: "Green Ball", image: "https://images.unsplash.com/photo-1592924357228-91a5aadc08d4?q=80&w=600&auto=format&fit=crop" },
                ]
            }
        ]
    }
];

// Pre-process categories to add slugs, characteristics, and hrefs
categories.forEach(cat => {
    cat.sections.forEach(sec => {
        sec.products.forEach(prod => {
            prod.slug = toSlug(prod.name);
            prod.href = `/products/vegetable-seeds/${cat.id}/${prod.slug}`;
            prod.characteristics = dummyCharacteristics;
            prod.specialFeatures = dummyFeatures;
        });
    });
});

categories.forEach(cat => {
    const dataFileName = `vegetable-seeds-${cat.id}-data.ts`;
    const dataFilePath = path.join(baseDir, dataFileName);
    
    // Create data file with proper slug routing
    const varPrefix = "vs" + cat.id.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    
    const dataContent = `export const ${varPrefix}HeroData = {
    breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "Vegetable Seeds", href: "/products/vegetable-seeds" },
        { label: "${cat.name}", href: "/products/vegetable-seeds/${cat.id}" },
    ],
    backgroundImage:
        "https://images.unsplash.com/photo-1598134743282-5ee08e68cfb9?q=80&w=2070&auto=format&fit=crop",
}

export const ${varPrefix}ContentData = {
    title: "${cat.title}",
    titleHighlight: "${cat.titleHighlight}",
    sections: ${JSON.stringify(cat.sections, null, 4)}
}

// Flat list of products for easy lookup
export const ${varPrefix}Products = [
    ${cat.sections.map(sec => sec.products.map(p => JSON.stringify(p)).join(',\n    ')).join(',\n    ')}
];
`;
    fs.writeFileSync(dataFilePath, dataContent);

    // Create page dir if needed
    const pageDir = path.join(appDir, cat.id);
    if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true });
    }
    
    // Rewrite main category page to use SubCategoryContent
    const pageContent = `import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { ${varPrefix}HeroData, ${varPrefix}ContentData } from "@/features/products-page/vegetable-seeds-${cat.id}-data";

export const metadata = {
    title: "${cat.name} Seeds - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium ${cat.name} seed varieties.",
};

export default function ${cat.name.replace(/[^a-zA-Z0-9]/g, '')}Page() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={${varPrefix}HeroData.breadcrumb}
                backgroundImage={${varPrefix}HeroData.backgroundImage}
            />
            <SubCategoryContent
                title={${varPrefix}ContentData.title}
                titleHighlight={${varPrefix}ContentData.titleHighlight}
                sections={${varPrefix}ContentData.sections as ProductSection[]}
            />
        </main>
    );
}
`;
    fs.writeFileSync(path.join(pageDir, 'page.tsx'), pageContent);
    
    // Now create the [slug]/page.tsx dynamic route for all products in this category
    const slugDir = path.join(pageDir, '[slug]');
    if (!fs.existsSync(slugDir)) {
        fs.mkdirSync(slugDir, { recursive: true });
    }
    
    const slugPageContent = `import { notFound } from "next/navigation";
import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { ProductDetailsContent } from "@/features/products-page/components/ProductDetailsContent";
import { ${varPrefix}HeroData, ${varPrefix}ContentData, ${varPrefix}Products } from "@/features/products-page/vegetable-seeds-${cat.id}-data";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productIndex = ${varPrefix}Products.findIndex(p => p.slug === slug);
    
    if (productIndex === -1) {
        return notFound();
    }
    
    const product = ${varPrefix}Products[productIndex];
    
    // Compute prev/next links
    const prevProduct = productIndex > 0 ? ${varPrefix}Products[productIndex - 1] : null;
    const nextProduct = productIndex < ${varPrefix}Products.length - 1 ? ${varPrefix}Products[productIndex + 1] : null;
    
    // Format sidebar links
    const sidebarLinks = ${varPrefix}ContentData.sections.map(section => ({
        sectionTitle: section.title,
        links: section.products.map(p => ({
            name: p.name,
            href: p.href,
            isActive: p.slug === slug,
            isSubCategory: section.title,
        }))
    }));
    
    const breadcrumb = [
        ...${varPrefix}HeroData.breadcrumb,
        { label: product.name.replace('\\n', ' '), href: product.href }
    ];

    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={breadcrumb}
                backgroundImage={${varPrefix}HeroData.backgroundImage}
            />
            <ProductDetailsContent
                categoryName="${cat.name}"
                sidebarLinks={sidebarLinks}
                product={product as any}
                prevLink={prevProduct ? prevProduct.href : undefined}
                nextLink={nextProduct ? nextProduct.href : undefined}
            />
        </main>
    );
}

export async function generateStaticParams() {
    return ${varPrefix}Products.map((product) => ({
        slug: product.slug,
    }));
}
`;
    fs.writeFileSync(path.join(slugDir, 'page.tsx'), slugPageContent);
});

console.log("Successfully generated all vegetable seed pages!");
