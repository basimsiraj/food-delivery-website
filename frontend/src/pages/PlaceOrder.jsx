import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext'; 

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <section className='pt-[140px] pb-[120px]'>
      <form className='flex justify-between gap-[60px]'>
        <div className='flex-1 text-[15px]'>
          <h1 className='text-[20px] font-semibold mb-7'>Delivery Information</h1>
          <div className='mb-3'>
            <input type="text" placeholder='First name' 
              className='border border-[#c5c5c5] mr-3 rounded px-3 py-1 outline-none' />
            <input type="text" placeholder='Last name' 
              className='border border-[#c5c5c5] rounded px-3 py-1 outline-none' />
          </div>
          <input type="email" placeholder='Email address' 
            className='border border-[#c5c5c5] block w-[88%] mb-3 rounded px-3 py-1 outline-none' />
          <input type="text" placeholder='Street' 
            className='border border-[#c5c5c5] w-[88%] rounded px-3 py-1 outline-none' />
          <div className='mt-3 mb-3'>
            <input type="text" placeholder='City' 
              className='border border-[#c5c5c5] mr-3 rounded px-3 py-1 outline-none' />
            <input type="text" placeholder='State' 
              className='border border-[#c5c5c5] rounded px-3 py-1 outline-none' />
          </div>
          <div className='mb-3'>
            <input type="text" placeholder='Pin code' 
              className='border border-[#c5c5c5] mr-3 rounded px-3 py-1 outline-none' />
            <input type="text" placeholder='Country' 
              className='border border-[#c5c5c5] rounded px-3 py-1 outline-none' />
          </div>
          <input type="phone" placeholder='Phone' 
            className='border border-[#c5c5c5] w-[88%] rounded px-3 py-1 outline-none' />
        </div>
        <div className='flex-1'>
          <div className='text-[16px] text-gray-500'>
            <h1 className='text-[20px] text-black font-semibold mb-4'>Cart Totals</h1>
            <div>
              <div className='flex justify-between items-center'>
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr className='mt-2 mb-1 bg-gray-300' />
              <div className='flex justify-between items-center'>
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 5}</p>
              </div>
              <hr className='mt-2 mb-1 bg-gray-300' />
              <div className='flex justify-between items-center font-semibold'>
                <p>Total</p>
                <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}</p>
              </div>
            </div>
            <button className='bg-[#ff6347] text-white text-[13px] px-6 py-2 rounded mt-9 font-medium'>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default PlaceOrder;
