import { Link } from 'react-router-dom'
import { ShoppingCart, Star, Check } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <Link to={`/shop/${product.slug}`} className="relative block aspect-[4/5] bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.discount > 0 && (
          <span className="absolute top-3 left-3 bg-primary-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            -{product.discount}%
          </span>
        )}
        {product.badge && (
          <span className="absolute top-3 right-3 bg-amber-400 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-full">
            {product.badge}
          </span>
        )}
        {product.platform === 'Mac' && (
          <span className="absolute bottom-3 left-3 bg-gray-900 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            Mac
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        <Link to={`/shop/${product.slug}`}>
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2 hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-primary-700">${product.price.toFixed(2)}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        <div className="flex items-center gap-1 text-xs text-green-600 mb-3">
          <Check className="w-3.5 h-3.5" />
          <span>{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
        </div>

        <button
          onClick={() => addToCart(product)}
          disabled={!product.inStock}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  )
}
