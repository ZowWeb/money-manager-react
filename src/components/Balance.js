import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  // Update the balance
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, amount) => (acc += amount), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>&#8377;{numberWithCommas(total)}</h1>
    </>
  );
};
