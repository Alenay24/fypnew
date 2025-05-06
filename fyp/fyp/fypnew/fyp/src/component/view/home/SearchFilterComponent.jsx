import React from 'react'

function SearchFilterComponent() {
  return (
    <>
   <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
  <h3 className="font-bold text-lg mb-4">Filter Supervisors</h3>
  <div className="space-y-4">
    {/* Department Filter */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
      <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
        <option value>All Departments</option>
        <option>Computer Science</option>
        <option>Electrical Engineering</option>
        <option>Mechanical Engineering</option>
        <option>Business Administration</option>
      </select>
    </div>
    {/* Research Area Filter */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Research Area</label>
      <input type="text" placeholder="E.g. Machine Learning" className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm" />
    </div>
    {/* Availability Filter */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
      <div className="space-y-2">
        <div className="flex items-center">
          <input id="available" name="availability" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
          <label htmlFor="available" className="ml-2 text-sm text-gray-700">Currently Accepting Students</label>
        </div>
        <div className="flex items-center">
          <input id="limited" name="availability" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
          <label htmlFor="limited" className="ml-2 text-sm text-gray-700">Limited Availability</label>
        </div>
      </div>
    </div>
    {/* Apply Filters Button */}
    <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition">
      Apply Filters
    </button>
  </div>
</div>
 
    </>
  )
}

export default SearchFilterComponent
