import React from "react";

function Filter({ filterValueSelected }) {
  const optionFilter = (e) => {
    filterValueSelected(e.target.value);
  };

  return (
    <>
      <select onChange={optionFilter} className="selector">
        <option>Categories</option>
        <option>PartyWare</option>
        <option>Casual</option>
        <option>GYM</option>
      </select>
    </>
  );
}

export default Filter;
