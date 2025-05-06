import React from 'react'

function SupervisorProfileCard() {
  return (
    <>
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
  <div className="p-5">
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">JD</div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-bold text-gray-800">Dr. John Doe</h3>
        <p className="text-blue-600 text-sm">Computer Science Department</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">Machine Learning</span>
          <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">Data Science</span>
          <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">AI</span>
        </div>
      </div>
    </div>
    <div className="mt-4">
      <p className="text-gray-600 text-sm line-clamp-3">Specializes in deep learning applications for computer vision with 10+ years of research experience. Currently accepting 2-3 FYP students for projects involving neural networks.</p>
    </div>
    <div className="mt-4 flex justify-between items-center">
      <div className="flex items-center text-sm text-gray-500">
        <i className="fas fa-user-graduate mr-1" />
        <span>5 Current Students</span>
      </div>
      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition">
        View Profile
      </button>
    </div>
  </div>
</div>

    </>
  )
}

export default SupervisorProfileCard