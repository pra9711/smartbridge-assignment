import React from 'react';

function ProductCard({ product, onClick }) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:scale-105 cursor-pointer"
      onClick={() => onClick(product)}
    >
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description.substring(0, 70)}...</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-blue-600">${product.price}</span>
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={(e) => {
              e.stopPropagation();
              onClick(product);
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;