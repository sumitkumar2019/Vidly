import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
const Pagination = ({ itemCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount === 1) return null;
  const url = "#";
  const pages = _.range(1, pageCount + 1);
  return (
    <ul className="pagination pagination-lg justify-content-center">
      <li className="page-item disabled">
        <a className="page-link" href={url}>
          Previous
        </a>
      </li>
      {pages.map(page => (
        <li
          key={page}
          className={page === currentPage ? "page-item active" : "page-item"}
        >
          <a
            className="page-link"
            href={url}
            onClick={() => onPageChange(page)}
          >
            {page}
          </a>
        </li>
      ))}
      <li className="page-item">
        <a className="page-link" href={url}>
          Next
        </a>
      </li>
    </ul>
  );
};
Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
