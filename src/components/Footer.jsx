import React from "react";

const Footer = ({
  name,
  address,
  website,
  phone,
  email,
  bankName,
  bankAccountNumber,
}) => {
  return (
    <>
      <footer className="border-t pt-4 my-4">
        <ul className="flex flex-wrap  items-center justify-center gap-5  ">
          <li>
            <span className="font-bold">Your name:</span> {name}
          </li>
          <li>
            <span className="font-bold">Your email:</span> {email}
          </li>
          <li>
            <span className="font-bold">Phone number:</span> {phone}
          </li>
          <li>
            <span className="font-bold">Bank:</span> {bankName}
          </li>
          <li>
            <span className="font-bold">Account holder:</span> {name}
          </li>
          <li>
            <span className="font-bold">Account number:</span>
            {bankAccountNumber}
          </li>
          <li>
            <span className="font-bold">Website:</span>
            <a href={website} target="_parent" rel="noopener noreferrer">
              {website}
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
