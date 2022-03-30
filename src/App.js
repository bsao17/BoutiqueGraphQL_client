import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";
import Payment from "./components/Payment";
import Product from "./components/Product";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes exact path="/" render={() => <Home />} />
        <Routes path="/product" render={(props) => <Product {...props} />} />
        <Routes path="/cart" component={Cart} />
        <Routes path="/checkout" component={Checkout} />
        <Routes path="/orders" component={Orders} />
        <Routes path="/payment" component={Payment} />
      </Layout>
    </Router>
  );
}
export default App;
