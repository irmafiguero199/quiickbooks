import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Clock, Award } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-primary-600 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="container-main relative py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Authorized Intuit Reseller
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Lifetime QuickBooks Licenses
          </h1>
          <p className="text-lg lg:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get genuine QuickBooks Desktop Enterprise, Premier Plus, and Mac licenses 
            at unbeatable prices. No subscriptions. Instant delivery.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/shop" className="btn-primary bg-white text-primary-700 hover:bg-gray-100 w-full sm:w-auto">
              Shop Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/about" className="btn-secondary border-white/30 text-white hover:bg-white/10 w-full sm:w-auto">
              Learn More
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">100% Genuine</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">Instant Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">Authorized Partner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
