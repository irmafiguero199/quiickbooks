import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: "Michael R.",
    rating: 5,
    date: "December 2024",
    text: "Excellent service! Received my QuickBooks Enterprise 2024 license within minutes. The lifetime deal is unbeatable compared to subscription pricing."
  },
  {
    id: 2,
    name: "Sarah T.",
    rating: 5,
    date: "November 2024",
    text: "As a small business owner, this saved me thousands. The 10-user license works perfectly for my team. Highly recommend USQuickbooks."
  },
  {
    id: 3,
    name: "David K.",
    rating: 5,
    date: "October 2024",
    text: "Genuine licenses at a fraction of the cost. Customer support was responsive and helped me with installation. Will buy again."
  },
  {
    id: 4,
    name: "Jennifer L.",
    rating: 4,
    date: "September 2024",
    text: "Great value for money. The Mac version works flawlessly on my M2 MacBook Pro. Instant delivery as promised."
  },
  {
    id: 5,
    name: "Robert M.",
    rating: 5,
    date: "August 2024",
    text: "Bought the Premier Plus 2024 for my accounting firm. All industry-specific editions included. Fantastic deal!"
  },
  {
    id: 6,
    name: "Amanda S.",
    rating: 5,
    date: "July 2024",
    text: "Trusted reseller with authentic licenses. The lifetime aspect is what sold me. No more monthly QuickBooks bills!"
  }
]

export default function Reviews() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust USQuickbooks for their QuickBooks licensing needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(review => (
            <div key={review.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <Quote className="w-8 h-8 text-primary-200 mb-4" />
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">{review.text}</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900 text-sm">{review.name}</span>
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
