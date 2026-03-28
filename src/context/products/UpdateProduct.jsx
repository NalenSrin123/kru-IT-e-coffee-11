import React, { useState } from "react";

function UpdateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleUpdate = async () => {
    const id = 1; // 👉 replace with dynamic ID

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