import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { Snackbar } from "@material-ui/core";

export const Snack = () => {
	const { loading } = useContext(GlobalContext);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={loading}
      // autoHideDuration={1000}
      // onClose={handleClose}
      message="Loading..."
    />
  );
};
