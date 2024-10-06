import React from "react";
import products from "../product.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Product from "../componenets/Product";
import Cart from "../componenets/Cart";

const Home = ({cart,setCart,handleAddToCart,removeItem,calcTotalPrice,handleIncreaseQuantity,handleDecreaseQuantity}) => {
  // console.log(products);

  return (
    <>
      <main className="container py-4">
        <section className="row">
          <div className="col-lg-8">
            <Product cart={cart} setCart={setCart} handleAddToCart={handleAddToCart} />
          </div>
          <div className="col-lg-4">
            <Cart handleIncreaseQuantity={handleIncreaseQuantity} handleDecreaseQuantity={handleDecreaseQuantity} cart={cart} setCart={setCart} removeItem={removeItem} calcTotalPrice={calcTotalPrice} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
