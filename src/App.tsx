import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [submittedData, setSubmittedData] = useState<null | {username: string, password: string}>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="flex flex-col items-center">
        {/* Main container */}
        <div className="bg-white p-8 border border-gray-300 rounded-sm w-[350px]">
          {/* Instagram logo */}
          <div className="flex justify-center mb-8">
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt="Instagram"
              className="h-12"
            />
          </div>
          
          {/* Login form */}
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Phone number, username, or email"
              className="w-full mb-2 px-2 py-3 border border-gray-300 rounded-sm text-xs bg-gray-50 focus:outline-none focus:border-gray-400"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full mb-4 px-2 py-3 border border-gray-300 rounded-sm text-xs bg-gray-50 focus:outline-none focus:border-gray-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-sm font-semibold text-sm hover:bg-blue-600 transition duration-200"
            >
              Log In
            </button>
          </form>

          {/* Display submitted data */}
          {submittedData && (
            <div className="mt-4 p-4 bg-gray-100 rounded-sm">
              <h3 className="font-semibold mb-2">Submitted Data:</h3>
              <p>Username: {submittedData.username}</p>
              <p>Password: {submittedData.password}</p>
            </div>
          )}

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm font-semibold">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Facebook login */}
          <button className="w-full flex items-center justify-center text-blue-900 font-semibold text-sm mb-4">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
            </svg>
            Log in with Facebook
          </button>

          {/* Forgot password */}
          <a href="#" className="text-xs text-blue-900 text-center block">
            Forgot password?
          </a>
        </div>

        {/* Sign up section */}
        <div className="bg-white border border-gray-300 rounded-sm w-[350px] mt-4 p-6 text-center">
          <p className="text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-blue-500 font-semibold">
              Sign up
            </a>
          </p>
        </div>

        {/* App download */}
        <div className="mt-4 text-center">
          <p className="text-sm">Get the app.</p>
          <div className="flex space-x-2 mt-4">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
              alt="Download on the App Store"
              className="h-10"
            />
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
              alt="Get it on Google Play"
              className="h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
