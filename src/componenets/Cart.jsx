import React from "react";
import products from "../product.json";

const Cart = ({ cart, removeItem, calcTotalPrice,handleIncreaseQuantity,handleDecreaseQuantity }) => {
  return (
    <>
      <main className="container border rounded mt-2 cart-container pt-4 ps-4 shadow-sm">
        <h3>My Cart Preview</h3>
        <div>
          {cart.length === 0 && (
            <div>
              <h3 className="fs-2 fst-italic fw-bolder text-danger">
                No item(s) in the cart
              </h3>
              <p className="fw-bolder text-success fs-4">Keep shopping...</p>
            </div>
          )}
        </div>
        <section>
          <div className="py-4 container">
            {cart.map((cartItem) => {
                        const { id, title, price, button, image,quantity } = cartItem;

              return (
                <main key={id} className="row aligm-items-center my-2">
                  <div className="col-4">
                    <img src={image} alt="" className="w-100" />
                  </div>
                  <div className="col-7">
                    <p> {title} </p>
                    <div className="d-flex gap-2 align-items-center">
                      <button className="subtract-cart" onClick={()=>handleDecreaseQuantity(id)}>-</button>
                      <p className="pt-3 cart-number"> {quantity}</p>
                      <button className="add-cart text-center" onClick={()=>handleIncreaseQuantity(id)}>+</button>
                    </div>
                    <div className="d-flex justify-content-between m-0">
                  <p className="cart-price">N{price}</p>
                  <button
                    className="remove-cart"
                    onClick={() => removeItem(id)}
                  >
                  
                    remove
                  </button>
                </div>
                  </div>
                </main>
              );
            })}

          </div>
        </section>
        {cart.length === 0 ? (
          ""
        ) : (
          <>
            <div className="checkout-container pe-5 pb-3">
              <div className="checkout">
                <p className="checkout-title">Sub Total</p>
                <p className="checkout-price">18,000</p>
              </div>
              <div className="checkout">
                <p className="checkout-title">Delivery</p>
                <p className="checkout-price">8,000</p>
              </div>
              <div className="checkout">
                <p className="checkout-title">Total</p>
                <p className="checkout-price">
                  {" "}
                  #{calcTotalPrice.toLocaleString()}{" "}
                </p>
              </div>
            </div>
            {/* <button className='w-100 checkout-button' onClick={() => setModalShow(true)}>
          Confirm Order{' '}
        </button> */}
          </>
        )}

      </main>
    </>
  );
};

export default Cart;
