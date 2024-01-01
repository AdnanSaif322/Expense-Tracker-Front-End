import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3 className="text-center p-2">Add New Transaction</h3>

      <div className="container d-flex justify-content-center">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="p-2" htmlFor="text">
              Desciption
            </label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="form-control"
              placeholder="Enter text ..."
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label className="p-2" htmlFor="text">
              Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="form-control"
              placeholder="Amount"
              aria-describedby="emailHelp"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Transaction
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTransaction;
