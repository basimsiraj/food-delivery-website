import React from 'react';
import { images } from '../assets/images';

const Spotlight = () => {
  return (
    <section className='pt-[80px] mt-[85px] rounded-xl pb-[65px]'  style={{
      backgroundImage: `url(${images.header_img})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      // height: "36vw",
    }}>
        <div className='max-w-[720px] pl-[70px]'>
          <h1 className='text-[70px] leading-tight font-medium mb-5 text-white mt-[47px]'>
            Order your <br /> favourite food here</h1>
          <p className='text-[16px] mb-5 text-white'>Choose from a diverse menu featuring a selectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meals at a time.</p>
          <button className='bg-white text-[#747474] px-7 py-2 
          rounded-full text-[15px] font-medium'>View Menu</button>
        </div>
    </section>
  )
}

export default Spotlight;
