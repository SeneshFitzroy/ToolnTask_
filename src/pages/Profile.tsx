
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "John Perera",
    phone: "+94 77 123 4567",
    gender: "Male",
    location: "Colombo 03",
    education: "Bachelor's Degree",
    experience: "5 years",
    currentJob: "Software Engineer",
    dateOfBirth: "1990-05-15",
    additionalInfo: "Experienced in web development and UI/UX design. Available for freelance projects.",
    pastEmployments: "Tech Solutions Ltd (2019-2024), StartUp Inc (2017-2019)"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to Firebase
    console.log('Profile saved:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-blue-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-3xl p-8 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-3xl">JP</span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-2">{formData.name}</h1>
                  <p className="text-blue-100">{formData.currentJob}</p>
                  <p className="text-blue-200 text-sm">{formData.location}</p>
                </div>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                {isEditing ? '💾 Save Profile' : '✏️ Edit Profile'}
              </button>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Basic Info */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="mr-3 text-blue-500">👤</span>
                  Personal Information
                </h2>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Full Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-orange-500 focus:outline-none"
                      />
                    ) : (
                      <p className="text-gray-800 font-medium">{formData.name}</p>
                    )}
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Phone Number</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-orange-500 focus:outline-none"
                      />
                    ) : (
                      <p className="text-gray-800 font-medium">{formData.phone}</p>
                    )}
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Gender</label>
                    {isEditing ? (
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-orange-500 focus:outline-none"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    ) : (
                      <p className="text-gray-800 font-medium">{formData.gender}</p>
                    )}
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Location</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-orange-500 focus:outline-none"
                      />
                    ) : (
                      <p className="text-gray-800 font-medium">{formData.location}</p>
                    )}
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Date of Birth</label>
                    {isEditing ? (
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-orange-500 focus:outline-none"
                      />
                    ) : (
                      <p className="text-gray-800 font-medium">{formData.dateOfBirth}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column - Professional Info */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="mr-3 text-orange-500">💼</span>
                  Professional Information
                </h2>

                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <label className="block text-sm font-semibold text-blue-600 mb-2">Highest Education Level</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-orange-500 focus:outline-none"
                      />
                    ) : (
                      <p className="text-blue-800 font-medium">{formData.education}</p>
                    )}
                  </div>

                  <div className="bg-orange-50 rounded-xl p-4">
                    <label className="block text-sm font-semibold text-orange-600 mb-2">Total Years of Work Experience</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-orange-500 focus:outline-none"
                      />
                    ) : (
                      <p className="text-orange-800 font-medium">{formData.experience}</p>
                    )}
                  </div>

                  <div className="bg-green-50 rounded-xl p-4">
                    <label className="block text-sm font-semibold text-green-600 mb-2">Current Job</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="currentJob"
                        value={formData.currentJob}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-orange-500 focus:outline-none"
                      />
                    ) : (
                      <p className="text-green-800 font-medium">{formData.currentJob}</p>
                    )}
                  </div>

                  <div className="bg-purple-50 rounded-xl p-4">
                    <label className="block text-sm font-semibold text-purple-600 mb-2">Additional Info</label>
                    {isEditing ? (
                      <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-orange-500 focus:outline-none resize-none"
                        placeholder="Add a summary of your education and professional experience..."
                      />
                    ) : (
                      <p className="text-purple-800 font-medium">{formData.additionalInfo}</p>
                    )}
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Past Employments</label>
                    {isEditing ? (
                      <textarea
                        name="pastEmployments"
                        value={formData.pastEmployments}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-orange-500 focus:outline-none resize-none"
                        placeholder="Add details of your previous jobs..."
                      />
                    ) : (
                      <p className="text-gray-800 font-medium">{formData.pastEmployments}</p>
                    )}
                  </div>
                </div>

                {isEditing && (
                  <div className="flex gap-4 pt-6">
                    <button
                      onClick={handleSave}
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      💾 Save Changes
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
                    >
                      ❌ Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Stats Section */}
            <div className="border-t-2 border-gray-100 mt-8 pt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-3 text-blue-500">📊</span>
                Activity Stats
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                  <div className="text-blue-800 font-medium">Tasks Completed</div>
                </div>
                <div className="bg-orange-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
                  <div className="text-orange-800 font-medium">Tools Rented</div>
                </div>
                <div className="bg-green-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">4.8</div>
                  <div className="text-green-800 font-medium">Average Rating</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                  <div className="text-purple-800 font-medium">Active Listings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
