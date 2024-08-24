import React from "react";
import products from "../product.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = () => {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-between gap-4 pt-2 ">
        {products.map((product) => {
          const {image,id,title,price,discountPrice} = product
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
                  <Card.Text className="d-flex gap-2 pt-1 card-price">
                    {product.price}
                    <p>
                      <span className="text-decoration-line-through card-discount-price">
                        {product.dicountPrice}
                      </span>
                    </p>
                  </Card.Text>

                  <button className="w-100 add-to-cart-btn">Add to Cart</button>
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
