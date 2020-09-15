export const designation = [
  { _id: "5b21ca3eeb7f6fbccd471810", name: "Consultant Manager" },
  { _id: "5b21ca3eeb7f6fbccd471811", name: "Senior Consultant" },
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Consultant" },
];

export function getDesignation() {
  return designation.filter((g) => g);
}
