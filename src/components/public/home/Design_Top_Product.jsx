import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BASE_URL = "https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/v1";

export default function Design_Top_Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= API FETCHING =================
  useEffect(() => {
    fetch(`${BASE_URL}/products`, {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((resData) => {
        // Accessing the nested data: resData.data.data
        if (resData.status === "success") {
          setProducts(resData.data.data || []);
        }
      })
      .catch((err) => console.error("Error fetching products:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className=" py-3 sm:px-8 lg:px-19 mb-8">
      <div className="w-[100%] shadow-2xl rounded-4xl p-6 sm:p-10 lg:p-14 bg-gradient-to-r from-orange-900/40 via-orange-900/10 to-orange-900/40">
        {/* ================= HEADER (Kept Exactly Same) ================= */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide">
            BEST SELLER
          </h1>

          <div className="flex gap-6 text-gray-600 text-sm sm:text-base font-medium ">
            <span className="text-black cursor-pointer whitespace-nowrap">
              All Product
            </span>
            <span className="hover:text-black cursor-pointer whitespace-nowrap">
              Hot Coffee
            </span>
            <span className="hover:text-black cursor-pointer whitespace-nowrap">
              Frappe Drink
            </span>
            <span className="hover:text-black cursor-pointer whitespace-nowrap">
              Cold Drink
            </span>
          </div>

          <button className="font-medium hover:underline md:text-lg">
            View More →
          </button>
        </div>

        {/* ================= PRODUCT GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
          {loading ? (
            <div className="col-span-full text-center py-10 font-bold">Loading Products...</div>
          ) : (
            products.map((item) => (
              <Link 
                to={`/detail/${item.id}`} 
                key={item.id} 
                className="bg-white p-6 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-transparent hover:border-amber-100 flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-56 rounded-2xl overflow-hidden mb-4 bg-gray-50">
                  <img 
                    // Using image_url from API, fallback to a placeholder if null
                    src={item.image_url || "https://via.placeholder.com/400x400?text=Coffee"} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow">
                  <h4 className="font-bold text-[20px] mb-2 group-hover:text-amber-800 transition-colors uppercase">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-[14px] mb-6 line-clamp-2 flex-grow">
                    {item.description || "Freshly brewed coffee with premium ingredients."}
                  </p>


                  {/* Price and Button */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-amber-700">
                      {/* Note: Your API snippet didn't show a price field. 
                          I'm using 2.50 as a placeholder or you can use item.price if it exists */}
                      ${item.price ? item.price.toFixed(2) : "2.50"}
                    </span>
                    <button className="bg-amber-100 text-amber-800 px-4 py-2 rounded-xl font-semibold text-sm flex items-center gap-2 hover:bg-amber-800 hover:text-white transition-all">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
