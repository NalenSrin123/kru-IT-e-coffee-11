import React, { useState } from "react";

function UpdateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const updateProduct = async (id, productData) => {
    try {
      const response = await fetch(
        `https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/v1/products/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(productData),
        }
      );

      const data = await response.json();
      console.log("Updated:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUpdate = async () => {
    const id = 1; // change dynamic later

    const productData = {
      name: name,
      price: price,
    };

    await updateProduct(id, productData);
  };

  return (
    <div>
      <h2>Update Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UpdateProduct;