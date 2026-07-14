import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import Setting from './Setting'

function Dashboard() {
    return (
        <div className="dashboard-container vh-100 overflow-hidden d-flex flex-column">
            <div className='nav-profileInfo   '>
                <div className="d-flex gap-4 ps-3 fw-bold pt-3">
                    <p>Alloush</p>
                    <p>alloshali303@gmail.com</p>
                </div>
            </div>
            <div className="row flex-grow-1  overflow-hidden w-100">
                <div className="sideBar h-100 col-2 justify-content-center text-center p-5">
                    <nav className='d-flex flex-column  gap-4'>
                        <NavLink to='/dashboard' end>Home</NavLink>
                        <NavLink to='/dashboard/products' >Products</NavLink>
                        <NavLink to='/dashboard/setting' >Setting</NavLink>
                    </nav>
                </div>
                <div className="col-10 h-100 overflow-y-auto p-4">
                    <div className="content-wrapper">
                        <Outlet />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard