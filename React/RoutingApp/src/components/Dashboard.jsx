import React from 'react'
import { Route, Routes, Outlet, NavLink } from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import Contact from './Contact'
import Products from './Products'
import Setting from './Setting'
import '../style/Dashboard.css'


function Dashboard() {
    return (
        <div className='dashboard-continer vh-100 overflow-hidden' >
            <div className="row">
                <div className="nav-box col-2 vh-100 d-flex justify-content-center">
                    <div className="my-5">

                        <nav className='d-flex flex-column'>
                            <NavLink className='sidebar-link my-3 fs-5' to='/dashboard' end >Home</NavLink>
                            <NavLink className='sidebar-link my-3 fs-5' to='/dashboard/services' >Services</NavLink>
                            <NavLink className='sidebar-link my-3 fs-5' to='/dashboard/products' >Products</NavLink>
                            <NavLink className='sidebar-link my-3 fs-5' to='/dashboard/contact' >Contact</NavLink>
                            <NavLink className='sidebar-link my-3 fs-5' to='/dashboard/setting' >Setting</NavLink>
                        </nav>
                    </div>
                </div>
                <div className="p-5 col-10 vh-100">
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