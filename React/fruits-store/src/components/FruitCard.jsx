import React, { use, useState } from 'react';


function FruitCard(props) {

    const [currentCount, setCurrentCount] = useState(props.count);

    const userBuy = () => {
        if (currentCount > 0) {
            setCurrentCount(currentCount - 1)
        }
    }

    return (
        <div>
            <div className="imgFruit">
                <img src={`${props.img}`} alt="" />
            </div>
            <h3>{props.name}</h3>
            <p className='fs-4'>{currentCount}</p>
            <button onClick={userBuy} className={`buy-btn ${currentCount >= 3 ? 'btn-green' : 'btn-red pe-none'}`}>buy</button>
        </div >
    )
}

export default FruitCard