import React from 'react'

function AppointmentSchedulingComponent() {
  return (
    <>
   <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
  <div className="bg-blue-600 px-4 py-3">
    <h3 className="text-white font-semibold">Schedule Meeting with Dr. John Doe</h3>
  </div>
  <div className="p-5">
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input type="date" className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md text-sm" />
      </div>
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Available Time Slots</label>
      <div className="grid grid-cols-3 gap-2 mt-2">
        <button className="py-2 px-3 border border-gray-300 rounded-md text-sm hover:bg-blue-50 hover:border-blue-300 transition">9:00 AM</button>
        <button className="py-2 px-3 border border-gray-300 rounded-md text-sm hover:bg-blue-50 hover:border-blue-300 transition">10:30 AM</button>
        <button className="py-2 px-3 border border-gray-300 rounded-md text-sm hover:bg-blue-50 hover:border-blue-300 transition">11:00 AM</button>
        <button className="py-2 px-3 border border-blue-300 bg-blue-50 text-blue-600 rounded-md text-sm">2:00 PM</button>
        <button className="py-2 px-3 border border-gray-300 rounded-md text-sm hover:bg-blue-50 hover:border-blue-300 transition">3:30 PM</button>
        <button className="py-2 px-3 border border-gray-300 rounded-md text-sm hover:bg-blue-50 hover:border-blue-300 transition">4:00 PM</button>
      </div>
    </div>
    <div className="mb-4">
      <label htmlFor="meeting-purpose" className="block text-sm font-medium text-gray-700 mb-1">Meeting Purpose</label>
      <select id="meeting-purpose" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
        <option>Project Discussion</option>
        <option>Proposal Review</option>
        <option>Progress Check</option>
        <option>Other</option>
      </select>
    </div>
    <div className="mb-4">
      <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
      <textarea id="notes" rows={3} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Any specific topics you want to discuss..." defaultValue={""} />
    </div>
    <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition">
      Schedule Meeting
    </button>
  </div>
</div>

    </>
  )
}

export default AppointmentSchedulingComponent
