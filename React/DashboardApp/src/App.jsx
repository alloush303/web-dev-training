import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Products from './components/Products'
import Setting from './components/Setting'
import Theme from './components/Theme'
import Currency from './components/Currency'
import Userprofile from './components/Userprofile'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='dashboard/*' element={<Dashboard />} >
            <Route index element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path='setting/*' element={<Setting />} >
              <Route path='theme' element={<Theme />} />
              <Route path='currency' element={<Currency />} />
              <Route path='userprofile' element={<Userprofile />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App