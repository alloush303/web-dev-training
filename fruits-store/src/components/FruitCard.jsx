import React from 'react'

function FruitCard(props) {
    return (
        <div>
            <div className="imgFruit">
                <img src="./public/imgs/{props.name}.jpg" alt="" />
            </div>
        </div>
    )
}

export default FruitCard