import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -(1).toFixed(2);
  return (
    <div class="container text-center bg-secondary-subtle">
      <div class="row">
        <div class="col align-self-start border border-dark ">
          <h4>Income</h4>
          <p id="money-plus" className="text-success">
            +TK {income}
          </p>
        </div>
        <div class="col align-self-center border border-dark ">
          <h4>Expense</h4>
          <p id="money-minus" className="text-danger">
            -TK {expense}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpense;
