import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { ShoppingCart, Check, Star, ChevronLeft, Minus, Plus } from 'lucide-react'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import { useCart } from '../context/CartContext'
import products from '../data/products.json'

export default function ProductDetails() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const product = products.find(p => p.slug === slug)

  if (!product) {
    return (
      <div className="container-main py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <button onClick={() => navigate('/shop')} className="btn-primary">Back to Shop</button>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.description,
    "sku": product.sku,
    "brand": { "@type": "Brand", "name": "azure-artsfoundation" },
    "offers": {
      "@type": "Offer",
      "url": `https://azure-artsfoundation.org/shop/${product.slug}`,
      "priceCurrency": "USD",
      "price": product.price.toFixed(2),
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviews
    }
  }

  return (
    <>
      <SEO
        title={product.name}
        description={product.description}
        pathname={`/shop/${product.slug}`}
        type="product"
        image={product.image}
      />
      <JsonLd data={productSchema} />

      <div className="container-main py-8">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 mb-6">
          <ChevronLeft className="w-4 h-4" /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
            <img src={product.image} alt={product.name} className="max-w-full max-h-96 object-contain rounded-xl" />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-primary-100 text-primary-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase">{product.category}</span>
              {product.badge && <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full">{product.badge}</span>}
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-primary-700">${product.price.toFixed(2)}</span>
              <span className="text-lg text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
              <span className="bg-red-100 text-red-700 text-sm font-bold px-2.5 py-1 rounded-full">-{product.discount}%</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

            <div className="space-y-3 mb-8">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-gray-50"><Minus className="w-4 h-4" /></button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-gray-50"><Plus className="w-4 h-4" /></button>
              </div>
              <button onClick={() => addToCart(product, quantity)} className="btn-primary flex-1">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
            </div>

            <div className="text-sm text-gray-500">
              <p>SKU: <span className="font-medium text-gray-700">{product.sku}</span></p>
              <p>Category: <span className="font-medium text-gray-700">{product.category}</span></p>
              <p>Platform: <span className="font-medium text-gray-700">{product.platform}</span></p>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(p => (
                <div key={p.id} className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-shadow">
                  <Link to={`/shop/${p.slug}`}>
                    <img src={p.image} alt={p.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2 hover:text-primary-600">{p.name}</h3>
                  </Link>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary-700">${p.price.toFixed(2)}</span>
                    <button onClick={() => addToCart(p)} className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
