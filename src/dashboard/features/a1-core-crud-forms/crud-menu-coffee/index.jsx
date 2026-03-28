import React, { useState } from 'react';

// Sub-components
import ListView from './components/ListView';
import FormView from './components/FormView';
import DeleteModal from './components/DeleteModal';

const MenuManagement = () => {
  // Navigation: 'list' or 'form'
  const [view, setView] = useState('list');
  const [isEdit, setIsEdit] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Form Management
  const emptyForm = { 
    name: '', category: 'Hot Coffee', price: '', stock: '', 
    description: '', img: '', supplier: '', sku: '', rating: '' 
  };
  const [formData, setFormData] = useState(emptyForm);

  // Mock Data
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Ethiopian Dark Roast", category: "Whole Bean", price: 12.50, stock: 45, description: "A rich, complex dark roast...", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400", supplier: "Sidamo Bean Co.", sku: "CF-DR-101", rating: 4.8, dateAdded: "2026-03-10" },
    { id: 2, name: "Classic Latte", category: "Hot Coffee", price: 4.95, stock: 12, description: "Signature double-shot espresso...", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400", supplier: "Dairy Gold Partners", sku: "CF-LT-202", rating: 4.5, dateAdded: "2026-03-12" }
  ]);

  // Logic: Add
  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = { 
      ...formData, 
      id: menuItems.length + 1, 
      price: parseFloat(formData.price), 
      stock: parseInt(formData.stock), 
      rating: parseFloat(formData.rating) || 0, 
      img: formData.img || "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400", 
      dateAdded: new Date().toISOString().split('T')[0] 
    };
    setMenuItems([...menuItems, newProduct]);
    setView('list');
  };

  // Logic: Edit
  const handleEditProduct = (e) => {
    e.preventDefault();
    const updated = menuItems.map(item => 
      item.id === selectedProduct.id 
      ? { ...formData, id: item.id, dateAdded: item.dateAdded, price: parseFloat(formData.price), stock: parseInt(formData.stock), rating: parseFloat(formData.rating) } 
      : item
    );
    setMenuItems(updated);
    setView('list');
  };

  // Logic: Delete
  const handleDeleteProduct = () => {
    setMenuItems(menuItems.filter(item => item.id !== selectedProduct.id));
    setShowDeleteModal(false);
  };

  return (
    <div className="font-serif min-h-screen bg-[#F9F6F2] p-4 md:p-8">
      {view === 'list' ? (
        <ListView 
          menuItems={menuItems} 
          onAddNew={() => { 
            setFormData(emptyForm); 
            setIsEdit(false);
            setView('form'); 
          }} 
          onEdit={(p) => { 
            setSelectedProduct(p);
            setFormData(p);
            setIsEdit(true);
            setView('form'); 
          }} 
          onDeleteClick={(p) => {
            setSelectedProduct(p);
            setShowDeleteModal(true);
          }}
        />
      ) : (
        <FormView 
          isEdit={isEdit} 
          formData={formData} 
          setFormData={setFormData} 
          onBack={() => setView('list')} 
          onSubmit={isEdit ? handleEditProduct : handleAddProduct} 
        />
      )}
      
      <DeleteModal 
        isOpen={showDeleteModal} 
        product={selectedProduct} 
        onCancel={() => setShowDeleteModal(false)} 
        onConfirm={handleDeleteProduct} 
      />
    </div>
  );
};

export default MenuManagement;