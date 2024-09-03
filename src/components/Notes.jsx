import React from "react";

const Notes = ({ notes }) => {
  return (
    <>
      <section className="my-4">
        <p>{notes}</p>
      </section>
    </>
  );
};

export default Notes;
