import React from 'react';
import ProductCard from './ProductCard';

function ProductSection({ onProductClick }) {
  const products = [
    {
      id: 1,
      name: 'Premium Headphones',
      price: 199.99,
      description: 'High-quality over-ear headphones with noise cancellation and premium sound.',
      image: '/api/placeholder/300/300',
      features: ['Noise cancellation', 'Wireless', '30-hour battery life', 'Premium sound quality']
    },
    {
      id: 2,
      name: 'Smartphone Pro',
      price: 899.99,
      description: 'The latest smartphone with advanced camera system and all-day battery life.',
      image: '/api/placeholder/300/300',
      features: ['Triple camera system', '6.7-inch display', 'All-day battery', '5G capability']
    },
    {
      id: 3,
      name: 'Smartwatch Elite',
      price: 299.99,
      description: 'Track your fitness and stay connected with this premium smartwatch.',
      image: '/api/placeholder/300/300',
      features: ['Heart rate monitor', 'GPS tracking', 'Water resistant', '4-day battery life']
    },
    {
      id: 4,
      name: 'Wireless Speaker',
      price: 149.99,
      description: 'Portable wireless speaker with deep bass and crystal-clear sound.',
      image: '/api/placeholder/300/300',
      features: ['Bluetooth 5.0', '24-hour playback', 'Waterproof', 'Built-in microphone']
    }
  ];

  return (
    <div id="products" className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Our Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onClick={onProductClick} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductSection;