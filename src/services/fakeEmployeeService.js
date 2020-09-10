const employees = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Shikhar",
    position: { _id: "5b21ca3eeb7f6fbccd471818", name: "Consultant" },
    phoneNumber: 9741717356,
    Email: "shikhar@gmailcom",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471813",
    name: "Agam",
    position: { _id: "5b21ca3eeb7f6fbccd471818", name: "Consultant" },
    phoneNumber: 9741717000,
    Email: "agam@gmailcom",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471812",
    name: "Shilpa",
    position: { _id: "5b21ca3eeb7f6fbccd471818", name: "Consultant" },
    phoneNumber: 9741717111,
    Email: "shilpa@gmailcom",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471814",
    name: "Srinath",
    position: { _id: "5b21ca3eeb7f6fbccd471811", name: "Senior Consultant" },
    phoneNumber: 9741717222,
    Email: "srinath@gmailcom",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Sujith",
    position: { _id: "5b21ca3eeb7f6fbccd471810", name: "Consultant Manager" },
    phoneNumber: 9741717333,
    Email: "sujith@gmailcom",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Ravi",
    position: { _id: "5b21ca3eeb7f6fbccd471810", name: "Consultant Manager" },
    phoneNumber: 9741717444,
    Email: "ravi@gmailcom",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    name: "Abhi",
    position: { _id: "5b21ca3eeb7f6fbccd471811", name: "Senior Consultant" },
    phoneNumber: 9741717555,
    Email: "abhi@gmailcom",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    name: "Ramesh",
    position: { _id: "5b21ca3eeb7f6fbccd471811", name: "Senior Consultant" },
    phoneNumber: 9741717777,
    Email: "ramesh@gmailcom",
  },
];

export function getEmployees() {
  return employees;
}
