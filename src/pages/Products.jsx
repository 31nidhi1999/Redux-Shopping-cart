import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchProducts } from "../features/products/productSlice"
import ProductList from "../components/ProductList"

function Products(){
    const { products, loading, error} = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Products</h1>

            <ProductList products={products} />
        </div>
    );

}

export default Products;