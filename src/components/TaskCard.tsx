
import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-orange-300 overflow-hidden h-[400px] flex flex-col">
      {isUrgent && (
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-4 py-2 text-center">
          🚨 URGENT
        </div>
      )}
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800 line-clamp-2 flex-1 mr-2">{title}</h3>
          <span className="text-2xl font-bold text-orange-500 whitespace-nowrap">{price}</span>
        </div>
        
        <p className="text-gray-600 mb-6 line-clamp-3 flex-1">{description}</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-gray-500">
            <span className="w-5 h-5 mr-3 text-blue-500">⏰</span>
            <span className="font-medium">{time}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <span className="w-5 h-5 mr-3 text-blue-500">📍</span>
            <span className="font-medium">{location}</span>
          </div>
        </div>
        
        <Link 
          to={`/tasks/${id}`}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default TaskCard;
