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

  // STATES
  const [productList, setProductList] = useState(products);
  const [showForm, setShowForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");
  const [search, setSearch] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const [newProduct, setNewProduct] = useState({
    id: null,
    name: "",
    img: "",
    price: "",
    status: "In Stock",
  });

  //  FILTER + SEARCH LOGIC
  const filteredData = productList.filter((item) => {
    const matchStatus = filterStatus === "All" || item.status === filterStatus;
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.sku.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const currentData = filteredData.slice(start, start + itemsPerPage);

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const openAddModal = () => {
    setIsEditing(false);
    setNewProduct({ name: "", img: "", price: "", status: "In Stock" });
    setShowForm(true);
  };

  const openEditModal = (product) => {
    setIsEditing(true);
    setNewProduct(product);
    setShowForm(true);
  };

  const handleSaveProduct = () => {
    if (isEditing) {
      // UPDATE
      setProductList(productList.map(p => p.id === newProduct.id ? newProduct : p));
    } else {
      // ADD
      const newItem = {
        ...newProduct,
        id: Date.now(), // Better than length for unique IDs
        sku: "NEW-" + Math.floor(Math.random() * 1000),
        category: "Custom",
        availability: ["Available"],
      };
      setProductList([...productList, newItem]);
    }
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setProductList(productList.filter((item) => item.id !== id));
    }
  };

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
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <div className="hidden lg:flex flex-col w-64 bg-white border-r">
        <div className="p-6 font-bold text-lg">E-Coffee Admin</div>
        <nav className="flex flex-col gap-2 px-4">
          <a className="p-2 hover:bg-gray-100 rounded cursor-pointer">Dashboard</a>
          <a className="p-2 bg-orange-100 text-orange-600 rounded cursor-pointer">Inventory</a>
          <a className="p-2 hover:bg-gray-100 rounded cursor-pointer">Customer</a>
          <a className="p-2 hover:bg-gray-100 rounded cursor-pointer">Analytics</a>
        </nav>
      </div>

      {/* Main */}
      <div className="flex-1">
        {/* Header */}
        <div className="bg-white flex flex-col sm:flex-row items-center justify-between px-3 sm:px-6 py-4 sm:h-14 border-b">
          <input
            type="text"
            placeholder="Search Coffee..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="bg-gray-100 px-4 py-1 rounded-3xl w-full sm:w-60"
          />
          <button
            onClick={openAddModal}
            className="bg-orange-500 text-white px-4 py-1 rounded-2xl mt-2 sm:mt-0 hover:bg-orange-600 duration-300"
          >
            + Add Luggage
          </button>
        </div>

        {/* Title Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-3 sm:px-6 mt-4 gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Coffee Inventory</h1>
            <p className="text-sm text-gray-500">Manage your coffee products pricing and availability.</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                const stages = ["All", "In Stock", "Low Stock", "Out of Stock"];
                const idx = stages.indexOf(filterStatus);
                setFilterStatus(stages[(idx + 1) % stages.length]);
                setPage(1);
              }}
              className="bg-white border px-4 py-2 rounded-xl hover:bg-gray-50 text-sm"
            >
              Filter: <span className="font-bold">{filterStatus}</span>
            </button>
            <button onClick={handleExport} className="bg-white border px-4 py-2 rounded-xl hover:bg-gray-50 text-sm">
              Export CSV
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="px-3 sm:px-6 mt-6 overflow-x-auto">
          <table className="min-w-[800px] w-full bg-white rounded-xl shadow-sm overflow-hidden">
            <thead>
              <tr className="bg-gray-50 text-left border-b">
                <th className="p-4 text-sm font-semibold text-gray-600">Product</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Category</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Price</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Availability</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
                <th className="p-4 text-sm font-semibold text-gray-600 text-center">Edits</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item) => (
                <tr key={item.id} className="border-b last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="p-4 flex items-center gap-3">
                    <img src={item.img} className="w-12 h-12 rounded-lg object-cover border" alt={item.name} />
                    <div>
                      <p className="font-bold text-gray-800">{item.name}</p>
                      <p className="text-xs text-gray-400 uppercase">SKU: {item.sku}</p>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600 text-sm">{item.category}</td>
                  <td className="p-4 font-bold text-gray-800">${item.price}</td>
                  <td className="p-4">
                    <div className="flex gap-1 flex-wrap">
                      {item.availability.map((a, i) => (
                        <span key={i} className="bg-blue-50 text-blue-600 text-[10px] px-2 py-0.5 rounded-full border border-blue-100">
                          {a}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <span className={`w-2 h-2 rounded-full ${
                        item.status === "In Stock" ? "bg-green-500" : item.status === "Low Stock" ? "bg-yellow-500" : "bg-red-400"
                      }`}></span>
                      {item.status}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center gap-3">
                      <button onClick={() => openEditModal(item)} className="text-blue-500 hover:text-blue-700 font-medium text-sm">
                        Update
                      </button>
                      <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700 font-medium text-sm">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center my-8 gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`w-10 h-10 rounded-lg font-medium transition-all ${
                page === num ? "bg-orange-500 text-white shadow-md" : "bg-white border hover:bg-gray-50"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* MODAL (ADD / UPDATE) */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl w-96 shadow-2xl animate-in fade-in zoom-in duration-200">
            <h2 className="text-xl font-bold mb-6 text-gray-800">
              {isEditing ? "Update Product" : "Add New Product"}
            </h2>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Product Name</label>
                <input type="text" name="name" value={newProduct.name} onChange={handleChange} className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-orange-200 outline-none" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Image URL</label>
                <input type="text" name="img" value={newProduct.img} onChange={handleChange} className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-orange-200 outline-none" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Price ($)</label>
                <input type="number" name="price" value={newProduct.price} onChange={handleChange} className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-orange-200 outline-none" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Stock Status</label>
                <select name="status" value={newProduct.status} onChange={handleChange} className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-orange-200 outline-none">
                  <option>In Stock</option>
                  <option>Low Stock</option>
                  <option>Out of Stock</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8">
              <button onClick={() => setShowForm(false)} className="px-5 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                Cancel
              </button>
              <button onClick={handleSaveProduct} className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 shadow-md transition-all">
                {isEditing ? "Update Item" : "Create Item"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Inventory;