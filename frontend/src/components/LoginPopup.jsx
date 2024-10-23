import React, { useState } from 'react';
import { images } from '../assets/images';

const LoginPopup = ({setShowLogin}) => {

  const [currentState,setCurrentState] = useState("Login");

  return (
    <div className='absolute z-10 w-full h-[80%] grid'>
      <form className='place-self-center max-w-[23vw] w-[330px] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-lg text-[15px]'>
        <div className='flex justify-between items-center text-black'>
          <h1 className='text-[20px] font-semibold'>{currentState}</h1>
          <img onClick={() => setShowLogin(false)} src={images.cross_icon} alt="" className='w-[22px] cursor-pointer' />
        </div>
        <div className='flex flex-col gap-[20px]'>
          {currentState === "Login" ? <></>
            : <input type="text" placeholder='Your name' required 
              className='border border-[#c9c9c9] outline-none p-[8px] rounded' />}
          <input type="email" placeholder='Your email' required 
          className='border border-[#c9c9c9] outline-none p-[8px] rounded' />
          <input type="password" placeholder='Password' required 
          className='border border-[#c9c9c9] outline-none p-[8px] rounded' />
        </div>
        <button className='bg-[#ff6347] text-white p-[8px] rounded'>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className='flex items-start gap-[8px] -mt-[10px]'>
          <input type="checkbox" required className='mt-[5px]' />
          <p className='text-[14px] leading-tight'>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" 
          ? <p className='text-[14px]'>Create a new account? <span 
            className='text-[#ff6347] font-medium cursor-pointer' 
            onClick={() => setCurrentState("Sign Up")}>Click here</span></p> 
          : <p className='text-[14px]'>Already have an account? <span 
            className='text-[#ff6347] font-medium cursor-pointer' 
            onClick={() => setCurrentState("Login")}>Login here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup;

