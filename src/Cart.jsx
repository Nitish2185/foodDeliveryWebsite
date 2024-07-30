import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from './context/StoreContext'
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const {cartItems,food_list,removeFromCart,getTotalCartAmount}=useContext(StoreContext);
    const navigate=useNavigate();
  return (<>
    <div className='cart'>
        <div className="cart-items">
            <div className="cart-items-title">
                <p>Item</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br />
            <hr id='line2' />
            {food_list.map((item,index)=>{ 
                if(cartItems[item._id]>0){
                    return(
                        <div>
                        <div className="cart-items-title cart-items-item">
                            <img src={item.image} alt="" />
                            <p>{item.name}</p>
                            <p>Rs.{item.price}/-</p>
                            <p>{cartItems[item._id]}</p>
                            <p>Rs.{item.price*cartItems[item._id]}/-</p>
                            <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                        </div>
                        <hr id='line2' /></div>
                    )
                }
            })}
        </div></div>
      <div className="cart-bottom">
        <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
                <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>Rs.{getTotalCartAmount()}</p>
                </div>
                <hr id='line3' />
                <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>Rs.{getTotalCartAmount()===0?0:50}</p>
                </div>
                <hr id='line3' />
                <div className="cart-total-details">
                <p>Total</p>
                <p>Rs.{getTotalCartAmount()===0?0:getTotalCartAmount()+50}/-</p>
                </div>              
            </div>
            <div className="cart-promocode">
            <div>
                <p>If you have a Promocode,Enter it here</p>
                <div className="cart-promocode-input">
                    <input type="text" placeholder='Enter code here..'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
            <button id='checkout' onClick={()=>navigate('/order')}>Proceed to checkout</button>
        </div>
        
        
      </div></>
    
  )
}

export default Cart
