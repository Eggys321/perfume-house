import React from 'react';
import products from "../product.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = () => {
  return (
    <>
     <div className="d-flex flex-wrap justify-content-between gap-4">
              {products.map((product) => {
                return (
                  <>
                    <Card className="crd ">
                      <Card.Img className="w-100" variant="" src={product.image} />
                      <Card.Body className="">
                        <Card.Title className="fs-6 fw-bold"> {product.title} </Card.Title>
                        <Card.Text>
                       {product.price}
                        </Card.Text>
                        <Button variant="primary" className="w-100">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </>
                );
              })}
            </div>
    </>
  )
}

export default Product