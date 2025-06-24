
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              Tool<span className="text-orange-500">N</span>Task
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
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
              <li><Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>+94 11 123 4567</li>
              <li>info@toolntask.lk</li>
              <li>123, Galle Road, Colombo 03</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 ToolNTask. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
