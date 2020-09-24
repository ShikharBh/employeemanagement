import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/homePage/homePage";
import Navbar from "./layout/navbar/navbar";
import EmployeeForm from "./components/employeeForm/employeeForm";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <div>
        <Switch>
          <Route path="/employee/:id" component={EmployeeForm} />
          <Route path="/employee/" component={EmployeeForm} />
          <Route path="/" render={(props) => <Home {...props} />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
