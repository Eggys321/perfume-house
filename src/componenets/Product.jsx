import React from "react";
import products from "../product.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ratingImg from "/src/assets/Star 1 (1).jpg";

const Product = ({cart,setCart,handleAddToCart}) => {
  const isItemInCart = (itemId)=> cart.some((product)=>product.id === itemId)

  return (
    <>
      <div className="d-flex flex-wrap justify-content-between gap-4 pt-2 ">
        {products.map((product) => {
          const { image, id, title, price, discountPrice } = product;
          return (
              <Card key={id} className="card-container">
                <Card.Img
                  className="w-100 card-img"
                  variant=""
                  src={image}
                />
                <Card.Body className="">
                  <Card.Title className="card-title">
                    {title}
                  </Card.Title>
                  <div className="d-flex gap-1">
                    <div>
                      <img src={ratingImg} alt="rating-img" />
                      <img src={ratingImg} alt="rating-img" />
                      <img src={ratingImg} alt="rating-img" />
                      <img src={ratingImg} alt="rating-img" />
                      <img src={ratingImg} alt="rating-img" />
                    </div>
                    <div className="d-flex gap-2 pt-2 fw-bold">
                      <p style={{ fontSize: "10px" }}>5.0</p>
                      <p style={{ fontSize: "10px" }}> (24) </p>
                    </div>
                  </div>
                  <Card.Text className="d-flex gap-2  card-price">
                    {price}
                     {/* <span style={{ fontFamily: "Arial, sans-serif" }}>&#35;</span>  */}
                    <span style={{ fontFamily: "Arial, sans-serif" }} className="text-decoration-line-through card-discount-price">
                    {discountPrice}
                    </span>
                  </Card.Text>

                  <button disabled={isItemInCart(id)} onClick={()=>handleAddToCart(product)} className="add-to-cart-btn w-100"> {isItemInCart(id) ? "Added to Cart" : "Add to Cart"} </button>
                </Card.Body>
              </Card>
          );
        })}
      </div>
    </>
  );
};

export default Product;
