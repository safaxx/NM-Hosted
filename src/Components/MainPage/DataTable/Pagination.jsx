import React from 'react';
import './Pagination.css'

const Pagination = ({ currentPage, totalPages, onChangePage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => onChangePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {'<'}
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onChangePage(page)}
          className={`page-number ${currentPage === page ? 'selected' : ''}`}
        >
          {page}
        </button>
      ))}
      <button
        className="pagination-button"
        onClick={() => onChangePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
