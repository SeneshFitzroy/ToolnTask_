
import React from 'react';
import { Link } from 'react-router-dom';

interface ToolCardProps {
  title: string;
  description: string;
  price: string;
  brand: string;
  condition: string;
  image?: string;
  available?: boolean;
  id?: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ 
  title, 
  description, 
  price, 
  brand, 
  condition, 
  image, 
  available = true,
  id = "1"
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-orange-300 overflow-hidden h-[400px] flex flex-col">
      <div className="h-40 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative">
        {available ? (
          <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Available
          </div>
        ) : (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Rented
          </div>
        )}
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-blue-400 text-6xl">🔧</div>
        )}
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800 line-clamp-2 flex-1 mr-2">{title}</h3>
          <span className="text-2xl font-bold text-orange-500 whitespace-nowrap">{price}</span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2 flex-1">{description}</p>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-gray-500">
            <span className="w-5 h-5 mr-3 text-blue-500">🏷️</span>
            <span className="font-medium">{brand}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <span className="w-5 h-5 mr-3 text-blue-500">✨</span>
            <span className="font-medium">{condition}</span>
          </div>
        </div>
        
        <Link
          to={`/tools/${id}`}
          className={`w-full font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center block ${
            available 
              ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {available ? 'View Details' : 'Not Available'}
        </Link>
      </div>
    </div>
  );
};

export default ToolCard;
