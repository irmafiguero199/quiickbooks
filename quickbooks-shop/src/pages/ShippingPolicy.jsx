import SEO from '../components/SEO'

export default function ShippingPolicy() {
  return (
    <>
      <SEO title="Shipping Policy" description="USQuickbooks shipping and delivery policy." pathname="/shipping-policy" />
      <div className="container-main py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Shipping Policy</h1>
          <div className="prose prose-gray max-w-none text-gray-600">
            <p className="mb-4">Last updated: December 2024</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Digital Delivery</h2>
            <p className="mb-4">All our products are digital software licenses. We do not ship physical products. License keys are delivered electronically via email.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Delivery Time</h2>
            <p className="mb-4">License keys are typically delivered within 5-10 minutes of payment confirmation. In rare cases, delivery may take up to 24 hours during high-volume periods or additional verification requirements.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Delivery Method</h2>
            <p className="mb-4">License keys and download instructions are sent to the email address provided during checkout. Please ensure your email address is correct before completing your order.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Lost License Keys</h2>
            <p className="mb-4">If you did not receive your license key, please check your spam/junk folder first. If you still cannot locate it, contact us at contact@usquickbooks.com with your order details.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">International Orders</h2>
            <p>Since we deliver digitally, we can serve customers worldwide. However, our QuickBooks licenses are specifically for the USA version and may not be compatible with international QuickBooks editions.</p>
          </div>
        </div>
      </div>
    </>
  )
}
