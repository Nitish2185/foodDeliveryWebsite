import React from 'react'
import './FoodCategory.css'
import { menu_list } from './assets/assets'

const FoodCategory=({category,setCategory})=> {
  return (<>
    <div className="menu-container">
        <div className="exploreMenu">
            <h1 id="text">Explore our menu</h1>
            <p id="para2">Choose from a diverse menu featuring a delectable
                 array of the dishes.Our mission is to satisfy your <br />
                 cravings and elevate yourdinning experience,one delicious meal at a time.</p>
        </div>
    <div className="food-choice">
            {menu_list.map((item,index)=>{
              return(
                <div key={index} className="salad" onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}>
                  <img  className={category===item.menu_name?"active":""} src={item.menu_image} alt="" id='imgbtn' />
                  <p id='imgname'>{item.menu_name}</p>
                </div>
              )
            })}
                     
    </div>
   <div > <hr id='line' /></div>
    </div></>
  )
}

export default FoodCategory
