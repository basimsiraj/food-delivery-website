import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import FoodItem from './FoodItem';

const FoodDisplay = ({category}) => {

  const { foodLists } = useContext(StoreContext);

  return (
    <section className='pb-[90px]'>
      <h1 className='text-[26px] font-semibold mb-[25px]'>Top dishes near you</h1>
      <div className='grid grid-cols-4 gap-6'>
        {foodLists.map((item,index) => {
          if (category === "All" || category === item.category) {
            return <FoodItem key={index} id={item.id} name={item.name} 
              description={item.description} price={item.price} image={item.image} 
              rating={item.rating} />
          }
        })}
      </div>
    </section>
  )
}

export default FoodDisplay;
