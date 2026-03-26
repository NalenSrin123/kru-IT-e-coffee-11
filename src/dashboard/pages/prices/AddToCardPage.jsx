import React, { useState } from "react";
import { Minus, Plus, Tag, ChevronRight } from "lucide-react";

const initialCartItems = [
  {
    id: 101,
    name: "Ice Latte Coffee",
    category: "Hot Coffee",
    price: 2.0,
    quantity: 1,
    image: "/Ice_Latte.png",
  },
  {
    id: 102,
    name: "Cappuccino",
    category: "Hot Coffee",
    price: 2.5,
    quantity: 1,
    image: "/Cappuccino.png",
  },
  {
    id: 103,
    name: "Caramel Latte",
    category: "Hot Coffee",
    price: 3.0,
    quantity: 1,
    image: "/Caramel_Latte.png",
  },
  {
    id: 104,
    name: "Flat White",
    category: "Hot Coffee",
    price: 3.2,
    quantity: 1,
    image: "/Flat_White.png",
  },
];

export default function AddToCardPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = 0;
  const total = subtotal - discount;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* HEADER */}
        <div className="px-6 py-5 border-b">
          <h1 className="text-2xl font-bold text-gray-800">
            🛒 Your Cart
          </h1>
        </div>

        {/* CART ITEMS */}
        <div className="divide-y">

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 px-6 py-5"
            >
              
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-xl object-cover"
              />

              {/* INFO */}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.category}
                </p>

                <p className="text-sm font-semibold mt-1">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              {/* QUANTITY */}
              <div className="flex items-center gap-3">

                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                >
                  <Minus size={16} />
                </button>

                <span className="font-semibold w-6 text-center">
                  {item.quantity}
                </span>

                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                >
                  <Plus size={16} />
                </button>

              </div>

            </div>
          ))}

          {cartItems.length === 0 && (
            <div className="text-center py-10 text-gray-400">
              Your cart is empty
            </div>
          )}
        </div>

        {/* COUPON */}
        <div className="flex justify-between items-center px-6 py-4 bg-gray-50 border-t">
          <div className="flex items-center gap-2 text-gray-600">
            <Tag size={16} />
            <span>Available Coupons</span>
          </div>

          <ChevronRight size={18} />
        </div>

        {/* PRICE SUMMARY */}
        <div className="px-6 py-5 space-y-2 border-t">

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-medium">
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Discount</span>
            <span className="text-green-600">
              ${discount.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between text-lg font-bold border-t pt-3">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

        </div>

        {/* CHECKOUT */}
        <div className="px-6 py-5 border-t flex justify-between items-center">

          <span className="text-sm text-gray-600">
            Shipping calculated at checkout
          </span>

          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-xl font-medium shadow">
            Checkout
          </button>

        </div>

      </div>
        {/* Fine print (optional, based on your design) */}
      <p className="text-xs text-gray-400 text-center mt-6">
        Prices and availability may vary.
      </p>
    </div>
  );
}

