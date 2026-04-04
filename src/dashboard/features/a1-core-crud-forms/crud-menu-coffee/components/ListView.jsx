import React, { useContext } from 'react';
import { Plus, PencilSimple, Trash } from '@phosphor-icons/react';
import { getStockStatus, getStockColor } from '../utils/helpers';
import { ProductContext } from '../../../../../context/products/ProductData';
import DeleteProduct from '../../../../../services/api/DeleteProduct';

const ListView = ({ onAddNew, onEdit, onDeleteClick }) => {

  const { products, loading } = useContext(ProductContext);

  console.log("Products:", products); 

  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-[#361205]">
            Menu Management
          </h2>
          <p className="text-sm text-gray-500">
            Global inventory and product specifications
          </p>
        </div>

        <button 
          onClick={onAddNew}
          className="flex items-center gap-2 bg-[#361205] text-white px-6 py-3 rounded-xl"
        >
          <Plus size={20} />
          Add New Product
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="overflow-x-auto">

          <table className="w-full text-left">
            <thead>
              <tr className="text-xs text-gray-400 uppercase border-b bg-gray-50">
                <th className="py-4 px-6">Product</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Price</th>
                <th className="py-4 px-6">Stock</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products && products.length > 0 ? (
                products.map(item => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">

                    {/* Product */}
                    <td className="py-4 px-6 flex items-center gap-4">
                      <img 
                        src={item.image_url || "https://via.placeholder.com/50"} 
                        className="w-12 h-12 rounded-lg object-cover"
                        alt={item.name}
                      />
                      <div>
                        <p className="font-bold text-sm">{item.name}</p>
                        <p className="text-xs text-gray-400">
                          #{String(item.id).padStart(4, '0')}
                        </p>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-4 px-6 text-sm">
                      {item.category?.name || "No Category"}
                    </td>

                    {/* Price */}
                    <td className="py-4 px-6 font-bold">
                      ${item.price ?? 0}
                    </td>

                    {/* Stock */}
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 text-xs rounded ${getStockColor(item.stock ?? 0)}`}>
                        {getStockStatus(item.stock ?? 0)} ({item.stock ?? 0})
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-6 text-right">
                      <div className="flex justify-end gap-2">

                        <button 
                          onClick={() => onEdit(item)}
                          className="p-2 hover:bg-gray-200 rounded"
                        >
                          <PencilSimple size={18} />
                        </button>

                        <button 
                          onClick={() => DeleteProduct(item.id)}

                          className="p-2 hover:bg-red-500 hover:text-white rounded"
                        >
                          <Trash size={18} />
                        </button>

                      </div>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-400">
                    No products found
                  </td>
                </tr>
              )}
            </tbody>

          </table>

        </div>
      </div>
    </div>
  );
};

export default ListView;