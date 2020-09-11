import React, { useState } from "react";
import ModalItem from "../../common/modal/modal";
import Pagination from "./../../common/pagination/pagination";
import { getEmployees } from "..//../services/fakeEmployeeService";
import Paginate from "./../../ultis/paginate";

function Home() {
  const [allEmployees, setallEmployee] = useState(getEmployees());
  const [currentPage, setcurrentPage] = useState(1);
  const pageSize = 4;
  const { length: count } = allEmployees;

  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  const handleDelete = (employee) => {
    const updatedEmployees = allEmployees.filter((e) => e._id !== employee._id);
    setallEmployee(updatedEmployees);
  };

  if (count === 0) {
    return <p>No records</p>;
  }

  const employees = Paginate(allEmployees, currentPage, pageSize);
  if(employees.length === 0){
    setcurrentPage(currentPage-1)
  }
  
  return (
    <React.Fragment>
      <p>Total records : {count}</p>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.position.name}</td>
              <td>{employee.Email}</td>
              <td>{employee.phoneNumber}</td>
              <td>
                <ModalItem
                  onDelete={handleDelete}
                  employee={employee}
                  action="Delete"
                />

                <button
                  onClick={() => this.handleEdit(employee)}
                  className="btn btn-primary m-2"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
