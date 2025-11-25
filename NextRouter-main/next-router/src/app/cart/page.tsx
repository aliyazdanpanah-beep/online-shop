"use client";
import CartItem, { Product } from "@/component/cartItem/cartItem";
import Navbar from "@/component/navbar/page";
import { useCartContext } from "@/context/CartContext";
import axios from "axios";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cartItem } = useCartContext();

  const [productData, setProductData] = useState<Product[] | null>(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/`)
      .then((res) => setProductData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // هنوز لود نشده
  if (!productData)
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Loading Your Cart...
          </p>
        </div>
      </div>
    );

  const totalPrice = cartItem.reduce((total, item) => {
    const product = productData.find((p) => p.id === item.id);
    if (!product) return total;
    return total + product.price * item.qty;
  }, 0);

  const itemCount = cartItem.reduce((total, item) => total + item.qty, 0);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 mt-20">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Shopping Cart
            </h1>
            <p className="text-lg text-gray-600">
              Review your items and proceed to checkout
            </p>
          </div>

          {cartItem.length === 0 ? (
            /* Empty Cart State */
            <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
              <div className="text-6xl mb-6">🛒</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Your Cart is Empty
              </h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Looks like you haven't added any items to your cart yet. Start
                shopping to discover amazing products!
              </p>
              <a
                href="/store"
                className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Start Shopping
              </a>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="lg:w-2/3">
                <div className="bg-white rounded-3xl shadow-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                      Your Items ({itemCount})
                    </h2>
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {cartItem.length}{" "}
                      {cartItem.length === 1 ? "Item" : "Items"}
                    </span>
                  </div>

                  <div className="space-y-6">
                    {cartItem.map((item) => (
                      <div
                        key={item.id}
                        className="transform hover:scale-[1.02] transition-transform duration-300"
                      >
                        <CartItem {...item} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:w-1/3">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl shadow-2xl p-8 text-white sticky top-8">
                  <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-purple-100">
                        Items ({itemCount})
                      </span>
                      <span className="font-semibold">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-100">Shipping</span>
                      <span className="font-semibold text-green-300">FREE</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-100">Tax</span>
                      <span className="font-semibold">
                        ${(totalPrice * 0.1).toFixed(2)}
                      </span>
                    </div>
                    <div className="border-t border-purple-400 pt-4 mt-4">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total</span>
                        <span className="text-2xl">
                          ${(totalPrice * 1.1).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg mb-4">
                    Proceed to Checkout
                  </button>

                  <button className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 border border-white/30">
                    Continue Shopping
                  </button>

                  {/* Security Badge */}
                  <div className="mt-6 pt-6 border-t border-purple-400">
                    <div className="flex items-center justify-center space-x-2 text-purple-200">
                      <span className="text-xl">🔒</span>
                      <span className="text-sm">
                        Secure Checkout • 256-bit SSL Encryption
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Trust Badges */}
          {cartItem.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="text-3xl mb-3">🚚</div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Free Shipping
                </h3>
                <p className="text-sm text-gray-600">On orders over $50</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="text-3xl mb-3">↩️</div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Easy Returns
                </h3>
                <p className="text-sm text-gray-600">30-day return policy</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Secure Payment
                </h3>
                <p className="text-sm text-gray-600">Your data is protected</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  24/7 Support
                </h3>
                <p className="text-sm text-gray-600">We're here to help</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
