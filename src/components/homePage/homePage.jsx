import React, { Component, useState } from "react";
import {Modale} from '../modal/modal';

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
            <th>Moblie</th>
            <th></th>
            <th></th>
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
                <button
                  onClick={Modale}
                  className="btn btn-danger btn-sm m-2"
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => this.handleEdit(employee)}
                  className="btn btn-danger btn-sm m-2"
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
