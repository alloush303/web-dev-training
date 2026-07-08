import React from 'react'
import { useNavigate } from 'react-router-dom'

function Security() {
    let naviagte = useNavigate()
    let goBack = () => {
        naviagte(-1)
    }


    return (
        <div>
            <h3>Security Setting</h3>
            <span className="linner mb-3"></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias id molestiae nam laboriosam iure velit accusantium, ipsam voluptates odio officiis quasi distinctio est non nobis earum facilis perspiciatis deleniti atque ex harum quo suscipit omnis amet eaque. Ipsum possimus ut iste a saepe, placeat ex repellat ipsa! Assumenda, quisquam nulla?</p>
            <button className='btn-box btn' onClick={goBack}>Back</button>
        </div>
    )
}

export default Security