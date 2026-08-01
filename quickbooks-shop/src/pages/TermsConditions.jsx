import SEO from '../components/SEO'

export default function TermsConditions() {
  return (
    <>
      <SEO title="Terms & Conditions" description="azure-artsfoundation terms and conditions." pathname="/terms-conditions" />
      <div className="container-main py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
          <div className="prose prose-gray max-w-none text-gray-600">
     k       <p className="mb-4">Last updated: June 28, 2026</p>
            <p className="mb-4">These Terms govern your use of azure-artsfoundation (https://azure-artsfoundation.org) and any purchase you make.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. Products</h2>
            <p className="mb-4">We sell digital software licenses delivered electronically. Prices and offers are shown at checkout and may change without notice.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. Orders & Payment</h2>
            <p className="mb-4">All orders are subject to acceptance. Payment is processed securely via Stripe and PayPal. You confirm the payment details provided are valid and yours.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">3. Digital Delivery</h2>
            <p className="mb-4">License keys and download links are delivered to the email associated with your order. It is your responsibility to provide a correct email address.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">4. License Use</h2>
            <p className="mb-4">You agree to use any software in accordance with its publisher's license terms.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">5. Refunds</h2>
            <p className="mb-4">Governed by our Refund Policy.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">6. Trademarks</h2>
            <p className="mb-4">QuickBooks® and Intuit® are trademarks of Intuit Inc. TaxUSA is an independent reseller; product names are used for identification only.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">7. Limitation of Liability</h2>
            <p className="mb-4">To the maximum extent permitted by law, TaxUSA is not liable for indirect or consequential damages.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">8. Governing Law</h2>
            <p className="mb-4">These Terms are governed by the laws of the jurisdiction in which TaxUSA is established.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Contact</h2>
            <p><a href="mailto:admin@azure-artsfoundation.org" className="text-blue-600 hover:underline">admin@azure-artsfoundation.org</a></p>
          </div>
        </div>
      </div>
    </>
  )
}
