import React from 'react';
import PropTypes from 'prop-types';

const SectionContainer = ({ 
  title, 
  subtitle, 
  border = true, 
  padding = 'p-4', 
  children 
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm ${border ? 'border border-gray-200' : ''} ${padding}`}>
      {(title || subtitle) && (
        <div className="mb-4">
          {title && <h3 className="font-bold text-lg">{title}</h3>}
          {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
        </div>
      )}
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};

SectionContainer.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  border: PropTypes.bool,
  padding: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default SectionContainer;