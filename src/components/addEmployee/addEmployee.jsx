import React from "react";
import { useForm } from "react-hook-form";
import { saveEmployee } from "./../../services/fakeEmployeeService";

export default function App(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    saveEmployee(data);
    props.history.push("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Add Employee</h3>
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
        name="designation.name"
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
        ref={register({ required: true, pattern: /^[6-9]{1}\d{9}$/i })}
      />
      {errors.phone?.type === "required" && "This is required"}
      {errors.phone?.type === "pattern" && "Enter valid Indian number"}
      <input className="row m-2" type="submit" />
    </form>
  );
}
