import { createContext, useContext, useReducer } from "react"

const defValue = {};
const CartContext = createContext(defValue);

//cartContext can be destructured to Provider and Consumser
//const {Provider} = CartContext;

function reducer(state,action){
    switch(action.type){
      case "ADD_TO_CART" :
        return {
          ...state,
          cartValue:state.cartValue+1,
          totalPrice:state.totalPrice+action.price
        }
      case "REMOVE_FROM_CART" :
        return {
          ...state,
          cartValue:state.cartValue-1,
          totalPrice:state.totalPrice-action.price
        }
      default :
        return state;
        break;
    }
}

const CartProvider = ({children})=> {
    const [state , dispatch ] = useReducer(reducer,{cartValue : 0,totalPrice : 0})
    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export { useCart , CartProvider };