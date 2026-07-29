import { useState } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section className="bg-primary-700 py-16">
      <div className="container-main">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-10 h-10 text-primary-200 mx-auto mb-4" />
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-primary-100 mb-8">
            Get exclusive deals, new product announcements, and QuickBooks tips delivered to your inbox.
          </p>
          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-white">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 text-gray-900 placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
