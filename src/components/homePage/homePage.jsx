import React from "react";
import ModalItem from "../modal/modal";

function Home(props) {
  if (props.employees.length === 0) {
    return <p>No records</p>;
  }
  return (
    <React.Fragment>
      <p>Total records : {props.employees.length}</p>
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
          {props.employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.position.name}</td>
              <td>{employee.Email}</td>
              <td>{employee.phoneNumber}</td>
              <td>
                <ModalItem onDelete={props.onDelete} employee={employee} />
              
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
    </React.Fragment>
  );
}

export default Home;
