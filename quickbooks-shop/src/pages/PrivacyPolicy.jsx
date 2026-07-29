import SEO from '../components/SEO'

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy" description="USQuickbooks privacy policy." pathname="/privacy-policy" />
      <div className="container-main py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <div className="prose prose-gray max-w-none text-gray-600">
            <p className="mb-4">Last updated: December 2024</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. Information We Collect</h2>
            <p className="mb-4">We collect information you provide directly to us, including name, email address, phone number, billing address, and payment information when making a purchase.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. How We Use Your Information</h2>
            <p className="mb-4">We use your information to process orders, deliver license keys, provide customer support, and send promotional communications (with your consent).</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">3. Information Sharing</h2>
            <p className="mb-4">We do not sell or rent your personal information. We may share information with payment processors and service providers necessary to complete transactions.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">4. Data Security</h2>
            <p className="mb-4">We implement appropriate security measures to protect your personal information. All payment transactions are encrypted using SSL technology.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">5. Cookies</h2>
            <p className="mb-4">We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">6. Contact Us</h2>
            <p>If you have questions about this privacy policy, please contact us at contact@usquickbooks.com.</p>
          </div>
        </div>
      </div>
    </>
  )
}
