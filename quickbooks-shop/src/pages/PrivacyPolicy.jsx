import SEO from '../components/SEO'

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy" description="TaxUSA privacy policy." pathname="/privacy-policy" />
      <div className="container-main py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <div className="prose prose-gray max-w-none text-gray-600">
            <p className="mb-4">Last updated: June 28, 2026</p>

            <p className="mb-4">TaxUSA ("we") respects your privacy. This policy explains what we collect and why.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Data We Collect</h2>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><strong>Order data:</strong> name, email and billing details to process your purchase and deliver your license.</li>
              <li><strong>Payment data:</strong> processed securely by Stripe and PayPal. We never store full card numbers.</li>
              <li><strong>Usage data:</strong> anonymized analytics (e.g. Google Analytics 4) to improve our website.</li>
              <li><strong>Contact data:</strong> information you submit through our contact form.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">How We Use Your Data</h2>
            <p className="mb-4">To process orders, deliver products, provide support, send transactional emails, comply with the law and improve our services.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Legal Bases (GDPR)</h2>
            <p className="mb-4">Contract performance, legitimate interest, legal obligation and, where required, your consent (e.g. analytics/marketing cookies).</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Sharing</h2>
            <p className="mb-4">Only with processors that help us operate (payment, email, hosting, analytics) under appropriate agreements. We never sell your data.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Your Rights</h2>
            <p className="mb-4">Access, correct, delete, port, and object to or restrict processing. Email <a href="mailto:support@taxusa.shop" className="text-blue-600 hover:underline">support@taxusa.shop</a> to exercise these rights.</p>

            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Contact</h2>
            <p><a href="mailto:support@taxusa.shop" className="text-blue-600 hover:underline">support@taxusa.shop</a> · <a href="https://taxusa.shop" className="text-blue-600 hover:underline">https://taxusa.shop</a></p>
          </div>
        </div>
      </div>
    </>
  )
}
