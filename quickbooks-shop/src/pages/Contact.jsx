import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import SEO from '../components/SEO'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SEO title="Contact Us" description="Get in touch with shilohbaptistrochester." pathname="/contact" />
      <div className="container-main py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Contact Us</h1>
          <p className="text-gray-600 text-center mb-12">Have questions? We're here to help.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { 
                icon: Mail, 
                title: 'Email', 
                info: 'admin@shilohbaptistrochester.org',
                href: 'admin@shilohbaptistrochester.org'
              },
              { 
                icon: Phone, 
                title: 'Phone', 
                info: '+1 (505) 399-7162',
                href: 'tel:+15053997162'
              },
              { 
                icon: MapPin, 
                title: 'Location', 
                info: 'Waßmannsdorfer Chaussee 117, Schönefeld 12529, Germany'
              },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 rounded-xl">
                <item.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    {item.info}
                  </a>
                ) : (
                  <p className="text-sm text-gray-600">{item.info}</p>
                )}
              </div>
            ))}
          </div>

          {submitted ? (
            <div className="text-center py-12 bg-green-50 rounded-xl">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h2>
              <p className="text-gray-600">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required placeholder="First Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500" />
                <input required placeholder="Last Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500" />
              </div>
              <input required type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500" />
              <input placeholder="Subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500" />
              <textarea required rows={5} placeholder="Your Message" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500"></textarea>
              <button type="submit" className="btn-primary flex items-center gap-2">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  )
}
