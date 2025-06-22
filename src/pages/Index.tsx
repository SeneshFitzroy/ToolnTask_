
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TaskCard from '../components/TaskCard';
import ToolCard from '../components/ToolCard';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'tasks' | 'tools'>('tasks');
  const [searchQuery, setSearchQuery] = useState('');

  const mockTasks = [
    {
      title: "Garden Maintenance Service",
      description: "Need someone to mow the lawn, trim hedges, and plant new flowers in my backyard.",
      price: "LKR 2,500",
      time: "Nov 15, 2025 - 2 hours",
      location: "Colombo 03",
      isUrgent: true
    },
    {
      title: "Babysitting Service",
      description: "Looking for a reliable babysitter for my 5-year-old daughter for the weekend.",
      price: "LKR 1,500",
      time: "Nov 16, 2025 - 6 hours",
      location: "Kandy"
    },
    {
      title: "House Cleaning",
      description: "Deep cleaning service needed for a 3-bedroom house before moving in.",
      price: "LKR 3,000",
      time: "Nov 18, 2025 - 4 hours",
      location: "Galle"
    }
  ];

  const mockTools = [
    {
      title: "Bosch Power Drill",
      description: "High-quality cordless drill with multiple bits and battery pack included.",
      price: "LKR 500/day",
      brand: "Bosch",
      condition: "Excellent",
      available: true
    },
    {
      title: "Lawn Mower",
      description: "Electric lawn mower perfect for medium to large gardens. Well maintained.",
      price: "LKR 750/day",
      brand: "Honda",
      condition: "Good",
      available: true
    },
    {
      title: "Pressure Washer",
      description: "Professional grade pressure washer for cleaning driveways and walls.",
      price: "LKR 1,200/day",
      brand: "Karcher",
      condition: "Like New",
      available: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Need a Hand or a <span className="text-orange-400">Hammer?</span>
                <br />
                <span className="text-orange-400">We've Got Both!</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                Whether you need a quick helping hand or a power drill for the weekend, 
                we've got you covered. Browse one-time gigs like babysitting, gardening, or minor 
                repairs — or rent out home tools neighbours need year.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 orange-glow">
                Get Started
              </button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-96 h-96 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-8xl animate-pulse">
                🛠️
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Changing Lives, <span className="text-orange-500">Shaping Sri Lanka</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">👥</div>
              <div className="text-3xl font-bold mb-2">5,000+</div>
              <div className="text-orange-100">Active Users</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🔧</div>
              <div className="text-3xl font-bold mb-2">1,000+</div>
              <div className="text-orange-100">Tools Available</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">💼</div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-orange-100">Jobs Completed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tab Buttons */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab('tasks')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'tasks'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Tasks
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'tools'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Tools
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder={`Search for ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg shadow-lg"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-xl transition-colors">
              🔍
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'tasks' 
            ? mockTasks.map((task, index) => (
                <TaskCard key={index} {...task} />
              ))
            : mockTools.map((tool, index) => (
                <ToolCard key={index} {...tool} />
              ))
          }
        </div>

        {/* Simple Steps Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Simple Steps to <span className="text-orange-500">Success</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Search & Book</h3>
              <p className="text-gray-600">Find tools or gigs that match your needs</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Connect & Work</h3>
              <p className="text-gray-600">Get connected with trusted providers</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Rate & Grow</h3>
              <p className="text-gray-600">Build a stronger community</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
