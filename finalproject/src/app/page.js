import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="bg-gray-900 text-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold tracking-wide">DIGI</h1>
          <ul className="flex space-x-8 text-lg font-medium">
            <li className="hover:text-gray-400 cursor-pointer">Home</li>
            <li className="hover:text-gray-400 cursor-pointer">About</li>
            <li className="hover:text-gray-400 cursor-pointer">Login</li>
            <li className="hover:text-gray-400 cursor-pointer">Register</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-16 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Empower Your Digital Journey
        </h2>
        <p className="max-w-2xl text-gray-300 mb-8">
          Build, learn, and grow with modern web technologies. Join a
          community of innovators shaping the future.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition">
            Get Started
          </button>
          <button className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-gray-900 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto flex-grow px-6 py-12">
        <h3 className="text-3xl font-semibold text-center mb-8">
          Join DIGI Platform
        </h3>
        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
          Sign up to access exclusive tutorials, coding challenges, and
          professional resources designed to help you become a better
          developer.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-gray-300 rounded-md p-3 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="border border-gray-300 rounded-md p-3 w-48 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select a plan</option>
            <option value="basic">Basic</option>
            <option value="pro">Pro</option>
            <option value="premium">Premium</option>
          </select>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Submit
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm mt-auto">
        <div className="space-x-4 mb-2">
          <a href="#" className="hover:text-white">
            Terms
          </a>
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Support
          </a>
        </div>
        <p>&copy; 2025 DIGI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Page;
