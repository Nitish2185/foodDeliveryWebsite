import React, { useState } from 'react'
import Header from './Header'
import FoodCategory from './FoodCategory'
import FoodDisplay from './FoodDisplay'




const Home = () => {

  const [category,setCategory]=useState("All");
  return (
    <div>
      <Header/>
      <FoodCategory category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      
    </div>
  )
}

export default Home
