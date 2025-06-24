
import React from 'react';

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
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 hover:border-orange-300 overflow-hidden h-[450px] flex flex-col transform hover:scale-105">
      <div className="h-48 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center relative">
        {available ? (
          <div className="absolute top-4 right-4 bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
            Available
          </div>
        ) : (
          <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
            Rented
          </div>
        )}
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-slate-400 text-8xl">🔧</div>
        )}
      </div>
      
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold text-slate-800 line-clamp-2 flex-1 mr-3">{title}</h3>
          <span className="text-3xl font-bold text-orange-600 whitespace-nowrap">{price}</span>
        </div>
        
        <p className="text-gray-600 mb-6 line-clamp-2 flex-1 text-lg">{description}</p>
        
        <div className="space-y-3 mb-8">
          <div className="flex items-center text-base text-gray-500">
            <span className="w-6 h-6 mr-4 text-slate-600">🏷️</span>
            <span className="font-medium">{brand}</span>
          </div>
          <div className="flex items-center text-base text-gray-500">
            <span className="w-6 h-6 mr-4 text-slate-600">✨</span>
            <span className="font-medium">{condition}</span>
          </div>
        </div>
        
        <button
          className={`w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center block text-lg ${
            available 
              ? 'bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {available ? 'View Details' : 'Not Available'}
        </button>
      </div>
    </div>
  );
};

export default ToolCard;
