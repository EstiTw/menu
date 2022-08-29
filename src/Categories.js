import React from "react";

const Categories = ({ onFilter }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => onFilter("all")}>
        All
      </button>
      <button className="filter-btn" onClick={() => onFilter("breakfast")}>
        Breakfast
      </button>
      <button className="filter-btn" onClick={() => onFilter("lunch")}>
        Lunch
      </button>
      <button className="filter-btn" onClick={() => onFilter("shakes")}>
        Shakes
      </button>
    </div>
  );
};

export default Categories;
