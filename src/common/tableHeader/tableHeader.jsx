import React from "react";
import { CardColumns } from "react-bootstrap";

const TableHeader = () => {
  const raiseSort = (column) => {
    const sort = { ...sortColumn };
    if (sort.column === column) {
      sort.order = sort.order === "asc" ? "desc" : "asc";
    } else {
      sort.column = column;
      sort.order = "asc";
    }

    onSort(sort);
  };
  return (
    <thead>
      <tr> 
          {colums.map(column =><th onClick={() => raiseSort(column.name)}>{column.label}</th> )}
        
      </tr>
    </thead>
  );
};

export default TableHeader;
