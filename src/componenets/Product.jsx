import React from "react";
import products from "../product.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ratingImg from "/src/assets/Star 1 (1).jpg";

const Product = () => {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-between gap-4 pt-2 ">
        {products.map((product) => {
          const { image, id, title, price, discountPrice } = product;
          return (
            <>
              <Card key={product.id} className="card-container">
                <Card.Img
                  className="w-100 card-img"
                  variant=""
                  src={product.image}
                />
                <Card.Body className="">
                  <Card.Title className="card-title">
                    {product.title}
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
                    {product.price}
                    <span className="text-decoration-line-through card-discount-price">
                      {product.dicountPrice}
                    </span>
                  </Card.Text>

                  <button className="w-100 add-to-cart-btn ">
                    Add to Cart
                  </button>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Product;
