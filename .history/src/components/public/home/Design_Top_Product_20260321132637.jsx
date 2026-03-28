

import React from "react";

export default function Design_Top_Product() {
  const coffeeProducts = [
  { id: 1, name: "Ice Latte Coffee", price: 2.00, image: "/Ice_Latte.png", desc: "Smooth espresso blended with milk and ice for a refreshing drink." },
  { id: 2, name: "Cappuccino", price: 2.50, image: "/Cappuccino.png", desc: "Rich espresso with steamed milk foam for a creamy taste." },
  { id: 3, name: "Caramel Latte", price: 3.00, image: "/Caramel_Latte.png", desc: "Sweet caramel flavor mixed with smooth espresso and milk." },
  { id: 4, name: "Flat White", price: 3.20, image: "/Flat_White.png", desc: "Freshly brewed coffee with a hint of chocolate for a unique taste." },
  { id: 5, name: "Vanilla Latte", price: 2.80, image: "/Vanilla_Latte.png", desc: "Creamy latte infused with smooth vanilla flavor." },
  { id: 6, name: "Espresso Shot", price: 1.50, image: "/Espresso_Shot.png", desc: "Strong and bold espresso for true coffee lovers." },
  { id: 7, name: "Americano", price: 2.80, image: "/Americano.png", desc: "Classic americano with rich espresso and hot water." },
  { id: 8, name: "Mocha Latte", price: 1.50, image: "/Mocha_Latte.png", desc: "Earthy matcha blended with creamy milk for a unique flavor." },
];
  return (
    <section className=" py-3 sm:px-8 lg:px-19 mb-8">
      <div className="w-[100%] shadow-2xl rounded-4xl p-6 sm:p-10 lg:p-14 bg-gradient-to-r from-orange-900/40 via-orange-900/10 to-orange-900/40">
        {/* ================= HEADER ================= */}
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
        
      </div>
    </section>
  );
}

// import React from "react";

// export default function Design_Top_Product() {
//   return (
//     <section className="bg-[#e9e6df] rounded-2xl p-6 sm:p-10 md:p-14 mt-6">

//       {/* Header */}
//       <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10">
//         <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide">
//           BEST SELLER
//         </h1>

//         <div className="flex gap-6 text-gray-600 font-medium text-sm sm:text-base">
//           <span className="text-black cursor-pointer">All Products</span>
//           <span className="hover:text-black cursor-pointer">Hot Coffee</span>
//           <span className="hover:text-black cursor-pointer">Frappe Drink</span>
//           <span className="hover:text-black cursor-pointer">Cold Drink</span>
//         </div>

//         <button className="hover:underline font-medium">
//           View More →
//         </button>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

//         {/* Card 1 */}
//         <div className="bg-[#f3f1ec] rounded-2xl p-3 shadow-sm hover:shadow-md ">
//           <img
//             src={coffee}
//             alt="coffee"
//             className="rounded-xl w-full h-56 object-cover mb-4"
//           />

//           <h2 className="font-semibold text-lg mb-1">
//             Ice latte Coffee
//           </h2>

//           <p className="text-gray-600 text-sm mb-4">
//             Smooth espresso blended with milk and ice for a refreshing.
//           </p>

//           <div className="flex justify-between items-center">
//             <span className="font-bold text-lg">2.00 $</span>
//             <button className="bg-[#1f2d3a] text-white px-4 py-2 rounded-full text-sm">
//               Add to Cart
//             </button>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-[#f3f1ec] rounded-2xl p-5 shadow-sm hover:shadow-md transition">
//           <img
//             src={coffee}
//             alt="coffee"
//             className="rounded-xl w-full h-56 object-cover mb-4"
//           />

//           <h2 className="font-semibold text-lg mb-1">
//             Ice latte Coffee
//           </h2>

//           <p className="text-gray-600 text-sm mb-4">
//             Smooth espresso blended with milk and ice for a refreshing.
//           </p>

//           <div className="flex justify-between items-center">
//             <span className="font-bold text-lg">2.00 $</span>
//             <button className="bg-[#1f2d3a] text-white px-4 py-2 rounded-full text-sm">
//               Add to Cart
//             </button>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-[#f3f1ec] rounded-2xl p-5 shadow-sm hover:shadow-md transition">
//           <img
//             src={coffee}
//             alt="coffee"
//             className="rounded-xl w-full h-56 object-cover mb-4"
//           />

//           <h2 className="font-semibold text-lg mb-1">
//             Ice latte Coffee
//           </h2>

//           <p className="text-gray-600 text-sm mb-4">
//             Smooth espresso blended with milk and ice for a refreshing.
//           </p>

//           <div className="flex justify-between items-center">
//             <span className="font-bold text-lg">2.00 $</span>
//             <button className="bg-[#1f2d3a] text-white px-4 py-2 rounded-full text-sm">
//               Add to Cart
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// import React from "react";

// const products = Array(6).fill({
//   title: "Ice latte Coffee",
//   description:
//     "Smooth espresso blended with milk and ice for a refreshing.",
//   price: "2.00 $",
//   image:
//     "https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=600",
// });

// export default function BestSeller() {
//   return (
//     <section className="bg-[#e9e6df] rounded-2xl p-5 sm:p-8">

//       {/* Header */}
//       <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-10">

//         <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide">
//           BEST SELLER
//         </h2>

//         {/* Categories */}
//         <div className="flex gap-6 overflow-x-auto scrollbar-hide text-gray-600 font-medium text-sm sm:text-base">
//           <button className="text-black whitespace-nowrap">
//             All Products
//           </button>
//           <button className="hover:text-black whitespace-nowrap">
//             Hot Coffee
//           </button>
//           <button className="hover:text-black whitespace-nowrap">
//             Frappe Drink
//           </button>
//           <button className="hover:text-black whitespace-nowrap">
//             Cold Drink
//           </button>
//         </div>

//         <button className="self-start lg:self-auto font-medium hover:underline">
//           View More →
//         </button>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="bg-[#f3f1ec] rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition duration-300"
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               className="rounded-xl mb-4 w-full h-52 sm:h-60 object-cover"
//             />

//             <h3 className="font-semibold text-base sm:text-lg mb-1">
//               {product.title}
//             </h3>

//             <p className="text-gray-600 text-sm mb-4">
//               {product.description}
//             </p>

//             <div className="flex items-center justify-between">
//               <span className="font-bold text-base sm:text-lg">
//                 {product.price}
//               </span>

//               <button className="bg-[#1f2d3a] text-white text-xs sm:text-sm px-4 py-2 rounded-full hover:bg-black transition">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
