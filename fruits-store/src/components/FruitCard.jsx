import React from 'react'

function FruitCard(props) {
    return (
        <div>
            <div className="imgFruit">
                <img className='img-fluid' src={`${props.img}`} alt="" />
            </div>
            <h4>{props.name}</h4>
            <p>{props.count}</p>
            <button>buy</button>
        </div>
    )
}

export default FruitCard