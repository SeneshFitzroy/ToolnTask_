
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            Changing Lives, Shaping Sri Lanka
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            ToolNTask is revolutionizing how Sri Lankans access tools and services, 
            creating opportunities for everyone while building stronger communities.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-6xl mb-4">👥</div>
              <div className="text-4xl font-bold text-orange-500 mb-2">5,000+</div>
              <div className="text-xl">Active Users</div>
            </div>
            <div className="text-white">
              <div className="text-6xl mb-4">🔧</div>
              <div className="text-4xl font-bold text-orange-500 mb-2">1,000+</div>
              <div className="text-xl">Tools Available</div>
            </div>
            <div className="text-white">
              <div className="text-6xl mb-4">💼</div>
              <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-xl">Jobs Completed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Steps Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-12">
            Simple Steps to Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Search & Book</h3>
              <p className="text-gray-600 text-lg">
                Find tools or gigs that match your needs with our easy-to-use search system.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Connect & Work</h3>
              <p className="text-gray-600 text-lg">
                Get connected with trusted providers and complete your projects safely.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-6xl mb-6">⭐</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Rate & Grow</h3>
              <p className="text-gray-600 text-lg">
                Build a stronger community through honest reviews and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-8">Our Mission</h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p>
              At ToolNTask, we believe that everyone should have access to the tools and help they need 
              to improve their lives and communities. We're bridging the gap between those who have 
              resources and those who need them, creating a sustainable sharing economy that benefits everyone.
            </p>
            <p>
              Our platform empowers individuals to earn extra income by offering their skills or renting 
              out their tools, while helping others complete their projects affordably and efficiently.
            </p>
            <p>
              Together, we're building a more connected, resourceful, and prosperous Sri Lanka, one task 
              and one tool at a time.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
