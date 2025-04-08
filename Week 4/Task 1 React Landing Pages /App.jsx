// App.js
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import Footer from "./Footer";
import ProductDetails from "./ProductDetails";

const productsData = [
  {
    id: 1,
    name: "Product 1",
    price: "$99",
    image: "https://via.placeholder.com/200",
    description: "High-quality product",
  },
  // Add more products
];

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Products products={productsData} />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetails products={productsData} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
