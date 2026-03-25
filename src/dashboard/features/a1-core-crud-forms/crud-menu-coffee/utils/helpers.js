export const getStockStatus = (stock) => {
  if (stock <= 0) return "OUT OF STOCK";
  if (stock < 20) return "LOW STOCK";
  return "IN STOCK";
};

export const getStockColor = (stock) => {
  if (stock <= 0) return "bg-red-50 text-red-600 border-red-100";
  if (stock < 20) return "bg-orange-50 text-orange-600 border-orange-100";
  return "bg-green-50 text-green-600 border-green-100";
};