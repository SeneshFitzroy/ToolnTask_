
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ToolCard from '../components/ToolCard';

const Tools = () => {
  const { id } = useParams();
  const [showMore, setShowMore] = useState(false);

  // Mock data for all tools with IDs
  const allTools = [
    {
      id: "1",
      title: "Bosch Power Drill",
      description: "High-quality cordless drill with multiple bits and battery pack included.",
      price: "LKR 500/day",
      brand: "Bosch",
      condition: "Excellent",
      available: true
    },
    {
      id: "2",
      title: "Honda Lawn Mower",
      description: "Electric lawn mower perfect for medium to large gardens. Well maintained.",
      price: "LKR 750/day",
      brand: "Honda",
      condition: "Good",
      available: true
    },
    {
      id: "3",
      title: "Karcher Pressure Washer",
      description: "Professional grade pressure washer for cleaning driveways and walls.",
      price: "LKR 1,200/day",
      brand: "Karcher",
      condition: "Like New",
      available: false
    },
    {
      id: "4",
      title: "DeWalt Circular Saw",
      description: "Powerful circular saw for precision cutting of wood and other materials.",
      price: "LKR 800/day",
      brand: "DeWalt",
      condition: "Good",
      available: true
    },
    {
      id: "5",
      title: "Makita Impact Driver",
      description: "Professional grade impact driver with variable speed control and LED light.",
      price: "LKR 600/day",
      brand: "Makita",
      condition: "Like New",
      available: true
    },
    {
      id: "6",
      title: "Stanley Tool Set",
      description: "Complete tool set with screwdrivers, wrenches, and other essential tools.",
      price: "LKR 400/day",
      brand: "Stanley",
      condition: "Excellent",
      available: true
    }
  ];

  // Find the specific tool
  const currentTool = allTools.find(tool => tool.id === id) || {
    id: "1",
    title: "Bosch Professional Power Drill",
    description: "High-quality cordless drill with 18V lithium-ion battery. Perfect for drilling into wood, metal, and masonry. Comes with a complete set of drill bits and a carrying case. The tool has been well-maintained and serviced regularly.",
    price: "LKR 500/day",
    brand: "Bosch",
    condition: "Excellent",
    available: true,
    manufacturer: "Bosch Industries",
    availableDate: "Nov 10 - Nov 20, 2025",
    owner: "Kamal Silva",
    location: "Colombo 07",
    specifications: [
      "18V Lithium-ion battery",
      "2-speed gearbox for versatile applications",
      "LED light for improved visibility",
      "Ergonomic design for comfortable handling",
      "Maximum torque: 38 Nm"
    ],
    rentalTerms: [
      "Minimum rental period: 1 day",
      "Security deposit: LKR 2,000",
      "Pick-up and drop-off available",
      "Damage liability applies"
    ],
    contactInfo: "+94 77 987 6543"
  };

  const similarTools = allTools.filter(tool => tool.id !== id).slice(0, 3);

  // If no ID is provided, show the tools list page
  if (!id) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Available <span className="text-orange-500">Tools</span>
            </h1>
            <p className="text-xl text-gray-600">Rent the tools you need for your projects</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for tools..."
                className="w-full px-6 py-4 rounded-2xl border-2 border-blue-200 focus:border-orange-500 focus:outline-none text-lg shadow-lg"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-xl transition-colors">
                🔍
              </button>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTools.map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // If ID is provided, show the specific tool details
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Tool Details */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-2 border-blue-100">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tool Image */}
            <div className="lg:w-1/3">
              <div className="h-80 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center border-2 border-blue-200">
                <div className="text-blue-400 text-8xl">🔧</div>
              </div>
              
              <div className="mt-4 flex justify-center">
                <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                  currentTool.available 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {currentTool.available ? '✅ Available' : '❌ Not Available'}
                </span>
              </div>
            </div>

            {/* Tool Info */}
            <div className="lg:w-2/3">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">{currentTool.title}</h1>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-xl p-4">
                  <span className="text-blue-600 font-semibold text-sm">Brand</span>
                  <p className="text-blue-800 font-bold text-lg">{currentTool.brand}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <span className="text-green-600 font-semibold text-sm">Condition</span>
                  <p className="text-green-800 font-bold text-lg">{currentTool.condition}</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <span className="text-purple-600 font-semibold text-sm">Manufacturer</span>
                  <p className="text-purple-800 font-bold text-lg">{currentTool.manufacturer || currentTool.brand}</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <span className="text-orange-600 font-semibold text-sm">Location</span>
                  <p className="text-orange-800 font-bold text-lg">{currentTool.location || "Colombo"}</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 mb-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-orange-100 font-medium text-sm">Available Period</span>
                    <p className="font-bold text-lg">{currentTool.availableDate || "Available Now"}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-orange-100 font-medium text-sm">Rental Price</span>
                    <p className="font-bold text-2xl">{currentTool.price}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  🛒 Rent Now
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  📤 Share
                </button>
              </div>
            </div>
          </div>

          {/* About the Tool Section */}
          <div className="border-t-2 border-gray-100 mt-8 pt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3 text-blue-500">🔧</span>
              About the Tool
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-700 mb-3 text-lg">Description</h3>
                <p className="text-gray-600 leading-relaxed">{currentTool.description}</p>
              </div>
              
              {currentTool.specifications && (
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-blue-700 mb-3 text-lg">Specifications</h3>
                  <ul className="space-y-2">
                    {currentTool.specifications.map((spec, index) => (
                      <li key={index} className="flex items-start text-blue-600">
                        <span className="mr-2 text-blue-500 font-bold">⚙️</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {showMore && (
                <div className="space-y-4 pt-4 border-t border-gray-200">
                  {currentTool.rentalTerms && (
                    <div className="bg-orange-50 rounded-xl p-6">
                      <h3 className="font-bold text-orange-700 mb-3 text-lg">Rental Terms</h3>
                      <ul className="space-y-2">
                        {currentTool.rentalTerms.map((term, index) => (
                          <li key={index} className="flex items-start text-orange-600">
                            <span className="mr-2 text-orange-500 font-bold">📋</span>
                            {term}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-xl p-4">
                      <h3 className="font-bold text-green-700 mb-2">Owner</h3>
                      <p className="text-green-600">{currentTool.owner || "Private Owner"}</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4">
                      <h3 className="font-bold text-purple-700 mb-2">Contact</h3>
                      <p className="text-purple-600">{currentTool.contactInfo || "Through platform"}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-orange-500 hover:text-orange-600 font-bold transition-colors flex items-center"
              >
                {showMore ? '⬆️ Show Less' : '⬇️ Show More Details'}
              </button>
            </div>
          </div>
        </div>

        {/* Similar Tools */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="mr-3 text-orange-500">🔍</span>
            Similar Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarTools.map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tools;
