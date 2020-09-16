const employees = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Shikhar",
    designation: "Consultant",
    phoneNumber: 9741717356,
    email: "shikhar@gmail.com",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471813",
    name: "Agam",
    designation: "Consultant",
    phoneNumber: 9741717000,
    email: "agam@gmail.com",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471812",
    name: "Shilpa",
    designation: "Consultant",
    phoneNumber: 9741717111,
    email: "shilpa@gmail.com",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471814",
    name: "Srinath",
    designation: "Senior Consultant",
    phoneNumber: 9741717222,
    email: "srinath@gmail.com",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Sujith",
    designation: "Consultant Manager",
    phoneNumber: 9741717333,
    email: "sujith@gmail.com",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Ravi",
    designation: "Consultant Manager",
    phoneNumber: 9741717444,
    email: "ravi@gmail.com",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    name: "Abhi",
    designation: "Senior Consultant",
    phoneNumber: 9741717555,
    email: "abhi@gmail.com",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    name: "Ramesh",
    designation: "Senior Consultant",
    phoneNumber: 9741717777,
    email: "ramesh@gmail.com",
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
  employeeInDb.designation = employee.designation;
  employeeInDb.email = employee.email;
  employeeInDb.phoneNumber = employee.phoneNumber;

  if (!employeeInDb._id) {
    employeeInDb._id = Date.now().toString();
    employees.push(employeeInDb);
  }

  return employeeInDb;
}

export function deleteEmployee(id) {
  let employeeInDb = employees.find((m) => m._id === id);
  employees.splice(employees.indexOf(employeeInDb), 1);
  return employeeInDb;
}
