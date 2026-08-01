import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'

const policyLinks = [
  { name: 'Billing Terms and Conditions', path: '/terms-conditions' },
  { name: 'Exchange Policy', path: '/refund-policy' },
  { name: 'Shipping Policy', path: '/shipping-policy' },
  { name: 'Refunds & Returns Policy', path: '/refund-policy' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms & Conditions', path: '/terms-conditions' },
  { name: 'Cookies Policy', path: '/privacy-policy' },
]

const usefulLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'About us', path: '/about' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact Us', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-main py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">QB</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">USQuickbooks</span>
                <span className="block text-[10px] text-primary-400 font-semibold -mt-1">Authorized Partner</span>
              </div>
            </div>
           <p className="text-sm text-gray-400 mb-4">
  Need help? Our live chat is available
</p>
<div className="space-y-2 text-sm">
  <p className="font-semibold text-white">Azure Arts Foundation</p>
  
  <div className="flex items-center gap-2">
    <Mail className="w-4 h-4 text-primary-400" />
    <a href="mailto:admin@azure-artsfoundation.org" className="hover:text-white transition-colors">
      admin@azure-artsfoundation.org
    </a>
  </div>
  
  <div className="flex items-center gap-2">
    <Phone className="w-4 h-4 text-primary-400" />
    <a href="tel:+15053997162" className="hover:text-white transition-colors">
      +1 (505) 399-7162
    </a>
  </div>
  
  <div className="flex items-start gap-2">
    <MapPin className="w-4 h-4 text-primary-400 mt-0.5" />
    <span>Waßmannsdorfer Chaussee 117, Schönefeld 12529, Germany</span>
  </div>
</div>

          {/* Policies */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Our Policies</h4>
            <ul className="space-y-2.5">
              {policyLinks.map(link => (
                <li key={link.path + link.name}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Useful Links</h4>
            <ul className="space-y-2.5">
              {usefulLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certificate */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Our Reseller Certificate</h4>
            <div className="bg-white rounded-lg p-4">
              <div className="border-2 border-dashed border-gray-300 rounded p-3 text-center">
                <p className="text-xs font-bold text-gray-800 mb-1">Reseller Certificate</p>
                <p className="text-xs text-gray-600 mb-2">USQuickbooks</p>
                <div className="w-12 h-12 bg-gray-100 rounded mx-auto mb-2 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-300 rounded" />
                </div>
                <p className="text-[10px] text-gray-500">Authorized Intuit Reseller</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="container-main py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2024 USQuickbooks. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded">
              <span>Pay</span>
              <span className="text-blue-200">Pal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
