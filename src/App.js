import React from "react";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  CssBaseline,
  Grid,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <GlobalProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Money Manager App
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container direction="column" className={classes.root}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <Balance />
          </Grid>
          <Grid item xs={12}>
            <IncomeExpenses />
          </Grid>
          <Grid item xs={12}>
            <TransactionList />
          </Grid>
          <Grid item xs={12}>
            <AddTransaction />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </GlobalProvider>
  );
}

export default App;
