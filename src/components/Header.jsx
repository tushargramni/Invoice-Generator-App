import React from "react";

const Header = (props) => {
  return (
    <>
      <header className="flex flex-col items-center justify-center my-2 gap-2 xl:flex-row xl:justify-between rounded">
        <div className="">
          <h2 className="text-4xl font-bold uppercase tracking-wide text-blue-600 mb-3">
            Invoicer
          </h2>
        </div>

        <div>
          <ul className="flex flex-wrap items-center justify-between gap-2">
            <li>
              <button
                onClick={props.handlePrint}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
              >
                Print
              </button>
            </li>
            <li className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
              Download
            </li>
            <li className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Send
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
