import React from "react";
import ModalItem from "../../common/modal/modal";
import { Link } from "react-router-dom";

const EmployeesTable = (props) => {
  const { employees, onDelete, onSort, sortColumn } = props;

  const raiseSort = (column) => {
    const sort = { ...sortColumn };
    if (sort.column === column) {
      sort.order = sort.order === "asc" ? "desc" : "asc";
    } else {
      sort.column = column;
      sort.order = "asc";
    }

    onSort(sort);
  };

  const renderSortIcon = (column) => {
    if (sortColumn.column !== column) return null;
    if (sortColumn.order === "asc") {
      return <i className="fa fa-sort-asc"></i>;
    }
    return <i className="fa fa-sort-desc"></i>;
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="clickable" onClick={() => raiseSort("name")}>
            Name{renderSortIcon("name")}
          </th>
          <th
            className="clickable"
            onClick={() => raiseSort("designation")}
          >
            Designation{renderSortIcon("designation")}
          </th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee._id}>
            <td>{employee.name}</td>
            <td>{employee.designation}</td>
            <td>{employee.email}</td>
            <td>{employee.phoneNumber}</td>
            <td>
              <ModalItem
                onDelete={onDelete}
                employee={employee}
                action="Delete"
              />
              <Link className="btn btn-primary m-2" to={"/employee/" + employee._id}>
                Edit
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeesTable;
