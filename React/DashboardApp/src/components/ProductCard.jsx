import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/ProductCard.css'
import { CurenccyContext } from '../context/CurenccyContext'
import { CurenccyConverter } from '../utilites/CurenccyConverter'
import { ThemeContext } from '../context/ThemeContext'

function ProductCard(props) {
    let { theme } = useContext(ThemeContext)
    let { curenccy } = useContext(CurenccyContext)

    const navigate = useNavigate()

    const handleSeeMore = () => {
        navigate(`/dashboard/products/${props.id}`)
    }

    console.log(curenccy === 'syrianBounds'
        ? `${CurenccyConverter(+props.price)} L.S`
        : `${props.price} $`
    )


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
                    <span> {curenccy === 'syrianBounds'
                        ? `${CurenccyConverter(+props.price)} ls`
                        : `${props.price} $`
                    }</span>
                    <button onClick={handleSeeMore} className={`${theme === 'light' ? 'btn-light' : 'btn-dark'} btn-card`}>See More</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard