import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {foodLists,cartItems,removeFromCart,getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <section className='pt-[140px] pb-[120px]'>
      <div>
        <div className='grid grid-cols-6 items-center text-center mb-[15px] 
          text-gray-500 text-[17px] font-medium'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className='mb-[50px] h-[2px] bg-gray-300 border-none' />
        {foodLists.map((item,index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={index} className='grid grid-cols-6 text-center items-center 
              mb-[30px] text-gray-500 text-[17px] font-normal'>
                <img src={item.image} alt="" className='w-[180px] rounded-lg' />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item.id]}</p>
                <p>${item.price * cartItems[item.id]}</p>
                <p onClick={() => removeFromCart(item.id)} 
                className='cursor-pointer text-[20px]'>X</p>
              </div>
            )
          }
        })}
      </div>
      <div className='grid grid-cols-2 gap-[190px]'>
        <div>
          <h1 className='text-[20px] font-semibold mb-4'>Cart Totals</h1>
          <div className='text-gray-500 text-[16px]'>
            <div className='flex justify-between items-center'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='mt-2 mb-1 bg-gray-300' />
            <div className='flex justify-between items-center'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 5}</p>
            </div>
            <hr  className='mt-2 mb-1 bg-gray-300' />
            <div className='flex justify-between items-center font-semibold'>
              <p>Total</p>
              <p>${getTotalCartAmount === 0 ? 0 : getTotalCartAmount() + 5}</p>
            </div>
          </div>
          <button onClick={() => navigate('/order')} className='bg-[#ff6347] text-white text-[13px] px-6 py-2 rounded mt-4 font-medium'>PROCEED TO CHECKOUT</button>
        </div>
        <div className='text-gray-500'>
          <p className='mb-4 text-[15px]'>If you have a promo code, Enter it here</p>
          <div className='flex items-center'>
            <input type="text" placeholder='Promo code' 
              className='bg-[#e2e2e2] w-[270px] h-[37px] pl-3 text-[15px] outline-none text-gray-500 rounded rounded-tr-none' />
            <button className='bg-black text-white w-[130px] h-[37px] text-[15px] rounded rounded-tl-none rounded-bl-none'>Submit</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart;
