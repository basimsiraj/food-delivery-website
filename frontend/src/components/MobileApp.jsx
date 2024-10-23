import React from 'react';
import { images } from '../assets/images';

const MobileApp = () => {
  return (
    <section className='pb-[90px]' id='mobile-app'>
      <div className='text-center'>
        <h1 className='text-[45px] font-medium max-w-[750px] m-auto mb-5 leading-tight'>For Better Experience Download Tomato App</h1>
        <div className='flex items-center justify-center transition duration-500'>
          <img src={images.play_store} alt="" 
            className='w-[170px] h-[55px] mr-6 cursor-pointer hover:scale-105' />
          <img src={images.app_store} alt="" 
            className='w-[170px] h-[55px] cursor-pointer hover:scale-105' />
        </div>
      </div>
    </section>
  )
}

export default MobileApp;
