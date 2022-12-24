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
    <div className="t-flex t-justify-between t-items-center t-bg-[#f0f2fa] py-2 px-3">
      <div>
        <b>{totalStudents}</b> öğrenciden{' '}
        <b>{`${activePage * studentsPerPage - studentsPerPage + 1} - ${
          activePage * studentsPerPage > totalStudents
            ? totalStudents
            : activePage * studentsPerPage
        }`}</b>{' '}
        arası gösteriliyor.
      </div>
      <Pagination className="pagination t-m-0">
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
      <Pagination className="pagination t-m-0" size="sm">
        {perPageNumbers.map((number) => (
          <Pagination.Item
            key={number}
            active={number === activePerPage}
            onClick={() => {
              perPaginate(number, (lastPage) => {
                setActivePage(lastPage);
              });
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
