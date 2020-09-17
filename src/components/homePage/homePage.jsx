import React, { useState } from "react";
import Pagination from "./../../common/pagination/pagination";
import { getEmployees } from "..//../services/fakeEmployeeService";
import Paginate from "./../../ultis/paginate";
import EmployeesTable from "./../employeesTable/employeesTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBox from "./../../common/searchBox/searchBox";

function Home() {
  const [allEmployees, setallEmployee] = useState(getEmployees());
  const [searchQuery, setsearchQuery] = useState("");
  const [currentPage, setcurrentPage] = useState(1);
  const [sortColumn, setsortColumn] = useState({
    column: "name",
    order: "asc",
  });
  const pageSize = 4;
  // const { length: count } = allEmployees;

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

  const handleSearch = (query) => {
    setsearchQuery(query);
  };

  const filtered = searchQuery
    ? allEmployees.filter(
        (e) =>
          e.name.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
          e.designation.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
          e.email.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
          e.phoneNumber.toString().startsWith(searchQuery)
      )
    : allEmployees;

  if (filtered.length === 0) {
    return <p>No records</p>;
  }

  const sortEmployee = _.orderBy(
    filtered,
    [sortColumn.column],
    [sortColumn.order]
  );

  const employees = Paginate(sortEmployee, currentPage, pageSize);
  if (employees.length === 0) {
    setcurrentPage(currentPage - 1);
  }

  return (
    <React.Fragment>
      <Link className="btn btn-primary btn-md m-2 " to="/employee/new">
        Add Employee
      </Link>
      <p>Count:{filtered.length}</p>
      <SearchBox value={searchQuery} onChange={handleSearch} />
      {filtered.length === 0?<p>No records</p>: <EmployeesTable
        employees={employees}
        sortColumn={sortColumn}
        onDelete={handleDelete}
        onSort={handleSort}
      />}
      
      <Pagination
        itemsCount={filtered.length}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </React.Fragment>
  );
}

export default Home;
