import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./components/homePage/homePage";
import Navbar from "./components/navbar/navbar";
import Add from "./components/addEmployee/addEmployee";
import { getEmployees } from "./services/fakeEmployeeService";

function App() {
  const [employees, setemployee] = useState(getEmployees());

  const handleDelete = (employee) => {
    const employe = employees.filter((e) => e._id !== employee._id);
    setemployee(employe);
  };

  useEffect( () => console.log('Refresh'));


  return (
    <div className="container-fluid">
      <Navbar />
      <div>
        <Switch>
          <Route
            path="/"
            render={(props) => (
              <Home onDelete={handleDelete} employees={employees} {...props}/>
            )}
          />
          <Route path="/Add" component={Add} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
