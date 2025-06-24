
import React from 'react';

interface TaskCardProps {
  title: string;
  description: string;
  price: string;
  time: string;
  location: string;
  isUrgent?: boolean;
  id?: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ 
  title, 
  description, 
  price, 
  time, 
  location, 
  isUrgent = false,
  id = "1"
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 hover:border-orange-300 overflow-hidden h-[450px] flex flex-col transform hover:scale-105">
      {isUrgent && (
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-4 py-2 text-center">
          🚨 URGENT
        </div>
      )}
      
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold text-slate-800 line-clamp-2 flex-1 mr-3">{title}</h3>
          <span className="text-3xl font-bold text-orange-600 whitespace-nowrap">{price}</span>
        </div>
        
        <p className="text-gray-600 mb-8 line-clamp-3 flex-1 text-lg">{description}</p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-center text-base text-gray-500">
            <span className="w-6 h-6 mr-4 text-slate-600">⏰</span>
            <span className="font-medium">{time}</span>
          </div>
          <div className="flex items-center text-base text-gray-500">
            <span className="w-6 h-6 mr-4 text-slate-600">📍</span>
            <span className="font-medium">{location}</span>
          </div>
        </div>
        
        <button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center block text-lg">
          View Details
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
