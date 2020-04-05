import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, InputAdornment } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    // Call the action
    await addTransaction(newTransaction);
    setText("");
    setAmount(0);
    setLoading(false);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form noValidate autoComplete="off" onSubmit={onSubmit}>
        <TextField
          id="text"
          label="Memo"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CreateIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          id="amount"
          label="Amount"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AttachMoneyIcon />
              </InputAdornment>
            ),
          }}
          helperText="negative - expense, positive - income"
          variant="outlined"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          margin="normal"
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
        >
          Add transaction
        </Button>
      </form>
    </div>
  );
};
