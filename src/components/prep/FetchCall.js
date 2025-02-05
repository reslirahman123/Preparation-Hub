import React, { useEffect, useState } from 'react'

const FetchCall = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        fetch('https://fakestoreapi.com/products/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network error')
                }
                return response.json();
            })
            .then(data=>{
                setProducts(data);
                setLoading(false)
            })
            .catch(error => {
                setError(error);
                setLoading(false)
            })

    }, [])

    if (loading) return <div>loading...</div>
    if (error) return <div>{error.message}</div>

    console.log("producsss", products)
    return (
        <div>FetchCall</div>
    )
}

export default FetchCall