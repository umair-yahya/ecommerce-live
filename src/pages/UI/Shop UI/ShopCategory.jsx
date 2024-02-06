import React from "react";

const ShopCategory = ({
  filterItems,
  setItem,
  menuItems,
  setProducts,
  selectCategory,
}) => {
  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">All Categories</h5>
      </div>
      <div>
        <button
          className={`m-2 ${selectCategory === "All" ? "bg-warning" : ""}`}
        >
          All
        </button>
        {menuItems.map((val, i) => {
          return (
            <button
              className={`m-2 ${selectCategory === val ? "bg-warning" : ""}`}
              onClick={() => filterItems(val)}
              key={i}
            >
              {val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ShopCategory;
