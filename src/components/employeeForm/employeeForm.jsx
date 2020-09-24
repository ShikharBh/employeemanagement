import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./employeeForm.css";
import {
  getEmployeeById,
  editEmployee,
  addEmployee,
} from "../../services/services";

export default function EmployeeForm(props) {
  const [data, setdata] = useState({
    id: Date.now().toString(),
    name: "",
    designation: "",
    phoneNumber: 0,
    email: "",
  });

  const { register, handleSubmit, errors, reset } = useForm();

  useEffect(() => {
    const employeeId = props.match.params.id;
    if (employeeId === "new") return;

    const employeeData = (employee) => {
      reset({
        name: employee.name,
        designation: employee.designation,
        phoneNumber: employee.phoneNumber,
        email: employee.email,
      });
      console.log(employee);
      setdata(employee);
    };

    async function fetchData() {
      const response = await getEmployeeById(employeeId);
      employeeData(response.data);
    }
    fetchData();
  }, [props.match.params, setdata, reset, props.location.query]);

  const onSubmit = (resultData) => {
    const result = window.confirm("are you sure?");
    if (result) {
      const employeeData = {
        id: data.id,
        name: resultData.name[0].toUpperCase() + resultData.name.slice(1),
        designation: resultData.designation,
        phoneNumber: parseInt(resultData.phoneNumber),
        email: resultData.email,
      };
      if (data.name === "") {
        addEmployee(employeeData).then(() => {
          props.history.push("/");
        });
      } else {
        editEmployee(employeeData).then(() => {
          props.history.push("/");
        });
      }
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex-item">
        <label htmlFor="name">Full Name :</label>
        <input
          name="name"
          id="name"
          ref={register({ required: true, maxLength: 25 })}
        />
        {errors.name?.type === "required" && "This is required"}
        {errors.name?.type === "maxLength" && "Your input exceed maxLength"}
      </div>
      <div className="flex-item">
        {" "}
        <label htmlFor="designation">Designation :</label>
        <select
          name="designation"
          id="designation"
          ref={register({ required: "This is required" })}
        >
          <option value="NA">NA</option>
          <option value="Consultant">Consultant</option>
          <option value="Senior Consultant">Senior consultant</option>
          <option value="Consultant Manager">Consultant Manager</option>
        </select>
        {errors.designation?.message}
      </div>
      <div className="flex-item">
        <label htmlFor="email">Email :</label>
        <input
          name="email"
          id="email"
          ref={register({
            required: true,
            maxLength: 30,
            pattern: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/i,
          })}
        />
        {errors.email?.type === "required" && "This is required"}
        {errors.email?.type === "pattern" && "Enter valid email"}
        {errors.email?.type === "maxLength" && "Your input exceed maxLength"}
      </div>
      <div className="flex-item">
        <label htmlFor="phone">Phone :</label>
        <input
          name="phoneNumber"
          id="phone"
          type="number"
          ref={register({ required: true, pattern: /^[6-9]{1}\d{9}$/i })}
        />
        {errors.phoneNumber?.type === "required" && "This is required"}
        {errors.phoneNumber?.type === "pattern" && "Enter valid Indian number"}
      </div>

      <input className="btn btn-primary submit-button" type="submit" />
    </form>
  );
}
