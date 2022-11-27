import { Navbar, NavbarBrand, Container, Col, Row} from "reactstrap";
import { Routes,Route,Nav,NavLink} from 'react-router-dom';
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Products from "./components/Products";
import Basket from "./components/Basket";
import Search from "./components/Search";

function App() {
  const [products, setProducts] = useState([
    {
      id: uuidv4(),
      src: "img/macbook.png",
      productName: "Macbook pro",
      productPrice: 28600,
      productFeature:
        " Some quick example text to build on the card title and make up the bulk of the card‘s content.",
    },
    {
      id: uuidv4(),
      src: "img/Bellapro.png",
      productName: "Bella pro",
      productPrice: 10000,
      productFeature:
        " Some quick example text to build on the card title and make up the bulk of the card‘s content.",
    },
    {
      id: uuidv4(),
      src: "img/Sellapro.png",
      productName: "Sella pro",
      productPrice: 21000,
      productFeature:
        " Some quick example text to build on the card title and make up the bulk of the card‘s content.",
    },
    {
      id: uuidv4(),
      src: "img/Kellapro.png",
      productName: "Kella pro",
      productPrice: 19050,
      productFeature:
        " Some quick example text to build on the card title and make up the bulk of the card‘s content.",
    },
    {
      id: uuidv4(),
      src: "img/Zillapro.png",
      productName: "Zilla pro",
      productPrice: 19050,
      productFeature:
        " Some quick example text to build on the card title and make up the bulk of the card‘s content.",
    },
    {
      id: uuidv4(),
      src: "img/Mellapro.png",
      productName: "Mella pro",
      productPrice: 19050,
      productFeature:
        " Some quick example text to build on the card title and make up the bulk of the card‘s content.",
    },
  ]);
  const [basket, setBasket] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = (event) => setSearch(event.target.value);

  useEffect(()=>{
    localStorage.setItem('basket',JSON.stringify(basket))
  },[basket])
  
  return (
    <div>
      <Container>
        <Row>
          <Navbar color="dark text-info" text-color="white" expand="md" light>
            <NavbarBrand className="text-warning mx-auto">
              Sepete Ekle React
            </NavbarBrand>
          </Navbar>
        </Row>

        <Row>
          <Col xs="9">
            <h1>Products</h1>
            <Search handleSearch={handleSearch} />
            <Products
              search={search}
              basket={basket}
              setBasket={setBasket}
              products={products}
              setProducts={setProducts}
            />
          </Col>
          <Col xs="3">
            <h1>Basket</h1>
            <Basket products={products} basket={basket} setBasket={setBasket} />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
