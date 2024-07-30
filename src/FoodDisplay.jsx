import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from './FoodItem'
import { StoreContext } from './context/StoreContext'

const FoodDisplay = ({category}) => {
    const {food_list}= useContext(StoreContext)

  return (<>
    <div className="dishes"><h1>Top dishes near you</h1></div>
    <div className="food-mainContainer">
    <div className='food-container'>
        {food_list.map((item,index)=>{
            if(category==="All"||category===item.category){
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>}
        })}                                     
    </div>
    </div></>
  )
}

export default FoodDisplay
