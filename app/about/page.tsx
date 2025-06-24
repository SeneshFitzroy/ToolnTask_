
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            Changing Lives, Shaping Sri Lanka
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ToolNTask is revolutionizing how Sri Lankans connect, collaborate, and create opportunities 
            in their communities. We're building a stronger, more connected nation one task at a time.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-4xl mb-4">👥</div>
            <div className="text-4xl font-bold text-slate-800 mb-2">5,000+</div>
            <div className="text-lg text-gray-600">Active Users</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-4xl mb-4">🔧</div>
            <div className="text-4xl font-bold text-slate-800 mb-2">1,000+</div>
            <div className="text-lg text-gray-600">Tools Available</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-4xl mb-4">💼</div>
            <div className="text-4xl font-bold text-slate-800 mb-2">500+</div>
            <div className="text-lg text-gray-600">Jobs Completed</div>
          </div>
        </div>

        {/* Simple Steps Section */}
        <div className="bg-white rounded-3xl shadow-xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-12">
            Simple Steps to Success
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Search & Book</h3>
              <p className="text-gray-600">
                Find tools or gigs that match your needs using our smart search and filtering system.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Connect & Work</h3>
              <p className="text-gray-600">
                Get connected with trusted providers and complete your tasks with confidence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Rate & Grow</h3>
              <p className="text-gray-600">
                Build a stronger community by rating experiences and helping others make informed decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              We believe that every Sri Lankan has unique skills and resources that can benefit their community. 
              ToolNTask creates a platform where neighbors can help neighbors, where idle tools become productive 
              assets, and where small gigs can grow into sustainable livelihoods.
            </p>
            <p className="text-lg text-gray-600">
              Our vision is a Sri Lanka where communities are self-sufficient, where resources are shared efficiently, 
              and where technology brings people together rather than driving them apart.
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-100 to-slate-100 rounded-2xl p-8">
            <div className="text-center">
              <span className="text-8xl">🏠</span>
              <h3 className="text-2xl font-bold text-slate-800 mt-4">
                Building Stronger Communities
              </h3>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-slate-800 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Trust</h3>
              <p className="text-gray-300">Building reliable connections</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-2">Growth</h3>
              <p className="text-gray-300">Empowering personal development</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-gray-300">Promoting resource sharing</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-300">Ensuring excellent experiences</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
