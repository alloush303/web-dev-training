import React, { useEffect, useState } from 'react'
import { getProducts } from '../api/ProductsApi'
import '../style/Products.css'

function Products() {

    let [products, setProducts] = useState([])
    let [filteredProduct, setFilteredProduct] = useState([])
    let [category, setCategory] = useState([])
    let [selectCategory, setSelectCategory] = useState('All')
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState(null)

    useEffect(() => {
        loadProducts()
    }, [])

    let loadProducts = async () => {
        setLoading(true)
        setError(null)

        try {
            let data = await getProducts()
            setProducts(data)
            setFilteredProduct(data)
            let allCategory = data.map(item => item.category).reduce((cat, currentCat) => {
                if (!cat.includes(currentCat)) {
                    cat.push(currentCat)
                }
                return cat
            }, ['All'])
            setCategory(allCategory)
            setLoading(false)
        }
        catch (err) {
            setError('Faild to load Products')
            setLoading(false)
        }
    }

    const handleFilter = (category) => {
        setSelectCategory(category)
        if (category === 'All')
            setFilteredProduct(products)
        else {
            let filterd = products.filter(p => p.category === category)
            setFilteredProduct(filterd)
        }
    }
    console.log(category)

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


    return (
        <div className="container py-4 overflow-auto h-100">
            <h2 className="mb-4 text-center fw-bold">Products List</h2>
            <div className='d-flex justify-content-center gap-3 mb-3'>
                {category.map((cat, index) => (
                    <button key={index} onClick={() => handleFilter(cat)} className={` rounded-pill px-3 ${selectCategory === cat ? 'btn-filter-active' : 'btn-filter-notActive'}`}>{cat}</button>))}
            </div>
            <div className="row g-4 justify-content-center">
                {filteredProduct.map((product) => (
                    <div key={product.id} className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm border-0 p-3 text-center">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="card-img-top mx-auto p-2"
                                style={{ height: '180px', objectFit: 'contain', width: '100%' }}
                            />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <span className="badge bg-light text-success mb-2 border border-success-subtle">
                                        {product.category}
                                    </span>
                                    <h6 className="card-title text-truncate" title={product.title}>
                                        {product.title}
                                    </h6>

                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-3 border-top pt-2">
                                    <span className="fs-5 fw-bold text-dark">${product.price}</span>
                                    <button className="btn btn-sm btn-dark">See More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Products