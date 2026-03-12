import { notFound } from "next/navigation";
import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner";
import { ProductDetailsContent } from "@/features/products-page/components/ProductDetailsContent";
import { bpbioPesticidesHeroData, bpbioPesticidesContentData, bpbioPesticidesProducts } from "@/features/products-page/bio-products-bio-pesticides-data";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productIndex = bpbioPesticidesProducts.findIndex(p => p.slug === slug);
    
    if (productIndex === -1) {
        return notFound();
    }
    
    const product = bpbioPesticidesProducts[productIndex];
    
    // Compute prev/next links
    const prevProduct = productIndex > 0 ? bpbioPesticidesProducts[productIndex - 1] : null;
    const nextProduct = productIndex < bpbioPesticidesProducts.length - 1 ? bpbioPesticidesProducts[productIndex + 1] : null;
    
    // Format sidebar links
    const sidebarLinks = bpbioPesticidesContentData.sections.map(section => ({
        sectionTitle: section.title,
        links: section.products.map(p => ({
            name: p.name,
            href: p.href,
            isActive: p.slug === slug,
            isSubCategory: section.title,
        }))
    }));
    
    const breadcrumb = [
        ...bpbioPesticidesHeroData.breadcrumb,
        { label: product.name.replace('\n', ' '), href: product.href }
    ];

    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={breadcrumb}
                backgroundImage={bpbioPesticidesHeroData.backgroundImage}
            />
            <ProductDetailsContent
                categoryName="Bio-pesticides"
                sidebarLinks={sidebarLinks}
                product={product as any}
                prevLink={prevProduct ? prevProduct.href : undefined}
                nextLink={nextProduct ? nextProduct.href : undefined}
            />
        </main>
    );
}

export async function generateStaticParams() {
    return bpbioPesticidesProducts.map((product) => ({
        slug: product.slug,
    }));
}
