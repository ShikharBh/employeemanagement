import React, { useState, useEffect } from "react";
import Pagination from "./../../common/pagination/pagination";
import Paginate from "./../../ultis/paginate";
import EmployeesTable from "./../employeesTable/employeesTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBox from "./../../common/searchBox/searchBox";
import axios from "axios";

function Home() {
  const [allEmployees, setallEmployee] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");
  const [currentPage, setcurrentPage] = useState(1);
  const [sortColumn, setsortColumn] = useState({
    column: "name",
    order: "asc",
  });
  const pageSize = 4;
  const baseUrl ="https://localhost:5001/Shifts";
  // const { length: count } = allEmployees;

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => setallEmployee(response.data));
  }, [setallEmployee]);

  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  const handleDelete = (employee) => {
    axios.delete(`${baseUrl}/${employee.id}`);
  };

  const handleSort = (sort) => {
    setsortColumn(sort);
    setcurrentPage(1);
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

      <div className="row">
        <p className="col-1 m-2">Count:{filtered.length}</p>
        <div className="col justify-content-center ">
          <SearchBox value={searchQuery} onChange={handleSearch} />
        </div>
      </div>

      <EmployeesTable
        employees={employees}
        sortColumn={sortColumn}
        onDelete={handleDelete}
        onSort={handleSort}
      />

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
