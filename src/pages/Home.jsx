import React from "react";
import products from "../product.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Product from "../componenets/Product";
import Cart from "../componenets/Cart";

const Home = () => {
  console.log(products);

  return (
    <>
      <main className="container py-3">
        <section className="row justify-content-between">
          <div className="col-lg-8">
           <Product/>
          </div>
          <div className="col-lg-3">
            <Cart/>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
