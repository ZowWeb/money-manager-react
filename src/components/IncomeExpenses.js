import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

import { Paper } from "@material-ui/core";

export const IncomeExpenses = () => {
  const { transactions, loading } = useContext(GlobalContext);

  // Update the income and expense
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2);

  const expense = (
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, amount) => (acc += amount), 0) * -1
  ).toFixed(2);

  return (
    <Paper className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className={"money plus " + (loading ? "loading" : "")}>
          &#8377;{numberWithCommas(income)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className={"money minus " + (loading ? "loading" : "")}>
          &#8377;{numberWithCommas(expense)}
        </p>
      </div>
    </Paper>
  );
};
