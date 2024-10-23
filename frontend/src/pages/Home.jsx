import React, { useState } from 'react';
import Spotlight from '../components/Spotlight';
import Menu from '../components/Menu';
import FoodDisplay from '../components/FoodDisplay';
import MobileApp from '../components/MobileApp';

const Home = () => {

  const [category,setCategory] = useState("All");

  return (
    <div>
      <Spotlight />
      <Menu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <MobileApp />
    </div>
  )
}

export default Home;
