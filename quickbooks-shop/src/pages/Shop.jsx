import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import SEO from '../components/SEO'
import ProductGrid from '../components/ProductGrid'
import SidebarFilters from '../components/SidebarFilters'
import JsonLd from '../components/JsonLd'
import products from '../data/products.json'

export default function Shop() {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    maxPrice: Math.max(...products.map(p => p.price)),
    categories: [],
    years: [],
    platforms: [],
    onSale: false,
    inStock: false,
  })

  useEffect(() => {
    const year = searchParams.get('year')
    if (year) {
      setFilters(prev => ({ ...prev, years: [Number(year)] }))
    }
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      if (p.price > filters.maxPrice) return false
      if (filters.categories.length > 0 && !filters.categories.includes(p.category)) return false
      if (filters.years.length > 0 && !filters.years.includes(p.year)) return false
      if (filters.platforms.length > 0 && !filters.platforms.includes(p.platform)) return false
      if (filters.onSale && p.discount <= 0) return false
      if (filters.inStock && !p.inStock) return false
      return true
    })
  }, [filters])

  const clearFilters = () => {
    setFilters({
      maxPrice: Math.max(...products.map(p => p.price)),
      categories: [],
      years: [],
      platforms: [],
      onSale: false,
      inStock: false,
    })
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://usquickbooks.shop/" },
      { "@type": "ListItem", "position": 2, "name": "Shop", "item": "https://usquickbooks.shop/shop" }
    ]
  }

  return (
    <>
      <SEO
        title="Shop QuickBooks Licenses"
        description="Browse our collection of QuickBooks Desktop Enterprise, Premier Plus, and Mac lifetime licenses. Up to 87% off retail prices."
        pathname="/shop"
      />
      <JsonLd data={breadcrumbSchema} />

      <div className="bg-primary-600 py-12">
        <div className="container-main text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-white">Shop</h1>
        </div>
      </div>

      <div className="container-main py-4">
        <nav className="text-sm text-gray-500">
          <span className="hover:text-gray-700 cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Shop</span>
        </nav>
      </div>

      <div className="container-main pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <SidebarFilters
            products={products}
            filters={filters}
            onFilterChange={setFilters}
            onClearFilters={clearFilters}
          />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-600">Showing {filteredProducts.length} of {products.length} products</p>
            </div>
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </>
  )
}
