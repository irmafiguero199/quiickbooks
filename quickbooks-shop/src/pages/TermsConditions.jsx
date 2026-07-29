import SEO from '../components/SEO'

export default function TermsConditions() {
  return (
    <>
      <SEO title="Terms & Conditions" description="USQuickbooks terms and conditions." pathname="/terms-conditions" />
      <div className="container-main py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
          <div className="prose prose-gray max-w-none text-gray-600">
            <p className="mb-4">Last updated: December 2024</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. Agreement to Terms</h2>
            <p className="mb-4">By accessing or using USQuickbooks, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the service.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. Products and Services</h2>
            <p className="mb-4">We sell digital license keys for QuickBooks Desktop software. All products are genuine and legally obtained. Licenses are provided as-is for the specified version and user count.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">3. Pricing and Payment</h2>
            <p className="mb-4">All prices are listed in USD. Payment is required before delivery. We accept major credit cards and PayPal. Prices are subject to change without notice.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">4. Delivery</h2>
            <p className="mb-4">License keys are delivered digitally via email to the address provided during checkout. Delivery typically occurs within minutes of payment confirmation.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">5. Intellectual Property</h2>
            <p className="mb-4">QuickBooks is a trademark of Intuit Inc. We are an independent reseller and are not affiliated with or endorsed by Intuit Inc.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">6. Limitation of Liability</h2>
            <p>USQuickbooks shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services.</p>
          </div>
        </div>
      </div>
    </>
  )
}
