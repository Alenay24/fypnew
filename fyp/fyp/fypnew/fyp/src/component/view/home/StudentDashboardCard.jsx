import React from 'react'

function StudentDashboardCard() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
  <div className="bg-blue-600 px-4 py-3">
    <h3 className="text-white font-semibold">My FYP Progress</h3>
  </div>
  <div className="p-4">
    <div className="space-y-4">
      {/* Supervisor Status */}
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
          <i className="fas fa-user-tie" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500">Supervisor</p>
          <p className="text-sm text-gray-900">Not yet assigned</p>
        </div>
      </div>
      {/* Project Status */}
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
          <i className="fas fa-project-diagram" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500">Project</p>
          <p className="text-sm text-gray-900">Draft proposal submitted</p>
        </div>
      </div>
      {/* Timeline */}
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
          <i className="far fa-calendar-alt" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500">Timeline</p>
          <p className="text-sm text-gray-900">4 months until submission</p>
        </div>
      </div>
    </div>
    <div className="mt-6">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-500">Progress</span>
        <span className="font-medium">25%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-blue-600 h-2 rounded-full" style={{width: '25%'}} />
      </div>
    </div>
    <button className="mt-6 w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition">
      View Full Dashboard
    </button>
  </div>
</div>

    </>
  )
}

export default StudentDashboardCard
