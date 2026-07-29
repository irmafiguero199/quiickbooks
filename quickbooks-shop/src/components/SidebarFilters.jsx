import { useState } from 'react'
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react'

export default function SidebarFilters({ products, filters, onFilterChange, onClearFilters }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expanded, setExpanded] = useState({ price: true, stock: true, category: true })

  const categories = [...new Set(products.map(p => p.category))]
  const years = [...new Set(products.map(p => p.year))].sort((a, b) => b - a)
  const platforms = [...new Set(products.map(p => p.platform))]

  const maxPrice = Math.max(...products.map(p => p.price))
  const minPrice = Math.min(...products.map(p => p.price))

  const toggleSection = (section) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Price Filter */}
      <div>
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full text-sm font-semibold text-gray-900 mb-3"
        >
          FILTER BY PRICE
          <ChevronDown className={`w-4 h-4 transition-transform ${expanded.price ? '' : '-rotate-90'}`} />
        </button>
        {expanded.price && (
          <div className="space-y-3">
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={filters.maxPrice || maxPrice}
              onChange={(e) => onFilterChange({ ...filters, maxPrice: Number(e.target.value) })}
              className="w-full accent-primary-600"
            />
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Price: ${minPrice.toFixed(0)} — ${(filters.maxPrice || maxPrice).toFixed(0)}</span>
            </div>
            <button
              onClick={() => onFilterChange({ ...filters, maxPrice: maxPrice })}
              className="text-xs bg-primary-600 text-white px-3 py-1.5 rounded hover:bg-primary-700 transition-colors"
            >
              FILTER
            </button>
          </div>
        )}
      </div>

      {/* Stock Status */}
      <div>
        <button
          onClick={() => toggleSection('stock')}
          className="flex items-center justify-between w-full text-sm font-semibold text-gray-900 mb-3"
        >
          STOCK STATUS
          <ChevronDown className={`w-4 h-4 transition-transform ${expanded.stock ? '' : '-rotate-90'}`} />
        </button>
        {expanded.stock && (
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.onSale || false}
                onChange={(e) => onFilterChange({ ...filters, onSale: e.target.checked })}
                className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-600">On sale</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.inStock || false}
                onChange={(e) => onFilterChange({ ...filters, inStock: e.target.checked })}
                className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-600">In stock</span>
            </label>
          </div>
        )}
      </div>

      {/* Category */}
      <div>
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full text-sm font-semibold text-gray-900 mb-3"
        >
          CATEGORY
          <ChevronDown className={`w-4 h-4 transition-transform ${expanded.category ? '' : '-rotate-90'}`} />
        </button>
        {expanded.category && (
          <div className="space-y-2">
            {categories.map(cat => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.categories?.includes(cat) || false}
                  onChange={(e) => {
                    const current = filters.categories || []
                    const updated = e.target.checked
                      ? [...current, cat]
                      : current.filter(c => c !== cat)
                    onFilterChange({ ...filters, categories: updated })
                  }}
                  className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-600">{cat}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Year */}
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-3">VERSION YEAR</h4>
        <div className="space-y-2">
          {years.map(year => (
            <label key={year} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.years?.includes(year) || false}
                onChange={(e) => {
                  const current = filters.years || []
                  const updated = e.target.checked
                    ? [...current, year]
                    : current.filter(y => y !== year)
                  onFilterChange({ ...filters, years: updated })
                }}
                className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-600">QuickBooks {year}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Platform */}
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-3">PLATFORM</h4>
        <div className="space-y-2">
          {platforms.map(platform => (
            <label key={platform} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.platforms?.includes(platform) || false}
                onChange={(e) => {
                  const current = filters.platforms || []
                  const updated = e.target.checked
                    ? [...current, platform]
                    : current.filter(p => p !== platform)
                  onFilterChange({ ...filters, platforms: updated })
                }}
                className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-600">{platform}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={onClearFilters}
        className="w-full py-2 text-sm text-primary-600 font-medium border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  )

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 mb-4"
      >
        <SlidersHorizontal className="w-4 h-4" />
        Filters
      </button>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Filters</h3>
              <button onClick={() => setMobileOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <FilterContent />
      </aside>
    </>
  )
}
