import React, { useState } from "react";
import Pagination from "./../../common/pagination/pagination";
import { getEmployees } from "..//../services/fakeEmployeeService";
import Paginate from "./../../ultis/paginate";
import EmployeesTable from "./../employeesTable/employeesTable";
import _ from "lodash";

function Home() {
  const [allEmployees, setallEmployee] = useState(getEmployees());
  const [currentPage, setcurrentPage] = useState(1);
  const [sortColumn, setsortColumn] = useState({
    column: "name",
    order: "asc",
  });
  const pageSize = 4;
  const { length: count } = allEmployees;

  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  const handleDelete = (employee) => {
    const updatedEmployees = allEmployees.filter((e) => e._id !== employee._id);
    setallEmployee(updatedEmployees);
  };

  const handleSort = (sort) => {
    setsortColumn(sort);
  };

  if (count === 0) {
    return <p>No records</p>;
  }

  const sortEmployee = _.orderBy(
    allEmployees,
    [sortColumn.column],
    [sortColumn.order]
  );

  const employees = Paginate(sortEmployee, currentPage, pageSize);
  if (employees.length === 0) {
    setcurrentPage(currentPage - 1);
  }

  return (
    <React.Fragment>
      <p>Total records : {count}</p>
      <EmployeesTable
        employees={employees}
        sortColumn={sortColumn}
        onDelete={handleDelete}
        onSort={handleSort}
      />
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </React.Fragment>
  );
}

export default Home;
