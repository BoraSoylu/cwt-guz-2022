import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
const StudentsPagination = ({
  studentsPerPage,
  totalStudents,
  paginate,
  perPaginate,
}) => {
  const pageNumbers = [];
  const [activePage, setActivePage] = useState(1);
  for (let i = 1; i <= Math.ceil(totalStudents / studentsPerPage); i++) {
    pageNumbers.push(i);
  }

  const perPageNumbers = [5, 8, 10];
  const [activePerPage, setActivePerPage] = useState(8);

  return (
    <div className="t-flex">
      <Pagination className="pagination">
        {pageNumbers.map((number) => (
          <Pagination.Item
            key={number}
            onClick={() => {
              paginate(number);
              setActivePage(number);
            }}
            active={number === activePage}
          >
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
      <Pagination className="pagination">
        {perPageNumbers.map((number) => (
          <Pagination.Item
            key={number}
            active={number === activePerPage}
            onClick={() => {
              perPaginate(number);
              setActivePerPage(number);
            }}
          >
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default StudentsPagination;
