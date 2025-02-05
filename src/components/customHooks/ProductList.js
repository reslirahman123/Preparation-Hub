import React from 'react'
import UseFetch from './UseFetch'

const ProductList = () => {
    const { data: products, error, loading } = UseFetch('https://fakestoreapi.com/products/');

    if (loading) return <div>Loading..</div>
    if (error) return <div>{error.message}</div>

    return (
        <div>
            <h1>ProductList</h1>
            {products.map((productList)=>(
                <li>{productList.title}</li>
            ))}
        </div>
    )
}

export default ProductList