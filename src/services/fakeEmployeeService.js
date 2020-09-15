import * as designationAPI from "./fakeDesignationService";

const employees = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Shikhar",
    designation: { _id: "5b21ca3eeb7f6fbccd471818", name: "Consultant" },
    phoneNumber: 9741717356,
    email: "shikhar@gmailcom",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471813",
    name: "Agam",
    designation: { _id: "5b21ca3eeb7f6fbccd471818", name: "Consultant" },
    phoneNumber: 9741717000,
    email: "agam@gmailcom",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471812",
    name: "Shilpa",
    designation: { _id: "5b21ca3eeb7f6fbccd471818", name: "Consultant" },
    phoneNumber: 9741717111,
    email: "shilpa@gmailcom",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471814",
    name: "Srinath",
    designation: { _id: "5b21ca3eeb7f6fbccd471811", name: "Senior Consultant" },
    phoneNumber: 9741717222,
    email: "srinath@gmailcom",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Sujith",
    designation: {
      _id: "5b21ca3eeb7f6fbccd471810",
      name: "Consultant Manager",
    },
    phoneNumber: 9741717333,
    email: "sujith@gmailcom",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Ravi",
    designation: {
      _id: "5b21ca3eeb7f6fbccd471810",
      name: "Consultant Manager",
    },
    phoneNumber: 9741717444,
    email: "ravi@gmailcom",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    name: "Abhi",
    designation: { _id: "5b21ca3eeb7f6fbccd471811", name: "Senior Consultant" },
    phoneNumber: 9741717555,
    email: "abhi@gmailcom",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    name: "Ramesh",
    designation: { _id: "5b21ca3eeb7f6fbccd471811", name: "Senior Consultant" },
    phoneNumber: 9741717777,
    email: "ramesh@gmailcom",
  },
];

export function getEmployees() {
  return employees;
}

export function getEmployee(id) {
  return employees.find((m) => m._id === id);
}

export function saveEmployee(employee) {
  let employeeInDb = employees.find((m) => m._id === employee._id) || {};
  employeeInDb.name = employee.name;
  employeeInDb.designation = designationAPI.designation.find(
    (g) => g.name === employee.designation.name
  );
  employeeInDb.email = employee.email;
  employeeInDb.phoneNumber = employee.phoneNumber;

  if (!employeeInDb._id) {
    employeeInDb._id = Date.now();
    employees.push(employeeInDb);
  }

  return employeeInDb;
}

export function deleteEmployee(id) {
  let employeeInDb = employees.find((m) => m._id === id);
  employees.splice(employees.indexOf(employeeInDb), 1);
  return employeeInDb;
}
