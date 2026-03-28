import { createContext, useEffect, useState } from "react";

export const ProductContext=createContext();
export const ProductProvider=({children})=>{
    const [products,setProducts]= useState([]);

    useEffect(()=>{
        fetch("https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/v1/products")
        .then((response)=>response.json())
        .then((data)=>setProducts(data))
        .catch((error)=>console.error("Error : ",error))
    },[]);

    return (
        <ProductContext.Provider value={}>

        </ProductContext.Provider>
    )
}