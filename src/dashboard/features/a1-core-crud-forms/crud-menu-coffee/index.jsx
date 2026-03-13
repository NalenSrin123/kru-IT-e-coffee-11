import React, { useState } from 'react';
import Sidebar from '../../dashboard-overview/components/Sidebar';
import Topbar from '../../dashboard-overview/components/Topbar';

// Sub-components
import ListView from './components/ListView';
import DetailView from './components/DetailView';
import FormModal from './components/FormModal';
import DeleteModal from './components/DeleteModal';

const MenuManagement = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [view, setView] = useState('list');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const emptyForm = { name: '', category: 'Hot Coffee', price: '', stock: '', description: '', img: '', supplier: '', sku: '', rating: '' };
  const [formData, setFormData] = useState(emptyForm);

  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Ethiopian Dark Roast", category: "Whole Bean", price: 12.50, stock: 45, description: "A rich, complex dark roast...", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400", supplier: "Sidamo Bean Co.", sku: "CF-DR-101", rating: 4.8, dateAdded: "2026-03-10" },
    { id: 2, name: "Classic Latte", category: "Hot Coffee", price: 4.95, stock: 12, description: "Signature double-shot espresso...", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400", supplier: "Dairy Gold Partners", sku: "CF-LT-202", rating: 4.5, dateAdded: "2026-03-12" }
  ]);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = { ...formData, id: menuItems.length + 1, price: parseFloat(formData.price), stock: parseInt(formData.stock), rating: parseFloat(formData.rating) || 0, img: formData.img || "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400", dateAdded: new Date().toISOString().split('T')[0] };
    setMenuItems([...menuItems, newProduct]);
    setShowAddModal(false);
    setFormData(emptyForm);
  };

  const handleEditProduct = (e) => {
    e.preventDefault();
    const updated = menuItems.map(item => item.id === selectedProduct.id ? { ...formData, id: item.id, dateAdded: item.dateAdded, price: parseFloat(formData.price), stock: parseInt(formData.stock), rating: parseFloat(formData.rating) } : item);
    setMenuItems(updated);
    setSelectedProduct({ ...formData, id: selectedProduct.id });
    setShowEditModal(false);
  };

  const handleDeleteProduct = () => {
    setMenuItems(menuItems.filter(item => item.id !== selectedProduct.id));
    setShowDeleteModal(false);
    setView('list');
  };

  return (
    <div className="flex min-h-screen bg-[#F7F4E8] text-[#211B1D] font-serif overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="flex-1 p-4 md:p-8 overflow-y-auto">
          {view === 'list' ? (
            <ListView menuItems={menuItems} onAddNew={() => { setFormData(emptyForm); setShowAddModal(true); }} onViewDetail={(p) => { setSelectedProduct(p); setView('detail'); }} />
          ) : (
            <DetailView product={selectedProduct} onBack={() => setView('list')} onEdit={() => { setFormData(selectedProduct); setShowEditModal(true); }} onDelete={() => setShowDeleteModal(true)} />
          )}
        </div>
      </main>

      <FormModal isOpen={showAddModal || showEditModal} isEdit={showEditModal} formData={formData} setFormData={setFormData} onClose={() => { setShowAddModal(false); setShowEditModal(false); }} onSubmit={showAddModal ? handleAddProduct : handleEditProduct} />
      <DeleteModal isOpen={showDeleteModal} product={selectedProduct} onCancel={() => setShowDeleteModal(false)} onConfirm={handleDeleteProduct} />
    </div>
  );
};

export default MenuManagement;