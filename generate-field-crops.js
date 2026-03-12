const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'features', 'products-page');
const appDir = path.join(__dirname, 'src', 'app', 'products', 'field-crops');

const toSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const dummyCharacteristics = [
    { label: "Plant habit", value: "Mid tall, erect. Open, less spreading" },
    { label: "Duration", value: "Early (130-140 days)" },
    { label: "Boll size and shape", value: "Medium. Round to oblong" },
    { label: "Boll Weight (gm)", value: "3.0 to 3.5" },
    { label: "Staple length (mm)", value: "22-23" },
    { label: "Fibre Strength (g/tex)", value: "23" },
    { label: "Micronaire (ug/inch)", value: "6.5" },
    { label: "Ginning (%)", value: "40" }
];

const dummyFeatures = [
    "Violet pigmented calyx & stem",
    "Excellent boll bursting & excellent locule retention",
    "Suitable for irrigated and rainfed cultivation",
    "Recommended for close planting (90 x 30 cm) & once over harvest",
    "Recommended topping of main shoot at 3.5 to 4 feet height",
    "Recommended for Central, South & North zones of India."
];

const categories = [
    {
        id: 'cotton',
        name: 'Cotton',
        title: 'COTTON CROP',
        titleHighlight: 'SEEDS',
        sections: [
            {
                title: "Hybrid Deshi (Arboreum) Cotton",
                products: [
                    { name: "Ambika\n(NACH-12)", image: "https://images.unsplash.com/photo-1627626042186-b4d6e90e4f3a?q=80&w=600&auto=format&fit=crop" },
                    { name: "NACH - 18", image: "https://images.unsplash.com/photo-1627626042186-b4d6e90e4f3a?q=80&w=600&auto=format&fit=crop" },
                    { name: "NACH - 433", image: "https://images.unsplash.com/photo-1616431101491-554c0932ea40?q=80&w=600&auto=format&fit=crop" },
                    { name: "NACH-560", image: "https://images.unsplash.com/photo-1616431101491-554c0932ea40?q=80&w=600&auto=format&fit=crop" },
                ]
            },
            {
                title: "BT Cotton",
                products: [
                    { name: "NCH-4341 (Solar 76)\nBT II Hybrid Cotton", image: "https://images.unsplash.com/photo-1616431101491-554c0932ea40?q=80&w=600&auto=format&fit=crop" },
                    { name: "RCH-1206 BG II\n(Hamkhas)", image: "https://images.unsplash.com/photo-1627626042186-b4d6e90e4f3a?q=80&w=600&auto=format&fit=crop" },
                    { name: "RCH-965 BG II\n(Nirmal Gold)", image: "https://images.unsplash.com/photo-1616431101491-554c0932ea40?q=80&w=600&auto=format&fit=crop" },
                ]
            }
        ]
    },
    {
        id: 'sorghum',
        name: 'Sorghum',
        title: 'SORGHUM CROP',
        titleHighlight: 'SEEDS',
        sections: [
            {
                title: "Hybrid Sorghum",
                products: [
                    { name: "NJH-1175", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=600&auto=format&fit=crop" },
                    { name: "Ratna (NJH-40)", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=600&auto=format&fit=crop" },
                ]
            },
            {
                title: "Rabi Sorghum",
                products: [
                    { name: "Suvarna (NSRR-259)", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=600&auto=format&fit=crop" },
                    { name: "Aparna (NSRR-676)", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=600&auto=format&fit=crop" },
                ]
            },
            {
                title: "Fodder Sorghum",
                products: [
                    { name: "NFSH-3048 (Anmol)", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=600&auto=format&fit=crop" },
                ]
            }
        ]
    },
    {
        id: 'pearl-millet',
        name: 'Pearl Millet',
        title: 'PEARL MILLET',
        titleHighlight: 'SEEDS',
        sections: [
            {
                title: "Hybrid Pearl Millet",
                products: [
                    { name: "NPH - 1651", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop" },
                    { name: "NPH - 4915\n(Yashwant)", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop" },
                    { name: "NPH- 5423", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop" },
                    { name: "NPH-5654", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop" },
                    { name: "NPH- 401", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop" },
                    { name: "Shabari\n(NPH - 4506)", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop" },
                    { name: "NPH-2494", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop" },
                    { name: "NPH - 9", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop" },
                    { name: "NPH-5286", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop" },
                    { name: "Dhanashakti\n(ICTP - 8203 Fe)", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop" },
                ]
            },
            {
                title: "Forage Pearl Millet Hybrid",
                products: [
                    { name: "Multi Cut Forage Pearl Millet Hybrid\nNutrex", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop" },
                ]
            }
        ]
    },
    {
        id: 'maize',
        name: 'Maize',
        title: 'MAIZE',
        titleHighlight: 'SEEDS',
        sections: [
            {
                title: "Hybrid Maize",
                products: [
                    { name: "Nilesh (NMH-51)", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=600&auto=format&fit=crop" },
                    { name: "NMH-999", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=600&auto=format&fit=crop" },
                    { name: "NMH-3662", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=600&auto=format&fit=crop" },
                    { name: "NMWH - 27", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=600&auto=format&fit=crop" },
                ]
            },
            {
                title: "Hybrid Sweet Corn",
                products: [
                    { name: "NSCH - 130 (Sweet honey)", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=600&auto=format&fit=crop" },
                ]
            }
        ]
    },
    {
        id: 'wheat',
        name: 'Wheat',
        title: 'WHEAT CROP',
        titleHighlight: 'SEEDS',
        sections: [
            {
                title: "High Yielding Wheat",
                products: [
                    { name: "Nirmal Wheat Gold", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=600&auto=format&fit=crop" },
                    { name: "Nirmal Wheat Silver", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=600&auto=format&fit=crop" },
                ]
            }
        ]
    },
    {
        id: 'paddy',
        name: 'Paddy',
        title: 'PADDY CROP',
        titleHighlight: 'SEEDS',
        sections: [
            {
                title: "Hybrid Paddy",
                products: [
                    { name: "Nirmal Paddy X", image: "https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?q=80&w=600&auto=format&fit=crop" },
                    { name: "Nirmal Paddy Y", image: "https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?q=80&w=600&auto=format&fit=crop" },
                ]
            }
        ]
    },
    {
        id: 'soybean',
        name: 'Soybean',
        title: 'SOYBEAN',
        titleHighlight: 'SEEDS',
        sections: [
            {
                title: "High Yielding Soybean",
                products: [
                    { name: "Super Soy", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop" },
                ]
            }
        ]
    },
    {
        id: 'mustard',
        name: 'Mustard',
        title: 'MUSTARD',
        titleHighlight: 'SEEDS',
        sections: [
            {
                title: "Hybrid Mustard",
                products: [
                    { name: "Golden Mustard", image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=600&auto=format&fit=crop" },
                ]
            }
        ]
    },
    {
        id: 'pigeonpea',
        name: 'Pigeonpea',
        title: 'PIGEONPEA',
        titleHighlight: 'SEEDS',
        sections: [
            {
                title: "Hybrid Pigeonpea",
                products: [
                    { name: "Arhar Gold", image: "https://images.unsplash.com/photo-1509622905150-fa66d3906e09?q=80&w=600&auto=format&fit=crop" },
                ]
            }
        ]
    },
    {
        id: 'gram',
        name: 'Gram',
        title: 'GRAM CROP',
        titleHighlight: 'SEEDS',
        sections: [
            {
                title: "Desi Gram",
                products: [
                    { name: "Gram Special", image: "https://images.unsplash.com/photo-1609780447631-05b93e5a88ea?q=80&w=600&auto=format&fit=crop" },
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
            prod.href = `/products/field-crops/${cat.id}/${prod.slug}`;
            prod.characteristics = dummyCharacteristics;
            prod.specialFeatures = dummyFeatures;
        });
    });
});

categories.forEach(cat => {
    const dataFileName = `${cat.id}-data.ts`;
    const dataFilePath = path.join(baseDir, dataFileName);
    
    // Create data file with proper slug routing
    const dataContent = `export const ${cat.id.replace(/-([a-z])/g, (g) => g[1].toUpperCase())}HeroData = {
    breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "Field Crops", href: "/products/field-crops" },
        { label: "${cat.name}", href: "/products/field-crops/${cat.id}" },
    ],
    backgroundImage:
        "https://images.unsplash.com/photo-1598134743282-5ee08e68cfb9?q=80&w=2070&auto=format&fit=crop",
}

export const ${cat.id.replace(/-([a-z])/g, (g) => g[1].toUpperCase())}ContentData = {
    title: "${cat.title}",
    titleHighlight: "${cat.titleHighlight}",
    sections: ${JSON.stringify(cat.sections, null, 4)}
}

// Flat list of products for easy lookup
export const ${cat.id.replace(/-([a-z])/g, (g) => g[1].toUpperCase())}Products = [
    ${cat.sections.map(sec => sec.products.map(p => JSON.stringify(p)).join(',\n    ')).join(',\n    ')}
];
`;
    fs.writeFileSync(dataFilePath, dataContent);

    // Create page dir if needed
    const pageDir = path.join(appDir, cat.id);
    if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true });
    }
    
    const varPrefix = cat.id.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    
    // Rewrite main category page to use SubCategoryContent
    const pageContent = `import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { SubCategoryContent, ProductSection } from "@/features/products-page/components/SubCategoryContent";
import { ${varPrefix}HeroData, ${varPrefix}ContentData } from "@/features/products-page/${cat.id}-data";

export const metadata = {
    title: "${cat.name} Crop Seeds - Nirmal Seeds",
    description:
        "Explore Nirmal Seeds' premium ${cat.name} crop seed varieties.",
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
import { ${varPrefix}HeroData, ${varPrefix}ContentData, ${varPrefix}Products } from "@/features/products-page/${cat.id}-data";

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

console.log("Successfully generated all field crop data and detail pages!");
