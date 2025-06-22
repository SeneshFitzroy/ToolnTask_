
import React from 'react';

interface ToolCardProps {
  title: string;
  description: string;
  price: string;
  brand: string;
  condition: string;
  image?: string;
  available?: boolean;
}

const ToolCard: React.FC<ToolCardProps> = ({ 
  title, 
  description, 
  price, 
  brand, 
  condition, 
  image, 
  available = true 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover border border-gray-100 overflow-hidden">
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-400 text-6xl">🔧</div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800 line-clamp-2">{title}</h3>
          <span className="text-2xl font-bold text-orange-500 ml-2">{price}</span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <span className="w-4 h-4 mr-2">🏷️</span>
            {brand}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <span className="w-4 h-4 mr-2">✨</span>
            {condition}
          </div>
          <div className="flex items-center text-sm">
            <span className={`w-3 h-3 rounded-full mr-2 ${available ? 'bg-green-500' : 'bg-red-500'}`}></span>
            <span className={available ? 'text-green-600' : 'text-red-600'}>
              {available ? 'Available' : 'Unavailable'}
            </span>
          </div>
        </div>
        
        <button 
          className={`w-full font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
            available 
              ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!available}
        >
          {available ? 'Rent Now' : 'Not Available'}
        </button>
      </div>
    </div>
  );
};

export default ToolCard;
