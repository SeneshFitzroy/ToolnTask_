
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ToolCard from '../components/ToolCard';

const Tools = () => {
  const { id } = useParams();
  const [showMore, setShowMore] = useState(false);

  // Mock data for all tools
  const allTools = [
    {
      title: "Bosch Power Drill",
      description: "High-quality cordless drill with multiple bits and battery pack included.",
      price: "LKR 500/day",
      brand: "Bosch",
      condition: "Excellent",
      available: true
    },
    {
      title: "Honda Lawn Mower",
      description: "Electric lawn mower perfect for medium to large gardens. Well maintained.",
      price: "LKR 750/day",
      brand: "Honda",
      condition: "Good",
      available: true
    },
    {
      title: "Karcher Pressure Washer",
      description: "Professional grade pressure washer for cleaning driveways and walls.",
      price: "LKR 1,200/day",
      brand: "Karcher",
      condition: "Like New",
      available: false
    },
    {
      title: "DeWalt Circular Saw",
      description: "Powerful circular saw for precision cutting of wood and other materials.",
      price: "LKR 800/day",
      brand: "DeWalt",
      condition: "Good",
      available: true
    },
    {
      title: "Makita Impact Driver",
      description: "Professional grade impact driver with variable speed control and LED light.",
      price: "LKR 600/day",
      brand: "Makita",
      condition: "Like New",
      available: true
    },
    {
      title: "Stanley Tool Set",
      description: "Complete tool set with screwdrivers, wrenches, and other essential tools.",
      price: "LKR 400/day",
      brand: "Stanley",
      condition: "Excellent",
      available: true
    }
  ];

  // Mock data for specific tool details
  const mockTool = {
    toolName: "Bosch Professional Power Drill",
    brand: "Bosch",
    manufacturer: "Bosch Industries",
    availableDate: "Nov 10 - Nov 20, 2025",
    rentalAmount: "LKR 500/day",
    condition: "Excellent",
    owner: "Kamal Silva",
    location: "Colombo 07",
    description: "High-quality cordless drill with 18V lithium-ion battery. Perfect for drilling into wood, metal, and masonry. Comes with a complete set of drill bits and a carrying case. The tool has been well-maintained and serviced regularly.",
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

  const similarTools = [
    {
      title: "Makita Impact Driver",
      description: "Professional grade impact driver with variable speed control and LED light.",
      price: "LKR 600/day",
      brand: "Makita",
      condition: "Like New",
      available: true
    },
    {
      title: "DeWalt Circular Saw",
      description: "Powerful circular saw for precision cutting of wood and other materials.",
      price: "LKR 800/day",
      brand: "DeWalt",
      condition: "Good",
      available: true
    },
    {
      title: "Stanley Tool Set",
      description: "Complete tool set with screwdrivers, wrenches, and other essential tools.",
      price: "LKR 400/day",
      brand: "Stanley",
      condition: "Excellent",
      available: false
    }
  ];

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
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg shadow-lg"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-xl transition-colors">
                🔍
              </button>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTools.map((tool, index) => (
              <ToolCard key={index} {...tool} />
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
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Tool Details */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tool Image */}
            <div className="lg:w-1/3">
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                <div className="text-gray-400 text-8xl">🔧</div>
              </div>
            </div>

            {/* Tool Info */}
            <div className="lg:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{mockTool.toolName}</h1>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="text-sm text-gray-500 font-medium">Brand</span>
                  <p className="text-gray-800 font-semibold">{mockTool.brand}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 font-medium">Manufacturer</span>
                  <p className="text-gray-800 font-semibold">{mockTool.manufacturer}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 font-medium">Condition</span>
                  <p className="text-green-600 font-semibold">{mockTool.condition}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 font-medium">Location</span>
                  <p className="text-gray-800 font-semibold">{mockTool.location}</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-blue-600 font-medium">Available Period</span>
                    <p className="text-blue-800 font-bold text-lg">{mockTool.availableDate}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-orange-600 font-medium">Rental Price</span>
                    <p className="text-orange-600 font-bold text-2xl">{mockTool.rentalAmount}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Rent Now
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                  Share
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">About the Tool</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{mockTool.description}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Specifications</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {mockTool.specifications.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>

              {showMore && (
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Rental Terms</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {mockTool.rentalTerms.map((term, index) => (
                        <li key={index}>{term}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Owner</h3>
                    <p className="text-gray-600">{mockTool.owner}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Contact Information</h3>
                    <p className="text-gray-600">{mockTool.contactInfo}</p>
                  </div>
                </div>
              )}
              
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
              >
                {showMore ? 'Show Less' : 'Show More Details'}
              </button>
            </div>
          </div>
        </div>

        {/* Similar Tools */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Similar Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarTools.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tools;
