import { Award, Users, Globe, Shield } from 'lucide-react'
import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Learn about USQuickbooks - Authorized Intuit QuickBooks Reseller." pathname="/about" />
      <div className="container-main py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About USQuickbooks</h1>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              USQuickbooks is an authorized Intuit reseller specializing in QuickBooks Desktop software licenses.
              We provide genuine lifetime licenses for QuickBooks Enterprise, Premier Plus, and Mac editions at
              significantly discounted prices.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our mission is to make professional accounting software accessible to small and medium businesses
              without the burden of expensive monthly subscriptions. With our lifetime licenses, you pay once and
              own your software forever.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            {[
              { icon: Award, title: 'Authorized Partner', desc: 'Certified Intuit reseller with official partnership status' },
              { icon: Users, title: '10,000+ Customers', desc: 'Trusted by businesses across the United States' },
              { icon: Globe, title: 'Instant Delivery', desc: 'Digital license keys delivered to your email within minutes' },
              { icon: Shield, title: 'Secure Shopping', desc: 'Encrypted checkout and secure payment processing' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <item.icon className="w-8 h-8 text-primary-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
