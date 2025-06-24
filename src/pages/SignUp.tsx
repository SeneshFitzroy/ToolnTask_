
import Navigation from '../components/Navigation';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-800 mb-2">Join ToolNTask</h1>
              <p className="text-gray-600">Create your account to get started</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-600 focus:outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-600 focus:outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-600 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-600 focus:outline-none"
                  placeholder="+94 71 234 5678"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-600 focus:outline-none"
                  placeholder="Create a strong password"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-orange-600 focus:outline-none"
                  placeholder="Confirm your password"
                />
              </div>
              
              <div className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-orange-600 focus:ring-orange-600" />
                <span className="ml-2 text-sm text-gray-600">
                  I agree to the{' '}
                  <Link to="#" className="text-orange-600 hover:text-orange-700">Terms of Service</Link>
                  {' '}and{' '}
                  <Link to="#" className="text-orange-600 hover:text-orange-700">Privacy Policy</Link>
                </span>
              </div>
              
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 text-lg font-semibold rounded-xl">
                Create Account
              </Button>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="outline" className="py-3">
                  <span className="mr-2">📱</span>
                  Google
                </Button>
                <Button variant="outline" className="py-3">
                  <span className="mr-2">📘</span>
                  Facebook
                </Button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/signin" className="text-orange-600 hover:text-orange-700 font-semibold">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
