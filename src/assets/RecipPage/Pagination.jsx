import React from "react";

const Pagination = ({
  totalPost,
  postPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <div className="pages">
        {pages.map((page, index) => {
          return (
            <div className="page-box" key={index}>
              <button
                className={`page-btn ${
                  currentPage === page ? "page-active" : ""
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
