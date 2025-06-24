
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-slate-100">
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-t-3xl p-8 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-3xl">JP</span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-2">John Perera</h1>
                  <p className="text-slate-200">Software Engineer</p>
                  <p className="text-slate-300 text-sm">Colombo 03</p>
                </div>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                ✏️ Edit Profile
              </Button>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <span className="mr-3 text-slate-600">👤</span>
                  Personal Information
                </h2>

                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Full Name</label>
                    <p className="text-slate-800 font-medium text-lg">John Perera</p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Phone Number</label>
                    <p className="text-slate-800 font-medium text-lg">+94 77 123 4567</p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Gender</label>
                    <p className="text-slate-800 font-medium text-lg">Male</p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Location</label>
                    <p className="text-slate-800 font-medium text-lg">Colombo 03</p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Date of Birth</label>
                    <p className="text-slate-800 font-medium text-lg">May 15, 1990</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <span className="mr-3 text-orange-500">💼</span>
                  Professional Information
                </h2>

                <div className="space-y-4">
                  <div className="bg-orange-50 rounded-xl p-4">
                    <label className="block text-sm font-semibold text-orange-600 mb-2">Highest Education Level</label>
                    <p className="text-orange-800 font-medium text-lg">Bachelor's Degree</p>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-4">
                    <label className="block text-sm font-semibold text-orange-600 mb-2">Total Years of Experience</label>
                    <p className="text-orange-800 font-medium text-lg">5 years</p>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-4">
                    <label className="block text-sm font-semibold text-orange-600 mb-2">Current Job</label>
                    <p className="text-orange-800 font-medium text-lg">Software Engineer</p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Past Employments</label>
                    <p className="text-slate-800 font-medium text-lg">Tech Solutions Ltd (2019-2024), StartUp Inc (2017-2019)</p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Additional Info</label>
                    <p className="text-slate-800 font-medium text-lg">Experienced in web development and UI/UX design. Available for freelance projects.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
