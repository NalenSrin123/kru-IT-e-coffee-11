import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/v1/products"
      );
      const result = await response.json();


      setProducts(result.data.data);

    } catch (err) {
      console.log("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};