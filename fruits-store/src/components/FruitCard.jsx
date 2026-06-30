import React from 'react';


function FruitCard(props) {
    return (
        <div>
            <div className="imgFruit">
                <img src={`${props.img}`} alt="" />
            </div>
            <h3>{props.name}</h3>
            <p className='fs-4'>{props.count}</p>
            <button className={`buy-btn ${props.count > 3 ? 'btn-green' : 'btn-red'}`}>buy</button>
        </div >
    )
}

export default FruitCard