import React, { useEffect } from "react";
import axios from "axios";

export function GetEmployeeDetails() {
    useEffect(() => {
        const users = axios.get(
          {"https://localhost:44365/Shifts"}
        );
        return(users.data);
      });


}
