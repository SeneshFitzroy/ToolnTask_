
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TaskCard from '../components/TaskCard';
import { Button } from '../components/ui/button';

export default function Tasks() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Search Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-slate-800 mb-8 text-center">Find Tasks</h1>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Search for tasks..."
              className="flex-1 px-6 py-4 border-2 border-slate-200 rounded-xl focus:border-orange-600 focus:outline-none text-lg shadow-sm"
            />
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg rounded-xl font-semibold shadow-lg">
              Search
            </Button>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-orange-50 hover:border-orange-300 px-6 py-3 rounded-xl">
              All Categories
            </Button>
            <Button variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-orange-50 hover:border-orange-300 px-6 py-3 rounded-xl">
              Cleaning
            </Button>
            <Button variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-orange-50 hover:border-orange-300 px-6 py-3 rounded-xl">
              Gardening
            </Button>
            <Button variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-orange-50 hover:border-orange-300 px-6 py-3 rounded-xl">
              Repairs
            </Button>
            <Button variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-orange-50 hover:border-orange-300 px-6 py-3 rounded-xl">
              Babysitting
            </Button>
          </div>
        </div>
      </div>

      {/* Tasks Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
          <TaskCard
            title="House Cleaning"
            description="Need help with deep cleaning of 3-bedroom house. All supplies provided."
            price="Rs. 8,000"
            time="4-5 hours"
            location="Kandy"
            image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
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
          <TaskCard
            title="Furniture Assembly"
            description="Need help assembling IKEA furniture including wardrobe and desk."
            price="Rs. 4,500"
            time="3 hours"
            location="Colombo 07"
            image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
            id="4"
          />
          <TaskCard
            title="Pet Walking"
            description="Looking for someone to walk my dog twice a day for a week."
            price="Rs. 2,500"
            time="1 hour/day"
            location="Mount Lavinia"
            image="https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop"
            id="5"
          />
          <TaskCard
            title="Cooking Assistance"
            description="Need help preparing meals for a family gathering of 20 people."
            price="Rs. 6,000"
            time="5-6 hours"
            location="Negombo"
            isUrgent={true}
            image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
            id="6"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
