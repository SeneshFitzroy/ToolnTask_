
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export default function Tools() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">Rent Tools</h1>
          
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for tools..."
              className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none text-lg"
            />
          </div>
          
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select className="p-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none">
              <option>All Categories</option>
              <option>Power Tools</option>
              <option>Garden Tools</option>
              <option>Hand Tools</option>
              <option>Construction</option>
            </select>
            <select className="p-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none">
              <option>All Locations</option>
              <option>Colombo</option>
              <option>Kandy</option>
              <option>Galle</option>
            </select>
            <select className="p-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none">
              <option>Price Range</option>
              <option>Under Rs. 1,000</option>
              <option>Rs. 1,000 - 2,000</option>
              <option>Rs. 2,000 - 5,000</option>
              <option>Above Rs. 5,000</option>
            </select>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
              Search
            </Button>
          </div>
        </div>

        {/* Tool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ToolCard
            title="Power Drill Set"
            description="Professional Bosch power drill with multiple bits. Perfect for home improvement projects."
            price="Rs. 1,500/day"
            brand="Bosch"
            condition="Excellent"
            available={true}
            id="1"
          />
          <ToolCard
            title="Lawn Mower"
            description="Electric lawn mower in great condition. Ideal for medium to large gardens."
            price="Rs. 2,000/day"
            brand="Honda"
            condition="Good"
            available={true}
            id="2"
          />
          <ToolCard
            title="Angle Grinder"
            description="Heavy-duty angle grinder for metal cutting and grinding projects."
            price="Rs. 1,200/day"
            brand="Makita"
            condition="Excellent"
            available={false}
            id="3"
          />
          <ToolCard
            title="Circular Saw"
            description="Professional circular saw for precise wood cutting. Includes safety gear."
            price="Rs. 1,800/day"
            brand="DeWalt"
            condition="Very Good"
            available={true}
            id="4"
          />
          <ToolCard
            title="Pressure Washer"
            description="High-pressure washer for cleaning driveways, cars, and outdoor surfaces."
            price="Rs. 2,500/day"
            brand="Karcher"
            condition="Excellent"
            available={true}
            id="5"
          />
          <ToolCard
            title="Tile Cutter"
            description="Electric tile cutter for ceramic and stone tiles. Includes water cooling system."
            price="Rs. 2,200/day"
            brand="Ryobi"
            condition="Good"
            available={false}
            id="6"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
