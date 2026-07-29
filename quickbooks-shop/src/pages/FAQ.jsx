import SEO from '../components/SEO'
import FAQAccordion from '../components/FAQAccordion'

const faqItems = [
  {
    question: "Are these genuine QuickBooks licenses?",
    answer: "Yes, all our licenses are 100% genuine and authentic. We are an authorized Intuit reseller, and every license key is legally obtained and transferable."
  },
  {
    question: "What does 'Lifetime License' mean?",
    answer: "A lifetime license means you pay once and own the software forever. There are no recurring monthly or annual subscription fees. You can use the software indefinitely on the licensed device."
  },
  {
    question: "How quickly will I receive my license key?",
    answer: "License keys are delivered instantly via email after payment confirmation. In most cases, you will receive your key within 5-10 minutes."
  },
  {
    question: "Can I install QuickBooks on multiple computers?",
    answer: "Each license is valid for the specified number of users. A 1-user license can be installed on one computer. Multi-user licenses allow installation on multiple computers within the same network."
  },
  {
    question: "What is your refund policy?",
    answer: "Due to the digital nature of our products, all sales are final once the license key has been delivered. We offer exchanges if the wrong product was ordered and the key has not been activated."
  },
  {
    question: "Do you provide technical support?",
    answer: "Yes, we provide basic installation support. For advanced QuickBooks technical issues, we recommend contacting Intuit directly or visiting the QuickBooks support portal."
  },
  {
    question: "Will I receive software updates?",
    answer: "QuickBooks Desktop licenses include updates for the specific year version purchased. For example, a 2024 license will receive all 2024 updates but does not include future year versions."
  },
  {
    question: "Is this compatible with my operating system?",
    answer: "We offer both Windows and Mac versions. Please check the product description for specific system requirements. Windows versions require Windows 10 or later, and Mac versions require macOS 10.15 or later."
  }
]

export default function FAQ() {
  return (
    <>
      <SEO title="Frequently Asked Questions" description="Find answers to common questions about QuickBooks licenses, delivery, and support." pathname="/faq" />
      <div className="container-main py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Frequently Asked Questions</h1>
          <p className="text-gray-600 text-center mb-10">Everything you need to know about our QuickBooks licenses</p>
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </>
  )
}
