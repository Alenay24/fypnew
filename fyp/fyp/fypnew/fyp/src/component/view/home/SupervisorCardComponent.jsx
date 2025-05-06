import React from 'react';
import PropTypes from 'prop-types';

const SupervisorCard = ({ 
  name, 
  department, 
  initials, 
  expertise, 
  description, 
  currentStudents, 
  availability 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="p-5">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">
              {initials}
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-gray-800">{name}</h3>
            <p className="text-blue-600 text-sm">{department}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {expertise.map((skill, index) => (
                <span key={index} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <i className="fas fa-user-graduate mr-1" />
            <span>{currentStudents} Current Students</span>
          </div>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition">
            {availability ? 'View Profile' : 'Currently Full'}
          </button>
        </div>
      </div>
    </div>
  );
};

SupervisorCard.propTypes = {
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
  expertise: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  currentStudents: PropTypes.number.isRequired,
  availability: PropTypes.bool.isRequired
};

export default SupervisorCard;