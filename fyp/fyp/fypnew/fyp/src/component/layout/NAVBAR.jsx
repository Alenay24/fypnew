import React from 'react'

function NAVBAR() {
  return (
    <>
  <nav className="bg-white shadow-md">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      {/* Left side - Logo and main links */}
      <div className="flex items-center">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <i className="fas fa-user-graduate text-blue-600 text-2xl mr-2" />
          <span className="text-xl font-bold text-gray-800">FYP Finder</span>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
          <a href="#" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Home
          </a>
          <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Supervisors
          </a>
          <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Projects
          </a>
          <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Resources
          </a>
        </div>
      </div>
      {/* Right side - Auth and profile */}
      <div className="hidden sm:ml-6 sm:flex sm:items-center">
        {/* Search bar */}
        <div className="relative mx-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-search text-gray-400" />
          </div>
          <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Search supervisors..." />
        </div>
        {/* Profile dropdown */}
        <div className="ml-3 relative">
          <div>
            <button type="button" className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="sr-only">Open user menu</span>
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                JS
              </div>
            </button>
          </div>
        </div>
        {/* Login/Register buttons */}
        <div className="ml-3 flex space-x-2">
          <a href="#" className="px-3 py-1 rounded-md text-sm font-medium text-blue-600 hover:bg-blue-50">Login</a>
          <a href="#" className="px-3 py-1 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">Register</a>
        </div>
      </div>
      {/* Mobile menu button */}
      <div className="-mr-2 flex items-center sm:hidden">
        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  {/* Mobile menu */}
  <div className="hidden sm:hidden" id="mobile-menu">
    <div className="pt-2 pb-3 space-y-1">
      <a href="#" className="bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Home</a>
      <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Supervisors</a>
      <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Projects</a>
      <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Resources</a>
    </div>
    <div className="pt-4 pb-3 border-t border-gray-200">
      <div className="flex items-center px-4">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
            JS
          </div>
        </div>
        <div className="ml-3">
          <div className="text-base font-medium text-gray-800">John Student</div>
          <div className="text-sm font-medium text-gray-500">john@university.edu</div>
        </div>
      </div>
      <div className="mt-3 space-y-1">
        <a href="#" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Your Profile</a>
        <a href="#" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Saved Supervisors</a>
        <a href="#" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Sign out</a>
      </div>
    </div>
  </div>
</nav>

    </>
  )
}

export default NAVBAR
