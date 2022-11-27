import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import FormComponent from "./FormComponent";


export default function Products({
  products,
  setProducts,
  basket,
  setBasket,
  search,
}) {
  const [visible, setVisible] = useState(false);

  const onClickBasket = (id) => {
    if (basket.some((val) => val.id === id)) {
      basket.find((val) => val.id === id).piece++;
      setBasket((basket) => [...basket]);
    } else {
      setBasket([
        ...basket,
        {
          id: id,
          piece: 1,
          productName: products.find((value) => value.id === id).productName,
          productPrice: products.find((value) => value.id === id).productPrice,
        },
      ]);
    }
    console.log(basket);
  };


  return (
    <div>
      {/* Add product beginning */}
      <Button color="primary" onClick={() => setVisible(true)}>
        Add product
      </Button>
      {/* Add product finish */}

      <FormComponent
        visible={visible}
        setVisible={setVisible}
        setProducts={setProducts}
        products={products}
      />
      <div className="row d-flex">
        {products
          .filter((val) => val.productName.includes(search))
          .map((event) => (
            <Card
              className=" px-2 my-2 mx-1 "
              key={event.id}
              style={{
                width: "18rem",
              }}
            >
              <img alt="Sample" src={event.src} />
              <CardBody>
                <th scope="row" hidden>
                  {event.id}
                </th>
                <CardTitle tag="h5">{event.productName}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {event.productPrice}$
                </CardSubtitle>
                <CardText>{event.productFeature}</CardText>
                <Button color="primary" onClick={() => onClickBasket(event.id)}>
                  Add to basket
                </Button>
              </CardBody>
            </Card>
          ))}
      </div>
    </div>
  );
}
