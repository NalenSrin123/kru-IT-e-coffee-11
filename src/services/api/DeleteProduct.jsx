const DeleteProduct = async(id) => {
    try{
        const response=await fetch(`https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/v1/products/${id}`,{
            method:"DELETE",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        });
        const result=await response.json();
        if(response.ok){
            console.log(result.message);
            
        }else{
            console.log(result.message);
            
        }
    }catch(err){
        console.log("Error :",err);
        
    }

}
export default DeleteProduct;
