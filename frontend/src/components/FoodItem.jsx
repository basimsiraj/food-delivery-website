import React, { useContext } from 'react';
import { images } from '../assets/images';
import { StoreContext } from '../context/StoreContext';


const FoodItem = ({id,name,description,price,image,rating}) => {

  const { cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='bg-[#f7f7f7] rounded-t-xl rounded-b-xl shadow-[0_0_10px] 
      shadow-[#b0b0b0]'>
      <div className='relative'>
        <img src={image} alt="" className='rounded-tl-xl rounded-tr-xl' />
        {!cartItems[id] ? 
          <img onClick={() => addToCart(id)} 
            src={images.add_icon_white} className='absolute bottom-[7px] right-[7px] 
            w-[35px] cursor-pointer' alt="" /> 
          : <div className='absolute bottom-[7px] right-[7px] flex items-center gap-4 bg-white rounded-full px-3 py-2'>
              <img onClick={() => removeFromCart(id)} 
                src={images.remove_icon_red} className='w-[25px] cursor-pointer' alt="" />
              <p className='font-medium text-[16px]'>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} 
                src={images.add_icon_green} className='w-[25px] cursor-pointer' alt="" />
            </div>
        }
      </div>
      <div className='px-5 py-3'>
        <div className='flex items-center justify-between'>
          <h3 className='text-[17px] font-semibold mb-2 mt-2'>{name}</h3>
          <img src={rating} alt="" className='w-[72px]' />
        </div>
        <p className='text-[13px] text-[#747474] mb-2 leading-tight'>{description}</p>
        <p className='text-[19px] text-[#ff6342] font-semibold'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem;
