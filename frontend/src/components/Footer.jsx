import React from 'react';
import { images } from '../assets/images'; 
import { Link } from 'react-scroll';

const Footer = ({ setMenu }) => {
  return (
    <footer className='bg-[#323232] text-[#d9d9d9] px-16 xl:px-[105px] pt-16 pb-6'   id='contact-us'>
      <div className='flex justify-between'>
        <div>
          <Link to='/' onClick={() => setMenu("home")}>
            <img src={images.logo} alt="" className='w-[135px] mb-6 cursor-pointer' />
          </Link>
          <p className='max-w-[560px] text-[15px] leading-tight mb-6'>Tomato is an Indian multinational restaurant aggregator and food delivery company. It was founded by Deepinder Goyal and Pankaj Chaddah in 2008.Zomato provides information, menus and user-reviews of restaurants as well as food delivery options from different restaurants.</p>
          <div className='flex items-center'>
            <img src={images.facebook_icon} alt="" 
              className='w-[30px] mr-4 cursor-pointer' />
            <img src={images.twitter_icon} alt="" 
              className='w-[30px] mr-4 cursor-pointer' />
            <img src={images.linkedin_icon} alt="" 
              className='w-[30px] cursor-pointer' />
          </div>
        </div>
        <div>
          <h1 className='mb-3 text-[19px] font-semibold text-white'>COMPANY</h1>
          <p className='text-[15px] mb-2 cursor-pointer'>Home</p>
          <p className='text-[15px] mb-2 cursor-pointer'>About us</p>
          <p className='text-[15px] mb-2 cursor-pointer'>Delivery</p>
          <p className='text-[15px] mb-2 cursor-pointer'>Privacy policy</p>
        </div>
        <div>
          <h1 className='mb-3 text-[19px] font-semibold text-white'>GET IN TOUCH</h1>
          <p className='text-[15px] mb-2 cursor-pointer'>+1-212-4560-7890</p>
          <p className='text-[15px] mb-2 cursor-pointer'>contact@tomato.com</p>
        </div>
      </div>
      <hr className='my-8 bg-gray-400 h-[2px] border-none' />
      <div className='text-center text-[15px]'>Copyright 2024 &#169; Tomato.com - All Right Reserved.</div>
    </footer>
  )
}

export default Footer;
