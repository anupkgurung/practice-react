
import { useEffect, useState } from 'react';
import './App.css';
import { useCart } from "./cart-context"
import { itemsInWishlist,itemsInCart } from "./items"
import {changeColor} from "./utils/timer"
import { ComponentA } from './Components/ComponentA';



export default function App() {
 
  return (
    <>
      <ComponentA />
    </>
  )
  
//   const { state , dispatch } = useCart();
  
  
//   useEffect(changeColor,[color])
// (function(){
//   setInterval(function(){
//     if(color === "red"){
//       setColor("green") 
//     }else if(color === "green"){
//       setColor("red")
//     }
//   },2000)
//  })();
  
//   const  [itemsInCart,itemsInWishlist] = items();
  
//     //cartValue  & totalPrice can be extracted from state via destructuring
//     const { cartValue , totalPrice } = state
  
//   return (
//     <div className="App">
//       <h1 style={{ color : color }} id="blink-header">Hola</h1>
//       <h1>Cart</h1> 
//       <h2>Items in Cart {state.cartValue}</h2>  
//       <h2>Total Price {state.totalPrice}</h2>

//       {itemsInCart.map(({ name, price }) => {
//         return (
//           <div>
//             <h3>Product Name : {name}</h3>
//             <h3>Price of Product : {price}</h3>
//             <button onClick={()=>dispatch({type:'ADD_TO_CART', price })}>Add to Cart</button>
//             <button onClick={()=>dispatch({type:'REMOVE_FROM_CART',price})}>Remove From Cart</button>
//             <button onClick={()=>dispatch({type:'ADD_TO_WISHLIST'})}>Move to Wishlist</button>
//           </div>
//         )
//       })}

//       {/* {itemsInWishlist.map((item)=>{

//       })} */}

//     </div>
//   );
}

