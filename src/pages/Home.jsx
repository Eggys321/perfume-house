import React from "react";
import products from "../product.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Product from "../componenets/Product";
import Cart from "../componenets/Cart";

const Home = () => {
  // console.log(products);

  return (
    <>
      <main className="container py-4">
        <section className="row">
          <div className="col-lg-8">
            <Product />
          </div>
          <div className="col-lg-4">
            <Cart />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
