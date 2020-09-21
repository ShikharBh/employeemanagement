import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./employeeForm.css";

export default function EmployeeForm(props) {
  const [data, setdata] = useState({
    id: Date.now().toString(),
    name: "",
    designation: "",
    phoneNumber: 0,
    email: "",
  });
  const baseUrl = "https://localhost:5001/Shifts";

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
      setdata(employee);
    };

    axios.get(`https://localhost:5001/Shifts/${employeeId}`).then((response) => {
      employeeData(response.data);
    });
  }, [props.match.params,setdata,reset]);

  const onSubmit = (resultData) => {
    const result = window.confirm("are you sure?");
    if (result) {
      const finalData = {
        id: data.id,
        name: resultData.name[0].toUpperCase() + resultData.name.slice(1),
        designation: resultData.designation,
        phoneNumber: parseInt(resultData.phoneNumber),
        email: resultData.email,
      };
      if (data.name === "") {
        axios.post(baseUrl, finalData);
      } else {
        axios.put(baseUrl, finalData);
      }

      props.history.push("/");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name" className="row">
        FullName:
      </label>
      <input
        name="name"
        id="name"
        ref={register({ required: true, maxLength: 30 })}
      />
      {errors.name?.type === "required" && "This is required"}
      {errors.name?.type === "maxLength" && "Your input exceed maxLength"}
      <label htmlFor="designation" className="row">
        Designation:
      </label>
      <select
        name="designation"
        id="designation"
        ref={register({ required: "This is required" })}
      >
        <option value="Consultant">Consultant</option>
        <option value="Senior Consultant">Senior consultant</option>
        <option value="Consultant Manager">Consultant Manager</option>
      </select>
      {errors.designation?.message}
      <label htmlFor="email" className="row">
        Email:
      </label>
      <input
        name="email"
        id="email"
        ref={register({
          required: true,
          pattern: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/i,
        })}
      />
      {errors.email?.type === "required" && "This is required"}
      {errors.email?.type === "pattern" && "Enter valid email"}
      <label htmlFor="phone" className="row">
        Phone:
      </label>
      <input
        name="phoneNumber"
        id="phone"
        type="number"
        ref={register({ required: true, pattern: /^[6-9]{1}\d{9}$/i })}
      />
      {errors.phoneNumber?.type === "required" && "This is required"}
      {errors.phoneNumber?.type === "pattern" && "Enter valid Indian number"}
      <input className="row m-2" type="submit" />
    </form>
  );
}
