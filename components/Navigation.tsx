
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-gradient-to-r from-slate-800 to-slate-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white">
              Tool<span className="text-orange-500">N</span>Task
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/'
                  ? 'text-orange-400 bg-slate-700'
                  : 'text-white hover:text-orange-400 hover:bg-slate-700'
              }`}
            >
              Home
            </Link>
            <Link
              href="/tasks"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname.startsWith('/tasks')
                  ? 'text-orange-400 bg-slate-700'
                  : 'text-white hover:text-orange-400 hover:bg-slate-700'
              }`}
            >
              Tasks
            </Link>
            <Link
              href="/tools"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname.startsWith('/tools')
                  ? 'text-orange-400 bg-slate-700'
                  : 'text-white hover:text-orange-400 hover:bg-slate-700'
              }`}
            >
              Tools
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/about'
                  ? 'text-orange-400 bg-slate-700'
                  : 'text-white hover:text-orange-400 hover:bg-slate-700'
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/contact'
                  ? 'text-orange-400 bg-slate-700'
                  : 'text-white hover:text-orange-400 hover:bg-slate-700'
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center">
            <Link 
              href="/signin"
              className="bg-white hover:bg-gray-100 text-slate-800 px-4 py-2 rounded-full text-sm font-medium transition-colors mr-3"
            >
              Sign In
            </Link>
            <Link 
              href="/profile"
              className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors"
            >
              <span className="text-white font-semibold text-sm">P</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
