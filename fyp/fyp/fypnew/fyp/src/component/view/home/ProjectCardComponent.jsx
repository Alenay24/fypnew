// src/component/view/home/ProjectCardComponent.jsx
import React from 'react';
import PropTypes from 'prop-types';

const ProjectCardComponent = ({ 
  title, 
  students, 
  supervisor, 
  status = 'pending', 
  dateSubmitted,
  onAccept,
  onReject,
  onView
}) => {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    accepted: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
    completed: 'bg-blue-100 text-blue-800'
  };

  return (
    <div className="p-4 border rounded-lg hover:bg-gray-50 transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">
            Team: {students} • Supervisor: {supervisor}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Submitted: {new Date(dateSubmitted).toLocaleDateString()}
          </p>
        </div>
        <span className={`px-2 py-1 text-xs rounded-full ${statusColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      
      {status === 'pending' && (
        <div className="flex space-x-2 mt-3">
          <button 
            onClick={onAccept}
            className="px-3 py-1 bg-green-100 text-green-800 rounded-md text-sm hover:bg-green-200"
          >
            Accept
          </button>
          <button 
            onClick={onReject}
            className="px-3 py-1 bg-red-100 text-red-800 rounded-md text-sm hover:bg-red-200"
          >
            Reject
          </button>
          <button 
            onClick={onView}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm hover:bg-blue-200"
          >
            View
          </button>
        </div>
      )}
    </div>
  );
};

ProjectCardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  students: PropTypes.string.isRequired,
  supervisor: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['pending', 'accepted', 'rejected', 'completed']),
  dateSubmitted: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  onAccept: PropTypes.func,
  onReject: PropTypes.func,
  onView: PropTypes.func
};

ProjectCardComponent.defaultProps = {
  status: 'pending',
  onAccept: () => {},
  onReject: () => {},
  onView: () => {}
};

export default ProjectCardComponent;