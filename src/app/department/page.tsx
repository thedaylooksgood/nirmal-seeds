import { InnerPageHeroBanner } from "@/components/ui/InnerPageHeroBanner"
import { DepartmentContent } from "@/features/department-page/components/DepartmentContent"
import { departmentHeroData } from "@/features/department-page/data"

export const metadata = {
    title: "Departments - Nirmal Seeds",
    description: "Discover the specialized departments powering Nirmal Seeds — R&D, Quality Assurance, Seed Processing, and Biotech Lab Facilities.",
}

export default function DepartmentPage() {
    return (
        <main>
            <InnerPageHeroBanner
                breadcrumb={departmentHeroData.breadcrumb}
                backgroundImage={departmentHeroData.backgroundImage}
            />
            <DepartmentContent />
        </main>
    )
}
