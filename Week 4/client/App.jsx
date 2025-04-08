import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  
  const handleBackClick = () => {
    setSelectedProduct(null);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {selectedProduct ? (
        <ProductDetails product={selectedProduct} onBackClick={handleBackClick} />
      ) : (
        <>
          <Hero />
          <ProductSection onProductClick={handleProductClick} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;