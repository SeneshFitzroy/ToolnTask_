
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TaskCard from '../components/TaskCard';

const Tasks = () => {
  const { id } = useParams();
  const [showMore, setShowMore] = useState(false);

  // Mock data for all tasks with IDs and all required properties
  const allTasks = [
    {
      id: "1",
      title: "Garden Maintenance Service",
      description: "Need someone to mow the lawn, trim hedges, and plant new flowers in my backyard.",
      price: "LKR 2,500",
      time: "Nov 15, 2025 - 3 hours",
      location: "Colombo 03",
      isUrgent: true,
      jobType: "Short-term Gig",
      employer: "Saman Perera",
      requirements: [
        "Previous gardening experience preferred",
        "Own transportation to reach location",
        "Available on specified date and time",
        "Physical fitness for outdoor work"
      ],
      applicationDeadline: "Nov 12, 2025",
      contactInfo: "+94 77 123 4567"
    },
    {
      id: "2",
      title: "Babysitting Service",
      description: "Looking for a reliable babysitter for my 5-year-old daughter for the weekend.",
      price: "LKR 1,500",
      time: "Nov 16, 2025 - 6 hours",
      location: "Kandy",
      jobType: "Short-term Gig",
      employer: "Nimal Silva",
      requirements: [
        "Experience with children",
        "References required",
        "Available weekends"
      ],
      applicationDeadline: "Nov 13, 2025",
      contactInfo: "+94 77 234 5678"
    },
    {
      id: "3",
      title: "House Cleaning",
      description: "Deep cleaning service needed for a 3-bedroom house before moving in.",
      price: "LKR 3,000",
      time: "Nov 18, 2025 - 4 hours",
      location: "Galle",
      jobType: "One-time Task",
      employer: "Kamala Fernando",
      requirements: [
        "Professional cleaning experience",
        "Own cleaning supplies",
        "Attention to detail"
      ],
      applicationDeadline: "Nov 15, 2025",
      contactInfo: "+94 77 345 6789"
    },
    {
      id: "4",
      title: "Car Washing Service",
      description: "Need someone to wash and detail my car this weekend.",
      price: "LKR 1,200",
      time: "Nov 19, 2025 - 2 hours",
      location: "Colombo 05",
      jobType: "Quick Task",
      employer: "Rohan Perera",
      requirements: [
        "Car washing experience",
        "Available weekends",
        "Own equipment preferred"
      ],
      applicationDeadline: "Nov 16, 2025",
      contactInfo: "+94 77 456 7890"
    },
    {
      id: "5",
      title: "Pet Walking Service",
      description: "Looking for someone to walk my dog twice a day while I'm at work.",
      price: "LKR 800",
      time: "Nov 20, 2025 - 1 hour",
      location: "Mount Lavinia",
      jobType: "Regular Service",
      employer: "Priya Jayasinghe",
      requirements: [
        "Love for animals",
        "Regular availability",
        "Responsible attitude"
      ],
      applicationDeadline: "Nov 17, 2025",
      contactInfo: "+94 77 567 8901"
    },
    {
      id: "6",
      title: "Tutoring Service",
      description: "Math tutor needed for grade 10 student, weekends only.",
      price: "LKR 2,000",
      time: "Nov 21, 2025 - 2 hours",
      location: "Dehiwala",
      jobType: "Educational Service",
      employer: "Anura Wickramasinghe",
      requirements: [
        "Strong math background",
        "Teaching experience",
        "Weekend availability"
      ],
      applicationDeadline: "Nov 18, 2025",
      contactInfo: "+94 77 678 9012"
    }
  ];

  // Find the specific task
  const currentTask = allTasks.find(task => task.id === id) || allTasks[0];
  const similarTasks = allTasks.filter(task => task.id !== id).slice(0, 3);

  // If no ID is provided, show the tasks list page
  if (!id) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Available <span className="text-orange-500">Tasks</span>
            </h1>
            <p className="text-xl text-gray-600">Find the perfect gig for your skills</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for tasks..."
                className="w-full px-6 py-4 rounded-2xl border-2 border-blue-200 focus:border-orange-500 focus:outline-none text-lg shadow-lg"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-xl transition-colors">
                🔍
              </button>
            </div>
          </div>

          {/* Tasks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTasks.map((task) => (
              <TaskCard key={task.id} {...task} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // If ID is provided, show the specific task details
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Task Details */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-2 border-blue-100">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
            <div className="lg:w-2/3 mb-6 lg:mb-0">
              <div className="flex items-center mb-4">
                <h1 className="text-4xl font-bold text-gray-800">{currentTask.title}</h1>
                {currentTask.isUrgent && (
                  <span className="ml-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    URGENT
                  </span>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-xl p-4">
                  <span className="text-blue-600 font-semibold text-sm">Job Type</span>
                  <p className="text-blue-800 font-bold text-lg">{currentTask.jobType}</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <span className="text-orange-600 font-semibold text-sm">Required Time</span>
                  <p className="text-orange-800 font-bold text-lg">{currentTask.time}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <span className="text-green-600 font-semibold text-sm">Location</span>
                  <p className="text-green-800 font-bold text-lg">{currentTask.location}</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <span className="text-purple-600 font-semibold text-sm">Employer</span>
                  <p className="text-purple-800 font-bold text-lg">{currentTask.employer}</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3 lg:ml-8">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6 text-center mb-6">
                <span className="text-sm font-medium">Payment</span>
                <p className="text-3xl font-bold">{currentTask.price}</p>
              </div>
              
              <div className="flex flex-col gap-3">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  💾 Save Job
                </button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  📤 Share
                </button>
              </div>
            </div>
          </div>

          {/* About the Job Section */}
          <div className="border-t-2 border-gray-100 pt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3 text-blue-500">📋</span>
              About the Job
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-700 mb-3 text-lg">Job Description</h3>
                <p className="text-gray-600 leading-relaxed">{currentTask.description}</p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-blue-700 mb-3 text-lg">Requirements</h3>
                <ul className="space-y-2">
                  {currentTask.requirements.map((req, index) => (
                    <li key={index} className="flex items-start text-blue-600">
                      <span className="mr-2 text-blue-500 font-bold">✓</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {showMore && (
                <div className="space-y-4 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-xl p-4">
                      <h3 className="font-bold text-green-700 mb-2">Application Deadline</h3>
                      <p className="text-green-600">{currentTask.applicationDeadline}</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4">
                      <h3 className="font-bold text-purple-700 mb-2">Contact</h3>
                      <p className="text-purple-600">{currentTask.contactInfo}</p>
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

            <div className="mt-8">
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                🚀 Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Similar Tasks */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="mr-3 text-orange-500">🔍</span>
            Similar Job Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarTasks.map((task) => (
              <TaskCard key={task.id} {...task} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tasks;
