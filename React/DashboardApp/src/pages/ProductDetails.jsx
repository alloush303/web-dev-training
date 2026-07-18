import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductById } from '../api/ProductsApi'
import '../style/ProductaDetails.css'
import { CurenccyContext } from '../context/CurenccyContext'
import { CurenccyConverter } from '../utilites/CurenccyConverter'

function ProductDetails() {
    let { curenccy } = useContext(CurenccyContext)

    let { id } = useParams()
    let navigate = useNavigate()
    let [product, setProduct] = useState({})
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState(null)

    console.log(id)

    let handleGoBack = () => {
        navigate(-1)
    }

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
            <button onClick={handleGoBack} className='goBack-btn'><i class="bi bi-arrow-left"></i>Go Back</button>
            <h1 ><span className=' fw-bold'>Product:</span> {product.brand}</h1>
            <span className='linner mb-5'></span>

            <div className='d-flex justify-content-center'>
                <div className='img-box   rounded-5 me-4'>
                    <img className='w-100 rounded-5' src={product.image} alt="" />
                </div>
                <div>
                    <h5><span className='fs-5 fw-bold'>Title:</span> {product.title}</h5>
                    <span className='linner mb-3'></span>
                    <p className='w-75'><span className='fs-5 fw-bold'>Description:</span> {product.description}</p>
                    <span className='linner mb-3'></span>
                    <p><span className='fs-5 fw-bold'>Price:</span> {curenccy === 'syrianBounds'
                        ? `${CurenccyConverter(+product.price)} L.S`
                        : `${product.price} $`
                    }</p>
                    <span className='linner mb-3'></span>
                    <p><span className='fs-5 fw-bold'>Size:</span> {product.size}</p>
                </div>
            </div>
            <h1>{product.tilte}</h1>
        </div>
    )
}

export default ProductDetails