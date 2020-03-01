import React from "react";

export const Transaction = ({ transaction }) => {
  // Get sign
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign} &#8377;{Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
};
