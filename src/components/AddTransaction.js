import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  InputAdornment,
  NativeSelect,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
}));

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [minus, setMinus] = useState(1);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const { addTransaction } = useContext(GlobalContext);

  const classes = useStyles();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount * minus,
    };

    // Call the action
    await addTransaction(newTransaction);
    setText("");
    setAmount("");
    setLoading(false);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form autoComplete="off" onSubmit={onSubmit}>
        <TextField
          id="text"
          label="Memo"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CreateIcon />
              </InputAdornment>
            ),
            required: true,
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
            startAdornment: (
              <NativeSelect
                // value="income"
                name="type"
                onChange={(e) => setMinus(e.target.value)}
                className={classes.underline}
              >
                <option value={1}>+</option>
                <option value={-1}>-</option>
              </NativeSelect>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <AttachMoneyIcon />
              </InputAdornment>
            ),
            inputProps: { min: 0, max: 10000 },
            required: true,
          }}
          helperText="negative - expense, positive - income"
          variant="outlined"
          type="number"
          value={amount}
          placeholder="199"
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
