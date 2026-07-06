import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Services from './components/services'
import Products from './components/products'
import Contact from './components/contact'
import Setting from './components/setting'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />}>
            <Route index element={<Home />} />

            <Route path='services' element={<Services />} />
            <Route path='products' element={<Products />} />
            <Route path='contact' element={<Contact />} />
            <Route path='setting' element={<Setting />} />

          </Route>


        </Routes>
      </Router>
    </>
  )
}

export default App