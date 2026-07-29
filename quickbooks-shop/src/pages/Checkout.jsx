import SEO from '../components/SEO'
import CheckoutForm from '../components/CheckoutForm'

export default function Checkout() {
  return (
    <>
      <SEO title="Checkout" description="Complete your QuickBooks license purchase." pathname="/checkout" />
      <div className="container-main py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        <CheckoutForm />
      </div>
    </>
  )
}
