import { createContext, useEffect, useState } from "react";

export const ProductContext=createContext();
export const ProductProvider=({children})=>{
    const [products,setProducts]= useState([]);

    const fetchData=async()=>{
        try{
            const response=await fetch("https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/v1/products");
            const data=await response.json();
            setProducts(data);
            console.log(data)';'
        }catch(err){
            console.log("Error : ",err);
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <ProductContext.Provider value={{products,setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}