import React,{useState,useContext} from 'react';
import CartContext from '../context/CartContext';


const useAddToCart = (item) => {
    const {cart,setCart} = useContext(CartContext)

    const handleAddToCart = ()=>{
        const isPresent = cart.some((product)=> product.id === item.id)
        if(isPresent){
          const updatedCart = cart.map((product)=>{
            product.id === item.id ? {...product, quantity:product.quantity + 1}:product
          })
          setCart(updatedCart);
        }else{
          const newItem = {...item, quantity:1}
          setCart([...cart,newItem]);
          console.log([...cart,newItem]);
          
        }
        
      }
    return [handleAddToCart];

}

export default useAddToCart