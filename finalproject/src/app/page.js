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
            <li className="hover:text-gray-400 cursor-pointer">Features</li>
            <li className="hover:text-gray-400 cursor-pointer">Testimonials</li>
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
          Build, learn, and grow with modern web technologies. Join DIGI’s
          community and unlock your full potential.
        </p>
        <div className="space-x-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
            onClick={() => alert("Get Started clicked")}
          >
            Get Started
          </button>
          <button
            className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-gray-900 transition"
            onClick={() => alert("Learn More clicked")}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-12 px-6">
        <h3 className="text-3xl font-semibold text-center mb-12">
          Our Key Features
        </h3>
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition">
            <h4 className="text-xl font-bold mb-2">Interactive Learning</h4>
            <p className="text-gray-600">
              Hands-on tutorials and coding exercises to master modern
              technologies.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition">
            <h4 className="text-xl font-bold mb-2">Community Support</h4>
            <p className="text-gray-600">
              Collaborate with developers and get feedback on projects and
              ideas.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition">
            <h4 className="text-xl font-bold mb-2">Professional Resources</h4>
            <p className="text-gray-600">
              Access guides, documentation, and templates used by professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-12 px-6">
        <h3 className="text-3xl font-semibold text-center mb-12">
          What Our Users Say
        </h3>
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-gray-600 mb-4">
              "DIGI transformed the way I learn coding. The tutorials are
              amazing!"
            </p>
            <h4 className="font-bold">Alex P.</h4>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-gray-600 mb-4">
              "The community support is fantastic. I always get answers to my
              questions quickly."
            </p>
            <h4 className="font-bold">Maria S.</h4>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-gray-600 mb-4">
              "I found professional templates here that saved me hours of work."
            </p>
            <h4 className="font-bold">James K.</h4>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto py-12 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-4">Subscribe to DIGI Newsletter</h3>
        <p className="text-gray-600 mb-6">
          Stay updated with the latest tutorials, guides, and community news.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md p-3 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            onClick={() => alert("Subscribed!")}
          >
            Subscribe
          </button>
        </div>
      </section>

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
// push working or not check
