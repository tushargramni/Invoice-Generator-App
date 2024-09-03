import React, { useState, useEffect } from "react";
import Notes from "./components/Notes";
import Footer from "./components/Footer";
import Table from "./components/Table";
import Dates from "./components/Dates";
import ClientDetails from "./components/ClientDetails";
import MainDetails from "./components/MainDetails";
import Header from "./components/Header";

const App = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceData, setInvoiceData] = useState("");
  const [dueDates, setDueDates] = useState("");
  const [notes, setNotes] = useState("");

  const handlePrint = () => {
    window.print(); // Basic print functionality
  };
  return (
    <main className="p-5  m-5 bg-white rounded shadow xl:max-w-4xl xl:mx-auto rounded">
      {showInvoice ? (
        <div>
          <Header props={handlePrint} />
          <MainDetails name={name} address={address} />
          <ClientDetails
            clientName={clientName}
            clientAddress={clientAddress}
          />
          <Dates
            invoiceData={invoiceData}
            invoiceNumber={invoiceNumber}
            dueDates={dueDates}
          />
          <Table />
          <Notes notes={notes} />
          <Footer
            name={name}
            address={address}
            website={website}
            email={email}
            phone={phone}
            bankName={bankName}
            bankAccount={bankAccount}
          />
          <button
            onClick={() => {
              setShowInvoice(false);
            }}
            className="btn bg-blue-500 text-white font-bold py-2 px-8 rounded shadow  hover:bg-transparent focus hover:text-blue-500 hover:border-blue-500 border transition-all duration-300 ease-in-out"
          >
            Edit Information
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center">
          <label htmlFor="name">Enter your name</label>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Enter your name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="address">Enter your address</label>
          <input
            type="address"
            name="address"
            id="address"
            placeholder="Enter your address"
            autoComplete="off"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label htmlFor="email">Enter your email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="website">Enter your website</label>
          <input
            type="url"
            name="website"
            id="website"
            placeholder="Enter your website"
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />

          <label htmlFor="phone">Enter your phone number</label>
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            autoComplete="off"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label htmlFor="bankName">Enter your Bank Name</label>
          <input
            type="text"
            name="bankName"
            id="bankName"
            placeholder="Enter your bankName"
            autoComplete="off"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
          />

          <label htmlFor="bankAccountNumber">
            Enter your Bank Account Number
          </label>
          <input
            type="text"
            name="bankAccountNumber"
            id="bankAccountNumber"
            placeholder="Enter your Bank Account Number"
            autoComplete="off"
            value={bankAccount}
            onChange={(e) => setBankAccount(e.target.value)}
          />

          <label htmlFor="clientName">Enter your Client Name</label>
          <input
            type="text"
            name="ClientName"
            id="ClientName"
            placeholder="Enter your Client Name"
            autoComplete="off"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />

          <label htmlFor="clientAddress">Enter Client Address</label>
          <input
            type="text"
            name="ClientAddress"
            id="ClientAddress"
            placeholder="Enter Client Address"
            autoComplete="off"
            value={clientAddress}
            onChange={(e) => setClientAddress(e.target.value)}
          />

          <label htmlFor="InvoiceNumber">Enter Invoice Number</label>
          <input
            type="number"
            name="InvoiceNumber"
            id="InvoiceNumber"
            placeholder="Enter Invoice Number"
            autoComplete="off"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
          />

          <label htmlFor="InvoiceDate">Enter Invoice Date</label>
          <input
            type="Date"
            name="InvoiceDate"
            id="InvoiceDate"
            placeholder="Enter Invoice Date"
            autoComplete="off"
            value={invoiceData}
            onChange={(e) => setInvoiceData(e.target.value)}
          />

          <label htmlFor="dueDate">Enter Due Date</label>
          <input
            type="Date"
            name="dueDate"
            id="dueDate"
            placeholder="Enter Due Date"
            autoComplete="off"
            value={dueDates}
            onChange={(e) => setDueDates(e.target.value)}
          />
          <label htmlFor="notes">Additional Notes</label>
          <textarea
            name="notes"
            id="notes"
            cols={30}
            rows={5}
            placeholder="Additional notes to the client"
            value={notes}
            onChange={(e) => {
              setNotes(e.target.value);
            }}
          ></textarea>

          <button
            type="button"
            onClick={() => {
              setShowInvoice(true);
            }}
            className="btn bg-blue-500 text-white font-bold py-2 px-8 rounded shadow  hover:bg-transparent focus hover:text-blue-500 hover:border-blue-500 border transition-all duration-300 ease-in-out"
          >
            Invoice preview
          </button>
        </div>
      )}
    </main>
  );
};

export default App;
