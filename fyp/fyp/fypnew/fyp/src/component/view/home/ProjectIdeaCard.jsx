import React from 'react'

function ProjectIdeaCard() {
  return (
    <>
     <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition duration-300">
  <div className="p-5">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-bold text-gray-800">AI-Based Traffic Management System</h3>
        <p className="text-blue-600 text-sm mt-1">Suggested by Dr. Sarah Smith</p>
      </div>
      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Popular</span>
    </div>
    <p className="text-gray-600 text-sm mt-3 line-clamp-3">
      Develop an intelligent traffic management system using computer vision and deep learning to optimize traffic flow in urban areas. The system will analyze real-time traffic camera data to predict congestion and suggest alternative routes.
    </p>
    <div className="mt-4 flex flex-wrap gap-2">
      <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">Artificial Intelligence</span>
      <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">Computer Vision</span>
      <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">Urban Planning</span>
    </div>
    <div className="mt-4 flex justify-between items-center">
      <div className="flex items-center text-sm text-gray-500">
        <i className="far fa-clock mr-1" />
        <span>6 month project</span>
      </div>
      <button className="px-3 py-1 border border-blue-600 text-blue-600 hover:bg-blue-50 text-sm rounded-md transition">
        Express Interest
      </button>
    </div>
  </div>
</div>

    </>
  )
}

export default ProjectIdeaCard
