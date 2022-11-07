import React, { useState } from "react";
import "./pagination.style.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

function Pagination({ pagesCount, setCurrentPage }) {
  const [activePage, setActivePage] = useState(1);
  return (
    <div id="Pagination">
      <ul className="page">
        <MdKeyboardArrowLeft
          className="page-btn"
          onClick={() => setCurrentPage("prev")}
        />

        {Array(pagesCount)
          .fill("")
          .map((e, ix) => (
            <li
              key={ix}
              className={`page-numbers ${
                activePage === ix + 1 ? "active" : ""
              }`}
              onClick={() => {
                setCurrentPage(ix + 1);
                setActivePage(ix + 1);
              }}
            >
              {ix + 1}
            </li>
          ))}

        <MdKeyboardArrowRight
          className="page-btn"
          onClick={() => setCurrentPage("next")}
        />
      </ul>
    </div>
  );
}

export default Pagination;
