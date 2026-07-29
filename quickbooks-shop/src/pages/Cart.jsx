import { Link } from 'react-router-dom'
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, totalPrice } = useCart()

  return (
    <>
      <SEO title="Shopping Cart" description="Review your QuickBooks license selections." pathname="/cart" />
      <div className="container-main py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
            <Link to="/shop" className="btn-primary">Start Shopping</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg bg-gray-50" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-primary-600 font-bold mb-3">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-gray-50"><Minus className="w-4 h-4" /></button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-gray-50"><Plus className="w-4 h-4" /></button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-24">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Cart Summary</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm"><span className="text-gray-600">Subtotal</span><span className="font-medium">${totalPrice.toFixed(2)}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-600">Shipping</span><span className="text-green-600 font-medium">Free</span></div>
                </div>
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between text-xl font-bold"><span>Total</span><span>${totalPrice.toFixed(2)}</span></div>
                </div>
                <Link to="/checkout" className="btn-primary w-full flex items-center justify-center gap-2">
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/shop" className="block text-center text-sm text-gray-500 mt-4 hover:text-gray-700">Continue Shopping</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
