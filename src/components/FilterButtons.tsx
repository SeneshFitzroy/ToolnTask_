
import React, { useState } from 'react';

interface FilterButtonsProps {
  onFilterChange: (filter: 'all' | 'tasks' | 'tools') => void;
  activeFilter: 'all' | 'tasks' | 'tools';
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ onFilterChange, activeFilter }) => {
  return (
    <div className="flex justify-center space-x-6 mb-8">
      <button
        onClick={() => onFilterChange('all')}
        className={`px-12 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-110 hover:shadow-xl transform ${
          activeFilter === 'all'
            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
            : 'bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 hover:from-purple-200 hover:to-blue-200'
        }`}
      >
        🌟 All
      </button>
      <button
        onClick={() => onFilterChange('tasks')}
        className={`px-12 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-110 hover:shadow-xl transform ${
          activeFilter === 'tasks'
            ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
            : 'bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 hover:from-orange-200 hover:to-red-200'
        }`}
      >
        💼 Tasks
      </button>
      <button
        onClick={() => onFilterChange('tools')}
        className={`px-12 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-110 hover:shadow-xl transform ${
          activeFilter === 'tools'
            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
            : 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 hover:from-blue-200 hover:to-cyan-200'
        }`}
      >
        🔧 Tools
      </button>
    </div>
  );
};

export default FilterButtons;
