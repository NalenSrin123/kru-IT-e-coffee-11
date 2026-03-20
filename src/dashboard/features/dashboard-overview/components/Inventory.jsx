import React from "react";

function Inventory() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">

      {/* Main */}
      <div className="flex-1">

        {/* Header */}
        <div className="bg-white flex flex-col sm:flex-row items-center justify-between px-3 sm:px-6 h-auto sm:h-14">
          
          <input
            type="text"
            placeholder="Search Coffee..."
            className="bg-gray-100 px-4 py-1 rounded-3xl w-full sm:w-60 mt-2 sm:mt-0"
          />

          <button className="bg-orange-500 text-white px-4 py-1 rounded-2xl mt-2 sm:mt-0 hover:bg-gray-400 duration-300">
            + Add New User
          </button>

        </div>

        {/* Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-3 sm:px-6 mt-4 gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Coffee Inventory</h1>
            <p className="text-sm text-gray-500">
              Manage your coffee products pricing and availability.
            </p>
          </div>

          <div className="flex gap-2">
            <button className="bg-white px-4 py-2 rounded-xl hover:bg-gray-200">
              Filter
            </button>
            <button className="bg-white px-4 py-2 rounded-xl hover:bg-gray-200">
              Export
            </button>
          </div>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-2 px-3 sm:px-6 mt-4">
          <button className="bg-orange-500 text-white px-4 py-1 rounded-xl  hover:bg-gray-400 duration-300">
            All product
          </button>
          <button className="bg-white px-4 py-1 rounded-xl hover:bg-gray-200">
            Espresso
          </button>
          <button className="bg-white px-4 py-1 rounded-xl hover:bg-gray-200">
            Whole Bean
          </button>
          <button className="bg-white px-4 py-1 rounded-xl hover:bg-gray-200">
            Seasonal
          </button>
        </div>

        {/* Table */}
        <div className="px-3 sm:px-6 mt-4 overflow-x-auto">
          <table className="min-w-[700px] w-full bg-white rounded-lg ">
            <thead>
              <tr className="bg-orange-100 text-left hover:bg-white duration-300">
                <th className="p-3">Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Availability</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-200 duration-300">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src="https://img.freepik.com/free-photo/latte-coffee_1122-2728.jpg"
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <p className="font-bold">Cortado</p>
                    <p className="text-xs text-gray-400">SKU:001</p>
                  </div>
                </td>

                <td className="text-gray-500">Whole Bean</td>
                <td className="font-bold">$18.50</td>

                <td>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-green-200 text-green-700 text-xs px-2 py-1 rounded">
                     Available
                    </span>
                    <span className="bg-green-200 text-green-700 text-xs px-2 py-1 rounded">
                      Uptown
                    </span>
                  </div>
                </td>

                <td className="text-green-600 font-bold">
                  <div className="text-green-600 font-bold flex"> 
                  <p className="flex gap-2">
                  <p className="bg-green-600 w-3 rounded-2xl text-center h-3 mt-2"></p>In Stock</p> </div></td>
                <td>-</td>
              </tr>

               <tr className="border-b border-gray-200 hover:bg-gray-200 duration-300">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src="https://frostingandfettuccine.com/wp-content/uploads/2022/12/Caramel-Iced-Coffee-6.jpg"
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <p className="font-bold">Caramel iced Coffee</p>
                    <p className="text-xs text-gray-400">SKU:002</p>
                  </div>
                </td>

                <td className="text-gray-500">Espresso</td>
                <td className="font-bold">$12.50</td>

                <td>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-green-200 text-green-700 text-xs px-2 py-1 rounded">
                      Available
                    </span>
                  </div>
                </td>

                <td className="text-yellow-300 font-bold">
                  <div className=" flex"> 
                  <p className="flex gap-2">
                  <p className="bg-yellow-300 w-3 rounded-2xl text-center h-3 mt-2"></p>Low Stock
                  </p>
                  </div>
                  </td>
                <td>-</td>
              </tr>

               <tr className="border-b border-gray-200 hover:bg-gray-200 duration-300">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src="https://www.sugarsalted.com/wp-content/uploads/2024/06/ice-cream-iced-coffee-whipped-cream-0081.jpg"
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <p className="font-bold">Ice cream Coffee</p>
                    <p className="text-xs text-gray-400">SKU:003</p>
                  </div>
                </td>

                <td className="text-gray-500">Seasonal</td>
                <td className="font-bold">$20.50</td>

                <td>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-green-200 text-green-700 text-xs px-2 py-1 rounded">
                     All Branches
                    </span>
                  </div>
                </td>

                <td>
                  <div className=" text-gray-400 font-bold flex"> 
                  <p className="flex gap-2">
                  <p className="bg-gray-400 w-3 rounded-2xl text-center h-3 mt-2"></p>Out of Stock</p>
                  </div></td>
                <td>-</td>
              </tr>

               <tr className="border-b border-gray-200git  hover:bg-gray-200 duration-300">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src="https://www.nescafe.com/za/sites/default/files/2024-11/NES_SBU_Recipes%202024_Website_Caramel%20Ice%20Coffee_Hero%20Banner_1066x1066.jpg"
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <p className="font-bold">Cream Coffee</p>
                    <p className="text-xs text-gray-400">SKU:004</p>
                  </div>
                </td>

                <td className="text-gray-500">Whole Bean</td>
                <td className="font-bold">$8.50</td>

                <td>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-green-200 text-green-700 text-xs px-2 py-1 rounded">
                       Uptown
                    </span>
                    <span className="bg-green-200 text-green-700 text-xs px-2 py-1 rounded">
                      Suburbs
                    </span>
                  </div>
                </td>

                <td className="text-green-600 font-bold">
                  <div className="text-green-600 font-bold flex"> 
                  <p className="flex gap-2">
                  <p className="bg-green-600 w-3 rounded-2xl text-center h-3 mt-2"></p>In Stock</p>
                  </div>
                </td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4 gap-2">
          <button className="bg-white w-8 h-8 rounded hover:bg-orange-500 hover:text-white duration-300">
            1
          </button>
          <button className="bg-white w-8 h-8 rounded hover:bg-orange-500 hover:text-white duration-300">
            2
          </button>
          <button className="bg-white w-8 h-8 rounded hover:bg-orange-500 hover:text-white duration-300">
            3
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-3 sm:px-6 mt-6 mb-6">

          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500 text-sm">TOTAL SKU</p>
            <h2 className="text-2xl font-bold">128</h2>
            <p className="text-green-600 text-sm">+12% this month</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500 text-sm">LOW STOCK</p>
            <h2 className="text-2xl font-bold">34</h2>
            <p className="text-yellow-500 text-sm">Needs attention</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500 text-sm">STOCK VALUE</p>
            <h2 className="text-2xl font-bold">$42,780</h2>
            <p className="text-gray-400 text-sm">Updated 2h ago</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500 text-sm">AVG MARGIN</p>
            <h2 className="text-2xl font-bold">65%</h2>
            <p className="text-orange-500 text-sm">Above target</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Inventory;