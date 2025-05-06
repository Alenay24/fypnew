import React from 'react'

function FOOTER() {
  return (
    <>
{/* Footer Section */}
<footer className="bg-gray-900 text-white pt-12 pb-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* University Info */}
      <div className="space-y-4">
        <div className="flex items-center">
          <i className="fas fa-user-graduate text-blue-500 text-2xl mr-2" />
          <span className="text-xl font-bold">FYP Supervisor Finder</span>
        </div>
        <p className="text-gray-400 text-sm">
          A platform connecting students with potential supervisors for their Final Year Projects at University Name.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-blue-400 transition">
            <i className="fab fa-facebook-f text-lg" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition">
            <i className="fab fa-twitter text-lg" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition">
            <i className="fab fa-linkedin-in text-lg" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition">
            <i className="fab fa-instagram text-lg" />
          </a>
        </div>
      </div>
      {/* Quick Links */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Find Supervisors</a></li>
          <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Browse Projects</a></li>
          <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">FYP Guidelines</a></li>
          <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Submission Deadlines</a></li>
          <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">FAQs</a></li>
        </ul>
      </div>
      {/* Departments */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Departments</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Computer Science</a></li>
          <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Electrical Engineering</a></li>
          <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Mechanical Engineering</a></li>
          <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Business Administration</a></li>
          <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Architecture</a></li>
        </ul>
      </div>
      {/* Contact Info */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Contact Us</h3>
        <ul className="space-y-3 text-gray-400 text-sm">
          <li className="flex items-start">
            <i className="fas fa-map-marker-alt mt-1 mr-3 text-blue-400" />
            <span>Faculty of Engineering, University Name, City 12345</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-phone-alt mr-3 text-blue-400" />
            <span>+1 (123) 456-7890</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-envelope mr-3 text-blue-400" />
            <span>fyp-office@university.edu</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-clock mr-3 text-blue-400" />
            <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
          </li>
        </ul>
      </div>
    </div>
    {/* Newsletter Section */}
    <div className="mt-12 pt-8 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Subscribe to FYP Updates</h3>
          <p className="text-gray-400 text-sm">Get notifications about new supervisors, deadlines, and workshops</p>
        </div>
        <form className="flex w-full md:w-auto">
          <input type="email" placeholder="Your university email" className="px-4 py-2 w-full md:w-64 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm" required />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r transition duration-300 text-sm">
            Subscribe
          </button>
        </form>
      </div>
    </div>
    {/* Copyright Section */}
    <div className="mt-8 pt-6 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-xs md:text-sm">
          © 2023 University Name - FYP Supervisor Finder. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-blue-400 text-xs md:text-sm transition">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-blue-400 text-xs md:text-sm transition">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-blue-400 text-xs md:text-sm transition">Accessibility</a>
        </div>
      </div>
    </div>
  </div>
</footer>
 
    </>
  )
}

export default FOOTER
