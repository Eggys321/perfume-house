import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
const cartItemsFromLocalStoragePerf = JSON.parse(localStorage.getItem("cart")) || []
function App() {
  const [cart, setCart] = useState(cartItemsFromLocalStoragePerf);
  const handleAddToCart = (item)=>{
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

  // function to remove item
  function removeItem (id){
    let remove = cart.filter((cartItx)=> cartItx.id !== id);
    setCart(remove)
  }
  // calc total price
  const calcTotalPrice =cart.reduce((total,product)=>total + parseFloat(product.price) * product.quantity, 0)
  // handle inc
  const handleIncreaseQuantity = (itemId) => {
    const updatedCart = cart.map((product) =>
      product.id === itemId ? { ...product, quantity: product.quantity + 1 } : product
    );
    setCart(updatedCart);
  };

  // handle dec
  const handleDecreaseQuantity = (itemId) => {
    const updatedCart = cart.map((product) => {
      if (product.id === itemId) {
        const newQuantity = product.quantity > 1 ? product.quantity - 1 : 1;
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setCart(updatedCart);
  };
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home handleIncreaseQuantity={handleIncreaseQuantity} handleDecreaseQuantity={handleDecreaseQuantity} calcTotalPrice={calcTotalPrice} removeItem={removeItem} cart={cart} handleAddToCart={handleAddToCart} setCart={setCart} />} />
          </Route>
          <Route path="/auth/signin" element={<SignIn/>}/>
          <Route path="/auth/signup" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
