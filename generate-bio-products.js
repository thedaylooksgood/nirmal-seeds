const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'features', 'products-page');
const appDir = path.join(__dirname, 'src', 'app', 'products', 'bio-products');

const toSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const dummyCharacteristics = [
    { label: "Application", value: "Soil and Foliar Spray" },
    { label: "Dosage", value: "250ml per acre" },
    { label: "Shelf Life", value: "12 months" },
    { label: "Formulation", value: "Liquid" },
    { label: "Active Ingredient", value: "Organic extracts and microbes" }
];

const dummyFeatures = [
    "Significantly enhances soil health and microbial activity",
    "Improves root development and nutrient uptake",
    "Completely safe for the environment and farmers",
    "Can be used in organic farming systems"
];

const categories = [
    {
        id: 'bio-fertilizers',
        name: 'Bio-fertilizers',
        title: 'BIO',
        titleHighlight: 'FERTILIZERS',
        sections: [
            {
                title: "Nitrogen Fixers",
                products: [
                    { name: "Nirmal Azotobacter", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=600&auto=format&fit=crop" },
                    { name: "Nirmal Rhizobium", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=600&auto=format&fit=crop" },
                ]
            }
        ]
    },
    {
        id: 'bio-pesticides',
        name: 'Bio-pesticides',
        title: 'BIO',
        titleHighlight: 'PESTICIDES',
        sections: [
            {
                title: "Fungal based",
                products: [
                    { name: "Trichoderma Viride", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=600&auto=format&fit=crop" },
                    { name: "Pseudomonas", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=600&auto=format&fit=crop" },
                ]
            }
        ]
    },
    {
        id: 'mycorrhiza',
        name: 'Mycorrhiza',
        title: 'MYCORRHIZA',
        titleHighlight: 'VAM',
        sections: [
            {
                title: "VAM Formulations",
                products: [
                    { name: "Myco-Power", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=600&auto=format&fit=crop" },
                ]
            }
        ]
    },
    {
        id: 'soil-conditioners',
        name: 'Soil Conditioners',
        title: 'SOIL',
        titleHighlight: 'CONDITIONERS',
        sections: [
            {
                title: "Organic Carbon",
                products: [
                    { name: "Nirmal Humic", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=600&auto=format&fit=crop" },
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
            prod.href = `/products/bio-products/${cat.id}/${prod.slug}`;
            prod.characteristics = dummyCharacteristics;
            prod.specialFeatures = dummyFeatures;
        });
    });
});

categories.forEach(cat => {
    const dataFileName = `bio-products-${cat.id}-data.ts`;
    const dataFilePath = path.join(baseDir, dataFileName);
    
    // Create data file with proper slug routing
    const varPrefix = "bp" + cat.id.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    
    const dataContent = `export const ${varPrefix}HeroData = {
    breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "Bio Products", href: "/products/bio-products" },
        { label: "${cat.name}", href: "/products/bio-products/${cat.id}" },
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
import { ${varPrefix}HeroData, ${varPrefix}ContentData } from "@/features/products-page/bio-products-${cat.id}-data";

export const metadata = {
    title: "${cat.name} - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium ${cat.name}.",
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
import { ${varPrefix}HeroData, ${varPrefix}ContentData, ${varPrefix}Products } from "@/features/products-page/bio-products-${cat.id}-data";

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

console.log("Successfully generated all bio products pages!");
