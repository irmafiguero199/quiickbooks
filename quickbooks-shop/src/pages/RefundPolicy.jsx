import SEO from '../components/SEO'

export default function RefundPolicy() {
  return (
    <>
      <SEO title="Refund Policy" description="TaxUSA refund policy." pathname="/refund-policy" />
      <div className="container-main py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Refund Policy</h1>
          <div className="prose prose-gray max-w-none text-gray-600">
            <p className="mb-4">Last updated: June 28, 2026</p>

            <p className="mb-4">We stand behind every order with a money-back guarantee.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Eligibility</h2>
            <p className="mb-4">If you are unable to activate your software or it does not work as described, contact us within 30 days of purchase and we will help resolve the issue or issue a refund.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">How to Request a Refund</h2>
            <p className="mb-4">Email support@taxusa.shop with your order number and a short description of the problem. Our team responds within 2 business days.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Processing</h2>
            <p className="mb-4">Approved refunds are returned to your original payment method (Stripe or PayPal) within 5–10 business days.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Exclusions</h2>
            <p className="mb-4">Refunds may not apply where a license key has been successfully activated and is functioning as described, except as required by law.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Contact</h2>
            <p>Questions? Email support@taxusa.shop.</p>
          </div>
        </div>
      </div>
    </>
  )
}
