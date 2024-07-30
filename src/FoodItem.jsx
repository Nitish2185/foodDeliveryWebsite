import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from './assets/assets'
import { StoreContext } from './context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {

    const {cartItems,addToCart,removeFromCart }=useContext(StoreContext); 
  return (
    <div className='food-items'>
        <div className="food-item-image">
            <img src={image} alt="" id='food-img'/> 
            {!cartItems[id]?
            <img className="add" onClick={()=>addToCart(id)} src={assets.add_icon_white}/>
        :<div className='food-item-counter'>
            <img src={assets.remove_icon_red} alt="" onClick={()=>removeFromCart(id)} />
            <p>{cartItems[id]}</p>
            <img src={assets.add_icon_green} alt="" onClick={()=>addToCart(id)} />
        </div> } 
        </div>    
        <div className='food-rating'>
                <p id='food-text'>{name}</p>
                <img src={assets.rating_starts} alt="" id='rating-img' />
            </div>
            <div className="food-about">
            <p id='food-about'>{description}</p>
            </div>
            <p id='price'>Rs.{price}</p>
        </div>       
  )
}

export default FoodItem
