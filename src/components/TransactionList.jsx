import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h2 className="text-center p-2">Transaction History</h2>
      <div className="container  justify-content-center">
        <ul class="list-group" id="list">
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TransactionList;
