
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              Tool<span className="text-orange-400">N</span>Task
            </div>
            <p className="text-blue-200 mb-4 max-w-md">
              Sri Lanka's premier marketplace for equipment rentals and skilled services. 
              Connecting communities through shared resources and opportunities.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <span className="text-white text-sm">f</span>
              </div>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <span className="text-white text-sm">t</span>
              </div>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <span className="text-white text-sm">i</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-orange-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-blue-200 hover:text-orange-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-blue-200 hover:text-orange-400 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-blue-200">
              <li>+94 11 123 4567</li>
              <li>info@toolntask.lk</li>
              <li>1st Lane, Colombo 03, Sri Lanka</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2025 ToolNTask. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
