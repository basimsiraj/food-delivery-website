import React, { useContext, useRef } from 'react';
import { images } from '../assets/images';
import { HashLink as Link } from 'react-router-hash-link';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({menu,setMenu,setShowLogin}) => {

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  const {getTotalCartAmount} = useContext(StoreContext);
  
  return (
    <nav className='flex justify-between items-center pt-[15px] fixed 1xl:w-[84%]
      top-0 z-20  lg:pt-[15px] md:pt-[25px] sm:pt-[25px] xs:pt-[25px] 
      xxs:pt-[25px] lg:w-[90%]'>
      <div>
        <Link to='/'>
          <img src={images.logo} alt="" className='w-[135px] cursor-pointer' />
        </Link>
        <img onClick={openMenu} src={images.hamburger_menu_icon} alt="" 
          className='w-[40px] block lg:hidden fixed top-[19px] right-[60px] 
          sm:right-[38px] xs:right-[28px]' />
      </div>
      <div className='flex flex-col'>
        <ul ref={menuRef} className='flex flex-col items-center text-[17px] 
          text-[#49557e] font-medium lg:flex-row lg:items-center lg:static 
          lg:right-0 lg:bg-transparent bg-gray-700 w-[350px] h-screen 
          lg:h-auto lg:w-auto p-7 fixed top-0 -right-[350px] lg:p-0 z-30'>
          <img onClick={closeMenu} src={images.close_icon} alt=""
            className='w-[40px] block lg:hidden cursor-pointer relative -top-[8px] 
            left-[90px] mb-7' />
            <Link to="/" onClick={() => setMenu("home")} 
              className={`mb-6 lg:mb-0 mr-6 cursor-pointer border-b-2
              ${menu === "home" ? "active" : "border-transparent"}`}
            >Home</Link>
          <Link to='/#menu' smooth onClick={() => setMenu("menu")} 
            className={`mb-6 lg:mb-0 mr-6 cursor-pointer border-b-2
            ${menu === "menu" ? "active" : "border-transparent"}`}
          >Menu</Link>
          <Link to='/#mobile-app' smooth onClick={() => setMenu("mobile app")} 
            className={`mb-6 lg:mb-0 mr-6 cursor-pointer border-b-2
            ${menu === "mobile app" ? "active" : "border-transparent"}`}>Mobile App</Link>
          <Link to='/#contact-us' smooth onClick={() => setMenu("contact us")}
            className={`mb-6 lg:mb-0 mr-6 cursor-pointer border-b-2
            ${menu === "contact us" ? "active" : "border-transparent"}`}>Contact us</Link>
          <li className='mt-6 md:hidden'>
            <button className='text-[16px] border border-[#49557e] 
          bg-transparent text-[#49557e] font-medium px-8 py-2 rounded-full
          transition duration-300
          hover:bg-[#fff4f2]'>Sign in</button>
          </li>
        </ul>
      </div>
      <div className='flex items-center lg:flex-row fixed lg:top-[19px]
        right-[150px] sm:right-[130px] lg:static z-10 xs:right-[75px] xxs:right-[95px]'>
        <img src={images.search_icon} alt="" className='mr-8 w-[24px]' />
        <div className='relative'>
          <Link to='/cart'>
            <img src={images.basket_icon} alt="" 
            className='mr-8 w-[24px] cursor-pointer' />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "absolute -top-[8px] right-[26px] bg-[#ff6347] min-w-[8px] min-h-[8px] rounded-full"}></div>
        </div>
        <button className='hidden sm:block text-[16px] border border-[#49557e] 
         bg-transparent text-[#49557e] font-medium px-8 py-2 rounded-full
         transition duration-300
         hover:bg-[#fff4f2]' onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar;
