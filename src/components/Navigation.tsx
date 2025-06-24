
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-slate-800">
              Tool<span className="text-orange-500">N</span>Task
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                location.pathname === '/'
                  ? 'text-orange-600 bg-orange-50 shadow-sm'
                  : 'text-slate-600 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/tasks"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                location.pathname.startsWith('/tasks')
                  ? 'text-orange-600 bg-orange-50 shadow-sm'
                  : 'text-slate-600 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              Tasks
            </Link>
            <Link
              to="/tools"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                location.pathname.startsWith('/tools')
                  ? 'text-orange-600 bg-orange-50 shadow-sm'
                  : 'text-slate-600 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              Tools
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                location.pathname === '/about'
                  ? 'text-orange-600 bg-orange-50 shadow-sm'
                  : 'text-slate-600 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                location.pathname === '/contact'
                  ? 'text-orange-600 bg-orange-50 shadow-sm'
                  : 'text-slate-600 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <Link 
              to="/signin"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md"
            >
              Sign In
            </Link>
            <Link 
              to="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
