import React from "react";
import products from "../product.json";

const Cart = () => {
  return (
    <>
      <main className="container border rounded mt-2 cart-container pt-4 ps-4">
        <h3>My Cart Preview</h3>
        <section>
          <div className="py-4 container">
            {products.map((product) => {
              return (
                <main key={product.id} className="row aligm-items-center my-2">
                    <div className="col-4">
                      <img src={product.image} alt="" className="w-100"/>
                    </div>
                    <div className="col-7">
                      <p> {product.title} </p>
                    </div>
                </main>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Cart;
