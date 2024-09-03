import React from "react";

const Dates = () => {
  return (
    <>
      <article className="mt-5 flex flex-col items-end justify-end">
        <ul className="list-none">
          <li>
            <span className="font-bold">Invoice date: </span>
          </li>
          <li>
            <span className="font-bold">Invoice number: </span>
          </li>
          <li>
            <span className="font-bold">Due date: </span>
          </li>
        </ul>
      </article>
    </>
  );
};

export default Dates;
