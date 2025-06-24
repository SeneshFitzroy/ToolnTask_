
import React, { useState } from 'react';
import Navigation from '../components/Navigation';

export default function Profile() {
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
    console.log('Profile saved:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-blue-100">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-3xl p-8 text-white">
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

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="mr-3 text-orange-500">💼</span>
                  Professional Information
                </h2>

                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <label className="block text-sm font-semibold text-blue-600 mb-2">Current Job</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="currentJob"
                        value={formData.currentJob}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:border-orange-500 focus:outline-none"
                      />
                    ) : (
                      <p className="text-blue-800 font-medium">{formData.currentJob}</p>
                    )}
                  </div>

                  <div className="bg-orange-50 rounded-xl p-4">
                    <label className="block text-sm font-semibold text-orange-600 mb-2">Experience</label>
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
          </div>
        </div>
      </div>
    </div>
  );
}
