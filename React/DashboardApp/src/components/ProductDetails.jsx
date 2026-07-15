import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductById } from '../api/ProductsApi'

function ProductDetails() {

    let { id } = useParams()
    let navigate = useNavigate()
    let [product, setProduct] = useState({})
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState(null)

    console.log(id)

    useEffect(() => {
        loadProduct()
    }, [id])

    let loadProduct = async () => {
        setLoading(true)
        setError(null)
        try {
            let data = await getProductById(id)
            setProduct(data)
            setLoading(false)
        }
        catch (error) {
            setError('Error to loading product')
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className='text-center fs-1 fw-bold'>Loading...</div>
        )
    }
    if (error) {
        return (
            <div>{error}</div>
        )
    }

    console.log(product)
    return (
        <div >
            <h1 className='mb-5'>Product: {product.brand}</h1>
            <div className='d-flex justify-content-center'>
                <div className='border w-100 rounded-5 me-4'>
                    <img className='w-100 rounded-5' src={product.image} alt="" />
                </div>
                <div className=''>
                    <h5>Title: {product.title}</h5>
                    <p>Description: {product.description}</p>
                    <p>Price: {product.price} $</p>
                    <p >Size: {product.size}</p>
                </div>
            </div>
            <h1>{product.tilte}</h1>
        </div>
    )
}

export default ProductDetails