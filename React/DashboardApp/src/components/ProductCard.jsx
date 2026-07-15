import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/ProductCard.css'

function ProductCard(props) {

    const navigate = useNavigate()

    const handleSeeMore = () => {
        alert(`${props.id}`)
        navigate(`/dashboard/products/${props.id}`)
    }


    return (
        <div >
            <div className="imgProduct">
                <img src={props.img} alt={props.title} />
            </div>
            <div >
                <div className='text-center'>
                    <span className='category-card d-inline-block mt-1 px-1'>
                        {props.category}
                    </span>
                    <h6 className='text-start my-2'>
                        {props.title}
                    </h6>

                </div>
                <div className='d-flex justify-content-between align-items-center m-3'>
                    <span className='fw-bold'>${props.price}</span>
                    <button onClick={handleSeeMore} className='btn-card'>See More</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard