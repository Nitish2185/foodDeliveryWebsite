import { useState } from 'react'
import FoodDelivery from './FoodDelivery.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import LoginPopUp from './LoginPopUp.jsx'
import Footer from './Footer.jsx'
import Cart from './Cart.jsx'
import PlaceOrder from './PlaceOrder.jsx'

function App() {
  const [showLogin,setShowLogin]=useState(false);

  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div>
      <FoodDelivery setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
      <Footer/>
      </div>
    </>
  )
}

export default App
