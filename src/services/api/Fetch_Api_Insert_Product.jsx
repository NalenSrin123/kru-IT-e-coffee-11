import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = "https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/v1";

export default function Fetch_Api_Insert_Product() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [flash, setFlash] = useState({ show: false, type: "", text: "" });

  const [formData, setFormData] = useState({
    category_id: "",
    name: "",
    sku: "",
    description: "",
    is_available: true,
    is_active: true,
  });

  useEffect(() => {
    fetch(`${BASE_URL}/categories`, {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        const list = Array.isArray(data)
          ? data
          : Array.isArray(data.data)
          ? data.data
          : (data.data?.data ?? []);
        setCategories(list);
      })
      .catch((err) => console.error("Failed to load categories:", err));
  }, []);

  const triggerFlash = (type, text) => {
    setFlash({ show: true, type, text });
    setTimeout(() => setFlash({ show: false, type: "", text: "" }), 3000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          category_id: parseInt(formData.category_id),
          name: formData.name,
          sku: formData.sku,
          description: formData.description,
          is_available: formData.is_available,
          is_active: formData.is_active,
        }),
      });

      const data = await res.json();

      if (res.ok && data.status) {
        triggerFlash("success", "Product added successfully!");
        setFormData({
          category_id: "",
          name: "",
          sku: "",
          description: "",
          is_available: true,
          is_active: true,
        });
      } else {
        triggerFlash("error", data.message || "Failed to add product.");
      }
    } catch (error) {
      triggerFlash("error", "Error connecting to API!");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg px-3.5 py-2.5 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:bg-white transition placeholder-gray-400";

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      {/* Flash Message */}
      {flash.show && (
        <div
          className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium shadow-lg border
            ${flash.type === "success"
              ? "bg-emerald-50 text-emerald-800 border-emerald-200"
              : "bg-red-50 text-red-800 border-red-200"}`}
        >
          <span
            className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0
              ${flash.type === "success"
                ? "bg-emerald-100 text-emerald-600"
                : "bg-red-100 text-red-600"}`}
          >
            {flash.type === "success" ? "✓" : "✕"}
          </span>
          {flash.text}
        </div>
      )}

      <div className="w-full max-w-lg">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-900">Add New Product</h1>
          <p className="text-sm text-gray-500 mt-1">
            Create a new item to list in the product catalog.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            Product Details
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Category */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                className={inputClass}
                required
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Name + SKU */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Cappuccino"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">
                  SKU <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="sku"
                  placeholder="e.g. CAP001"
                  value={formData.sku}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Brief product description..."
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className={`${inputClass} resize-y`}
              />
            </div>

            <hr className="border-gray-100 my-1" />

            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 -mb-1">
              Availability
            </p>

            {/* Toggle Switches */}
            <div className="flex gap-3">
              {[
                { name: "is_available", label: "Available" },
                { name: "is_active", label: "Active" },
              ].map(({ name, label }) => (
                <label
                  key={name}
                  className="flex-1 flex items-center justify-between gap-3 px-3.5 py-3 rounded-xl border border-gray-200 bg-gray-50 hover:border-gray-300 cursor-pointer select-none transition"
                >
                  <span className="text-sm font-semibold text-gray-700">{label}</span>

                  {/* Toggle Switch */}
                  <div className="relative flex-shrink-0">
                    <input
                      type="checkbox"
                      name={name}
                      checked={formData[name]}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div
                      className={`w-10 h-5 rounded-full transition-colors duration-200
                        ${formData[name] ? "bg-blue-500" : "bg-gray-300"}`}
                    />
                    <div
                      className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200
                        ${formData[name] ? "translate-x-5" : "translate-x-0"}`}
                    />
                  </div>
                </label>
              ))}
            </div>

            <hr className="border-gray-100 mt-1" />

            {/* Submit */}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                disabled={loading}
                className="w-[80%] flex items-center justify-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg px-6 py-2.5 transition shadow-sm"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                      />
                    </svg>
                    Saving...
                  </>
                ) : (
                  "Save Product"
                )}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}