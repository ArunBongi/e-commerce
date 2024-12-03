import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import Checkout from "./components/Checkout";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/e-commerce" element={<ProductList />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;
