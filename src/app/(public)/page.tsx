// app/page.js
import ClientAllProducts from '@/components/ClientAllProducts'
import DynamicCategorySections from '@/components/DynamicCategorySections'
import DynamicFlashdeal from '@/components/DynamicFlashdeal'
import NewProductsSlide from '@/components/NewProducts'
import PromotionBanner from '@/components/PromotionBanner'
import ScrollToTopButton from '@/components/ui/molecules/ScrollToTopButton'
import ServicePolicyStrip from '@/components/ui/organisms/ServicePolicyStrip'
import { ProductsGridSkeleton } from '@/components/ui/SimpleLoadingSkeleton'
import ProductVideosSlider from '@/components/VedioSection'
import { getProductsServer } from '@/lib/api/serverApi'
import { Suspense } from 'react'

export async function generateMetadata() {
  return {
    title: "rimsheaven  - Best Online Shopping Platform",
    description:
      "Discover amazing deals and shop for your favorite products on rimsheaven",
    openGraph: {
      title: "rimsheaven  - Best Online Shopping Platform",
      description:
        "Discover amazing deals and shop for your favorite products on rimsheaven",
      url: 'https://rimsheavencom/',
      type: 'website'
    }
  } as const
}

export default async function LandingPage() {
  const initialProducts = await getProductsServer()

  return (
    <div>
      <PromotionBanner />
      <NewProductsSlide initialProducts={initialProducts} />
      <DynamicFlashdeal initialProducts={initialProducts} />
      <div className='mt-0 md:mt-0 mb-0'>
        <Suspense fallback={<ProductsGridSkeleton />}>
          <ClientAllProducts initialProducts={initialProducts} />
        </Suspense>
      </div>
      <Suspense
        fallback={
          <div className='h-64 bg-gray-100 animate-pulse rounded-lg flex items-center justify-center'>
            <div className='text-gray-500'>Loading content...</div>
          </div>
        }
      >
        <ProductVideosSlider />
      </Suspense>
      <Suspense
        fallback={
          <div className='h-32 bg-gray-50 animate-pulse rounded-lg'></div>
        }
      >
        <DynamicCategorySections initialProducts={initialProducts} />
      </Suspense>
      <ServicePolicyStrip />
      <ScrollToTopButton />
    </div>
  )
}
