import React from 'react';
import './RowsPerPage.css';

const RowsPerPage = ({ options, selectedOption, onSelectOption }) => {
  
  return (
    <div className="rows-per-page-dropdown">
      <select value={selectedOption} onChange={(e) => onSelectOption(parseInt(e.target.value))}>
        {options.map(option => (
          <option key={option} value={option} ><b>{option}</b> per page</option>
        ))}
      </select>
    </div>
  );
};

export default RowsPerPage;
