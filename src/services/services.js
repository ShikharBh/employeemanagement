import axios from "axios";

const baseUrl = "https://localhost:5001/Shifts";

export const getEmployees = () => {
  const response = axios.get(baseUrl);
  return response;
};

export const deleteEmployee = (employee) => {
  const response = axios.delete(`${baseUrl}/${employee.id}`);
  return response;
};

export const getEmployeeById = (employeeId) => {
  const response = axios.get(`https://localhost:5001/Shifts/${employeeId}`);
  return response;
};

export const addEmployee = (employeeData) => {
  const response = axios.post(baseUrl, employeeData);
  return response;
};

export const editEmployee = (employeeData) => {
  const response = axios.put(baseUrl, employeeData);
  return response;
};
