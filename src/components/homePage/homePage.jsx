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
  const baseUrl = "https://localhost:5001/Shifts";
  // const { length: count } = allEmployees;

  const getEmployees = () => {
    axios.get(baseUrl).then((response) => setallEmployee(response.data));
  };

  useEffect(() => getEmployees(), []);

  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  const handleDelete = async (employee) => {
    await axios.delete(`${baseUrl}/${employee.id}`);
    getEmployees();
  };

  const handleSort = (sort) => {
    setsortColumn(sort);
    setcurrentPage(1);
  };

  const handleSearch = (query) => {
    setsearchQuery(query);
  };

  const filtered =
    searchQuery && allEmployees
      ? allEmployees.filter(
          (e) =>
            e.name.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
            e.designation.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
            e.email.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
            e.phoneNumber.toString().startsWith(searchQuery)
        )
      : allEmployees;

  const sortEmployee =
    filtered.length === 0
      ? {}
      : _.orderBy(filtered, [sortColumn.column], [sortColumn.order]);

  const employees =
    filtered.length === 0 ? {} : Paginate(sortEmployee, currentPage, pageSize);
  if (employees.length === 0) {
    setcurrentPage(currentPage - 1);
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-2 align-items-center">
          <Link className="btn btn-primary btn-md m-2 " to="/employee/new">
            Add Employee
          </Link>
        </div>
        <div className="col">
          <span>Showing {filtered.length} records from the database</span>

          <div className=" container ">
            <SearchBox value={searchQuery} onChange={handleSearch} />
          </div>
          {filtered.length === 0 ? (
            <p>No records</p>
          ) : (
            <EmployeesTable
              employees={employees}
              sortColumn={sortColumn}
              onDelete={handleDelete}
              onSort={handleSort}
            />
          )}

          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
