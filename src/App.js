import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./components/homePage/homePage";
import Navbar from "./components/navbar/navbar";
import Add from "./components/addEmployee/addEmployee";

function App() {
  useEffect(() => console.log("Refresh"));

  return (
    <div className="container-fluid">
      <Navbar />
      <div>
        <Switch>
          <Route path="/" render={(props) => <Home {...props} />} />
          <Route path="/Add" component={Add} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
