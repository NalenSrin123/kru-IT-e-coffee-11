import { useEffect, useState } from "react";

const Fecth_api_products_detail = (id) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/v1/products/${id}
                );

                const data = await response.json(); // get data first

                if (!response.ok) {
                    throw new Error(data.message || "Something went wrong");
                }

                setProduct(data);

            } catch (err) {
                setError(err.message);
                setProduct(null); //  reset product
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    return { product, loading, error };
};

export default Fecth_api_products_detail;