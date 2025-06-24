
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TaskCard from '@/components/TaskCard';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export default function Tasks() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">Find Tasks</h1>
          
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for tasks..."
              className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none text-lg"
            />
          </div>
          
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select className="p-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none">
              <option>All Categories</option>
              <option>Cleaning</option>
              <option>Gardening</option>
              <option>Repair</option>
              <option>Childcare</option>
            </select>
            <select className="p-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none">
              <option>All Locations</option>
              <option>Colombo</option>
              <option>Kandy</option>
              <option>Galle</option>
            </select>
            <select className="p-3 border-2 border-slate-200 rounded-xl focus:border-orange-500 focus:outline-none">
              <option>Price Range</option>
              <option>Under Rs. 2,000</option>
              <option>Rs. 2,000 - 5,000</option>
              <option>Rs. 5,000 - 10,000</option>
              <option>Above Rs. 10,000</option>
            </select>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
              Search
            </Button>
          </div>
        </div>

        {/* Task Cards */}
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
          <TaskCard
            title="House Cleaning"
            description="Need help with deep cleaning of 3-bedroom house. All supplies provided."
            price="Rs. 8,000"
            time="4-5 hours"
            location="Kandy"
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
          <TaskCard
            title="Furniture Assembly"
            description="Need help assembling IKEA furniture for new apartment. Tools provided."
            price="Rs. 4,000"
            time="3 hours"
            location="Colombo 07"
            id="4"
          />
          <TaskCard
            title="Pet Sitting"
            description="Looking for someone to take care of my dog for the weekend while I'm away."
            price="Rs. 6,000"
            time="48 hours"
            location="Nugegoda"
            id="5"
          />
          <TaskCard
            title="Computer Repair"
            description="Laptop running slow, need someone to diagnose and fix the issue."
            price="Rs. 3,500"
            time="2 hours"
            location="Maharagama"
            id="6"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
