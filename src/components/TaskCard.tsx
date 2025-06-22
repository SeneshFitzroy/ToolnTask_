
import React from 'react';

interface TaskCardProps {
  title: string;
  description: string;
  price: string;
  time: string;
  location: string;
  isUrgent?: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ 
  title, 
  description, 
  price, 
  time, 
  location, 
  isUrgent = false 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover border border-gray-100 overflow-hidden">
      {isUrgent && (
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-semibold px-4 py-2">
          URGENT
        </div>
      )}
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800 line-clamp-2">{title}</h3>
          <span className="text-2xl font-bold text-orange-500 ml-2">{price}</span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <span className="w-4 h-4 mr-2">⏰</span>
            {time}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <span className="w-4 h-4 mr-2">📍</span>
            {location}
          </div>
        </div>
        
        <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
          View Details
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
