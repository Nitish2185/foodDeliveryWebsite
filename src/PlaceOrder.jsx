import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from './context/StoreContext'

const PlaceOrder = () => {

    const {getTotalCartAmount}=useContext(StoreContext);

  return (
    <div className='place-order'>
        <div className="place-order-left">
            <p className="title">Delivery Information</p>
            <div className="multi-fields">
                <input type="text" placeholder='First name'/>
                <input type="text" placeholder='Last name'/>
            </div>
            <input type="email" placeholder='Enter email' />
            <input type="text"  placeholder='Street'/>
            <div className="multi-fields">
                <input type="text" placeholder='City'/>
                <input type="text" placeholder='State'/>
            </div>
            <div className="multi-fields">
                <input type="text" placeholder='Zip code'/>
                <input type="text" placeholder='Country'/>
            </div>
            <input type="text" placeholder='Phone' />
        </div>
        <div className="place-order-right">
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
            
        </div>
            <button id='checkout' >Proceed to Payment</button>
        </div>
        </div>      
    </div>
  )
}

export default PlaceOrder
