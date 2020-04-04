import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  my: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

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

  const classes = useStyles();

  return (
    <div>
      <h3>Add new transaction</h3>
      <form noValidate autoComplete="off" onSubmit={onSubmit}>
        <TextField
          id="text"
          label="Memo"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={classes.my}
          fullWidth
        />
        <TextField
          id="amount"
          label="Amount"
          helperText="negative - expense, positive - income"
          variant="outlined"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className={classes.my}
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
