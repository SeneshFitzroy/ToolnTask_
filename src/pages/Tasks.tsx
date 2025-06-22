
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TaskCard from '../components/TaskCard';

const Tasks = () => {
  const { id } = useParams();
  const [showMore, setShowMore] = useState(false);

  const mockTask = {
    jobName: "Garden Maintenance Service",
    jobType: "Short-term Gig",
    requiredTime: "Nov 15, 2025, 9:00 AM - 12:00 PM",
    employer: "Saman Perera",
    location: "Colombo 03",
    payment: "LKR 2,500 for 3 hours",
    description: "Need someone experienced to mow the lawn, trim hedges, and plant new flowers in my backyard. The garden is approximately 200 square meters. All tools will be provided, but you're welcome to bring your own if you prefer. Looking for someone reliable who can complete the work within the specified time frame.",
    requirements: [
      "Previous gardening experience preferred",
      "Own transportation to reach location",
      "Available on specified date and time",
      "Physical fitness for outdoor work"
    ],
    applicationDeadline: "Nov 12, 2025",
    contactInfo: "+94 77 123 4567"
  };

  const similarTasks = [
    {
      title: "Lawn Mowing Service",
      description: "Weekly lawn mowing service needed for a small garden in Mount Lavinia.",
      price: "LKR 1,800",
      time: "Nov 20, 2025 - 1.5 hours",
      location: "Mount Lavinia"
    },
    {
      title: "Tree Pruning",
      description: "Professional tree pruning service required for coconut and mango trees.",
      price: "LKR 3,500",
      time: "Nov 22, 2025 - 3 hours",
      location: "Dehiwala"
    },
    {
      title: "Flower Bed Preparation",
      description: "Help needed to prepare flower beds and plant seasonal flowers.",
      price: "LKR 2,000",
      time: "Nov 25, 2025 - 2 hours",
      location: "Nugegoda"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Task Details */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
            <div className="lg:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{mockTask.jobName}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                  {mockTask.jobType}
                </span>
                <span className="flex items-center">
                  <span className="mr-1">⏰</span>
                  {mockTask.requiredTime}
                </span>
                <span className="flex items-center">
                  <span className="mr-1">📍</span>
                  {mockTask.location}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-orange-500 mb-4">{mockTask.payment}</div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Save Job
                </button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  Share
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">About the Job</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Job Description</h3>
                <p className="text-gray-600 leading-relaxed">{mockTask.description}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Requirements</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {mockTask.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              {showMore && (
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Employer</h3>
                    <p className="text-gray-600">{mockTask.employer}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-sem1ibold text-gray-700 mb-2">Application Deadline</h3>
                    <p className="text-gray-600">{mockTask.applicationDeadline}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Contact Information</h3>
                    <p className="text-gray-600">{mockTask.contactInfo}</p>
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

            <div className="mt-8">
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Similar Tasks */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Similar Job Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarTasks.map((task, index) => (
              <TaskCard key={index} {...task} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tasks;
