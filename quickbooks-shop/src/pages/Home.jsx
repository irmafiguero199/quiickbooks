import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import Reviews from '../components/Reviews'
import Newsletter from '../components/Newsletter'
import JsonLd from '../components/JsonLd'
import products from '../data/products.json'

export default function Home() {
  const featuredProducts = products.slice(0, 6)

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "USQuickbooks",
    "url": "https://usquickbooks.shop",
    "logo": "https://usquickbooks.shop/favicon.svg",
    "email": "contact@usquickbooks.com",
    "sameAs": []
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "USQuickbooks",
    "url": "https://usquickbooks.shop",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://usquickbooks.shop/shop?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <SEO
        title="Authorized QuickBooks Reseller - Lifetime Licenses"
        description="Buy genuine QuickBooks Desktop Enterprise, Premier Plus, and Mac lifetime licenses at up to 87% off. Instant digital delivery. Authorized Intuit Partner."
        pathname="/"
      />
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />

      <Hero />

      <section className="py-16">
        <div className="container-main">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Featured Products</h2>
            <Link to="/shop" className="text-primary-600 font-semibold hover:underline text-sm">
              View All Products →
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Instant Delivery', desc: 'License keys delivered to your email within minutes' },
              { title: 'Lifetime Access', desc: 'No recurring subscriptions. Pay once, use forever' },
              { title: 'Genuine Licenses', desc: '100% authentic Intuit QuickBooks products' },
              { title: '24/7 Support', desc: 'Our team is here to help you anytime' },
            ].map((f, i) => (
              <div key={i} className="text-center">
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />
      <Newsletter />
    </>
  )
}
