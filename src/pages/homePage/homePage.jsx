import React, { useState, useEffect } from "react";
import Pagination from "../../components/pagination/pagination";
import Paginate from "../../transformers/paginate";
import EmployeesTable from "../../components/employeesTable/employeesTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBox from "../../components/searchBox/searchBox";
import "./homePage.css";

import { getEmployees, deleteEmployee } from "../../services/services";

function Home(props) {
  const [allEmployees, setallEmployee] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");
  const [currentPage, setcurrentPage] = useState(1);
  const [sortColumn, setsortColumn] = useState({
    column: "name",
    order: "asc",
  });
  const pageSize = 4;

  // const { length: count } = allEmployees;

  useEffect(() => {
    async function fetchData() {
      const response = await getEmployees();
      setallEmployee(response.data);
    }
    fetchData();
  }, [props]);

  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  const handleDelete = async (employee) => {
    await deleteEmployee(employee);
    const response = await getEmployees();
    setallEmployee(response.data);
  };

  const handleSort = (sort) => {
    setsortColumn(sort);
    setcurrentPage(1);
  };

  const handleSearch = (query) => {
    setsearchQuery(query);
  };

  const getPagedData = () => {
    const filtered =
      searchQuery && allEmployees
        ? allEmployees.filter(
            (e) =>
              e.name.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
              e.designation
                .toLowerCase()
                .startsWith(searchQuery.toLowerCase()) ||
              e.email.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
              e.phoneNumber.toString().startsWith(searchQuery)
          )
        : allEmployees;

    const sortEmployee =
      filtered.length === 0
        ? {}
        : _.orderBy(filtered, [sortColumn.column], [sortColumn.order]);

    const employees =
      filtered.length === 0
        ? {}
        : Paginate(sortEmployee, currentPage, pageSize);
    if (employees.length === 0) {
      setcurrentPage(currentPage - 1);
    }

    return { totalcount: filtered.length, data: employees };
  };

  return (
    <React.Fragment>
      <div className="flexbox-container">
        <div className="flexbox-item-1">
          <div className="flex-addbtn">
            <Link
              className="btn btn-primary btn-md add-btn "
              to="/employee/new"
            >
              Add Employee
            </Link>
          </div>

          <div className="flex-searchbox">
            <span className="count">
              Showing {getPagedData().totalcount} records from the database
            </span>
            <SearchBox
              className="searchbar"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="flexbox-item-2">
          {getPagedData().totalcount === 0 ? (
            <p>No matching records</p>
          ) : (
            <EmployeesTable
              employees={getPagedData().data}
              sortColumn={sortColumn}
              onDelete={handleDelete}
              onSort={handleSort}
            />
          )}
        </div>
        <div className="flexbox-item-3">
          <Pagination
            itemsCount={getPagedData().totalcount}
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
