import SEO from '../components/SEO'

export default function ShippingPolicy() {
  return (
    <>
      <SEO title="Shipping & Delivery Policy" description="TaxUSA shipping and delivery policy for digital products." pathname="/shipping-delivery" />
      <div className="container-main py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Shipping & Delivery Policy</h1>
          <div className="prose prose-gray max-w-none text-gray-600">
            <p className="mb-4">Last updated: June 28, 2026</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Digital Delivery Only</h2>
            <p className="mb-4">All products are digital. No physical item is shipped. After your payment is confirmed, your license key and official download link are sent to the email address on your order.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Delivery Time</h2>
            <p className="mb-4">Delivery is typically within minutes of payment confirmation. During occasional manual verification, delivery may take up to a few business hours.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Didn't Receive Your Email?</h2>
            <p className="mb-4">Check your spam/junk folder first. If you still can't find it, contact <a href="mailto:support@taxusa.shop" className="text-blue-600 hover:underline">support@taxusa.shop</a> with your order number and we'll resend it immediately.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Incorrect Email</h2>
            <p>If you entered the wrong email, contact us right away so we can correct delivery.</p>
          </div>
        </div>
      </div>
    </>
  )
}
