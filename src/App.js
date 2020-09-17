import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/homePage/homePage";
import Navbar from "./components/navbar/navbar";
import EmployeeForm from "./components/employeeForm/employeeForm";

function App() {
  // useEffect(() => console.log("Refresh"));

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
