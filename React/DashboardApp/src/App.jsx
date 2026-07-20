import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Products from './pages/Products'
import Setting from './pages/Setting'
import Theme from './pages/Theme'
import Currency from './pages/Currency'
import Userprofile from './pages/Userprofile'
import ProductDetails from './pages/ProductDetails'
import { ThemeProvider } from './context/ThemeContext';
import { CurenccyProvider } from './context/CurenccyContext';
import { UserProfileProvider } from './context/UserProfileContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <CurenccyProvider>
          <UserProfileProvider>
            <Router>
              <Routes>
                <Route path='dashboard/*' element={<Dashboard />} >
                  <Route index element={<Home />} />
                  <Route path='products' element={<Products />} />
                  <Route path='products/:id' element={<ProductDetails />} />
                  <Route path='setting/*' element={<Setting />} >
                    <Route path='theme' element={<Theme />} />
                    <Route path='currency' element={<Currency />} />
                    <Route path='userprofile' element={<Userprofile />} />
                  </Route>
                </Route>
              </Routes>
            </Router>
          </UserProfileProvider>
        </CurenccyProvider>
      </ThemeProvider>
    </>
  )
}

export default App