import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);
  //   const clasu = transaction.amount < 0 ? "minus" : "plus";
  return (
    <li className="list-group-item">
      {transaction.text}
      <span className="p-4 m-5">
        {sign}
        {Math.abs(transaction.amount)}TK
      </span>
      <button
        type="button "
        onClick={() => deleteTransaction(transaction.id)}
        className="btn-close "
        aria-label="Close"
      ></button>
    </li>
  );
};

export default Transaction;
