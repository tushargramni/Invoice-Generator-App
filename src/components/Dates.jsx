import React from "react";

const Dates = ({ invoiceNumber, invoiceDate, dueDates }) => {
  return (
    <>
      <article className="mt-5 flex flex-col items-end justify-end">
        <ul className="list-none">
          <li>
            <span className="font-bold">Invoice date: {invoiceDate}</span>
          </li>
          <li>
            <span className="font-bold">Invoice number: </span>
            {invoiceNumber}
          </li>
          <li>
            <span className="font-bold">Due date: </span>
            {dueDates}
          </li>
        </ul>
      </article>
    </>
  );
};

export default Dates;
