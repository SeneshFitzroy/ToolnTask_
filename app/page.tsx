
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TaskCard from '@/components/TaskCard';
import ToolCard from '@/components/ToolCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-slate-800 mb-4">
                Need a Hand or a Hammer?
              </h1>
              <h2 className="text-4xl font-bold text-orange-500 mb-6">
                We've Got Both!
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you need a quick helping hand or a power drill for the weekend, 
                we've got you covered. Browse one-time gigs like babysitting, gardening, 
                or minor repairs — or rent out home tools neighbours need year.
              </p>
              <Link href="/tasks">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="w-96 h-96 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
                <span className="text-8xl">🔧</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="bg-white border-slate-300 text-slate-700 hover:bg-slate-50">
              All
            </Button>
            <Button variant="outline" className="bg-white border-slate-300 text-slate-700 hover:bg-slate-50">
              Tasks
            </Button>
            <Button variant="outline" className="bg-white border-slate-300 text-slate-700 hover:bg-slate-50">
              Tools
            </Button>
          </div>
        </div>
      </div>

      {/* Promoted Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800">Promoted</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TaskCard
            title="Garden Maintenance"
            description="Looking for someone to help with weekly garden maintenance including weeding, pruning, and lawn care."
            price="Rs. 5,000"
            time="2-3 hours"
            location="Colombo 03"
            isUrgent={true}
            id="1"
          />
          <ToolCard
            title="Power Drill Set"
            description="Professional Bosch power drill with multiple bits. Perfect for home improvement projects."
            price="Rs. 1,500/day"
            brand="Bosch"
            condition="Excellent"
            available={true}
            id="1"
          />
          <TaskCard
            title="House Cleaning"
            description="Need help with deep cleaning of 3-bedroom house. All supplies provided."
            price="Rs. 8,000"
            time="4-5 hours"
            location="Kandy"
            id="2"
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
          <TaskCard
            title="Babysitting Service"
            description="Reliable babysitting for 2 kids (ages 5 and 8) for weekend evenings."
            price="Rs. 3,000"
            time="4 hours"
            location="Galle"
            id="3"
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
        </div>
      </div>

      <Footer />
    </div>
  );
}
