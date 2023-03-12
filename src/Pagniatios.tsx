import React from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
}: {
  postsPerPage: number;
  totalPosts: number | any;
  paginate: number | any;
}) => {
  const pageNumber: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <>
      <ul className="paginationBox">
        {pageNumber.map((number) => {
          return (
            <p
              onClick={() => paginate(number)}
              className="pagination"
              key={number}
            >
              {number}
            </p>
          );
        })}
      </ul>
    </>
  );
};

export default Pagination;
