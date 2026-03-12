import { notFound } from "next/navigation";
import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { ProductDetailsContent } from "@/features/products-page/components/ProductDetailsContent";
import { gramHeroData, gramContentData, gramProducts } from "@/features/products-page/gram-data";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productIndex = gramProducts.findIndex(p => p.slug === slug);
    
    if (productIndex === -1) {
        return notFound();
    }
    
    const product = gramProducts[productIndex];
    
    // Compute prev/next links
    const prevProduct = productIndex > 0 ? gramProducts[productIndex - 1] : null;
    const nextProduct = productIndex < gramProducts.length - 1 ? gramProducts[productIndex + 1] : null;
    
    // Format sidebar links
    const sidebarLinks = gramContentData.sections.map(section => ({
        sectionTitle: section.title,
        links: section.products.map(p => ({
            name: p.name,
            href: p.href,
            isActive: p.slug === slug,
            isSubCategory: section.title,
        }))
    }));
    
    const breadcrumb = [
        ...gramHeroData.breadcrumb,
        { label: product.name.replace('\n', ' '), href: product.href }
    ];

    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={breadcrumb}
                backgroundImage={gramHeroData.backgroundImage}
            />
            <ProductDetailsContent
                categoryName="Gram"
                sidebarLinks={sidebarLinks}
                product={product as any}
                prevLink={prevProduct ? prevProduct.href : undefined}
                nextLink={nextProduct ? nextProduct.href : undefined}
            />
        </main>
    );
}

export async function generateStaticParams() {
    return gramProducts.map((product) => ({
        slug: product.slug,
    }));
}
