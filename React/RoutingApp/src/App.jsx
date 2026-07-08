import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Services from './components/Services'
import Products from './components/Products'
import Contact from './components/Contact'
import Setting from './components/Setting'
import './App.css'
import UserProfile from './components/UserProfile'
import Security from './components/Security'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard/*' element={<Dashboard />}>
            <Route index element={<Home />} />

            <Route path='services' element={<Services />} />
            <Route path='products' element={<Products />} />
            <Route path='contact' element={<Contact />} />
            <Route path='setting/*' element={<Setting />} />
            <Route path='userprofile' element={<UserProfile />} />

            <Route path='security' element={<Security />} />


          </Route>


        </Routes>
      </Router>
    </>
  )
}

export default App