import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

import { Grid, Paper, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  item: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2),
    paddingRight: 0,
    margin: `${theme.spacing(1)}px 0`,
  },
}));

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const classes = useStyles();

  // Get sign
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <Grid container xs={12}>
      <Paper
        className={classes.item + (transaction.amount < 0 ? " minus" : " plus")}
      >
        <span>{transaction.text}</span>
        <span>
          {sign} &#8377;{numberWithCommas(Math.abs(transaction.amount))}
          <IconButton
            aria-label="delete"
            color="secondary"
            onClick={() => deleteTransaction(transaction._id)}
          >
            <DeleteIcon />
          </IconButton>
        </span>
      </Paper>
    </Grid>
  );
};
