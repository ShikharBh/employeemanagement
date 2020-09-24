import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-2 "
      placeholder="search..."
      value={value}
      style={{backgroundColor: "rgba(100, 148, 237, 0.219)"}}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
