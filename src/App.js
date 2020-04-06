import React, { useState } from "react";
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
  Paper,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./theme";

function App() {
  const [darkMode, setDarkMode] = useState(false);
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
  const classes = useStyles();

  return (
    <GlobalProvider>
      <MuiThemeProvider theme={theme(darkMode)}>
        <Paper>
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
              <IconButton
                color="inherit"
                onClick={(e) => setDarkMode(!darkMode)}
              >
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
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
        </Paper>
      </MuiThemeProvider>
    </GlobalProvider>
  );
}

export default App;
