import React from "react";

const Pagination = ({ productsPage, totalProducts, paginate, activePage }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPage); i++) {
    pageNumber.push(i);
  }

  return (
    <ul className="default-pagination lab-ul">
      <li>
        <a
          href="#"
          onClick={() => {
            if (activePage < pageNumber.length) {
              paginate(activePage - 1);
            }
          }}
        >
          <i className="icofont-rounded-left"></i>
        </a>
      </li>
      {pageNumber.map((val) => {
        return (
          <li
            key={val}
            className={`page-item ${val === activePage ? "bg-warning" : ""}`}
          >
            <button onClick={() => paginate(val)} className="bg-transparent">
              {val}
            </button>
          </li>
        );
      })}
      <li>
        <a
          href="#"
          onClick={() => {
            if (activePage < pageNumber.length) {
              paginate(activePage + 1);
            }
          }}
        >
          <i className="icofont-rounded-right"></i>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
