import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Footer from './components/Footer';
import LoginPopup from './components/LoginPopup';

const App = () => {

  const [menu,setMenu] = useState("home");
  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='px-8 md:px-16 1xl:px-[105px]'>
        <Navbar menu={menu} setMenu={setMenu} setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer setMenu={setMenu} />
    </>
  )
}

export default App;
