import React, { useContext, useEffect, useState } from 'react'
import { getProducts } from '../api/ProductsApi'
import '../style/Products.css'
import ProductCard from '../components/ProductCard'
import ProductDetails from './ProductDetails'
import { ThemeContext } from '../context/ThemeContext'
import { CurenccyProvider } from '../context/CurenccyContext'

function Products() {
    let { theme } = useContext(ThemeContext)
    console.log(theme)

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
        <div className="container py-4 overflow-auto h-100 ">
            <h1 className="mb-4 text-center fw-bold">Products List</h1>
            <div className='d-flex justify-content-center gap-3 mb-3'>
                {category.map((cat, index) => (
                    <button key={index} onClick={() => handleFilter(cat)} className={` rounded-pill px-3 ${selectCategory === cat ? 'btn-filter-active' : 'btn-filter-notActive'} 
                    ${theme === "light" ? 'btn-filter-light' : 'btn-filter-dark'}`}>{cat}</button>))}
            </div>
            <div className="row g-4 gap-4 justify-content-center">
                {filteredProduct.map((product) => (
                    <div key={product._id} className="box-card col-11 col-md-5 col-lg-3">
                        <ProductCard id={product._id} img={product.image} title={product.title} category={product.category} price={product.price} />
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Products