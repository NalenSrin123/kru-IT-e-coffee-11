import React, { useState } from "react";

const product = {
  name: "Ice Latte Coffee",
  type: "Iced Coffee",
  price: 2,
  image:
    "https://i.pinimg.com/736x/cc/32/48/cc32481f44aedc6161f4514aa51e86ed.jpg",
  sizes: ["S", "M", "L"],
  reviews: 5,
};

const relatedProducts = [
  {
    name: "Ice Caramel Macchiato",
    price: 3,
    image:
      "https://i.pinimg.com/736x/56/3d/b2/563db255ce222f71bffc76c045a66207.jpg",
  },
  {
    name: "Ice Espresso",
    price: 3.5,
    image:
      "https://i.pinimg.com/736x/5f/5b/5d/5f5b5d4dcd8c22bbc06fa3f802d803e9.jpg",
  },
  {
    name: "Ice Caramel Coffee",
    price: 4,
    image:
      "https://i.pinimg.com/736x/71/d6/24/71d624cf76d58466233f6c3d5df6db5f.jpg",
  },
  {
    name: "Ice Vanilla Almond Milk Latte",
    price: 2.5,
    image:
      "https://i.pinimg.com/1200x/35/9f/c1/359fc15a59e47967f1e95305c7ae194e.jpg",
  },
];

export default function Design_Detail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-8">

        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl hover:scale-105 transition duration-500"
            />
          </div>

          {/* Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-500 mb-4">{product.type}</p>

            {/* Rating */}
            <div className="flex items-center mb-5">
              {Array(5).fill(0).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
              <span className="ml-2 text-gray-600 text-sm">
                ({product.reviews} Reviews)
              </span>
            </div>

            {/* Size */}
            <div className="mb-5">
              <p className="font-semibold mb-2">Choose Size</p>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-1 rounded-full border transition ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Price + Quantity */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-black">
                ${product.price * quantity}
              </span>

              <div className="flex items-center border rounded-full overflow-hidden">
                <button
                  onClick={decrement}
                  className="px-4 py-1 hover:bg-gray-200"
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={increment}
                  className="px-4 py-1 hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>

            {/* Button */}
            <button className="w-full bg-black text-white py-3 rounded-xl text-lg hover:bg-gray-800 transition">
              Add to Cart 🛒
            </button>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mt-5 text-gray-500 text-sm">
              <span>🚚 Free Delivery</span>
              <span>🔄 Easy Returns</span>
              <span>💬 24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <h2 className="text-2xl font-bold mt-12 mb-5">
          You may also like ☕
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {relatedProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-3 hover:shadow-xl hover:-translate-y-1 transition flex flex-col"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-80 object-cover rounded-xl"
              />

              <h3 className="mt-2 font-semibold">{item.name}</h3>
              <p className="text-gray-500 text-sm">${item.price}</p>

              <button className="mt-auto bg-black text-white py-1 rounded-lg mt-3 hover:bg-gray-800 transition">
                Add
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}