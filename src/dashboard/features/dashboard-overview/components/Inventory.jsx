import React, { useState } from "react";

function Inventory() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const products = [
    { id: 1, name: "Coffe Cups", sku: "001", img: "https://png.pngtree.com/png-clipart/20250226/original/pngtree-blank-take-away-single-coffee-cups-png-image_20517194.png", category: "Whole Bean", price: 18.5, availability: ["Available", "Uptown"], status: "In Stock" },
    { id: 2, name: "Coffee Straws,", sku: "002", img: "https://i5.walmartimages.com/seo/100pcs-Coffee-Straws-7-Inch-Two-Hole-Coffee-Straw-Stirrer-Coffee-Straws-Coffee-Stirrers-Individually-Wrapped-Cocktail-Stirrers-Straws-Disposable-Plas_1dd978cd-bdfe-4b52-8da1-ce38995441c5.ef8ec94737aba3d55307e6ff64156cdb.jpeg", category: "Espresso", price: 12.5, availability: ["Available"], status: "Low Stock" },
    { id: 3, name: "The best milk choice for baristas", sku: "003", img: "https://lovegrown.com/cdn/shop/files/LoveGrown_WholeBean_withbeans.jpg?v=1763155675&width=1946", category: "Seasonal", price: 20.5, availability: ["All Branches"], status: "Out of Stock" },
    { id: 4, name: "Condensed milk", sku: "004", img: "https://www.costco.co.uk/medias/sys_master/images/hdd/h81/223812750475294.jpg", category: "Whole Bean", price: 8.5, availability: ["Uptown", "Suburbs"], status: "In Stock" },
    { id: 5, name: "Brown Sugar Sticks 1000 ", sku: "001", img: "https://www.discountcoffee.co.uk/cdn/shop/files/fairtradebrownsugar_grande.png?v=1739285167", category: "Whole Bean", price: 18.5, availability: ["Available", "Uptown"], status: "In Stock" },
    { id: 6, name: "ICETEC", sku: "002", img: "https://icetec.co.nz/cdn/shop/products/728754288_1.jpg?v=1663817641&width=1214", category: "Espresso", price: 12.5, availability: ["Available"], status: "Low Stock" },
    { id: 7, name: "Drink Containers Bags", sku: "003", img: "https://images-eu.ssl-images-amazon.com/images/I/71TsdyewwJL._AC_UL495_SR435,495_.jpg", category: "Seasonal", price: 20.5, availability: ["All Branches"], status: "Out of Stock" },
    { id: 8, name: "Paper Card board", sku: "004", img: "https://www.newgreenpackaging.com/uploads/p129.jpg", category: "Whole Bean", price: 18.5, availability: ["Uptown", "Suburbs"], status: "In Stock" },
  ];

  // ✅ STATES
  const [productList, setProductList] = useState(products);
  const [showForm, setShowForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");
  const [search, setSearch] = useState("");

  const [newProduct, setNewProduct] = useState({
    name: "",
    img: "",
    price: "",
    status: "In Stock",
  });

  // ✅ FILTER + SEARCH LOGIC
  const filteredData = productList.filter((item) => {
    const matchStatus =
      filterStatus === "All" || item.status === filterStatus;

    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.sku.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());

    return matchStatus && matchSearch;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const currentData = filteredData.slice(start, start + itemsPerPage);

  // ✅ HANDLERS
  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProduct = () => {
    const newItem = {
      id: productList.length + 1,
      sku: "NEW",
      category: "Custom",
      availability: ["Available"],
      ...newProduct,
    };

    setProductList([...productList, newItem]);
    setShowForm(false);

    setNewProduct({
      name: "",
      img: "",
      price: "",
      status: "In Stock",
    });
  };

  // ✅ EXPORT
  const handleExport = () => {
    const csv = [
      ["Name", "Price", "Status"],
      ...filteredData.map((item) => [item.name, item.price, item.status]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "coffee_inventory.csv";
    a.click();
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">

      {/* Main */}
      <div className="flex-1">

        {/* Header */}
        <div className="bg-white flex flex-col sm:flex-row items-center justify-between px-3 sm:px-6 h-auto sm:h-14">
          {/* 🔍 SEARCH */}
          <input
            type="text"
            placeholder="Search Coffee..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="bg-gray-100 px-4 py-1 rounded-3xl w-full sm:w-60 mt-2 sm:mt-0"
          />

          <button
            onClick={() => setShowForm(true)}
            className="bg-orange-500 text-white px-4 py-1 rounded-2xl mt-2 sm:mt-0 hover:bg-gray-400 duration-300"
          >
            + Add New Luggage
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
            <button
              onClick={() => {
                const next =
                  filterStatus === "All"
                    ? "In Stock"
                    : filterStatus === "In Stock"
                    ? "Low Stock"
                    : filterStatus === "Low Stock"
                    ? "Out of Stock"
                    : "All";

                setFilterStatus(next);
                setPage(1);
              }}
              className="bg-white px-4 py-2 rounded-xl hover:bg-gray-200"
            >
              Change Stock: {filterStatus}
            </button>

            <button
              onClick={handleExport}
              className="bg-white px-4 py-2 rounded-xl hover:bg-gray-200"
            >
              Export
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="px-3 sm:px-6 mt-4 overflow-x-auto">
          <table className="min-w-[700px] w-full bg-white rounded-lg">
            <thead>
              <tr className="bg-orange-100 text-left">
                <th className="p-3">Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Availability</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-100">
                  <td className="p-3 flex items-center gap-3">
                    <img src={item.img} className="w-16 h-16 rounded" />
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-xs text-gray-400">SKU:{item.sku}</p>
                    </div>
                  </td>

                  <td className="text-gray-500">{item.category}</td>
                  <td className="font-bold">${item.price}</td>

                  <td>
                    <div className="flex gap-1 flex-wrap">
                      {item.availability.map((a, i) => (
                        <span key={i} className="bg-green-200 text-green-700 text-xs px-2 py-1 rounded">
                          {a}
                        </span>
                      ))}
                    </div>
                  </td>

                  <td className="font-bold">
                    <div className="flex gap-2 items-center">
                      <span
                        className={`w-3 h-3 rounded ${
                          item.status === "In Stock"
                            ? "bg-green-600"
                            : item.status === "Low Stock"
                            ? "bg-yellow-400"
                            : "bg-gray-400"
                        }`}
                      ></span>
                      {item.status}
                    </div>
                  </td>

                  <td>-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`w-8 h-8 rounded ${
                page === num
                  ? "bg-orange-500 text-white"
                  : "bg-white hover:bg-orange-500 hover:text-white"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-0 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-80 shadow-lg">
            <h2 className="text-lg font-bold mb-4">Add New Product</h2>

            <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
            <input type="text" name="img" placeholder="Image URL" value={newProduct.img} onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
            <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} className="w-full mb-2 p-2 border rounded" />

            <select name="status" value={newProduct.status} onChange={handleChange} className="w-full mb-4 p-2 border rounded">
              <option>In Stock</option>
              <option>Low Stock</option>
              <option>Out of Stock</option>
            </select>

            <div className="flex justify-between">
              <button onClick={() => setShowForm(false)} className="px-4 py-1 bg-gray-300 rounded">
                Cancel
              </button>

              <button onClick={handleAddProduct} className="px-4 py-1 bg-orange-500 text-white rounded">
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Inventory;