
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ToolCard from '../components/ToolCard';
import { Button } from '../components/ui/button';

export default function Tools() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Search Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-8 text-center">Rent Tools</h1>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Search for tools..."
              className="flex-1 px-6 py-4 border-2 border-slate-200 rounded-xl focus:border-orange-600 focus:outline-none text-lg"
            />
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg rounded-xl font-semibold">
              Search
            </Button>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
              All Tools
            </Button>
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
              Power Tools
            </Button>
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
              Garden Tools
            </Button>
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
              Hand Tools
            </Button>
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
              Equipment
            </Button>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
            description="Professional circular saw for woodworking and construction projects."
            price="Rs. 1,800/day"
            brand="DeWalt"
            condition="Good"
            available={true}
            id="4"
          />
          <ToolCard
            title="Pressure Washer"
            description="High-pressure washer for cleaning driveways, decks, and exterior surfaces."
            price="Rs. 2,500/day"
            brand="Karcher"
            condition="Excellent"
            available={true}
            id="5"
          />
          <ToolCard
            title="Tile Cutter"
            description="Professional tile cutting machine for bathroom and kitchen renovations."
            price="Rs. 1,000/day"
            brand="Rubi"
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
