import React from 'react'
import { Route, Routes, Link, Outlet } from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import Contact from './Contact'
import Products from './Products'
import Setting from './Setting'
import './Dashboard.css'


function Dashboard() {
    return (
        <div className='vh-100 overflow-hidden' >
            <div className="row">
                <div className="nav-box col-2 vh-100">
                    <div className="side-bar w-25">

                        <nav className='d-flex flex-column'>
                            <Link className='nav-link' to='/dashboard' >Home</Link>
                            <Link className='nav-link' to='/dashboard/services' >Services</Link>
                            <Link className='nav-link' to='/dashboard/products' >Products</Link>
                            <Link className='nav-link' to='/dashboard/contact' >Contact</Link>
                            <Link className='nav-link' to='/dashboard/setting' >Setting</Link>
                        </nav>
                    </div>
                </div>
                <div className="col-10 vh-100">
                    <div>
                        <Outlet />
                    </div>
                </div>


            </div>



            <Routes>


            </Routes>


        </div>


    )
}

export default Dashboard