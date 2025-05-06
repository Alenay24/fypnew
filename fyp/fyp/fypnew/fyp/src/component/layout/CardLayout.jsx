import React from 'react';
import PropTypes from 'prop-types';

const CardLayout = ({ 
  title, 
  titleBgColor = 'bg-blue-600', 
  titleTextColor = 'text-white', 
  children 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      {title && (
        <div className={`${titleBgColor} px-4 py-3`}>
          <h3 className={`${titleTextColor} font-semibold`}>{title}</h3>
        </div>
      )}
      <div className="p-5">
        {children}
      </div>
    </div>
  );
};

CardLayout.propTypes = {
  title: PropTypes.string,
  titleBgColor: PropTypes.string,
  titleTextColor: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default CardLayout;