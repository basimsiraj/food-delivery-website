import React from 'react';
import { menuLists } from '../assets/menuLists';

const Menu = ({category,setCategory}) => {
  return (
    <section className='py-[30px]' id='menu'>
      <h1 className='text-[26px] font-medium mb-4'>Explore our menu</h1>
      <p className='text-[16px] max-w-[710px] text-[#808080]'>Choose from a diverse menu featuring a selectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className='flex justify-between items-center text-center mt-8 
        gap-8 overflow-x-scroll scroll-hidden'>
        {menuLists.map((item,index) => {
          return (
            <div onClick={() => 
              setCategory(prev => prev === item.name ? "All" : item.name)} 
              key={index} className='cursor-pointer'>
              <img src={item.image} alt="" 
                className={`w-[7.5vw] min-w-[80px] transition duration-200
                ${category === item.name ? "border-4 border-[#ff6347] rounded-full p-[2px]" : ""}`} />
              <p className='mt-3 text-[17px] text-[#747474]'>{item.name}</p>
            </div>
          )
        })}
      </div>
      <hr className='bg-[#e2e2e2] h-[2px] border-none mt-6' />
    </section>
  )
}

export default Menu;
