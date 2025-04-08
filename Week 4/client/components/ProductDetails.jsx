import React from 'react';

function ProductDetails({ product, onBackClick }) {
  return (
    <div className="bg-white py-12 flex-grow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBackClick}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Products
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden border border-gray-200">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-2xl font-bold text-blue-600 mb-6">${product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Features:</h3>
            <ul className="list-disc pl-5 mb-6">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-600 mb-1">{feature}</li>
              ))}
            </ul>
            
            <div className="mt-8">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 mr-4">
                Add to Cart
              </button>
              <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;