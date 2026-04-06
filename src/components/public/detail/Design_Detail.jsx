import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/v1";
const PLACEHOLDER_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-family='Arial, Helvetica, sans-serif' font-size='32'%3ECoffee%3C/text%3E%3C/svg%3E";

const getProductImage = (product) => {
  if (product?.image_url) {
    return product.image_url.startsWith("http")
      ? product.image_url
      : `${BASE_URL}/${product.image_url}`;
  }
  if (product?.category?.image_url) {
    return `${BASE_URL}/${product.category.image_url}`;
  }
  return PLACEHOLDER_IMAGE;
};

export default function Design_Detail() {
  const { id } = useParams(); // Get ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  // Related products kept as static as they aren't in the specific product API
  const relatedProducts = [
    { name: "Ice Caramel Macchiato", price: 3, image: "https://i.pinimg.com/736x/56/3d/b2/563db255ce222f71bffc76c045a66207.jpg" },
    { name: "Ice Espresso", price: 3.5, image: "https://i.pinimg.com/736x/5f/5b/5d/5f5b5d4dcd8c22bbc06fa3f802d803e9.jpg" },
    { name: "Ice Caramel Coffee", price: 4, image: "https://i.pinimg.com/736x/71/d6/24/71d624cf76d58466233f6c3d5df6db5f.jpg" },
    { name: "Ice Vanilla Almond Milk Latte", price: 2.5, image: "https://i.pinimg.com/1200x/35/9f/c1/359fc15a59e47967f1e95305c7ae194e.jpg" },
  ];

  // ================= FETCH PRODUCT DETAIL =================
  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`${BASE_URL}/products/${id}`, {
        headers: { Accept: "application/json" },
      })
        .then((res) => res.json())
        .then((resData) => {
          if (resData.status === "success") {
            setProduct(resData.data);
          }
        })
        .catch((err) => console.error("Error fetching product detail:", err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center font-bold">Loading Product Details...</div>;
  }

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center font-bold">Product not found.</div>;
  }

  // Placeholder price since API example didn't have one
  const displayPrice = 2.50; 

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-8">

        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Image */}
          <div className="overflow-hidden rounded-2xl bg-gray-50">
            <img
              src={getProductImage(product)}
              alt={product.name}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = PLACEHOLDER_IMAGE;
              }}
              className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl hover:scale-105 transition duration-500"
            />
          </div>

          {/* Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-500 mb-4">{product.category?.name || "Coffee"}</p>

            {/* Rating */}
            <div className="flex items-center mb-5">
              {Array(5).fill(0).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
              <span className="ml-2 text-gray-600 text-sm">
                (5 Reviews)
              </span>
            </div>
            {/* Size */}
            <div className="mb-5">
              <p className="font-semibold mb-2">Choose Size</p>
              <div className="flex gap-3">
                {/* Fallback to default sizes if API returns empty array */}
                {(product.sizes && product.sizes.length > 0 ? product.sizes : ["S", "M", "L"]).map((size) => (
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
                ${(displayPrice * quantity).toFixed(2)}
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
            
            {/* SKU and Description */}
            <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-2">Description</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description || "No description provided for this item."}
                </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <h2 className="text-2xl font-bold mt-12 mb-5">
          You may also like ☕️
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