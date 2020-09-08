import React, { Component } from "react";
import "./App.css";
import Home from "./components/homePage/homePage";
import Navbar from "./components/navbar/navbar";
import { getEmployees } from "./services/fakeEmployeeService";
// import {Modal} from './components/modal/modal'

class App extends Component {
  constructor() {
    super();
    this.state = { employees: getEmployees() };
  }

  // getConfirmation = (employee) => {
   
  // };

  handleDelete = (employee) => {
    //alert('Do you want to delete the record?');
    const result = window.confirm("want to delete?");
    if (result) {
      const employees = this.state.employees.filter(
        (e) => e._id !== employee._id
      );
      this.setState({ employees });
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <Home
          onDelete={this.handleDelete}
          employees={this.state.employees}
          getConfirmation={this.getConfirmation}
        />
      </div>
    );
  }
}

export default App;
