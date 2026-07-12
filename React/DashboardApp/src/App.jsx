import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Products from './components/Products'
import Setting from './components/Setting'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='dashboard/*' element={<Dashboard />} >
            <Route index element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path='setting' element={<Setting />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App