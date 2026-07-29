import SEO from '../components/SEO'

export default function RefundPolicy() {
  return (
    <>
      <SEO title="Refund Policy" description="USQuickbooks refund and return policy." pathname="/refund-policy" />
      <div className="container-main py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Refunds & Returns Policy</h1>
          <div className="prose prose-gray max-w-none text-gray-600">
            <p className="mb-4">Last updated: December 2024</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Digital Products</h2>
            <p className="mb-4">Due to the nature of digital license keys, all sales are final once the product has been delivered. License keys cannot be returned or exchanged after activation.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Eligibility for Refund</h2>
            <p className="mb-4">A refund may be considered only if:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>The license key has not been delivered within 24 hours of purchase</li>
              <li>The license key is defective or non-functional (verified by our support team)</li>
              <li>The wrong product was ordered and the key has not been viewed or used</li>
            </ul>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Exchange Policy</h2>
            <p className="mb-4">We offer exchanges for unactivated keys within 7 days of purchase if you ordered the wrong product. Contact our support team to process an exchange.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">How to Request a Refund</h2>
            <p className="mb-4">To request a refund, contact us at contact@usquickbooks.com with your order number and reason for the request. Refund requests are processed within 3-5 business days.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Chargebacks</h2>
            <p>Initiating a chargeback without contacting us first may result in permanent suspension of your account and blacklisting of your license keys.</p>
          </div>
        </div>
      </div>
    </>
  )
}
