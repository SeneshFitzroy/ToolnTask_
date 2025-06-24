
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TaskCard from '../components/TaskCard';
import ToolCard from '../components/ToolCard';
import { Button } from '../components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold text-slate-800 mb-4">
                Need a Hand or a Hammer?
              </h1>
              <h2 className="text-5xl font-bold text-orange-500 mb-8">
                We've Got Both!
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Whether you need a quick helping hand or a power drill for the weekend, 
                we've got you covered. Browse one-time gigs like babysitting, gardening, 
                or minor repairs — or rent out home tools neighbours need year.
              </p>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-6 text-xl rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Get Started
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 animate-gradient rounded-full flex items-center justify-center animate-pulse-slow">
                  <div className="w-80 h-80 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-9xl animate-float">🔧</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Filter Section */}
      <div className="bg-white py-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            <button className="filter-button-all px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-110 hover:shadow-lg transform">
              All
            </button>
            <button className="filter-button-tasks px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-110 hover:shadow-lg transform">
              Tasks
            </button>
            <button className="filter-button-tools px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-110 hover:shadow-lg transform">
              Tools
            </button>
          </div>
        </div>
      </div>

      {/* Promoted Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-slate-800">Featured</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TaskCard
            title="Garden Maintenance"
            description="Looking for someone to help with weekly garden maintenance including weeding, pruning, and lawn care."
            price="Rs. 5,000"
            time="2-3 hours"
            location="Colombo 03"
            isUrgent={true}
            isPromoted={true}
            image="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop"
            id="1"
          />
          <ToolCard
            title="Power Drill Set"
            description="Professional Bosch power drill with multiple bits. Perfect for home improvement projects."
            price="Rs. 1,500/day"
            brand="Bosch"
            condition="Excellent"
            available={true}
            isPromoted={true}
            image="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=300&fit=crop"
            id="1"
          />
          <TaskCard
            title="House Cleaning"
            description="Need help with deep cleaning of 3-bedroom house. All supplies provided."
            price="Rs. 8,000"
            time="4-5 hours"
            location="Kandy"
            isPromoted={true}
            image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
            id="2"
          />
          <ToolCard
            title="Lawn Mower"
            description="Electric lawn mower in great condition. Ideal for medium to large gardens."
            price="Rs. 2,000/day"
            brand="Honda"
            condition="Good"
            available={true}
            image="https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=400&h=300&fit=crop"
            id="2"
          />
          <TaskCard
            title="Babysitting Service"
            description="Reliable babysitting for 2 kids (ages 5 and 8) for weekend evenings."
            price="Rs. 3,000"
            time="4 hours"
            location="Galle"
            image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop"
            id="3"
          />
          <ToolCard
            title="Angle Grinder"
            description="Heavy-duty angle grinder for metal cutting and grinding projects."
            price="Rs. 1,200/day"
            brand="Makita"
            condition="Excellent"
            available={false}
            image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop"
            id="3"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
