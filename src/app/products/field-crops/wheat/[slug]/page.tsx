import { notFound } from "next/navigation";
import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { ProductDetailsContent } from "@/features/products-page/components/ProductDetailsContent";
import { wheatHeroData, wheatContentData, wheatProducts } from "@/features/products-page/wheat-data";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productIndex = wheatProducts.findIndex(p => p.slug === slug);
    
    if (productIndex === -1) {
        return notFound();
    }
    
    const product = wheatProducts[productIndex];
    
    // Compute prev/next links
    const prevProduct = productIndex > 0 ? wheatProducts[productIndex - 1] : null;
    const nextProduct = productIndex < wheatProducts.length - 1 ? wheatProducts[productIndex + 1] : null;
    
    // Format sidebar links
    const sidebarLinks = wheatContentData.sections.map(section => ({
        sectionTitle: section.title,
        links: section.products.map(p => ({
            name: p.name,
            href: p.href,
            isActive: p.slug === slug,
            isSubCategory: section.title,
        }))
    }));
    
    const breadcrumb = [
        ...wheatHeroData.breadcrumb,
        { label: product.name.replace('\n', ' '), href: product.href }
    ];

    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={breadcrumb}
                backgroundImage={wheatHeroData.backgroundImage}
            />
            <ProductDetailsContent
                categoryName="Wheat"
                sidebarLinks={sidebarLinks}
                product={product as any}
                prevLink={prevProduct ? prevProduct.href : undefined}
                nextLink={nextProduct ? nextProduct.href : undefined}
            />
        </main>
    );
}

export async function generateStaticParams() {
    return wheatProducts.map((product) => ({
        slug: product.slug,
    }));
}
