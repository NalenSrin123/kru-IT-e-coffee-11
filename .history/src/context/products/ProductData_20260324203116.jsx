import { createContext, useEffect, useState } from "react";

export const ProductContext=createContext();
export const ProductProvider=({children})=>{
    const [products,setProducts]= useState([]);

    const fetchData=async()=>{
        const response=await fetch("https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/v1/products");
        const data=res

    }
    useEffect(()=>{
        fetch("https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/v1/products")
        .then((response)=>response.json())
        .then((data)=>{setProducts(data); console.log(data)})
        .catch((error)=>console.error("Error : ",error))
    },[]);

    return (
        <ProductContext.Provider value={{products,setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}