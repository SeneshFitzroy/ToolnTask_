
import React from 'react';

interface TaskCardProps {
  title: string;
  description: string;
  price: string;
  time: string;
  location: string;
  isUrgent?: boolean;
  isPromoted?: boolean;
  image?: string;
  id?: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ 
  title, 
  description, 
  price, 
  time, 
  location, 
  isUrgent = false,
  isPromoted = false,
  image,
  id = "1"
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 hover:border-orange-300 overflow-hidden h-[500px] flex flex-col transform hover:scale-105 relative">
      {isPromoted && (
        <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg">
          ⭐ PROMOTED
        </div>
      )}
      
      {isUrgent && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg">
          🚨 URGENT
        </div>
      )}
      
      {/* Image Section */}
      <div className="h-48 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200">
            <span className="text-6xl">👨‍💼</span>
          </div>
        )}
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-800 line-clamp-2 flex-1 mr-3">{title}</h3>
          <span className="text-2xl font-bold text-orange-600 whitespace-nowrap">{price}</span>
        </div>
        
        <p className="text-gray-600 mb-6 line-clamp-3 flex-1 text-base">{description}</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-gray-500">
            <span className="w-5 h-5 mr-3 text-slate-600">⏰</span>
            <span className="font-medium">{time}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <span className="w-5 h-5 mr-3 text-slate-600">📍</span>
            <span className="font-medium">{location}</span>
          </div>
        </div>
        
        <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center block text-base">
          View Details
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
